# Design Patterns in C&C Generals

This page documents the key design patterns used throughout the Generals codebase and how they contribute to the engine architecture.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Module System Pattern

The Module System is the backbone of object composition in the Generals engine. It enables flexible behavior composition without deep inheritance hierarchies.

```mermaid
classDiagram
    class Module {
        +Init()
        +Update()
    }
    class BehaviorModule {
        +ProcessEvent()
    }
    class UpdateModule {
        +Update()
    }
    class Object {
        -modules : List~Module~
        +AddModule(module)
        +RemoveModule(module)
        +Update()
    }
    Module <|-- BehaviorModule
    Module <|-- UpdateModule
    Object *-- Module : contains
```

### Key Components
- `Module.h` - Base interface for all modules
- `UpdateModule.h` - Modules that need update calls each frame
- `BehaviorModule.h` - Complex behavior modules responding to events
- `ModuleFactory.h` - Creates modules from configuration

### Implementation Example

```cpp
// Object composition with modules
GameObject* unit = ThingFactory::CreateThing("Tank");
unit->AddModule(ModuleFactory::CreateModule("PhysicsUpdate"));
unit->AddModule(ModuleFactory::CreateModule("ArmorUpgrade"));
unit->AddModule(ModuleFactory::CreateModule("WeaponModule", "MainCannon"));
```

## Factory Pattern

Factories are used extensively for dynamic object creation throughout the codebase.

```mermaid
classDiagram
    class Factory {
        +Create(string type) : Object
    }
    class ThingFactory {
        +CreateThing(string type) : Thing
        -thingRegistry : Dict~string, CreateFunc~
    }
    class ModuleFactory {
        +CreateModule(string type) : Module
        -moduleRegistry : Dict~string, CreateFunc~
    }
    Factory <|-- ThingFactory
    Factory <|-- ModuleFactory
```

### Key Implementations
- `ThingFactory.h` - Creates game objects from templates
- `ModuleFactory.h` - Creates behavior modules
- `W3DAssetFactory.h` - Creates rendering assets

## Observer Pattern

The Observer pattern is used extensively for event notifications, particularly in the UI and game event systems.

```mermaid
classDiagram
    class Subject {
        -observers : List~Observer~
        +Attach(Observer)
        +Detach(Observer)
        +Notify()
    }
    class Observer {
        +Update(Subject)
    }
    class GameEvent {
        -handlers : List~EventHandler~
        +RegisterHandler(EventHandler)
        +UnregisterHandler(EventHandler)
        +FireEvent()
    }
    class EventHandler {
        +HandleEvent(EventData)
    }
    Subject "1" --> "*" Observer : notifies
    GameEvent "1" --> "*" EventHandler : notifies
```

### Implementation Areas
- UI event handling
- Game event notifications
- Network event processing
- Audio event triggering

## Command Pattern

Commands encapsulate actions for execution, network synchronization, and undo/redo support.

```mermaid
classDiagram
    class Command {
        +Execute()
        +Undo()
    }
    class MoveCommand {
        -targetObject
        -startPosition
        -endPosition
        +Execute()
        +Undo()
    }
    class AttackCommand {
        -attacker
        -target
        +Execute()
    }
    class CommandManager {
        -commandQueue : Queue~Command~
        -executedCommands : Stack~Command~
        +AddCommand(Command)
        +ExecuteNextCommand()
        +UndoLastCommand()
    }
    Command <|-- MoveCommand
    Command <|-- AttackCommand
    CommandManager o-- Command
```

### Implementation Areas
- Input processing in `GameClient`
- Network command synchronization
- Action system in user interface
- Scripting engine

## Entity-Component System

The game uses a primitive form of an Entity-Component system through its module architecture.

```mermaid
classDiagram
    class Object {
        -id : int
        -position : Vector3
        +Update()
    }
    class Module {
        +Update(Object)
    }
    class PhysicsModule {
        -velocity : Vector3
        +Update(Object)
    }
    class RenderModule {
        -model : Model
        +Update(Object)
    }
    class AIModule {
        -stateMachine : StateMachine
        +Update(Object)
    }
    Object "1" *-- "*" Module : has
    Module <|-- PhysicsModule
    Module <|-- RenderModule
    Module <|-- AIModule
```

### Implementation Details
- Objects act as entities with basic properties
- Modules act as components with specific behaviors
- System functionality is in separate manager classes

## Singleton Pattern

Several manager classes use the Singleton pattern for global access.

```mermaid
classDiagram
    class Singleton {
        -static instance : Singleton
        -Singleton()
        +static GetInstance() : Singleton
    }
    class GameEngine {
        -static instance : GameEngine
        -GameEngine()
        +static GetInstance() : GameEngine
        +Initialize()
        +Update()
        +Shutdown()
    }
    class AudioManager {
        -static instance : AudioManager
        -AudioManager()
        +static GetInstance() : AudioManager
        +PlaySound(sound)
    }
    Singleton <|-- GameEngine
    Singleton <|-- AudioManager
```

### Common Singletons
- `GameEngine` - Core engine instance
- `AssetManager` - Asset loading and caching
- `GameClient` - Client-side game representation
- `GameLogic` - Game logic processing

## Additional Patterns

- **State Machine Pattern** - Used for AI and object behavior
- **Façade Pattern** - Simplifies complex subsystems
- **Decorator Pattern** - Enhances object capabilities dynamically
- **Prototype Pattern** - Creates objects by cloning templates

## Anti-patterns to Be Aware Of

- **God Objects** - Some manager classes have too many responsibilities
- **Deep Inheritance** - Some class hierarchies are too deep
- **Tight Coupling** - Some components have unnecessary dependencies

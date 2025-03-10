# C&C Generals Codebase Glossary

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

This glossary defines technical terms, acronyms, and specialized vocabulary used throughout the C&C Generals: Zero Hour codebase.

## A

**AI (Artificial Intelligence)**
: Game logic that controls non-player units and structures. Implemented in `AIPlayer.h` and numerous AI behavior modules.

**Asset**
: Any external resource used by the game, such as models, textures, sounds, or configuration data. Managed by `AssetManager`.

**Audio Event**
: A sound triggered by game events. Defined in `AudioEventInfo.h` and `AudioEventRTS.h`.

## B

**Behavior Module**
: A component that adds specific behavior to game objects. Based on `BehaviorModule.h`.

**BIG File**
: Proprietary archive format used to store game assets. Implemented in `ArchiveFile.h`.

**Billboard**
: A 2D sprite that always faces the camera. Used for effects, trees at a distance, etc. See `W3DBibBuffer.h`.

**Bone**
: A component of a skeletal animation system that defines how models deform. Referenced in `BoneFXUpdate.h`.

## C

**Command Bar**
: The user interface element at the bottom of the screen used to issue commands. Defined in `ControlBar.h`.

**Command Button**
: UI element in the command bar that triggers actions. See `ControlBarCommand.h`.

**CRC (Cyclic Redundancy Check)**
: Error-detecting code used to verify data integrity and synchronization in multiplayer. See `crc.h`.

**Crate**
: Collectible bonus item that provides benefits when collected. Implemented in `CrateSystem.h`.

## D

**Damage FX**
: Visual effects tied to damage events. See `DamageFX.h`.

**Draw Module**
: Component responsible for rendering a specific type of game object. Inherits from `DrawModule.h`.

**Dynamic Geometry**
: Geometry that can change during gameplay, such as deformable terrain. See `DynamicGeometryInfoUpdate.h`.

## E

**EVA**
: Electronic Voice Agent - the announcer voice in the game. Implemented in `Eva.h`.

## F

**Frame Data**
: Network synchronization data sent each simulation frame. See `FrameData.h`.

**FX List**
: Collection of special effects. Defined in `FXList.h`.

## G

**GameSpy**
: Third-party networking middleware used for online play. Referenced in various `GameSpy*.h` files.

**General**
: Special commander unit with unique abilities and upgrades. Referenced in `GeneralTemplate.h`.

## H

**Heightmap**
: Data structure representing terrain elevation. Implemented in `HeightMap.h`.

**Horde Bonus**
: Special ability for GLA units that provides bonuses when grouped together. See `HordeUpdate.h`.

## I

**INI**
: Configuration file format used extensively throughout the game. Parsed through `INI.h`.

## K

**KindOf**
: Bitflag-based classification system for game objects. Defined in `KindOf.h`.

## L

**Locomotor**
: Component responsible for object movement. Implemented in `Locomotor.h`.

**LOD (Level of Detail)**
: System to use simpler models at greater distances to improve performance. See `GameLOD.h`.

## M

**Module**
: Component-based system for adding behavior to game objects. Based on `Module.h`.

**Module Factory**
: System for creating modules by name from configuration. Implemented in `ModuleFactory.h`.

## N

**NAT Traversal**
: Network technique for establishing connections between clients behind routers. See `NAT.h`.

## O

**OCL (Object Command Loop)**
: System for processing unit commands. Referenced in `OCLUpdate.h`.

**Object**
: Base class for game entities that can exist in the world. Defined in `Object.h`.

## P

**Particle System**
: Visual effect system using many small sprites to create effects like fire, smoke, etc. See `ParticleSys.h`.

**Partition Manager**
: Spatial data structure that divides the world for efficient collision detection. See `PartitionManager.h`.

## R

**Radar**
: Minimap system showing unit positions. Implemented in `Radar.h`.

**Rank**
: Experience-based unit progression system. See `RankInfo.h`.

## S

**Science**
: Research and technology system. Defined in `Science.h`.

**Shroud**
: Fog of war system that hides unexplored areas. Referenced in `W3DShroud.h`.

**Special Power**
: General-specific abilities like artillery barrage or carpet bombing. See `SpecialPower.h`.

## T

**Template**
: Configuration-defined blueprint for creating game objects. Referenced in `ThingTemplate.h`.

**Thing**
: Base class for all identifiable entities in the game. Defined in `Thing.h`.

**Thing Factory**
: System for creating game objects by name from templates. Implemented in `ThingFactory.h`.

## U

**Update Module**
: Component that needs to execute logic each frame. Inherits from `UpdateModule.h`.

**Upgrade**
: System for improving unit or structure capabilities. Defined in `Upgrade.h`.

## V

**Vegas Engine**
: The underlying game engine developed by Westwood Studios. Referenced in `WWVegas` libraries.

## W

**W3D**
: Westwood 3D - the rendering component of the Vegas engine. Referenced in many `W3D*.h` files.

**Weapon Set**
: Collection of weapons attached to a unit. Implemented in `WeaponSet.h`.

**WorldBuilder**
: Map creation and editing tool. Main file is `WorldBuilder.cpp`.

## X

**Xfer**
: Data transfer system used for loading/saving game state. See `Xfer.h`, `XferLoad.h`, and `XferSave.h`.

# Particle Editor

The Particle Editor tool provides a graphical interface for creating and editing particle effects.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Overview

The Particle Editor provides a real-time environment for designers to create, test, and adjust particle effects before integration into the game. It offers a visual interface for manipulating particle properties and previewing the results immediately.

## Core Components

- `ParticleEditorDialog.cpp/h` - Main editor interface
  - Overall editor window management
  - Parameter organization
  - Live preview control

- `ParticleTypePanels.cpp/h` - Particle type configuration panels
  - Type-specific property editors
  - Parameter range controls
  - Preset management

- `VelocityTypePanels.cpp/h` - Velocity configuration UI
  - Direction controls
  - Speed parameter editing
  - Randomization settings

## UI Components

- `CButtonShowColor.cpp/h` - Color selection button
  - Color preview display
  - Selection interface

- `CColorAlphaDialog.cpp/h` - Color and transparency dialog
  - RGBA color selection
  - Alpha channel control

- `CSwitchesDialog.cpp/h` - Particle options dialog
  - Effect type toggles
  - Rendering options

- `MoreParmsDialog.cpp/h` - Advanced parameters dialog
  - Detailed particle settings
  - Physics controls

## Key Components

### Editor Interface

Particle Editor Interface

The interface is divided into several main sections:
- Effect browser - Lists available particle systems
- Property editor - Controls for modifying selected particles
- Preview window - Real-time display of the current effect
- Control panel - Playback controls and export options

### Particle System Types

The editor supports several particle system types:
- Point emitters
- Line emitters
- Sphere emitters
- Box emitters
- Custom shape emitters

### Configurable Properties

#### Emission Properties
- Emission rate
- Burst size
- Duration
- Looping behavior
- Spawn area/volume

#### Particle Properties
- Initial velocity
- Velocity variation
- Size/scale (start and end)
- Color gradients
- Alpha transparency
- Rotation
- Angular velocity
- Lifespan
- Lifespan variation

#### Physics Properties
- Gravity influence
- Air resistance
- Wind effects
- Bounce settings
- Collision behavior

#### Visual Properties
- Texture selection
- Blending modes
- Illumination settings
- Distortion effects
- Trail options

### Advanced Features

- Keyframe animation for properties
- Sub-emitter systems
- Particle chaining
- LOD (Level of Detail) settings
- Performance analyzers
- Memory usage statistics

## Technical Implementation

The Particle Editor is built using:
- MFC for the user interface
- The game's rendering engine for accurate preview
- Custom property editors for different particle types
- Real-time shader preview

Key code files:
- `ParticleEditor.cpp` - Main application
- `ParticleEditorDialog.cpp` - Primary editor dialog
- `ParticleTypePanels.cpp` - Type-specific panels
- `VelocityTypePanels.cpp` - Velocity editors

## Creating Effects

### Basic Workflow

1. Create a new particle system or select an existing one
2. Configure emitter type and properties
3. Set particle appearance and behavior
4. Add physics and movement characteristics
5. Preview from multiple angles and distances
6. Adjust performance settings
7. Export for game use

### Best Practices

- Start with base templates for common effects
- Consider performance impact of particle count
- Use texture atlases for more efficient rendering
- Balance detail with performance
- Test effects at various distances and angles
- Use LOD settings for distant effects
- Combine simple systems rather than creating complex ones

## Integration with the Game

Exported particle effects can be used in several contexts:
- Weapon effects
- Explosions
- Environmental effects (smoke, fire, water)
- Unit abilities
- Special powers
- Ambient world effects
- UI elements

## File Format

Particle systems are stored in `.fx` files with an XML-based structure:

```xml
<FXList>
  <Effect Name="SmallExplosion">
    <ParticleSystem Type="Point">
      <EmissionProperties Rate="100" Duration="1.5" />
      <ParticleProperties Lifespan="1.0" Size="0.5,2.0" />
      <PhysicsProperties Gravity="9.8" Drag="0.1" />
      <!-- Additional properties -->
    </ParticleSystem>
    <!-- Additional sub-systems -->
  </Effect>
</FXList>
```

## Command Line Options

```
ParticleEditor.exe -fx "Effects\Explosions.fx" -preview "SmallExplosion"
```

| Option | Description |
|--------|-------------|
| `-fx <filename>` | Opens the specified effect file |
| `-preview <name>` | Immediately previews the named effect |
| `-export <path>` | Sets export directory |
| `-benchmark` | Runs performance tests on effects |

## Optimization Tips

- Use fewer particles when possible
- Limit overdraw with appropriate alpha settings
- Use appropriate LOD settings
- Consider using animated textures instead of many particles
- Limit the use of complex physics for distant effects
- Use texture sheets to reduce state changes
- Set appropriate lifetime and emission rates

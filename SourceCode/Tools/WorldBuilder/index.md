# WorldBuilder Map Editor

The WorldBuilder is a comprehensive map creation and editing tool for C&C Generals: Zero Hour. It allows designers to create, modify, and test game maps with a full suite of terrain, object placement, and scripting tools.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Components

- `WorldBuilder.cpp` - Main application
- `WorldBuilderDoc.cpp` - Document handling
- `WorldBuilderView.cpp` - View implementation
- `MainFrm.cpp` - Main frame window

## Map Measurement System

- `RulerTool.cpp/h` - Map measurement tool
  - Distance calculation between points
  - Area measurement functionality
  - Grid-based measurement

- `RulerOptions.cpp/h` - Ruler configuration
  - Measurement unit settings
  - Display options
  - Scale settings

## Team Management

- `TeamObjectProperties.cpp/h` - Team object settings
  - Team assignment for objects
  - Team-based properties
  - Faction-specific configurations

## Additional Features

The WorldBuilder includes functionality for:
- Terrain editing and texturing
- Object placement and configuration
- AI waypoint creation
- Scripting triggers and events
- Environment effects placement
- Resource node placement
- Starting positions configuration

## Overview

WorldBuilder allows designers to create and modify maps for the game, including terrain shaping, object placement, scripting, and AI configuration.

![WorldBuilder Interface](../../assets/images/worldbuilder_interface.png)

## Key Features

### Terrain Editing

- Height map manipulation tools
  - Raise/Lower terrain
  - Flatten areas
  - Ramp creation
  - Mound and valley tools
- Texture application
  - Texture blending with variable opacity
  - Tileset selection
  - Smart texture blending with auto-edges
- Water placement
  - Water level adjustment
  - Shoreline customization
- Roads and bridges
  - Road network creation
  - Bridge placement
  - Connection points

### Object Placement

- Units
  - Military units
  - Civilian units
  - Special units
- Structures
  - Base buildings
  - Tech buildings
  - Neutral structures
  - Civilian buildings
- Props
  - Trees and vegetation
  - Rocks and debris
  - Urban elements
  - Decorative objects
- Waypoint system
  - Rally points
  - Path nodes
  - Transport links

### Advanced Features

- Lighting system
  - Global light adjustment
  - Shadow configuration
  - Time of day settings
- Impassability options
  - Cliff creation
  - Blocking terrain
  - Infantry-only paths
  - Vehicle restrictions
- Starting positions
  - Player start locations
  - Multiplayer spawn points
- Camera bounds
  - Setting playable areas
  - Camera restriction zones

### Scripting System

- Event triggers
  - Time-based events
  - Location triggers
  - Unit-based conditions
- Action scripting
  - Unit creation
  - AI behaviors
  - Victory conditions
  - Cinematic sequences
- Team assignment
  - AI team configuration
  - Alliance settings

## Technical Implementation

WorldBuilder is built using:
- MFC for the user interface
- The same rendering engine as the main game
- Custom tools for terrain manipulation
- Script compiler for mission logic

Key code files:
- `WorldBuilder.cpp` - Main application
- `WorldBuilderDoc.cpp` - Document management
- `WorldBuilderView.cpp` - Primary view
- `TerrainMaterial.cpp` - Texture system
- `WBHeightMap.cpp` - Height map editor

## Tool Usage

### Basic Workflow

1. Create new map or load existing one
2. Set map properties (size, player count, etc.)
3. Shape terrain with height tools
4. Apply textures and terrain features
5. Add water, roads, and bridges
6. Place structures and units
7. Add props and decoration
8. Configure scripting and triggers
9. Test map in-game

### Best Practices

- Start with a terrain concept sketch
- Work from large features to small details
- Test regularly to check playability
- Consider performance implications of complex terrain
- Use the minimap to ensure balanced player positions
- Provide sufficient resources for intended game length

## Reference Material

- Terrain types and blending rules
- Object placement guidelines
- Scripting command reference
- Performance optimization tips

## Command Line Options

WorldBuilder can be launched with several command line options:

```
WorldBuilder.exe -open "MapName.map" -buildmode
```

| Option | Description |
|--------|-------------|
| `-open <filename>` | Opens the specified map |
| `-buildmode` | Launches in build mode |
| `-test` | Opens the test dialog |
| `-convert` | Converts old map formats |

## Known Issues

- Crashes may occur when working with very large maps
- Some texture blending issues near water edges
- Script compiler has limited error reporting
- Memory usage can be high with complex maps

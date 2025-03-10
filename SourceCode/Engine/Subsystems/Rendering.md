# Rendering System

Documentation of the 3D rendering engine, visual effects, and display components.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Rendering

- `W3DGameLogic.h/.cpp` - Game logic to rendering integration
- `W3DGhostObject.h/.cpp` - Ghost object rendering
- `W3DTerrainLogic.h/.cpp` - Terrain logic visualization

## Terrain Rendering

- `BaseHeightMap.h/.cpp` - Base height map implementation
- `FlatHeightMap.h/.cpp` - Flat terrain implementation
- `TerrainTex.h/.cpp` - Terrain texturing system
- `TileData.h/.cpp` - Tile data management
- `W3DTerrainTracks.h/.cpp` - Vehicle tracks on terrain
- `W3DTerrainVisual.h/.cpp` - Visual terrain representation
- `WorldHeightMap.h/.cpp` - World height map system

## Asset Management

- `W3DAssetManager.h/.cpp` - Asset management system
- `W3DAssetManagerExposed.h/.cpp` - Public asset interface

## Special Rendering Features

- `W3DBibBuffer.h/.cpp` - Billboard buffer system
- `W3DBridgeBuffer.h/.cpp` - Bridge rendering
- `W3DCustomEdging.h/.cpp` - Custom edge rendering
- `W3DCustomScene.h` - Custom scene implementation
- `W3DDebugDisplay.h/.cpp` - Debug visualization
- `W3DTreeBuffer.h/.cpp` - Tree rendering system
- `W3DVideoBuffer.h/.cpp` - Video playback buffer
- `W3DWaypointBuffer.h/.cpp` - Waypoint visualization
- `camerashakesystem.h/.cpp` - Camera shake effects

## Model Rendering

- `W3DDependencyModelDraw.h/.cpp` - Dependency model drawing
- `W3DOverlordAircraftDraw.h/.cpp` - Overlord aircraft visuals
- `W3DOverlordTankDraw.h/.cpp` - Overlord tank visuals
- `W3DOverlordTruckDraw.h/.cpp` - Overlord truck visuals
- `W3DPoliceCarDraw.h/.cpp` - Police car visuals
- `W3DScienceModelDraw.h/.cpp` - Science model visuals
- `W3DSupplyDraw.h/.cpp` - Supply visuals
- `W3DTankTruckDraw.h/.cpp` - Tank truck visuals

## User Interface

- `W3DGameFont.h/.cpp` - Game font rendering
- `W3DGameWindow.h/.cpp` - Game window management
- `W3DView.h/.cpp` - View management and rendering

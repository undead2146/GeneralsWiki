# Main System

Entry points, launch system, and developer tooling applications. The Main system provides the primary application entry points and core developer tools.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Entry Points

- `Code/Main/WinMain.cpp` - Application entry point
- `Code/Main/WinMain.h` - Main header
- `Code/Main/resource.h` - Application resources
- `Code/Main/RTS.RC` - Resource script
- `Code/Main/Generals.ico` - Application icon

## Core Engine Interface

- `Code/Main/GameEngine.h` - Engine interface
- `Code/Main/CommandLine.h` - Command line processing

## Launcher & Shell


## Debug Tools

- `Code/Main/DebugWindow/DebugWindow.h` - Runtime debugging console
- `Code/Main/DebugWindow/DebugWindowDialog.h` - Debug UI implementation
- `Code/Main/DebugWindow/Include/Properties.h` - Property inspection
- `Code/Main/DebugWindow/Include/HierarchyView.h` - Object hierarchy browser

## Diagnostic Tools

- `Code/Main/CRCDiff/KVPair.h` - Key-value pair for debugging

## Game Setup

- `Code/Main/Setup/CopyProtection.h` - Copy protection
- `Code/Main/Setup/CDCheck.h` - CD validation

## Installation & Updates

- `Code/Main/PATCHGET/DownloadManager.h` - Patch download utility

## Utility Applications

- `Code/Main/mangler/mangler.h` - Network packet inspection

## Content Development Tools

- `Code/Main/wolSetup/include/WorldBuilder.h` - Map editor main application
- `Code/Main/wolSetup/include/WBHeightMap.h` - Terrain height map editor
- `Code/Main/wolSetup/include/TerrainMaterial.h` - Terrain texturing tool

## Particle Editor

- `Code/Main/ParticleEditor/ParticleEditor.h` - Particle effect editor
- `Code/Main/ParticleEditor/EmissionTypePanels.h` - Emission property editor
- `Code/Main/ParticleEditor/ShaderTypePanels.h` - Particle shader editor

## Texture Tools

- `Code/Main/textureCompress/resource.h` - Texture compression tool
- `Code/Main/ImagePacker/Include/ImagePacker.h` - Texture atlas generator

## GUIEdit Tool

- `Code/Main/GUIEdit/GUIEdit.h` - GUI editor main

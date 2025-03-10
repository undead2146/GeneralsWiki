# 3D Model Exporter (max2w3d)

A 3ds Max plugin for exporting 3D models into the W3D format used by the C&C Generals engine.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Exporter

- `w3dexp.cpp/h` - Main exporter implementation
  - Entry point for export operations
  - Scene processing
  - Export configuration

- `w3ddesc.cpp/h` - W3D file format descriptors
  - Chunk definitions
  - Header structures
  - File layout

- `w3dmtl.cpp/h` - Material conversion
  - Max to W3D material mapping
  - Texture path handling
  - Material property conversion

- `w3ddlg.cpp/h` - Export dialog UI
  - Export settings interface
  - Option selection
  - Progress display

- `w3dappdata.cpp/h` - Application data management
  - Max session data management
  - Persistent settings
  - Max integration

- `w3dutil.cpp/h` - Utility functions
  - Helper methods
  - Conversion utilities
  - Path manipulation

## Material Management

- `GameMtlDlg.cpp/h` - Game material dialog
  - Material editing interface
  - Property configuration

- `GameMtlForm.cpp/h` - Material form implementation
  - Material UI layout
  - Control management

- `GameMtlPassDlg.cpp/h` - Material pass dialog
  - Multi-pass material configuration
  - Pass ordering and setup

- `GameMtlShaderDlg.cpp/h` - Shader selection dialog
  - Shader assignment interface
  - Parameter configuration

- `GameMtlTextureDlg.cpp/h` - Texture selection dialog
  - Texture path management
  - UV mapping controls

- `GameMtlVertexMaterialDlg.cpp/h` - Vertex material properties
  - Vertex color configuration
  - Per-vertex attributes

- `PS2GameMtlShaderDlg.cpp/h` - PS2-specific shader dialog
  - Console-specific shader options

## Specialized Exporters

- `hiersave.cpp/h` - Hierarchy exporter
  - Node hierarchy preservation
  - Parent-child relationships

- `hlodsave.cpp/h` - Level of detail exporter
  - LOD model configuration
  - Distance thresholds

- `meshsave.cpp/h` - Mesh export system
  - Geometry processing
  - Vertex/index buffer creation

- `nullsave.cpp/h` - Null object exporter
  - Reference point export
  - Helper object conversion

- `colboxsave.cpp/h` - Collision box exporter
  - Collision geometry export
  - Simplified collision representation

- `dazzlesave.cpp/h` - Dazzle effect exporter
  - Special effect configuration
  - Engine-specific effect data

## Animation Support

- `motion.cpp/h` - Animation exporting
  - Keyframe extraction
  - Animation compression
  - Timing data

- `bchannel.cpp/h` - Bone animation channels
  - Skeletal animation data
  - Bone transform storage

- `vchannel.cpp/h` - Vertex animation channels
  - Morph target animation
  - Vertex deformation data

- `skin.cpp/h` - Skin modifier support
  - Skinning data export
  - Weight mapping
  - Bone influence

- `skindata.cpp/h` - Skin data structures
  - Weight storage
  - Vertex assignment data

- `animationcompressionsettings.cpp/h` - Animation compression
  - Keyframe reduction
  - Curve simplification

## Deformation Systems

- `MeshDeformSave.cpp/h` - Mesh deformation export
  - Progressive mesh deformation
  - Shape keys and morphs

- `MeshDeformSaveSet.cpp/h` - Deformation set management
  - Multiple deformation states
  - State transitions

- `MeshDeformSet.cpp/h` - Deformation set implementation
  - Deformation data structures
  - Mesh state management

- `MeshDeformUndo.cpp/h` - Undo system for deformations
  - Editor state preservation
  - Operation reversal

- `MeshDeformSaveDefs.h` - Deformation definitions
  - Common structures and constants

## Voxel Support

- `vxl.cpp/h` - Voxel data handling
  - Voxel data export
  - Volume conversion

- `vxldbg.cpp/h` - Voxel debugging
  - Debug visualization
  - Error checking

- `vxllayer.cpp/h` - Voxel layering system
  - Multi-layer voxel data
  - Layer compositing

## UI Components

- `ExportAllDlg.cpp/h` - Batch export dialog
  - Multiple file export interface
  - Batch settings

- `FormClass.cpp/h` - Form base classes
  - Common dialog functionality
  - UI element infrastructure

- `SceneSetupDlg.cpp/h` - Scene configuration dialog
  - Scene-wide export settings
  - Default parameters

- `SnapPoints.cpp/h` - Snap point management
  - Grid snapping
  - Position quantization

- `floaterdialog.cpp/h` - Floating dialog implementation
  - Non-modal UI windows
  - Tool palette windows

- `logdlg.cpp/h` - Log output dialog
  - Export log display
  - Message filtering

- `genlodextensiondialog.cpp/h` - LOD extension dialog
  - Level of detail configuration
  - Distance threshold settings

- `genmtlnamesdialog.cpp/h` - Material name generation
  - Automatic naming schemes
  - Name pattern configuration

- `gennamesdialog.cpp/h` - Name generation dialog
  - Object naming utilities
  - Naming pattern system

- `presetexportoptionsdialog.cpp/h` - Export preset management
  - Saved settings configurations
  - Preset selection and editing

- `rcmenu.cpp/h` - Right-click menu implementation
  - Context menu system
  - Command shortcuts

## Utility Components

- `AlphaModifier.cpp/h` - Alpha channel modification
  - Transparency handling
  - Alpha mapping

- `Utility.cpp` - General utilities
  - Helper functions
  - Convenience methods

- `boneicon.cpp/h` - Bone visualization
  - Skeleton display
  - Bone icon management

- `bpick.cpp/h` - Bone picking utility
  - Skeleton selection system
  - Joint picking

- `dllmain.cpp/h` - DLL entry point
  - Plugin initialization
  - DLL lifecycle

- `exportlog.cpp/h` - Export logging system
  - Operation logging
  - Error reporting

- `gamemaps.cpp/h` - Game map support
  - Environment mapping
  - Texture map controls

- `geometryexporttask.cpp/h` - Geometry export task
  - Background geometry processing
  - Progress tracking

- `gridsnapmodifier.cpp/h` - Grid snapping modifier
  - Position quantization
  - Alignment utilities

- `maxworldinfo.cpp/h` - Max world information
  - Scene statistics
  - World boundaries

- `meshcon.cpp/h` - Mesh conversion
  - Format transformation
  - Topology optimization

- `namedsel.cpp/h` - Named selection sets
  - Selection group management
  - Component grouping

- `simpdib.cpp/h` - Simple DIB handling
  - Device-independent bitmap
  - Simple image processing

- `util.cpp/h` - General utilities
  - Common helper functions
  - Conversion tools

## Max Plugin Integration

- `dllmain.cpp` - Plugin entry point
- `maxworldinfo.cpp` - Max world information

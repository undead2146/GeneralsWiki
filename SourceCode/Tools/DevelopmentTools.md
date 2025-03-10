# Tools System

Development and utility tools for creating and maintaining game content.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Asset Management

- `assetcull/assetcull.cpp` - Asset culling tool
- `assetcull/assetcull.dsp` - Project file
- `textureCompress/textureCompress.cpp` - Texture compression utility

## Compression System

- `refabout.cpp` - Reference information about compression
- `refcodex.h` - Compression codec definitions
- `refdecode.cpp` - Decompression implementation
- `refencode.cpp` - Compression implementation

## Audio Utilities

- `AUD_Memory.cpp` - Audio memory management
- `AUD_Profiler.cpp` - Audio performance profiling
- `AUD_Source.cpp` - Audio source implementation
- `AUD_StreamBuffering.cpp` - Audio streaming buffer system
- `AUD_Streamer.cpp` - Audio streaming implementation
- `AUD_Time.cpp` - Audio timing utilities
- `AUD_Windows.cpp` - Windows-specific audio functionality

## Audio Tools

- `AUD_Assert.cpp` - Audio assertion system
- `AUD_Attributes.cpp` - Audio attribute management
- `AUD_Cache.cpp` - Audio caching system
- `AUD_Channel.cpp` - Audio channel management
- `AUD_DSoundDriver.cpp` - DirectSound driver
- `AUD_Device.cpp` - Audio device abstraction
- `AUD_Events.cpp` - Audio event system
- `AUD_Level.cpp` - Audio level control
- `AUD_List.cpp` - Audio list management
- `AUD_Lock.cpp` - Audio resource locking

## Compression Utilities

- `Compression.h` - Compression interface
- `CompressionManager.cpp` - Compression system management
- `btreeabout.cpp` - B-tree compression information
- `btreecodex.h` - B-tree codec definitions
- `btreedecode.cpp` - B-tree decompression
- `btreeencode.cpp` - B-tree compression
- `codex.h` - Codec interface definitions
- `gimex.h` - Image compression definitions
- `huffabout.cpp` - Huffman compression information
- `huffcodex.h` - Huffman codec definitions
- `huffdecode.cpp` - Huffman decompression
- `huffencode.cpp` - Huffman compression
- `NoxCompress.cpp/.h` - Nox compression algorithms
- `Code/Libraries/Source/Compression/LZHCompress/NoxCompress.cpp/.h`

## Localization System

- `Babylon.cpp/h` - Core localization system implementation
  - Language database management
  - String table lookups
  - Character set conversion
- `BabylonDlg.cpp/h` - Translation management dialog
  - UI for accessing translation features
  - Batch translation processing
- `DlgProxy.cpp/h` - COM dialog proxy for automation
  - OLE dialog interface
  - Dialog marshalling
- `RetranslateDlg.cpp/h` - Dialog for retranslating text
- `TransDB.cpp/h` - Translation database
- `VIEWDBSII.cpp/h` - Database viewer
- `ViewDBsDlg.cpp` - Database dialog viewer
- `VerifyDlg.cpp/h` - Translation verification dialog
- `VerifyTextDlg.cpp/h` - Text verification dialog
- `XLStuff.cpp/h` - Excel integration for translations
  - Excel worksheet reading/writing
  - Translation cell formatting
- `bin.cpp/h` - Binary file format operations
  - Binary file reading/writing
  - Data structure serialization
- `excel8.cpp/h` - Excel 8 format support
  - Spreadsheet data extraction
  - Workbook manipulation
- `expimp.cpp/h` - Import/export functionality
  - Text file export
  - Translation import
- `fileops.cpp/h` - File operation utilities
  - File copy/move/delete operations
  - Directory handling
- `iff.cpp/h` - IFF file format parser
  - Chunk-based file handling
  - IFF structure navigation
- `loadsave.cpp/h` - Translation data save/load
  - Database serialization
  - String table persistence
- `Code/Tools/Babylon/ExportDlg.cpp/.h`
- `Code/Tools/Babylon/GenerateDlg.cpp/.h`
- `Code/Tools/Babylon/MatchDlg.cpp/.h`
- `Code/Tools/Babylon/ProceedDlg.cpp/.h`
- `Code/Tools/Babylon/Report.cpp/.h`
- `Code/Tools/Babylon/RetranslateDlg.cpp/.h`
- `Code/Tools/Babylon/TransDB.cpp/.h`
- `Code/Tools/Babylon/VIEWDBSII.cpp/.h`
- `Code/Tools/Babylon/VerifyDlg.cpp/.h`
- `Code/Tools/Babylon/VerifyTextDlg.cpp/.h`
- `Code/Tools/Babylon/olestring.cpp/.h`
- `Code/Tools/Babylon/transcs.cpp/.h`

### Dialog Components
- `ExportDlg.cpp/h` - Export dialog
- `GenerateDlg.cpp/h` - Generation dialog
- `MatchDlg.cpp/h` - String matching dialog
- `ProceedDlg.cpp/h` - Proceed dialog
- `Report.cpp/h` - Report generation
- `olestring.cpp/h` - OLE string handling
- `transcs.cpp/h` - Translation critical section

## GUI Editor

- `RadioButtonProperties.cpp` - Radio button property editor
- `SliderProperties.cpp` - Slider control properties
- `StaticTextProperties.cpp` - Static text properties
- `TabControlProperties.cpp` - Tab control configuration
- `TextEntryProperties.cpp` - Text entry field properties
- `Code/Tools/GUIEdit/Include/DialogProc.h`
- `Code/Tools/GUIEdit/Include/EditWindow.h`
- `Code/Tools/GUIEdit/Include/GUIEditColor.h`
- `Code/Tools/GUIEdit/Include/GUIEditDisplay.h`
- `Code/Tools/GUIEdit/Include/GUIEditWindowManager.h`
- `Code/Tools/GUIEdit/Include/LayoutScheme.h`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/CallbackEditor.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/CheckBoxProperties.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/ColorDialog.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/ComboBoxProperties.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/GenericProperties.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/GridSettings.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/ListboxProperties.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/NewLayoutDialog.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/ProgressBarProperties.cpp`
- `Code/Tools/GUIEdit/Source/Dialog Procedures/PushButtonProperties.cpp`
- `Code/Tools/GUIEdit/Source/EditWindow.cpp`
- `Code/Tools/GUIEdit/Source/GUIEditDisplay.cpp`
- `Code/Tools/GUIEdit/Source/GUIEditWindowManager.cpp`
- `Code/Tools/GUIEdit/Source/LayoutScheme.cpp`
- `Code/Tools/GUIEdit/Source/Save.cpp`

## Launcher

- `loadbmp.cpp/h` - Bitmap loading for launcher
- `main.cpp` - Launcher entry point
- `monod.cpp/h` - Monitoring system
- `odevice.h` - Device abstraction
- `patch.cpp/h` - Patching system
- `process.cpp/h` - Process management
- `streamer.cpp/h` - File streaming system
  - Buffered file reading
  - Asynchronous file loading
- `wdebug.cpp/h` - Windows debug helpers
  - Debug output formatting
  - Diagnostic message handling
- `winblows.cpp/h` - Windows-specific functionality
  - Window creation/management
  - System integration
- `wstring.cpp/h` - String handling utilities
  - String manipulation
  - Unicode support
- `wstypes.h` - Windows type definitions

### Core Components
- `Protect.cpp/h` - Copy protection
- `configfile.cpp/h` - Configuration file
- `dialog.cpp/h` - Dialog system
- `dictionary.h` - Dictionary implementation
- `filed.h` - File definitions
- `findpatch.cpp/h` - Patch finder

### Data Generation
- `DatGen.cpp` - Data generation utility

### Debug Utilities
- `DebugPrint.cpp/h` - Debug printing

### Storage System
- `Rights.h` - Rights management
- `Stream.h` - Data streaming

### Support Components
- `RefCounted.h` - Reference counting
- `RefPtr.h` - Reference pointer
- `StringConvert.cpp/h` - String conversion
- `UTypes.h` - Type definitions
- `Visualc.h` - Visual C++ compatibility

## Particle Editor

- `ParticleEditorDialog.cpp/h` - Particle editor dialog
- `ParticleEditorExport.h` - Export functionality
- `ParticleTypePanels.cpp/h` - Particle type UI panels
- `VelocityTypePanels.cpp/h` - Velocity configuration panels

### UI Components
- `CButtonShowColor.cpp/h` - Color button control
- `CColorAlphaDialog.cpp/h` - Alpha color dialog
- `CParticleEditorPage.h` - Editor page
- `CSwitchesDialog.cpp/h` - Switches dialog
- `ISwapablePanel.h` - Swappable panel interface
- `MoreParmsDialog.cpp/h` - Parameters dialog

## 3D Tools

- `GameMtlForm.cpp/h` - Game material form
- `GameMtlPassDlg.cpp/h` - Material pass dialog
- `GameMtlShaderDlg.cpp/h` - Shader configuration dialog
- `GameMtlTextureDlg.cpp/h` - Texture selection dialog
- `GameMtlVertexMaterialDlg.cpp/h` - Vertex material editing
- `InputDlg.cpp/h` - Input dialog for tools
  - Parameter input fields
  - Validation and error checking
- `LightGlareSave.cpp/h` - Light glare effect saving
  - Glare parameters serialization
  - Visual effect persistence
- `MeshDeform.cpp/h` - Mesh deformation system
  - Vertex displacement
  - Deformation algorithms
- `MeshDeformData.cpp/h` - Deformation data management
  - Deformation state storage
  - Animation key frames
- `MeshDeformDefs.h` - Mesh deform definitions
- `MeshDeformPanel.cpp/h` - Deformation UI panel
  - Deformation controls
  - Preview functionality

## 3D Art Pipeline (MAX2W3D)

### Core Functionality
- `w3dexp.cpp/h` - 3D exporter main functionality
- `w3ddlg.cpp/h` - Exporter dialog
- `w3dmtl.cpp/h` - Material exporter
- `w3dutil.cpp/h` - Utility functions
- `w3dappdata.cpp/h` - Application data
- `w3ddesc.cpp/h` - Object descriptions

### Material System
- `gamemtl.h` - Game material definition
- `GameMtl.cpp` - Game material implementation
- `GameMtlForm.cpp/h` - Material form UI
- `GameMtlDlg.cpp/h` - Material dialog
- `GameMtlPassDlg.cpp/h` - Material pass dialog
- `GameMtlShaderDlg.cpp/h` - Shader dialog
- `GameMtlTextureDlg.cpp/h` - Texture dialog
- `GameMtlVertexMaterialDlg.cpp/h` - Vertex material dialog
- `PS2GameMtl.cpp` - PS2 material implementation
- `PS2GameMtlShaderDlg.cpp/h` - PS2 shader dialog

### Mesh Manipulation
- `MeshDeform.cpp/h` - Mesh deformation system
- `MeshDeformData.cpp/h` - Deformation data
- `MeshDeformDefs.h` - Deformation definitions
- `MeshDeformPanel.cpp/h` - UI panel
- `MeshDeformSave.cpp/h` - Save system
- `MeshDeformSaveSet.cpp/h` - Save set
- `MeshDeformSet.cpp/h` - Deformation set
- `MeshDeformUndo.cpp/h` - Undo system
- `meshcon.cpp/h` - Mesh converter
- `meshsave.cpp/h` - Mesh saving

### Animation System
- `motion.cpp/h` - Motion system
- `animationcompressionsettings.cpp/h` - Animation compression
- `bchannel.cpp/h` - Bone animation channel
- `vchannel.cpp/h` - Vector animation channel
- `SkinCopy.cpp` - Skin copying utility
- `skin.cpp/h` - Skin system
- `skindata.cpp/h` - Skin data

### Scene Management
- `SceneSetup.cpp` - Scene setup utility
- `SceneSetupDlg.cpp/h` - Setup dialog
- `hiersave.cpp/h` - Hierarchy saving
- `hlodsave.cpp/h` - HLOD saving
- `nullsave.cpp/h` - Null object saving
- `dazzlesave.cpp/h` - Dazzle effect saving
- `colboxsave.cpp/h` - Collision box saving

### Utility Functions
- `exportlog.cpp/h` - Export logging
- `util.cpp/h` - General utilities
- `floaterdialog.cpp/h` - Floating dialog
- `logdlg.cpp/h` - Log dialog
- `AlphaModifier.cpp/h` - Alpha channel modifier
- `AppData.cpp` - Application data
- `FormClass.cpp/h` - Form class
- `maxworldinfo.cpp/h` - World info
- `rcmenu.cpp/h` - Right-click menu
- `SnapPoints.cpp/h` - Snap points system

### Export Options
- `ExportAll.cpp` - Export all functionality
- `ExportAllDlg.cpp/h` - Export all dialog
- `presetexportoptionsdialog.cpp/h` - Preset dialog
- `genlodextensiondialog.cpp/h` - LOD dialog
- `genmtlnamesdialog.cpp/h` - Material names dialog
- `gennamesdialog.cpp/h` - Name generation dialog

### UI Components
- `ExportAllDlg.cpp/h` - Export all dialog
- `FormClass.cpp/h` - Form class base
- `GameMtlDlg.cpp/h` - Material dialog
- `floaterdialog.cpp/h` - Floating dialog system
- `logdlg.cpp/h` - Log dialog
- `rcmenu.cpp/h` - Right-click menu

### Asset Export
- `boneicon.cpp/h` - Bone icon
- `bpick.cpp/h` - Object picker
- `exportlog.cpp/h` - Export logging
- `geometryexportcontext.h` - Export context
- `geometryexporttask.cpp/h` - Export task system

### Material Systems
- `gmtldlg.cpp` - Material dialog implementation
- `PCToPS2Material.cpp` - PS2 material conversion

### Mesh & Scene Systems
- `gridsnapmodifier.cpp/h` - Grid snapping
- `namedsel.cpp/h` - Named selection
- `simpdib.cpp/h` - Simple DIB handling
- `vxl.cpp/h` - Voxel handling
- `vxldbg.cpp/h` - Voxel debugging
- `vxllayer.cpp/h` - Voxel layer system

### MAX Plugins and Extensions
- `vxl.cpp/h` - Voxel handling
- `vxldbg.cpp/h` - Voxel debugging
- `vxllayer.cpp/h` - Voxel layer system
- `gridsnapmodifier.cpp/h` - Grid snapping modifier
- `namedsel.cpp/h` - Named selection utility
- `dllmain.cpp/h` - DLL entry point
- `gamemaps.cpp/h` - Game mapping system
- `boneicon.cpp/h` - Bone icon representation
- `bpick.cpp/h` - Object picking utility
- `geometryexportcontext.h` - Geometry export context
- `geometryexporttask.cpp/h` - Export task system
- `gmtldlg.cpp` - Game material dialog
- `SkinCopy.cpp` - Skin copying utility
- `simpdib.cpp/h` - Simple DIB implementation

## Plugin Library

- `w3dquat.cpp/h` - Quaternion implementation
- `watcom.h` - Watcom compiler compatibility
- `wwfile.h` - File system abstractions

### Supporting Classes
- `WWmatrix3.cpp/h` - Matrix implementation
- `nodefilt.cpp/h` - Node filtering
- `nodelist.cpp/h` - Node listing
- `errclass.h` - Error handling
- `palette.h` - Color palette
- `rawfile.h` - Raw file handling
- `rgb.h` - RGB color definitions
- `vector3i.h` - Integer 3D vector

## Thread Management

- `threadfac.cpp/h` - Thread factory
- `threadsafe.h` - Thread safety primitives
- `timezone.cpp/h` - Timezone utilities
- `wtime.cpp/h` - Time management
- `xtime.cpp/h` - Extended time functions
- `Code/Tools/mangler/wlib/critsec.cpp/.h`
- `Code/Tools/mangler/wlib/sem4.cpp/.h`
- `Code/Tools/mangler/wlib/threadfac.cpp/.h`
- `Code/Tools/mangler/wlib/timezone.cpp/.h`
- `Code/Tools/mangler/wlib/wtime.cpp/.h`
- `Code/Tools/mangler/wlib/xtime.cpp/.h`

### Critical Section
- `critsec.cpp/h` - Critical section implementation
- `sem4.cpp/h` - Semaphore implementation
- `syslogd.cpp/h` - System log debugging

### Thread Management
- `threadfac.cpp/h` - Thread factory
- `timezone.cpp/h` - Timezone utilities
- `wtime.cpp/h` - Time management
- `xtime.cpp/h` - Extended time functions

### Network Tools
- `field.cpp/h` - Data field handling
- `packet.cpp/h` - Network packet implementation
- `tcp.cpp/h` - TCP protocol implementation

## Map Builder Tools

Located in `Generals/Code/Tools/WorldBuilder/src/`:

- Core Files:
  - `WorldBuilder.cpp` - Main application
  - `WorldBuilderDoc.cpp` - Document handling
  - `WorldBuilderView.cpp` - View implementation
  - `MainFrm.cpp` - Main frame window
  - `StdAfx.cpp` - Precompiled headers
  - `WBFrameWnd.cpp` - Frame window handler

- UI Components:
  - `CButtonShowColor.cpp/.h` - Color button control
  - `MyToolbar.cpp` - Custom toolbar
  - `OptionsPanel.cpp` - Options panel
  - `WBPopupSlider.cpp` - Popup slider control
  - `propedit.cpp` - Property editor
  - `SplashScreen.cpp` - Splash screen

- Tools:
  - `AutoEdgeOutTool.cpp` - Auto edge tool
  - `BaseBuildProps.cpp` - Base building properties
  - `BlendEdgeTool.cpp` - Edge blending
  - `BlendMaterial.cpp` - Material blending
  - `BorderTool.cpp` - Border tool
  - `BrushTool.cpp` - Brush tool
  - `EyedropperTool.cpp` - Eyedropper tool
  - `FeatherTool.cpp` - Feathering tool
  - `FenceTool.cpp` - Fence placement
  - `FloodFillTool.cpp` - Flood fill
  - `GroveTool.cpp` - Grove placement
  - `HandScrollTool.cpp` - Hand scroll
  - `MeshMoldTool.cpp` - Mesh molding
  - `MoundTool.cpp` - Mound creation
  - `ObjectTool.cpp` - Object placement
  - `PointerTool.cpp` - Pointer tool
  - `PolygonTool.cpp` - Polygon tool
  - `RampTool.cpp` - Ramp creation
  - `RoadTool.cpp` - Road placement
  - `ScorchTool.cpp` - Scorch marks
  - `TileTool.cpp` - Tile placement
  - `Tool.cpp` - Base tool class
  - `WaterTool.cpp` - Water placement
  - `WaypointTool.cpp` - Waypoint placement

- Options & Settings:
  - `brushoptions.cpp` - Brush settings
  - `CameraOptions.cpp` - Camera controls
  - `ContourOptions.cpp` - Contour settings
  - `FeatherOptions.cpp` - Feather settings
  - `FenceOptions.cpp` - Fence settings
  - `GlobalLightOptions.cpp` - Global lighting
  - `GroveOptions.cpp` - Grove settings
  - `ImpassableOptions.cpp` - Impassable areas
  - `LightOptions.cpp` - Lighting options
  - `MeshMoldOptions.cpp` - Mesh mold settings
  - `MoundOptions.cpp` - Mound settings
  - `ObjectOptions.cpp` - Object settings
  - `RampOptions.cpp` - Ramp settings
  - `RoadOptions.cpp` - Road settings
  - `ScorchOptions.cpp` - Scorch settings
  - `ShadowOptions.cpp` - Shadow settings
  - `WaterOptions.cpp` - Water settings
  - `WaypointOptions.cpp` - Waypoint settings

- Map Management:
  - `BuildList.cpp` - Build list handling
  - `BuildListTool.cpp` - Build list tool
  - `CellWidth.cpp` - Cell width handling
  - `DrawObject.cpp` - Object drawing
  - `LayersList.cpp` - Layer management
  - `MapPreview.cpp` - Map preview
  - `MapSettings.cpp` - Map settings
  - `NewHeightMap.cpp` - Height map creation
  - `OpenMap.cpp` - Map opening
  - `SaveMap.cpp` - Map saving
  - `SelectMacrotexture.cpp` - Macrotexture selection
  - `WBHeightMap.cpp` - Height map handling
  - `WHeightMapEdit.cpp` - Height map editor
  - `mapobjectprops.cpp` - Map object properties

- Terrain System:
  - `TerrainMaterial.cpp` - Material handling
  - `TerrainModal.cpp` - Terrain modal dialog
  - `TerrainSwatches.cpp` - Terrain swatches

- Team & Player Management:
  - `TeamBehavior.cpp` - Team behavior
  - `TeamGeneric.cpp` - Generic team settings
  - `TeamIdentity.cpp` - Team identity
  - `TeamReinforcement.cpp` - Team reinforcements
  - `addplayerdialog.cpp` - Add player dialog
  - `playerlistdlg.cpp` - Player list dialog
  - `teamsdialog.cpp` - Teams dialog
  - `CFixTeamOwnerDialog.cpp` - Team owner fixing

- Scripting:
  - `EditAction.cpp` - Action editing
  - `EditCondition.cpp` - Condition editing
  - `EditCoordParameter.cpp` - Coordinate parameters
  - `EditGroup.cpp` - Group editing
  - `EditObjectParameter.cpp` - Object parameters
  - `EditParameter.cpp` - Parameter editing
  - `ExportScriptsOptions.cpp` - Script export
  - `ScriptActionsFalse.cpp` - False actions
  - `ScriptActionsTrue.cpp` - True actions
  - `ScriptConditions.cpp` - Script conditions
  - `ScriptDialog.cpp` - Script dialog
  - `ScriptProperties.cpp` - Script properties

- Views:
  - `wbview.cpp` - World Builder view
  - `wbview3d.cpp` - 3D view

- Other:
  - `CUndoable.cpp` - Undo functionality
  - `EulaDialog.cpp` - EULA dialog
  - `ObjectPreview.cpp` - Object preview
  - `PickUnitDialog.cpp` - Unit picker

- `RulerOptions.h/.cpp` - Ruler measurement options
- `RulerTool.h/.cpp` - Map measurement tool
- `TeamObjectProperties.h/.cpp` - Team object settings

## File Integrity

- `CRCDiff/CRCDiff.cpp` - Implementation
- `expander.cpp/h` - File expansion utility

## Version Control

- `versionUpdate/versionUpdate.cpp` - Implementation
- `buildVersionUpdate.cpp` - Version update utility

## Debug Window

- `DebugWindow/DebugWindow.h` - Debug window

## Autorun System

- `Autorun/autorun.cpp` - Autorun implementation
- `Autorun/autorun.h` - Autorun header
- `Autorun/ARGS.CPP` - Arguments handling
- `Autorun/ARGS.H` - Arguments header
- `Autorun/CallbackHook.h` - Callback hooks
- `Autorun/CDCNTRL.CPP` - CD control
- `Autorun/CDCNTRL.H` - CD control header
- `DrawButton.cpp` - Button drawing
- `DrawButton.h` - Button header
- `GameText.cpp` - Game text handling
- `GameText.h` - Game text header
- `GETCD.CPP` - CD detection
- `GetCD.h` - CD detection header
- `ViewHTML.cpp` - HTML viewing
- `ViewHTML.h` - HTML viewer header
- `Code/Tools/Autorun/EZGIMEX.cpp`
- `Code/Tools/Autorun/IGR.cpp/.h`
- `Code/Tools/Autorun/Jsupport.cpp`
- `Code/Tools/Autorun/Locale_API.cpp/.h`
- `Code/Tools/Autorun/POINT.h`
- `Code/Tools/Autorun/RECT.h`
- `Code/Tools/Autorun/TTFont.cpp/.h`
- `Code/Tools/Autorun/leanAndMeanAutorun.h`
- `Code/Tools/Autorun/locale.cpp/.h`

### Localization Support
- `IGR.cpp/h` - International game resources
- `Locale_API.cpp/h` - Localization API
- `locale.cpp/h` - Locale handling

### User Interface
- `TTFont.cpp/h` - TrueType font rendering
- `POINT.h` - Point structure
- `RECT.h` - Rectangle structure
- `leanAndMeanAutorun.h` - Lightweight autorun

## File System

- `WSYS_FileSystem.cpp/h` - File system abstraction
  - Virtual file system interface
  - Directory traversal
- `WSYS_RAMFile.cpp/h` - In-memory file implementation
  - RAM-based file operations
  - Memory buffer streaming
- `WSYS_StdFile.cpp/h` - Standard file implementation
  - Disk-based file operations
  - File handle management
- `WSYS_StdFileSystem.cpp/h` - Standard file system
  - OS file system integration
  - Physical file access

## Network Tools

- `endian.h` - Endian conversion utilities
- `manglertest.cpp` - Network protocol testing
- `arraylist.h` - Array list implementation
- `critsec.cpp/.h` - Critical section handling
- `linkedlist.h` - Linked list implementation
- `mboxd.h` - Message box debug
- `sem4.cpp/.h` - Semaphore implementation
- `stderrd.h` - Standard error debug
- `stdoutd.h` - Standard output debug
- `syslogd.cpp/.h` - System log debugging
- `ustring.h` - Unicode string handling
- `field.cpp/.h` - Data field handling
- `packet.cpp/.h` - Network packet implementation
- `tcp.cpp/.h` - TCP protocol implementation
- `Code/Tools/mangler/wnet/field.cpp/.h`
- `Code/Tools/mangler/wnet/packet.cpp/.h`
- `Code/Tools/mangler/wnet/tcp.cpp/.h`

### Critical Section
- `critsec.cpp/h` - Critical section implementation
- `sem4.cpp/h` - Semaphore implementation
- `syslogd.cpp/h` - System log debugging

### Thread Management
- `threadfac.cpp/h` - Thread factory
- `timezone.cpp/h` - Timezone utilities
- `wtime.cpp/h` - Time management
- `xtime.cpp/h` - Extended time functions

### Packet Handling
- `field.cpp/h` - Data field handling
- `packet.cpp/h` - Network packet implementation
- `tcp.cpp/h` - TCP protocol implementation

## Matchmaking System

- `generals.cpp/.h` - Generals matchmaking implementation
- `global.cpp` - Global matchmaking variables
- `matcher.cpp/.h` - Match creation system
- `mydebug.cpp/.h` - Debug utilities
- `rand.cpp/.h` - Random number generation
- `timingTest.cpp` - Performance timing tests
- `Code/Tools/matchbot/generals.cpp/.h`
- `Code/Tools/matchbot/matcher.cpp/.h`
- `Code/Tools/matchbot/mydebug.cpp/.h`
- `Code/Tools/matchbot/rand.cpp/.h`

### Core Components
- `generals.cpp/h` - Generals matchmaking
- `matcher.cpp/h` - Matcher implementation
- `mydebug.cpp/h` - Debug utilities
- `rand.cpp/h` - Random number generation

## Online Integration

- `chatdefs.h` - Chat system definitions
- `netutildefs.h` - Network utility definitions
- `wolapi.h` - Westwood Online API
- `wolapi_i.c` - API implementation
- `wolInit.cpp` - WOL initialization
- `wolSetup.cpp/.h` - WOL setup utilities
- `Code/Tools/wolSetup/wolSetup.cpp/.h`

### WOL Setup
- `wolSetup.cpp/h` - Westwood Online setup utilities

## Debug Tools

- `Code/Libraries/Source/debug/_pch.cpp/.h`
- `Code/Libraries/Source/debug/debug_cmd.cpp/.h`
- `Code/Libraries/Source/debug/debug_debug.cpp/.h`
- `Code/Libraries/Source/debug/debug_doc.h`
- `Code/Libraries/Source/debug/debug_except.cpp`
- `Code/Libraries/Source/debug/debug_getdefaultcommands.cpp`
- `Code/Libraries/Source/debug/debug_internal.cpp`
- `Code/Libraries/Source/debug/debug_dlg/debug_dlg.cpp`
- `Code/Libraries/Source/debug/debug_dlg/resource.h`
- `Code/Libraries/Source/debug/netserv/netserv.cpp`
- `Code/Libraries/Source/debug/test1/test1.cpp`
- `Code/Libraries/Source/debug/test2/test2.cpp`
- `Code/Libraries/Source/debug/test3/test3.cpp`
- `Code/Libraries/Source/debug/test4/test4.cpp`
- `Code/Libraries/Source/debug/test5/test5.cpp`
- `Code/Libraries/Source/debug/test6/test6.cpp`
- `Code/Libraries/Source/debug/debug_stack.cpp/.h`

## Profiling

- `Code/Libraries/Source/profile/internal_cmd.h`
- `Code/Libraries/Source/profile/internal_funclevel.h`
- `Code/Libraries/Source/profile/internal_highlevel.h`
- `Code/Libraries/Source/profile/internal_result.h`
- `Code/Libraries/Source/profile/profile_cmd.cpp`
- `Code/Libraries/Source/profile/profile_doc.h`
- `Code/Libraries/Source/profile/profile_funclevel.cpp/.h`
- `Code/Libraries/Source/profile/profile_highlevel.cpp/.h`
- `Code/Libraries/Source/profile/profile_result.cpp/.h`

## Image Tools

- `Code/Tools/ImagePacker/Include/ImageDirectory.h`
- `Code/Tools/ImagePacker/Include/ImageInfo.h`
- `Code/Tools/ImagePacker/Include/TexturePage.h`
- `Code/Tools/ImagePacker/Include/WindowProc.h`
- `Code/Tools/ImagePacker/Source/ImageInfo.cpp`
- `Code/Tools/ImagePacker/Source/TexturePage.cpp`
- `Code/Tools/ImagePacker/Source/Window Procedures/DirectorySelect.cpp`
- `Code/Tools/ImagePacker/Source/Window Procedures/ImageErrorProc.cpp`
- `Code/Tools/ImagePacker/Source/Window Procedures/ImagePackerProc.cpp`
- `Code/Tools/ImagePacker/Source/Window Procedures/PageErrorProc.cpp`
- `Code/Tools/ImagePacker/Source/Window Procedures/PreviewProc.cpp`

# Development Tools

Documentation of internal development and support tools used during the creation of C&C Generals: Zero Hour.

## Debug Systems

- `Libraries/Source/debug/_pch.cpp/h` - Precompiled header for debug systems
  - Common debug includes
  - Diagnostic definitions
  - Debug infrastructure

- `Libraries/Source/debug/debug_cmd.cpp/h` - Debug command system
  - Command registration
  - Command parsing
  - Command execution

- `Libraries/Source/debug/debug_debug.cpp/h` - Debug output functionality
  - Message formatting
  - Output filtering
  - Debug channels

- `Libraries/Source/profile/profile_funclevel.cpp/h` - Function-level profiling
  - Per-function timing
  - Call statistics
  - Performance hotspots

- `Libraries/Source/profile/profile_highlevel.cpp/h` - High-level profiling
  - System-level timing
  - Subsystem performance
  - Major component analysis

## Core Utilities

- `Libraries/Source/template.cpp/h` - Base template implementations
  - Template utility functions
  - Common patterns
  - Reusable frameworks

## Thread Management Tools

The core thread synchronization and management utilities:

- `Tools/mangler/wlib/critsec.cpp/h` - Critical section implementation
  - Thread synchronization
  - Mutual exclusion
  - Deadlock prevention

- `Tools/mangler/wlib/sem4.cpp/h` - Semaphore implementation
  - Resource counting
  - Thread signaling
  - Concurrency control

- `Tools/mangler/wlib/threadfac.cpp/h` - Thread factory
  - Thread creation
  - Worker threads
  - Thread management

- `Tools/mangler/wlib/timezone.cpp/h` - Timezone utilities
  - Time synchronization
  - Local time conversion
  - Time zone handling

- `Tools/mangler/wlib/wtime.cpp/h` - Time management
  - High-resolution timing
  - Timers and intervals
  - Clock functions

- `Tools/mangler/wlib/xtime.cpp/h` - Extended time functions
  - Time formatting
  - Date calculations
  - Calendar utilities

## Network Protocol Tools

Network protocol debugging and implementation tools:

- `Tools/mangler/wnet/field.cpp/h` - Network field handling
  - Data field definition
  - Field serialization
  - Type-safe network data

- `Tools/mangler/wnet/packet.cpp/h` - Network packet system
  - Packet construction
  - Header management
  - Data encapsulation

- `Tools/mangler/wnet/tcp.cpp/h` - TCP protocol implementation
  - Connection handling
  - Stream management
  - Reliable communication

## Logging Systems

- `Tools/mangler/wlib/syslogd.cpp/h` - System logging daemon
  - Log message handling
  - Log file management
  - Log levels and filtering

## Data Analysis Tools

- `Tools/CRCDiff/expander.cpp/h` - Delta compression system
  - Patch generation
  - Binary differencing
  - Patch application

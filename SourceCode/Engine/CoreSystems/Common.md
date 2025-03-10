# Common System

Core utilities and interfaces used across all engine subsystems. The Common system provides foundational services used by all other game components.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Memory Management

- `Code/GameEngine/Include/Common/GameMemory.h` - Memory management system
- `Code/GameEngine/Include/Common/RAMFile.h` - RAM-based file operations
- `Code/GameEngine/Include/Common/DataChunk.h` - Binary data container
- `Code/GameEngine/Include/Common/StackDump.h` - Stack trace utilities

## Data Structures

- `Code/GameEngine/Include/Common/BitFlags.h` - Bit flag management
- `Code/GameEngine/Include/Common/BitFlagsIO.h` - Bit flag serialization
- `Code/GameEngine/Include/Common/Dict.h` - Dictionary implementation
- `Code/GameEngine/Include/Common/List.h` - List implementation
- `Code/GameEngine/Include/Common/SparseMatchFinder.h` - Sparse data matching
- `Code/GameEngine/Source/Common/BitFlags.cpp`
- `Code/GameEngine/Source/Common/Dict.cpp`
- `Code/GameEngine/Source/Common/DiscreteCircle.cpp`
- `Code/GameEngine/Include/Common/List.h` - Generic list implementation
- `Code/GameEngine/Include/Common/Dict.h` - Dictionary/map implementation

## File System

- `Code/GameEngine/Include/Common/ArchiveFile.h` - Archive file access
- `Code/GameEngine/Include/Common/ArchiveFileSystem.h` - Archive file system
- `Code/GameEngine/Include/Common/file.h` - Basic file operations
- `Code/GameEngine/Include/Common/FileSystem.h` - File system interface
- `Code/GameEngine/Include/Common/LocalFile.h` - Local file operations
- `Code/GameEngine/Include/Common/LocalFileSystem.h` - Local file system
- `Code/GameEngine/Include/Common/StreamingArchiveFile.h` - Streaming archive files
- `Code/GameEngine/Include/Common/Directory.h` - Directory operations
- `Code/GameEngine/Include/Common/file.h` - File handle abstraction
- `Code/GameEngine/Include/Common/ArchiveFile.h` - Archive file operations
- `Code/GameEngine/Include/Common/StreamingArchiveFile.h` - Streaming archives

## String Handling

- `Code/GameEngine/Include/Common/AsciiString.h` - ASCII string operations
- `Code/GameEngine/Include/Common/UnicodeString.h` - Unicode string operations
- `Code/GameEngine/Include/Common/string.h` - String utilities
- `Code/GameEngine/Include/Common/QuotedPrintable.h` - Quoted printable encoding

## Mathematics

- `Code/GameEngine/Include/Common/Geometry.h` - Geometric calculations
- `Code/GameEngine/Include/Common/QuickTrig.h` - Fast trigonometry
- `Code/GameEngine/Include/Common/RandomValue.h` - Random number generation
- `Code/GameEngine/Include/Common/BezierSegment.h` - Bezier curve implementation
- `Code/GameEngine/Include/Common/BezFwdIterator.h` - Bezier forward iterator
- `Code/GameEngine/Source/Common/RandomValue.cpp`
- `Code/GameEngine/Include/Common/DiscreteCircle.h` - Circle approximation

## Core Engine

- `Code/GameEngine/Include/Common/GameEngine.h` - Main engine controller
- `Code/GameEngine/Include/Common/SubsystemInterface.h` - Subsystem interface
- `Code/GameEngine/Include/Common/GameCommon.h` - Common game definitions
- `Code/GameEngine/Include/Common/GameState.h` - Game state management
- `Code/GameEngine/Include/Common/GameStateMap.h` - State mapping
- `Code/GameEngine/Source/Common/GameEngine.cpp`
- `Code/GameEngine/Source/Common/GameMain.cpp`
- `Code/GameEngine/Include/Common/Language.h` - Language support
- `Code/GameEngine/Source/Common/Language.cpp`
- `Code/GameEngine/Include/Common/GameState.h` - Game state management
- `Code/GameEngine/Include/Common/GameStateMap.h` - Game state definitions
- `Code/GameEngine/Include/Common/GameInfo.h` - Game information
- `Code/GameEngine/Include/Common/GameLOD.h` - Level of detail system

## Configuration & Settings

- `Code/GameEngine/Include/Common/CommandLine.h` - Command line parsing
- `Code/GameEngine/Include/Common/GlobalData.h` - Global configuration
- `Code/GameEngine/Include/Common/INI.h` - INI file management
- `Code/GameEngine/Include/Common/INIException.h` - INI exceptions
- `Code/GameEngine/Include/Common/Registry.h` - Registry access
- `Code/GameEngine/Include/Common/UserPreferences.h` - User preferences
- `Code/GameEngine/Source/Common/CommandLine.cpp`
- `Code/GameEngine/Source/Common/GlobalData.cpp`
- `Code/GameEngine/Source/Common/UserPreferences.cpp`
- `Code/GameEngine/Include/Common/MultiplayerSettings.h` - Multiplayer configuration
- `Code/GameEngine/Source/Common/MultiplayerSettings.cpp`
- `Code/GameEngine/Include/Common/SkirmishPreferences.h` - Skirmish game settings
- `Code/GameEngine/Include/Common/QuickmatchPreferences.h` - Quick match settings
- `Code/GameEngine/Include/Common/LadderPreferences.h` - Ladder match settings
- `Code/GameEngine/Include/Common/GameSpyMiscPreferences.h` - GameSpy-related settings
- `Code/GameEngine/Include/Common/CustomMatchPreferences.h` - Custom match settings
- `Code/GameEngine/Include/Common/IgnorePreferences.h` - Player ignore list settings
- `Code/GameEngine/Include/Common/GlobalData.h` - Game-wide configuration
- `Code/GameEngine/Include/Common/INI.h` - INI file parser
- `Code/GameEngine/Include/Common/CommandLine.h` - Command line parsing
- `Code/GameEngine/Include/Common/Registry.h` - Registry access
- `Code/GameEngine/Include/Common/UserPreferences.h` - User preferences

## Audio Systems

- `Code/GameEngine/Include/Common/AudioAffect.h`
- `Code/GameEngine/Include/Common/AudioEventInfo.h`
- `Code/GameEngine/Include/Common/AudioEventRTS.h`
- `Code/GameEngine/Include/Common/AudioHandleSpecialValues.h`
- `Code/GameEngine/Include/Common/AudioRandomValue.h`
- `Code/GameEngine/Include/Common/AudioRequest.h`
- `Code/GameEngine/Include/Common/AudioSettings.h`
- `Code/GameEngine/Include/Common/DynamicAudioEventInfo.h`
- `Code/GameEngine/Include/Common/GameAudio.h` - Audio system interface
- `Code/GameEngine/Include/Common/GameMusic.h` - Music system
- `Code/GameEngine/Include/Common/GameSounds.h` - Sound effects
- `Code/GameEngine/Include/Common/GameSpeech.h` - Speech system
- `Code/GameEngine/Include/Common/MiscAudio.h` - Miscellaneous audio
- `Code/GameEngine/Include/Common/CDManager.h` - CD music management
- `Code/GameEngine/Include/Common/GameAudio.h` - Audio system interface
- `Code/GameEngine/Include/Common/GameSounds.h` - Sound effect management
- `Code/GameEngine/Include/Common/GameMusic.h` - Music playback system
- `Code/GameEngine/Include/Common/GameSpeech.h` - Voice line management
- `Code/GameEngine/Include/Common/AudioEventInfo.h` - Audio event definitions
- `Code/GameEngine/Include/Common/AudioEventRTS.h` - RTS-specific audio events
- `Code/GameEngine/Include/Common/CDManager.h` - CD music management

## Module System

- `Code/GameEngine/Include/Common/Module.h` - Base module interface
- `Code/GameEngine/Include/Common/ModuleFactory.h` - Module creation
- `Code/GameEngine/Include/Common/ClientUpdateModule.h` - Client update module
- `Code/GameEngine/Include/Common/DrawModule.h` - Drawing module interface
- `Code/GameEngine/Include/Common/Module.h` - Base module interface
- `Code/GameEngine/Include/Common/ModuleFactory.h` - Module creation system
- `Code/GameEngine/Include/Common/ClientUpdateModule.h` - Client update module

## Debug & Profiling

- `Code/GameEngine/Include/Common/crc.h` - CRC checksum
- `Code/GameEngine/Include/Common/CRCDebug.h` - CRC debugging
- `Code/GameEngine/Include/Common/Debug.h` - Debug utilities
- `Code/GameEngine/Include/Common/Errors.h` - Error handling
- `Code/GameEngine/Include/Common/MiniLog.h` - Logging system
- `Code/GameEngine/Include/Common/PerfMetrics.h` - Performance metrics
- `Code/GameEngine/Include/Common/PerfTimer.h` - Performance timing
- `Code/GameEngine/Include/Common/Recorder.h` - State recording
- `Code/GameEngine/Include/Common/StackDump.h` - Stack trace utilities
- `Code/GameEngine/Source/Common/crc.cpp`
- `Code/GameEngine/Source/Common/CRCDebug.cpp`
- `Code/GameEngine/Source/Common/MiniLog.cpp`
- `Code/GameEngine/Source/Common/PerfTimer.cpp`
- `Code/GameEngine/Source/Common/Recorder.cpp`
- `Code/GameEngine/Include/Common/Debug.h` - Debug utilities
- `Code/GameEngine/Include/Common/Errors.h` - Error handling
- `Code/GameEngine/Include/Common/MiniLog.h` - Logging system
- `Code/GameEngine/Include/Common/PerfMetrics.h` - Performance metrics
- `Code/GameEngine/Include/Common/PerfTimer.h` - Performance timing
- `Code/GameEngine/Include/Common/StackDump.h` - Stack trace capture
- `Code/GameEngine/Include/Common/crc.h` - CRC checksum calculation
- `Code/GameEngine/Include/Common/CRCDebug.h` - CRC debugging

## Synchronization & Threading

- `Code/GameEngine/Include/Common/CriticalSection.h` - Thread synchronization
- `Code/GameEngine/Include/Common/ScopedMutex.h` - Scoped mutex implementation
- `Code/GameEngine/Include/Common/LatchRestore.h` - State restoration utilities
- `Code/GameEngine/Include/Common/CriticalSection.h` - Thread synchronization

## Game Mechanics

- `Code/GameEngine/Include/Common/Energy.h` - Energy system
- `Code/GameEngine/Include/Common/Handicap.h` - Player handicap system
- `Code/GameEngine/Include/Common/Money.h` - Currency system
- `Code/GameEngine/Include/Common/Player.h` - Player definitions
- `Code/GameEngine/Include/Common/PlayerList.h` - Player management
- `Code/GameEngine/Include/Common/PlayerTemplate.h` - Player templates
- `Code/GameEngine/Include/Common/Science.h` - Research system
- `Code/GameEngine/Include/Common/ScoreKeeper.h` - Score tracking
- `Code/GameEngine/Include/Common/SpecialPower.h` - Special abilities
- `Code/GameEngine/Include/Common/SpecialPowerMaskType.h`
- `Code/GameEngine/Include/Common/SpecialPowerType.h`
- `Code/GameEngine/Include/Common/Team.h` - Team system
- `Code/GameEngine/Include/Common/Terrain.h` - Terrain system
- `Code/GameEngine/Include/Common/TerrainTypes.h` - Terrain type definitions
- `Code/GameEngine/Include/Common/Upgrade.h` - Upgrade system
- `Code/GameEngine/Source/Common/TerrainTypes.cpp`
- `Code/GameEngine/Include/Common/GameType.h` - Game type definitions
- `Code/GameEngine/Include/Common/GameLOD.h` - Level of detail system
- `Code/GameEngine/Source/Common/GameLOD.cpp`
- `Code/GameEngine/Include/Common/ProductionPrerequisite.h` - Production requirements
- `Code/GameEngine/Include/Common/ResourceGatheringManager.h` - Resource collection
- `Code/GameEngine/Include/Common/Radar.h` - Radar implementation
- `Code/GameEngine/Include/Common/KindOf.h` - Object type classification
- `Code/GameEngine/Include/Common/BuildAssistant.h` - Construction assistance
- `Code/GameEngine/Include/Common/DamageFX.h` - Damage effects
- `Code/GameEngine/Source/Common/DamageFX.cpp`
- `Code/GameEngine/Include/Common/UnitTimings.h` - Unit timing constants

## Game Statistics

- `Code/GameEngine/Include/Common/AcademyStats.h` - Training statistics
- `Code/GameEngine/Include/Common/BattleHonors.h` - Battle achievements
- `Code/GameEngine/Include/Common/MissionStats.h` - Mission statistics
- `Code/GameEngine/Include/Common/SkirmishBattleHonors.h` - Skirmish achievements
- `Code/GameEngine/Include/Common/StatsCollector.h` - Statistics collection
- `Code/GameEngine/Source/Common/SkirmishBattleHonors.cpp`
- `Code/GameEngine/Source/Common/StatsCollector.cpp`

## Serialization & Data Transfer

- `Code/GameEngine/Include/Common/Xfer.h` - Data transfer
- `Code/GameEngine/Include/Common/XferCRC.h` - Transfer CRC
- `Code/GameEngine/Include/Common/XferDeepCRC.h` - Deep CRC
- `Code/GameEngine/Include/Common/XferLoad.h` - Data loading
- `Code/GameEngine/Include/Common/XferSave.h` - Data saving
- `Code/GameEngine/Include/Common/MessageStream.h` - Message streaming
- `Code/GameEngine/Source/Common/MessageStream.cpp`
- `Code/GameEngine/Include/Common/Snapshot.h` - State snapshot system
- `Code/GameEngine/Include/Common/Xfer.h` - Data transfer base
- `Code/GameEngine/Include/Common/XferSave.h` - Data saving
- `Code/GameEngine/Include/Common/XferLoad.h` - Data loading
- `Code/GameEngine/Include/Common/XferCRC.h` - Transfer checksum
- `Code/GameEngine/Include/Common/XferDeepCRC.h` - Deep transfer checksum

## Object System

- `Code/GameEngine/Include/Common/Thing.h` - Base object class
- `Code/GameEngine/Include/Common/ThingFactory.h` - Object creation
- `Code/GameEngine/Include/Common/ThingTemplate.h` - Object templates
- `Code/GameEngine/Include/Common/ThingSort.h` - Object sorting
- `Code/GameEngine/Include/Common/ObjectStatusTypes.h` - Object status flags
- `Code/GameEngine/Include/Common/MapObject.h` - Map objects
- `Code/GameEngine/Include/Common/MapReaderWriterInfo.h` - Map I/O utilities
- `Code/GameEngine/Include/Common/TunnelTracker.h` - Tunnel mechanics
- `Code/GameEngine/Include/Common/ModelState.h` - Model state tracking

## Miscellaneous

- `Code/GameEngine/Include/Common/version.h` - Version information
- `Code/GameEngine/Source/Common/version.cpp`
- `Code/GameEngine/Include/Common/encrypt.h` - Encryption utilities
- `Code/GameEngine/Include/Common/WellKnownKeys.h` - Standard key definitions
- `Code/GameEngine/Include/Common/CopyProtection.h` - Copy protection
- `Code/GameEngine/Include/Common/Overridable.h` - Overridable functionality
- `Code/GameEngine/Include/Common/Override.h` - Override implementation
- `Code/GameEngine/Include/Common/simpleplayer.h` - Simple player implementation
- `Code/GameEngine/Include/Common/DisabledTypes.h` - Disabled type definitions
- `Code/GameEngine/Include/Common/STLTypedefs.h` - STL type aliases
- `Code/GameEngine/Include/Common/StateMachine.h` - State machine implementation
- `Code/GameEngine/Source/Common/StateMachine.cpp`
- `Code/GameEngine/Include/Common/NameKeyGenerator.h` - Name-based key generation
- `Code/GameEngine/Source/Common/NameKeyGenerator.cpp`
- `Code/GameEngine/Include/Common/OSDisplay.h` - OS display utilities
- `Code/GameEngine/Include/Common/PartitionSolver.h` - Spatial partition system
- `Code/GameEngine/Source/Common/PartitionSolver.cpp`
- `Code/GameEngine/Include/Common/SystemInfo.h` - System information
- `Code/GameEngine/Include/Common/urllaunch.h` - URL launching utilities
- `Code/GameEngine/Include/Common/FunctionLexicon.h` - Function definitions
- `Code/GameEngine/Include/Common/BorderColors.h` - Border color definitions

## Command System

- `Code/GameEngine/Include/Common/ActionManager.h`
- `Code/GameEngine/Source/Common/RTS/ActionManager.cpp`

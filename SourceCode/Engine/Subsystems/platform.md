# Platform Systems

Documentation of platform-specific implementation, file systems, and input handling.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Audio System

- `MilesAudioManager.h/.cpp` - Miles Sound System integration
- `Code/GameEngineDevice/Include/MilesAudioDevice/MilesAudioManager.h`
- `Code/GameEngineDevice/Source/MilesAudioDevice/MilesAudioManager.cpp`

## Core Systems

- `W3DConvert.h/.cpp` - Data conversion utilities
- `W3DFunctionLexicon.h/.cpp` - Function registry system
- `W3DModuleFactory.h/.cpp` - Module creation system
- `W3DRadar.h/.cpp` - Radar visualization
- `Code/GameEngineDevice/Source/W3DDevice/Common/System/W3DFunctionLexicon.cpp`
- `Code/GameEngineDevice/Source/W3DDevice/Common/System/W3DRadar.cpp`
- `Code/GameEngineDevice/Source/W3DDevice/Common/W3DConvert.cpp`

## File System

- `Win32BIGFile.h/.cpp` - BIG archive file handling
- `Win32BIGFileSystem.h/.cpp` - BIG file system implementation
- `Win32CDManager.h/.cpp` - CD-ROM management
- `Win32GameEngine.h/.cpp` - Game engine Windows integration
- `Win32LocalFile.h/.cpp` - Local file access
- `Win32LocalFileSystem.h/.cpp` - Local file system
- `Win32OSDisplay.cpp` - OS display integration
- `Code/GameEngineDevice/Source/Win32Device/Common/Win32BIGFile.cpp`
- `Code/GameEngineDevice/Source/Win32Device/Common/Win32BIGFileSystem.cpp`
- `Code/GameEngineDevice/Source/Win32Device/Common/Win32CDManager.cpp`
- `Code/GameEngineDevice/Source/Win32Device/Common/Win32GameEngine.cpp`
- `Code/GameEngineDevice/Source/Win32Device/Common/Win32LocalFile.cpp`
- `Code/GameEngineDevice/Source/Win32Device/Common/Win32LocalFileSystem.cpp`

## Input Systems

- `Win32DIKeyboard.h/.cpp` - DirectInput keyboard implementation
- `Win32DIMouse.h/.cpp` - DirectInput mouse implementation
- `Win32Mouse.h/.cpp` - Windows mouse handling
- `Code/GameEngineDevice/Source/Win32Device/GameClient/Win32DIKeyboard.cpp`
- `Code/GameEngineDevice/Source/Win32Device/GameClient/Win32DIMouse.cpp`
- `Code/GameEngineDevice/Source/Win32Device/GameClient/Win32Mouse.cpp`

## System Utilities

- `Compression.cpp` - Data compression utilities
- `MemoryInit.cpp` - Memory initialization
- `Trig.cpp` - Trigonometric functions
- `AudioDebugDisplay.cpp` - Audio debugging

## Base Types

- `BaseType.h` - Core type definitions
- `trig.h` - Trigonometric functions
- `profile.h` - Profiling system
- `benchmark.h` - Benchmarking utilities

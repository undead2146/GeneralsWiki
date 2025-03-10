# Autorun System

Documentation of the game's autorun and CD launcher functionality.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::


## Core System

- `Autorun/autorun.cpp/h` - Main autorun implementation
- `Autorun/ARGS.CPP/H` - Command line argument handling
- `Autorun/CallbackHook.h` - Callback hook system
- `Autorun/CDCNTRL.CPP/H` - CD-ROM control functionality
- `Autorun/EZGIMEX.cpp` - Image handling for autorun

## Localization

- `IGR.cpp/h` - International game resources
  - Localization resource management
  - Region-specific content handling

- `Locale_API.cpp/h` - Localization API
  - Language detection functions
  - Language switching utilities
  - Character set handling

- `locale.cpp/h` - Locale detection and handling
  - System locale detection
  - Language fallback logic

## UI Components

- `TTFont.cpp/h` - TrueType font rendering
  - Font loading and initialization
  - Text rendering to surfaces
  - Character metrics handling

## Additional Components

- `Autorun/POINT.h` - Point structure definition
- `Autorun/RECT.h` - Rectangle structure definition
- `Autorun/leanAndMeanAutorun.h` - Lightweight autorun implementation

## Helper Functions

- `DrawButton.cpp/h` - Button drawing functionality
- `GameText.cpp/h` - Game text rendering and management
- `GETCD.CPP/h` - CD detection utilities
- `ViewHTML.cpp/h` - HTML viewing component

# Autorun File System

The Autorun tool provides file system abstraction and management for CD/DVD autorun functionality.

## File System Management

- `WSYS_FileSystem.cpp/h` - Abstract file system interface
  - File access abstraction
  - Directory operations
  - File system traversal

- `WSYS_RAMFile.cpp/h` - Memory-based file implementation
  - In-memory file operations
  - RAM-based caching
  - Virtual file system support

- `WSYS_StdFile.cpp/h` - Standard file implementation
  - Disk-based file operations
  - File I/O with OS integration
  - Error handling for file operations

- `WSYS_StdFileSystem.cpp/h` - Standard file system implementation
  - Disk-based file system operations
  - Directory management
  - Platform-specific file operations


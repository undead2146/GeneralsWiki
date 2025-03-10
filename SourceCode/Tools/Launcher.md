# Game Launcher

The Launcher tool provides the startup interface for the game, handling configuration, updates, and game initialization.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Launcher

- `Protect.cpp/h` - Copy protection integration
  - License validation
  - DRM implementation
  - Piracy countermeasures

- `configfile.cpp/h` - Configuration file management
  - INI file parsing
  - Setting storage and retrieval
  - Default configuration handling

- `dialog.cpp/h` - User interface dialog system
  - Main launcher window implementation
  - Control creation and management
  - Event handling

- `findpatch.cpp/h` - Update detection system
  - Server querying for updates
  - Version comparison
  - Patch URL resolution

- `loadbmp.cpp/h` - Bitmap loading functionality
  - Image resource loading
  - UI graphic preparation
  - Format conversion

- `monod.cpp/h` - Monochrome debug output
  - Debug messaging system
  - Logging interface
  - Diagnostic utilities

- `patch.cpp/h` - Patching system
  - File update application
  - Differential patching
  - Update verification

- `process.cpp/h` - Process management
  - Game process launching
  - Process monitoring
  - Exit code handling

## Streaming System

- `streamer.cpp/h` - Data streaming implementation
  - Progressive asset loading
  - Background downloading
  - Installation management

## Debug Support

- `wdebug.cpp/h` - Debug utilities for launcher
  - Error logging
  - Diagnostic output
  - Troubleshooting tools

## Windows Integration

- `winblows.cpp/h` - Windows-specific functionality
  - OS integration
  - System information gathering
  - Registry management

## String Handling

- `wstring.cpp/h` - Wide string management
  - Unicode string processing
  - Localized text handling
  - String manipulation utilities

## Features

- Game configuration interface
- System requirements verification
- Update checking and downloading
- Installation validation and repair

## Technical Implementation

The Launcher provides:
- User-friendly game startup interface
- Configuration management
- Performance optimization settings
- Troubleshooting utilities

## Integration Points

- Installation system
- Patching mechanism
- Configuration storage
- DirectX setup and verification

## Debug Toolkit

- `Toolkit/Debug/DebugPrint.cpp/h` - Debug printing system
  - Formatted debug output
  - Log level filtering
  - Output redirection

## Support Toolkit

- `Toolkit/Support/StringConvert.cpp/h` - String conversion utilities
  - Unicode/ANSI conversion
  - String formatting
  - Text manipulation

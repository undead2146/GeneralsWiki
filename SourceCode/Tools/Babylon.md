# Babylon Localization Tool

The Babylon tool provides localization and internationalization support for game text and assets.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Application

- `Babylon.cpp/h` - Main application
  - Core functionality
  - Application entry point
  - System initialization

- `BabylonDlg.cpp/h` - Main dialog interface
  - User interface implementation
  - Interaction handling
  - Visual feedback

- `DlgProxy.cpp/h` - Dialog proxy implementation
  - Dialog management
  - Window message handling

## Excel Integration

- `XLStuff.cpp/h` - Excel handling utilities
  - Excel file access
  - Worksheet parsing
  - Data extraction

- `excel8.cpp/h` - Excel format support
  - Excel 8 format handling
  - Cell data processing
  - Formula evaluation

## Import/Export

- `expimp.cpp/h` - Import/export functionality
  - Data format conversion
  - Batch processing
  - Export templates

## File Operations

- `fileops.cpp/h` - File operation utilities
  - File I/O helpers
  - Path manipulation
  - Error handling

- `bin.cpp/h` - Binary file handling
  - Binary data processing
  - Byte order management
  - Data structure mapping

- `iff.cpp/h` - IFF file format support
  - Interchange File Format handling
  - Chunk-based data management
  - Data validation

- `loadsave.cpp/h` - Load/save functionality
  - Configuration persistence
  - Data serialization
  - Format conversion

## Features

- Text string extraction and management
- Translation database maintenance
- Batch processing of localization files
- Quality assurance tools for translations

## Technical Implementation

The Babylon tool provides:
- Unicode text support
- Context-aware translation
- Variable substitution in strings
- Audio localization support

## Integration Points

- Game text system
- User interface rendering
- Voice-over management
- Installer configuration

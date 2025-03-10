# CRC Differential Tool

A utility for comparing files based on CRC checksums and generating differential patches.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Components

- `expander.cpp/h` - Expansion algorithm implementation
  - Patch application system
  - Differential reconstruction
  - File validation

## Features

- Calculates CRC checksums for files
- Identifies differences between file versions
- Generates minimal patch files containing only changed data
- Verifies file integrity during patching operations
- Supports both binary and text file formats

## Integration

The CRCDiff tool works with the Launcher system to provide efficient patching capabilities for game updates.

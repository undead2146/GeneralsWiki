# Plugin Library

Support library for 3ds Max plugins used in the W3D toolchain.he W3D toolchain.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::


## Core Components

- `WWmatrix3.cpp/h` - Matrix math for plugins- `WWmatrix3.cpp/h` - Matrix math for plugins
  - 3x3 matrix operations
  - Transform helpers
  - Max-compatible matrix utilitiestilities

- `w3dquat.cpp/h` - Quaternion implementation- `w3dquat.cpp/h` - Quaternion implementation
  - Rotation representationsentation
  - Interpolation functions  - Interpolation functions
  - Conversion utilities

## Node Management

- `nodefilt.cpp/h` - Node filtering system- `nodefilt.cpp/h` - Node filtering system
  - Scene graph traversal 
  - Node selection by criteriateria
  - Filtering predicatess

- `nodelist.cpp/h` - Node list management- `nodelist.cpp/h` - Node list management
  - Scene node collectiontion
  - Hierarchy traversal  - Hierarchy traversal
  - Node relationship tracking





This library provides common functionality shared between multiple 3ds Max export plugins and utilities in the W3D toolchain.## Integration Points## Integration Points

This library provides common functionality shared between multiple 3ds Max export plugins and utilities in the W3D toolchain.

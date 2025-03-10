# Image Processing Tools

The C&C Generals: Zero Hour engine includes several tools for image and texture processing, compression, and optimization. These tools are essential for managing the game's visual assets efficiently.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Image Packer

The Image Packer tool combines multiple smaller textures into optimized texture atlases:

- `ImageDirectory.h` - Image directory management
  - Folder scanning
  - Image collection
  - Path handling

- `ImageInfo.cpp/h` - Image metadata and properties
  - Dimensions tracking
  - Format information
  - Alpha channel detection

- `TexturePage.cpp/h` - Texture atlas page
  - Packing algorithm
  - UV coordinate generation
  - Border handling

## Window Procedures

UI components for the Image Packer:

- `DirectorySelect.cpp` - Directory selection dialog
  - Folder browser
  - Path validation
  - Recent paths

- `ImageErrorProc.cpp` - Image error handling
  - Error visualization
  - Problem reporting
  - Resolution suggestions

- `ImagePackerProc.cpp` - Main packer interface
  - Control panel
  - Settings management
  - Process control

- `PageErrorProc.cpp` - Page error handling
  - Page-specific errors
  - Size constraint issues
  - Format compatibility

- `PreviewProc.cpp` - Texture preview
  - Zoom and pan
  - UV visualization
  - Packing efficiency display

## Texture Compression

- `textureCompress/textureCompress.cpp` - Texture compression utility
- `tgatodxt.cpp/h` - TGA to DXT conversion

## Image Formats

- `ddsfile.cpp/h` - DDS file format support
- `dib.cpp/h` - Device Independent Bitmap handling
- `pcx.cpp` - PCX image format support
- `bmp2d.cpp/h` - BMP format handling
- `bitmaphandler.cpp/h` - Bitmap loading and handling

## Texture Management

- `texture.cpp/h` - Texture base functionality
- `texturefile.cpp/h` - Texture file loading
- `texturefilter.cpp/h` - Texture filtering system
- `textureloader.cpp/h` - Texture loading system
- `texturethumbnail.cpp/h` - Texture thumbnail generation

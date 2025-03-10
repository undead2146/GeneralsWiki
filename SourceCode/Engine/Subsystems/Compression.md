# Compression System

The C&C Generals engine employs multiple compression algorithms for efficient storage and transmission of game assets and data.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## LZH Compression
- `Code/Libraries/Source/Compression/LZHCompress/NoxCompress.cpp/h` - NOX format compression implementation
  - Fast game asset compression algorithm
  - Optimized for terrain and texture data
  - Configurable compression ratio settings

## Huffman Compression
- `Tools/Compress/Compress.cpp` - Compression utility
- `huffabout.cpp` - Huffman algorithm information
- `huffcodex.h` - Huffman codec definitions
- `huffdecode.cpp` - Huffman decompression implementation
- `huffencode.cpp` - Huffman compression implementation

## B-Tree Compression
- `btreeabout.cpp` - B-tree algorithm information
- `btreecodex.h` - B-tree codec definitions
- `btreedecode.cpp` - B-tree decompression implementation
- `btreeencode.cpp` - B-tree compression implementation

## Additional Compression Systems

The engine also implements several other compression algorithms:

- `lzo.cpp/h` - LZO compression implementation
  - Ultra fast compression
  - Minimal memory footprint
  - Used for network packets and save games

- `lzopipe.cpp/h` - LZO pipe implementation
  - Streaming compression interface
  - Buffer management
  - Progress tracking

- `lzostraw.cpp/h` - LZO stream implementation
  - Stream-based compression
  - Progressive decompression

- `lcwpipe.cpp/h` - LCW pipe implementation
  - Legacy compression format support
  - Backwards compatibility

- `pkpipe.cpp/h` - PK compression pipe
  - Alternative compression algorithm
  - Size-optimized compression

- `pkstraw.cpp/h` - PK compression straw
  - Stream interface for PK compression

## Compression Framework
- `Compression.h` - Compression interface definitions
- `CompressionManager.cpp` - Compression system management
- `codex.h` - Codec interface definitions
- `gimex.h` - Image compression definitions

## Reference Implementation
- `refabout.cpp` - Reference implementation information
- `refcodex.h` - Reference codec definitions
- `refdecode.cpp` - Reference decompression implementation
- `refencode.cpp` - Reference compression implementation

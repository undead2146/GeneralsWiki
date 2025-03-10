# Profiling System

Documentation of performance profiling and measurement tools.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Profile Framework

- `Libraries/Source/profile/internal_cmd.h` - Internal command definitions
- `Libraries/Source/profile/internal_funclevel.h` - Function-level profiling internals
- `Libraries/Source/profile/internal_highlevel.h` - High-level profiling internals
- `Libraries/Source/profile/internal_result.h` - Result handling internals
- `Libraries/Source/profile/profile_cmd.cpp` - Profiling commands
- `Libraries/Source/profile/profile_doc.h` - Profiling documentation

## Profiling Implementations

- `Libraries/Source/profile/profile_funclevel.cpp/h` - Function-level profiling
- `Libraries/Source/profile/profile_highlevel.cpp/h` - High-level profiling
- `Libraries/Source/profile/profile_result.cpp/h` - Profiling results

## Integration

- `wwprofile.cpp/h` - Westwood profiling system
- `profile.h` - Core profile functionality
- `benchmark.h` - Benchmark utilities

## Performance Measurement

- `PerfTimer.cpp/h` - Performance timing utilities
- `PerfMetrics.h` - Performance metrics collection
- `profile_funclevel.cpp/h` - Function-level timings
- `profile_highlevel.cpp/h` - High-level system profiling

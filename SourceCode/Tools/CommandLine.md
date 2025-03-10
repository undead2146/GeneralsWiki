# Command Line Arguments

This page documents the command-line arguments available for C&C Generals: Zero Hour executables.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Game Client Arguments

| Argument | Description |
|----------|-------------|
| `-win` | Run in windowed mode |
| `-quickstart` | Skip intro videos |
| `-xres <value>` | Set horizontal resolution |
| `-yres <value>` | Set vertical resolution |
| `-nologo` | Skip logo videos |
| `-noshell` | Launch directly into the game |
| `-novideo` | Disable video playback |

## Developer Arguments

| Argument | Description |
|----------|-------------|
| `-developermode` | Enable developer mode |
| `-nosound` | Disable sound |
| `-showsoftwareCursor` | Force software mouse cursor |
| `-fps` | Display frames per second counter |
| `-ignorebuildversion` | Ignore build version checks |
| `-debug` | Enable debug output |
| `-profile` | Enable profiling |

## Network Arguments

| Argument | Description |
|----------|-------------|
| `-nonet` | Disable networking |
| `-pingprofile` | Show ping information |
| `-forceip <address>` | Force network interface |
| `-cshost <hostname>` | Connect to specified host |

## Map Related Arguments

| Argument | Description |
|----------|-------------|
| `-level <mapname>` | Load specified map |
| `-savegame <filename>` | Load specified saved game |
| `-loadreplay <filename>` | Load specified replay file |
| `-autorecord` | Automatically record game |

## Rendering Arguments

| Argument | Description |
|----------|-------------|
| `-renderer <type>` | Select renderer type |
| `-novsync` | Disable vertical sync |
| `-notexturecompression` | Disable texture compression |
| `-texturebits <value>` | Set texture bit depth |
| `-nomipmap` | Disable mipmapping |
| `-d3ddebug` | Enable DirectX debug mode |

## Undocumented/Internal Arguments

Various undocumented arguments exist for internal testing and development:

| Argument | Description |
|----------|-------------|
| `-benchmode` | Run in benchmark mode |
| `-aitrace` | Enable AI tracing |
| `-ailog` | Enable AI logging |
| `-memtrace` | Enable memory usage tracking |

## Examples

```
# Launch in windowed mode at 1280x720
Generals.exe -win -xres 1280 -yres 720

# Launch with developer mode and FPS counter
Generals.exe -developermode -fps

# Launch directly into a specific map
Generals.exe -noshell -level Alpine Assault
```

## Notes

- Some arguments require quotation marks if they contain spaces
- Arguments are case-insensitive
- Some arguments may not function in the retail release
- Command-line arguments can be combined with configuration settings in `Options.ini`

## References

- Internal development documentation
- Command-line argument parser in `CommandLine.cpp`
- Engine initialization in `GameEngine.cpp`

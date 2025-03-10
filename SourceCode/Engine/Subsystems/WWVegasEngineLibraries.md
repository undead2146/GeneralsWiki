# Vegas Engine Libraries

Core libraries from the Westwood Vegas engine that power the C&C Generals renderer and foundation systems.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## WW3D2 - 3D Engine Core
- `assetmgr.cpp/h` - Asset management system
- `assetstatus.cpp/h` - Asset loading status tracking
- `bitmaphandler.cpp/h` - Bitmap loading and handling
- `bmp2d.cpp/h` - 2D bitmap implementation
- `boxrobj.cpp/h` - Bounding box rendering objects

### Core 3D Engine
- `ww3d.cpp/h` - Core 3D engine functionality
- `ww3dformat.cpp/h` - 3D data format handling
- `ww3dids.h` - 3D engine identifiers
- `ww3dtrig.h` - Trigonometric utilities

### Rendering Objects
- `rendobj.cpp/h` - Base render object 
- `nullrobj.cpp/h` - Null render object
- `boxrobj.cpp/h` - Bounding box render object
- `sphereobj.cpp/h` - Sphere render object
- `ringobj.cpp/h` - Ring render object
- `soundrobj.cpp/h` - Sound render object

### Mesh System
- `mesh.cpp/h` - Base mesh functionality
- `meshbuild.cpp/h` - Mesh building system
- `meshdam.cpp/h` - Mesh damage system
- `meshgeometry.cpp/h` - Mesh geometry handling
- `meshmatdesc.cpp/h` - Mesh material descriptions
- `meshmdl.cpp/h` - Mesh model system
- `meshmdlio.cpp` - Mesh I/O operations

### Animation System
- `hanim.cpp/h` - Hierarchical animation
- `hanimmgr.cpp/h` - Animation manager
- `hcanim.cpp/h` - HC animation system
- `hmorphanim.cpp/h` - Morph animation
- `hrawanim.cpp/h` - Raw animation data
- `animobj.cpp/h` - Animated objects
- `prim_anim.cpp/h` - Primitive animation

### Texture System
- `texture.cpp/h` - Base texture functionality
- `texturefile.cpp/h` - Texture file loading
- `texturefilter.cpp/h` - Texture filtering
- `textureloader.cpp/h` - Texture loading system
- `texturethumbnail.cpp/h` - Texture thumbnails
- `texfcach.cpp/h` - Texture file cache
- `texproject.cpp/h` - Texture projection

### Scene Management
- `scene.cpp/h` - Scene management
- `visrasterizer.cpp/h` - Visibility rasterization
- `sortingrenderer.cpp/h` - Sorting renderer
- `shader.cpp/h` - Shader management
- `light.cpp/h` - Lighting system
- `lightenvironment.cpp/h` - Light environment

### Special Effects
- `decalsys.cpp/h` - Decal system
- `decalmsh.cpp/h` - Decal mesh handling
- `part_buf.cpp/h` - Particle buffer
- `part_emt.cpp/h` - Particle emitter
- `part_ldr.cpp/h` - Particle loader
- `streak.cpp/h` - Streak effects
- `streakRender.cpp/h` - Streak rendering
- `shattersystem.cpp/h` - Shattering effects

### DirectX Integration
- `dx8caps.cpp/h` - DirectX 8 capabilities
- `dx8fvf.cpp/h` - Flexible vertex format
- `dx8rendererdebugger.cpp/h` - Renderer debugging
- `dx8webbrowser.cpp/h` - Web browser integration

### Additional Core Components
- `aabtree.cpp/h` - Axis-aligned bounding box tree
- `aabtreebuilder.cpp/h` - AABB tree construction
- `agg_def.cpp/h` - Aggregate definition
- `animatedsoundmgr.cpp/h` - Animated sound manager
- `bw_render.cpp/h` - B&W rendering
- `bwrender.cpp/h` - BW renderer implementation
- `camera.cpp/h` - Camera system
- `classid.h` - Class identifier definitions
- `collect.cpp/h` - Collection utilities
- `colorspace.h` - Color space conversion
- `coltest.cpp/h` - Collision testing
- `coltype.h` - Collision type definitions
- `composite.cpp/h` - Composite object system
- `dazzle.cpp/h` - Dazzle effect system
- `ddsfile.cpp/h` - DDS texture file handling
- `distlod.cpp/h` - Distance LOD system
- `dllist.h` - Double linked list implementation
- `dynamesh.cpp/h` - Dynamic mesh system
- `font3d.cpp/h` - 3D font rendering
- `formconv.cpp/h` - Format conversion
- `framgrab.h` - Frame grabbing
- `FramGrab.cpp` - Frame grab implementation
- `hlod.cpp/h` - Hierarchical LOD system
- `hmdldef.cpp` - Hierarchical model definition
- `htree.cpp/h` - Hierarchical tree
- `htreemgr.cpp/h` - Hierarchical tree manager
- `intersec.cpp/h` - Intersection testing
- `inttest.h` - Intersection test utilities
- `layer.cpp/h` - Layer system
- `line3d.cpp/h` - 3D line rendering
- `linegrp.cpp/h` - Line group
- `mapper.cpp/h` - Texture mapping
- `matinfo.cpp/h` - Material information
- `matpass.cpp/h` - Material pass
- `matrixmapper.cpp/h` - Matrix based mapping
- `meshmdlio.cpp` - Mesh I/O operations
- `metalmap.cpp/h` - Metal mapping
- `missingtexture.cpp/h` - Missing texture handling
- `motchan.cpp/h` - Motion channel
- `pivot.cpp/h` - Pivot point system
- `pointgr.cpp/h` - Point group
- `polyinfo.cpp/h` - Polygon information
- `pot.cpp/h` - Power of two utilities
- `predlod.cpp/h` - Predictive LOD
- `projector.cpp/h` - Projection system
- `proto.cpp/h` - Prototype system
- `proxy.h` - Proxy object definition
- `rddesc.h` - Render description
- `render2d.cpp/h` - 2D rendering
- `render2dsentence.cpp/h` - 2D text sentences
- `renderobjectrecycler.cpp/h` - Render object recycling
- `rinfo.cpp/h` - Render information
- `robjlist.h` - Render object list
- `segline.cpp/h` - Segmented line
- `seglinerenderer.cpp/h` - Segmented line renderer
- `shdlib.h` - Shader library interface
- `snapPts.h` - Snapping points
- `snappts.cpp` - Snapping points implementation
- `soundlibrarybridge.h` - Sound library integration
- `sr_util.cpp/h` - Sorting renderer utilities
- `static_sort_list.cpp/h` - Static sorting list
- `stripoptimizer.cpp/h` - Strip optimization
- `surfaceclass.cpp/h` - Surface classification
- `textdraw.cpp/h` - Text drawing
- `txt.cpp/h` - Text handling
- `txt2d.cpp/h` - 2D text system
- `vertmaterial.cpp/h` - Vertex material
- `w3d_dep.cpp/h` - W3D dependencies
- `w3d_file.h` - W3D file format
- `w3d_obsolete.h` - Legacy W3D definitions
- `w3d_util.cpp/h` - W3D utilities
- `w3derr.h` - W3D error handling
- `w3dexclusionlist.cpp/h` - W3D exclusion list

## WWLib - Core Functionality
- `TagBlock.h` - Tag-based data structures
- `WWCOMUtil.cpp/h` - COM utility functions
- `_convert.cpp/h` - Data conversion utilities
- `_mono.cpp/h` - Monochrome display support
- `_timer.cpp/h` - Timing functionality
- `_xmouse.h` - Mouse input handling
- `always.h` - Always-included common definitions
- `argv.cpp/h` - Command line argument handling

### Memory Management
- `FastAllocator.cpp/h` - Fast memory allocation
- `mempool.h` - Memory pooling
- `sharebuf.h` - Shared buffer system

### String Utilities
- `widestring.cpp/h` - Wide string handling
- `wwstring.cpp/h` - String utility functions
- `trim.cpp/h` - String trimming functions
- `nstrdup.cpp/h` - String duplication

### File System
- `bfiofile.cpp/h` - Buffered file I/O
- `bufffile.cpp/h` - Buffered file operations
- `rawfile.cpp` - Raw file handling
- `rcfile.cpp/h` - Resource file handling
- `textfile.cpp/h` - Text file operations
- `mixfile.cpp/h` - MIX file format support

### Threading & Synchronization
- `critsection.cpp/h` - Critical section implementation
- `mutex.cpp/h` - Mutex synchronization
- `thread.cpp/h` - Threading functionality
- `msgloop.cpp/h` - Message loop handling

### Compression Systems
- `lcw.cpp` - LCW compression
- `lcwpipe.cpp/h` - LCW pipe implementation
- `lzo.cpp/h` - LZO compression
- `lzo1x_c.cpp` - LZO1X compression
- `lzo1x_d.cpp` - LZO1X decompression
- `lzopipe.cpp/h` - LZO pipe implementation
- `lzostraw.cpp/h` - LZO stream implementation

### Cryptography
- `blowfish.cpp/h` - Blowfish encryption
- `blowpipe.cpp/h` - Blowfish pipe
- `blwstraw.cpp/h` - Blowfish stream
- `base64.cpp/h` - Base64 encoding/decoding
- `b64pipe.cpp/h` - Base64 pipe
- `b64straw.cpp/h` - Base64 stream
- `md5.cpp/h` - MD5 hashing
- `sha.cpp/h` - SHA hashing
- `rc4.cpp/h` - RC4 encryption

### Graphics Utilities
- `blit.cpp/h` - Blitting operations
- `dib.cpp/h` - Device-independent bitmap
- `draw.cpp/h` - Drawing functions
- `dsurface.cpp/h` - Drawing surface
- `surface.cpp` - Surface handling
- `xsurface.cpp/h` - Extended surface

### Data Structures
- `hash.cpp/h` - Hash table implementation
- `hashtab.h` - Hash table definitions
- `hashtemplate.h` - Hash template
- `binheap.h` - Binary heap implementation
- `multilist.cpp/h` - Multi-list implementation
- `ntree.h` - N-ary tree implementation
- `simplevec.h` - Simple vector

### Time & Random
- `systimer.cpp/h` - System timer
- `stimer.cpp/h` - Simple timer
- `random.cpp` - Random number generation
- `srandom.cpp/h` - Seeded randomization
- `rndstrng.cpp/h` - Random string generation

### Additional Components
- `Convert.h` - Type conversion utilities
- `Except.cpp/h` - Exception handling
- `LaunchWeb.cpp/h` - Web browser launching
- `Signaler.h` - Signal system
- `bittype.h` - Bit type definitions
- `blitblit.h` - Blit operations
- `blitter.h` - Blitter implementation
- `bool.h` - Boolean definitions
- `borlandc.h` - Borland C compatibility
- `bound.h` - Boundary handling
- `bsurface.h` - Buffered surface
- `buff.cpp` - Buffer implementation
- `chunkio.cpp/h` - Chunk-based I/O
- `convert.cpp` - Type conversion implementation
- `cpudetect.cpp/h` - CPU detection utilities
- `crandom.h` - Cryptographic random
- `crcpipe.cpp/h` - CRC pipe implementation
- `crcstraw.cpp/h` - CRC straw implementation
- `cstraw.cpp/h` - Custom straw implementation
- `data.cpp/h` - Data handling
- `ddraw.cpp` - DirectDraw wrapper
- `ffactory.cpp/h` - File factory
- `fixed.cpp/h` - Fixed-point math
- `gcd_lcm.cpp/h` - GCD/LCM calculations
- `hashcalc.h` - Hash calculation
- `hsv.cpp/h` - HSV color space
- `incdec.h` - Increment/decrement utilities
- `inisup.h` - INI file support
- `int.cpp` - Integer utilities
- `iostruct.h` - I/O structure definitions
- `jshell.cpp` - Shell integration
- `load.cpp` - Data loading utilities
- `misc.h` - Miscellaneous utilities
- `mmsys.h` - Multimedia system definitions
- `mono.cpp` - Monochrome display support
- `mpmath.cpp` - Multi-precision math
- `mpu.cpp` - Math processing unit
- `noinit.h` - No initialization flag
- `notifier.h` - Notification system
- `obscure.cpp/h` - Obscuring functionality
- `pcx.cpp` - PCX image format support
- `pipe.cpp` - Pipe implementation
- `pk.cpp` - PK compression implementation
- `pkpipe.cpp/h` - PK compression pipe
- `pkstraw.cpp/h` - PK compression straw
- `readline.cpp/h` - Line reading utilities
- `realcrc.cpp/h` - CRC calculation
- `ref_ptr.h` - Reference counted pointer
- `refcount.cpp/h` - Reference counting
- `regexpr.cpp/h` - Regular expression support
- `rle.cpp` - Run-length encoding
- `rlerle.h` - RLE definitions
- `rndstraw.cpp` - Random straw implementation
- `rng.h` - Random number generator
- `rsacrypt.h` - RSA cryptography
- `sampler.cpp/h` - Sampling utilities
- `search.h` - Search algorithms
- `shapeset.h` - Shape set definition
- `shapipe.cpp/h` - SHA pipe implementation
- `shastraw.cpp/h` - SHA straw implementation
- `slnode.cpp` - Singly-linked node
- `smartptr.h` - Smart pointer implementation
- `stl.h` - STL compatibility
- `straw.cpp` - Straw base implementation
- `strtok_r.cpp/h` - Reentrant string tokenizer
- `surfrect.h` - Surface rectangle
- `swap.h` - Swap utilities
- `tgatodxt.cpp/h` - TGA to DXT conversion
- `timer.h` - Timer interface
- `trackwin.h` - Window tracking
- `trackxy.h` - XY coordinate tracking
- `trect.h` - Rectangle template
- `uarray.h` - Uninitialized array
- `vector.cpp` - Vector implementation
- `verchk.cpp/h` - Version checking
- `win.cpp/h` - Windows API wrapper
- `wwfont.cpp/h` - Westwood font system
- `wwmouse.cpp/h` - Mouse handling
- `xmouse.h` - Extended mouse handling
- `xpipe.cpp` - Extended pipe implementation
- `xstraw.cpp` - Extended straw implementation

## WWMath - Math Library
- `colmath.cpp/h` - Collision math base functionality
- `colmathaabox.cpp/h` - Axis-aligned bounding box collision
- `colmathaabtri.cpp` - AABB-triangle collision detection
- `colmathfrustum.cpp/h` - View frustum calculations
- `colmathinlines.h` - Inlined collision math functions
- `colmathline.cpp/h` - Line collision detection
- `colmathobbobb.cpp` - Oriented bounding box collision
- `colmathobbox.cpp` - Oriented bounding box implementation

### Vectors & Matrices
- `vector2.h` - 2D vector
- `vector2i.h` - Integer 2D vector
- `vector3.h` - 3D vector
- `vector4.h` - 4D vector
- `Vector3i.h` - Integer 3D vector
- `matrix3.cpp/h` - 3x3 matrix
- `matrix3d.cpp/h` - 3D transformation matrix
- `matrix4.cpp/h` - 4x4 matrix

### Geometry Primitives
- `aabox.cpp/h` - Axis-aligned box
- `obbox.cpp/h` - Oriented bounding box
- `sphere.h` - Sphere geometry
- `tri.cpp/h` - Triangle geometry
- `plane.h` - Plane geometry
- `lineseg.cpp/h` - Line segment

### Collision Systems
- `aabtreecull.cpp/h` - AABBox tree culling
- `colmathobbtri.cpp` - OBB-triangle collision
- `colmathplane.cpp/h` - Plane collision
- `colmathsphere.cpp` - Sphere collision
- `frustum.cpp/h` - View frustum

### Culling Systems
- `cullsys.cpp/h` - Visibility culling
- `gridcull.cpp/h` - Grid-based culling
- `aabtreecull.cpp/h` - AABTree culling

### Curves & Splines
- `curve.cpp/h` - Base curve functionality
- `cardinalspline.cpp/h` - Cardinal spline
- `catmullromspline.cpp/h` - Catmull-Rom spline
- `hermitespline.cpp/h` - Hermite spline
- `tcbspline.cpp/h` - TCB spline
- `vehiclecurve.cpp/h` - Vehicle curve system

### Math Utilities
- `euler.cpp/h` - Euler angle utilities
- `quat.cpp/h` - Quaternion implementation
- `vp.cpp/h` - View projection utilities
- `lookuptable.cpp/h` - Math lookup tables
- `wwmath.cpp/h` - Core math functions
- `v3_rnd.cpp/h` - Random vector generation

### Additional Components
- `aaplane.h` - Axis-aligned plane
- `castres.h` - Cast result definitions
- `colmathplane.cpp/h` - Plane collision math
- `culltype.h` - Culling type definitions
- `normalcone.h` - Normal cone implementation
- `ode.cpp/h` - Ordinary differential equation solver
- `wwmathids.h` - Math system identifiers

## WWAudio - Audio System
- `LogicalListener.cpp/h` - Audio listener implementation
- `LogicalSound.cpp/h` - Logical sound representation
- `PriorityVector.h` - Sound priority management
- `Sound3D.cpp/h` - 3D positional audio
- `SoundBuffer.cpp/h` - Audio buffer management
- `SoundChunkIDs.h` - Sound data chunk identifiers
- `SoundCullObj.h` - Sound culling object
- `SoundPseudo3D.cpp/h` - Pseudo-3D sound approximation

### Core Audio
- `WWAudio.cpp/h` - Main audio system
- `Listener.cpp/h` - Audio listener
- `AudibleSound.cpp/h` - Audible sound definition
- `FilteredSound.cpp/h` - Sound filtering

### Audio Handles
- `soundhandle.cpp/h` - Basic sound handle
- `sound2dhandle.cpp/h` - 2D sound handle
- `sound3dhandle.cpp/h` - 3D sound handle
- `soundstreamhandle.cpp/h` - Streaming sound handle
- `listenerhandle.cpp/h` - Listener handle

### Scene Integration
- `SoundScene.cpp/h` - Sound scene manager
- `SoundSceneObj.cpp/h` - Sound scene object
- `AABTreeSoundCullClass.h` - Sound culling

### Utility Functions
- `Threads.cpp/h` - Audio threading
- `Utils.cpp/h` - Audio utility functions
- `AudioEvents.h` - Audio event definitions
- `AudioSaveLoad.cpp/h` - Audio state saving/loading

## WWSave - Save/Load Functionality
- `parameter.cpp/h` - Parameter handling for save/load
- `parameterlist.h` - Parameter list management
- `parametertypes.h` - Parameter type definitions
- `persist.h` - Object persistence interface
- `persistfactory.cpp/h` - Factory for persistent objects
- `pointerremap.cpp/h` - Pointer remapping for serialization
- `postloadable.h` - Post-load initialization interface
- `saveload.cpp/h` - Core save/load functionality
- `saveloadids.h` - IDs for saved objects
- `saveloadstatus.cpp/h` - Save/load status tracking

### Definition System
- `definition.cpp/h` - Object definition
- `definitionclassids.h` - Class identifiers
- `definitionfactory.cpp/h` - Definition factory
- `definitionfactorymgr.cpp/h` - Factory manager
- `definitionmgr.cpp/h` - Definition manager

### Parameter System
- `simpleparameter.h` - Simple parameter implementation
- `editable.h` - Editable properties

### Subsystem
- `saveloadsubsystem.cpp/h` - Save/load subsystem
- `simpledefinitionfactory.h` - Simple factory implementation
- `twiddler.cpp/h` - Property manipulation utility
- `wwsaveload.cpp/h` - Core save/load functionality

## WWShade - Shader System
- `shd7bumpspec_constants.h` - Bump mapping shader constants
- `shd8bumpdiff.cpp/h` - Bump mapping diffuse shaders
- `shd8bumpdiff_constants.h` - Constants for bump diffuse shaders
- `shd8bumpspec.cpp/h` - Bump mapping specular shaders
- `shd8bumpspec_constants.h` - Constants for bump specular shaders
- `shdbumpdiff.cpp/h` - Legacy bump diffuse implementation
- `shdbumpspec.cpp` - Legacy bump specular implementation
- `shdclassids.h` - Shader class identifiers
- `shdcubemap.cpp/h` - Cubemap shader implementation
- `shddef.cpp/h` - Shader definitions

### DirectX 6 Shaders
- `shd6bumpdiff.cpp/h` - DX6 bump mapping diffuse
- `shd6bumpdiff_constants.h` - DX6 bump diffuse constants
- `shd6bumpspec.cpp/h` - DX6 bump mapping specular
- `shd6bumpspec_constants.h` - DX6 bump specular constants

### DirectX 7 Shaders
- `shd7bumpdiff.cpp/h` - DX7 bump mapping diffuse
- `shd7bumpdiff_constants.h` - DX7 bump diffuse constants
- `shd7bumpspec.cpp/h` - DX7 bump mapping specular
- `shd7bumpspec_constants.h` - DX7 bump specular constants

### Hardware Shaders
- `shdhwshader.cpp/h` - Hardware shader implementation
- `shdhw_constants.h` - Hardware shader constants

### Shader Management
- `shddeffactory.cpp/h` - Shader definition factory
- `shddefmanager.cpp/h` - Shader definition manager
- `shdinterface.cpp/h` - Shader interface
- `shdlegacyw3d.cpp/h` - Legacy W3D shader support
- `shdloader.cpp/h` - Shader loading system

### Shader Components
- `shdmesh.cpp/h` - Shader mesh integration
- `shdsubmesh.cpp/h` - Shader submesh handling
- `shdglossmask.cpp/h` - Gloss mask implementation
- `shdrenderer.cpp/h` - Shader rendering system
- `shdsimple.cpp/h` - Simple shader implementation

## WWDebug - Debugging Tools
- `debug_io.h` - Debug I/O interface
- `debug_io_con.cpp` - Console debug output
- `debug_io_flat.cpp` - Flat file debug output
- `debug_io_net.cpp` - Network debug output
- `debug_io_ods.cpp` - OutputDebugString implementation
- `debug_macro.h` - Debug macros
- `debug_purecall.cpp` - Pure virtual call handler
- `debug_stack.cpp/h` - Stack tracing functionality
- `internal.h` - Internal debug definitions
- `internal_except.h` - Exception handling
- `internal_io.h` - Internal I/O functionality
- `profile_result.cpp/h` - Performance profiling results

### Memory Tracking
- `wwmemlog.cpp/h` - Memory logging
- `wwhack.h` - Memory hacking utilities

### Profiling
- `wwprofile.cpp/h` - Performance profiling

### Debug Output
- `wwdebug.cpp/h` - Debug output system

## WWDownload - Network Download
- `Download.cpp/h` - Core download functionality
- `DownloadDebug.h` - Download debugging
- `downloaddefs.h` - Download definitions
- `ftp.h` - FTP protocol support
- `ftpdefs.h` - FTP protocol definitions
- `urlBuilder.cpp/h` - URL construction

## WWUtil - Utility Functions
- `WSYS_File.cpp` - File system operations
- `WSYS_FileSystem.cpp/h` - File system interface
- `WSYS_RAMFile.cpp/h` - In-memory file implementation
- `WSYS_StdFile.cpp/h` - Standard file implementation
- `WSYS_StdFileSystem.cpp/h` - Standard file system
- `WSYS_file.h` - File interface definitions
- `Wnd_File.h` - Window file handling
- `Wnd_file.cpp` - Window file implementation

- `mathutil.cpp/h` - Math utilities
- `miscutil.cpp/h` - Miscellaneous utilities

## Additional Debug Components
- `debug_cmd.cpp/h` - Debug command system
- `debug_debug.cpp/h` - Debug output functionality
- `_pch.cpp/h` - Precompiled header

## Profile System
- `profile_funclevel.cpp/h` - Function-level profiling
- `profile_highlevel.cpp/h` - High-level profiling


# Network Tools

The C&C Generals: Zero Hour engine uses several network utilities and systems for multiplayer connectivity, matchmaking, and data transfer. These tools provide the foundation for the game's online functionality.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::


## Mangler Networking System

Core network protocol implementation:

- `field.cpp/h` - Data field handling
  - Binary data field encoding
  - Type-safe network data
  - Field validation

- `packet.cpp/h` - Network packet implementation
  - Packet construction
  - Header management
  - Payload encoding/decoding

- `tcp.cpp/h` - TCP protocol implementation
  - Connection management
  - Stream handling
  - Reliable data transfer

## Thread Management

Thread support for networking operations:

- `critsec.cpp/h` - Critical section implementation
  - Thread synchronization
  - Mutual exclusion
  - Deadlock prevention

- `sem4.cpp/h` - Semaphore implementation
  - Resource counting
  - Thread signaling
  - Concurrency control

- `syslogd.cpp/h` - System log debugging
  - Network diagnostic logging
  - Error reporting
  - Operation tracing

- `threadfac.cpp/h` - Thread factory
  - Thread creation and management
  - Worker thread pooling
  - Thread lifecycle control

- `timezone.cpp/h` - Timezone utilities
  - Time synchronization
  - Local time conversion
  - Network time protocols

- `wtime.cpp/h` - Time management
  - High-resolution timing
  - Network timestamp handling
  - Timeout management

- `xtime.cpp/h` - Extended time functions
  - Time formatting
  - Duration calculation
  - Schedule management

## Matchmaking System

Online matchmaking and player connection:

- `generals.cpp/h` - Generals-specific matchmaking
  - Game session matching
  - Player skill balancing
  - Map selection

- `matcher.cpp/h` - Core matcher implementation
  - Player matching algorithms
  - Session creation
  - Team balancing

- `mydebug.cpp/h` - Matchmaking debugging
  - Diagnostic utilities
  - Error logging
  - Test facilities

- `rand.cpp/h` - Random number generation
  - Secure randomization
  - Consistent seeding
  - Distribution control

## Westwood Online

- `wolSetup.cpp/h` - Westwood Online setup utilities
  - Account configuration
  - Service connection
  - Authentication handling

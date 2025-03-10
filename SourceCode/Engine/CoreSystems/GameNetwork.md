# GameNetwork System

Multiplayer networking system handling connections, game synchronization, and online services.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Network Components

- `Code/GameEngine/Include/GameNetwork/Connection.h` - Network connection handling
- `Code/GameEngine/Include/GameNetwork/ConnectionManager.h` - Multi-connection controller
- `Code/GameEngine/Include/GameNetwork/DisconnectManager.h` - Connection state management
- `Code/GameEngine/Include/GameNetwork/NetworkInterface.h` - Network abstraction layer
- `Code/GameEngine/Include/GameNetwork/NetworkDefs.h` - Protocol specification
- `Code/GameEngine/Include/GameNetwork/IPEnumeration.h` - Network adapter enumeration
- `Code/GameEngine/Source/GameNetwork/Connection.cpp`
- `Code/GameEngine/Source/GameNetwork/ConnectionManager.cpp`
- `Code/GameEngine/Source/GameNetwork/DisconnectManager.cpp`
- `NetPacket.h/.cpp` - Network packet definitions
- `NetMessageStream.cpp` - Message streaming system
- `Network.cpp` - Core networking functionality
- `NetworkUtil.cpp` - Network utility functions
- `Transport.h/.cpp` - Data transport layer
- `User.h/.cpp` - User identification and management
- `udp.h/.cpp` - UDP protocol implementation
- `RankPointValue.h` - Player ranking point system
- `networkutil.h` - Network utility declarations
- `Code/GameEngine/Include/Precompiled/PreRTS.h`
- `Code/GameEngine/Source/Precompiled/PreRTS.cpp`

## Synchronization System

- `Code/GameEngine/Include/GameNetwork/FrameData.h` - Game state synchronization
- `Code/GameEngine/Include/GameNetwork/FrameDataManager.h` - Synchronization management
- `Code/GameEngine/Include/GameNetwork/FrameMetrics.h` - Network performance monitoring
- `Code/GameEngine/Source/GameNetwork/FrameData.cpp`
- `Code/GameEngine/Source/GameNetwork/FrameDataManager.cpp`
- `Code/GameEngine/Source/GameNetwork/FrameMetrics.cpp`

## Command System

- `Code/GameEngine/Include/GameNetwork/NetCommandList.h` - Command collection
- `Code/GameEngine/Include/GameNetwork/NetCommandMsg.h` - Network command messages
- `Code/GameEngine/Include/GameNetwork/NetCommandRef.h` - Command references
- `Code/GameEngine/Include/GameNetwork/NetCommandWrapperList.h` - Command wrappers
- `Code/GameEngine/Source/GameNetwork/NetCommandList.cpp`
- `Code/GameEngine/Source/GameNetwork/NetCommandMsg.cpp`
- `Code/GameEngine/Source/GameNetwork/NetCommandRef.cpp`

## GameSpy Integration

- `Code/GameEngine/Include/GameNetwork/GameSpyChat.h` - Chat functionality
- `Code/GameEngine/Include/GameNetwork/GameSpyGameInfo.h` - Game session information
- `Code/GameEngine/Include/GameNetwork/GameSpyGP.h` - Player presence system
- `Code/GameEngine/Include/GameNetwork/GameSpyOverlay.h` - GameSpy overlay UI
- `Code/GameEngine/Include/GameNetwork/GameSpyThread.h` - Threaded service operations
- `Code/GameEngine/Source/GameNetwork/GameSpyChat.cpp`
- `Code/GameEngine/Source/GameNetwork/GameSpyGameInfo.cpp`
- `Code/GameEngine/Source/GameNetwork/GameSpyGP.cpp`
- `Code/GameEngine/Source/GameNetwork/GameSpyOverlay.cpp`
- `Chat.cpp` - Chat functionality
- `GSConfig.cpp` - GameSpy configuration
- `LadderDefs.cpp` - Ladder/ranking system
- `LobbyUtils.cpp` - Lobby system utilities
- `MainMenuUtils.cpp` - Main menu GameSpy integration
- `PeerDefs.cpp` - Peer-to-peer networking
- `StagingRoomGameInfo.cpp` - Game setup information
- `PreRTS.h/.cpp` - Networking initialization

## GameSpy Thread System

- `Code/GameEngine/Include/GameNetwork/GameSpy/BuddyThread.h` - Friend system thread
- `Code/GameEngine/Include/GameNetwork/GameSpy/GameResultsThread.h` - Game results reporting
- `Code/GameEngine/Include/GameNetwork/GameSpy/PeerThread.h` - Peer connection thread
- `Code/GameEngine/Include/GameNetwork/GameSpy/PingThread.h` - Connection pinging
- `Code/GameEngine/Include/GameNetwork/GameSpy/ThreadUtils.h` - Threading utilities

## NAT Traversal & Firewall

- `Code/GameEngine/Include/GameNetwork/NAT.h` - NAT traversal system
- `Code/GameEngine/Include/GameNetwork/FirewallHelper.h` - Firewall handling
- `Code/GameEngine/Source/GameNetwork/NAT.cpp`
- `Code/GameEngine/Source/GameNetwork/FirewallHelper.cpp`

## LAN Support

- `Code/GameEngine/Include/GameNetwork/LANAPI.h` - Local area network support
- `Code/GameEngine/Include/GameNetwork/LANAPICallbacks.h` - LAN callbacks
- `Code/GameEngine/Include/GameNetwork/LANGameInfo.h` - LAN game information
- `Code/GameEngine/Include/GameNetwork/LANPlayer.h` - LAN player information
- `Code/GameEngine/Source/GameNetwork/LANAPI.cpp`
- `Code/GameEngine/Source/GameNetwork/LANAPICallbacks.cpp`
- `Code/GameEngine/Source/GameNetwork/LANAPIhandlers.cpp`
- `Code/GameEngine/Source/GameNetwork/LANGameInfo.cpp`

## File Transfer

- `Code/GameEngine/Include/GameNetwork/FileTransfer.h` - File transfer system
- `Code/GameEngine/Include/GameNetwork/DownloadManager.h` - Download management
- `Code/GameEngine/Source/GameNetwork/FileTransfer.cpp`
- `Code/GameEngine/Source/GameNetwork/DownloadManager.cpp`

## User Interface Integration

- `Code/GameEngine/Include/GameNetwork/GUIUtil.h` - UI utility functions
- `Code/GameEngine/Source/GameNetwork/GUIUtil.cpp`

## Game Communication

- `Code/GameEngine/Include/GameNetwork/GameInfo.h` - Game information
- `Code/GameEngine/Include/GameNetwork/GameMessageParser.h` - Message parsing
- `Code/GameEngine/Source/GameNetwork/GameInfo.cpp`
- `Code/GameEngine/Source/GameNetwork/GameMessageParser.cpp`

## Web Browser

- `FEBDispatch.h` - Front-end browser dispatch
- `WebBrowser.h/.cpp` - In-game web browser
- `W3DWebBrowser.cpp` - 3D web browser integration
- `Code/GameEngine/Include/GameNetwork/WOLBrowser/WebBrowser.h`
- `Code/GameEngine/Source/GameNetwork/WOLBrowser/WebBrowser.cpp`

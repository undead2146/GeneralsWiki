# User Interface Systems

Documentation of the UI framework, menus, and display components.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Menu System

Core menu implementations:

- `MainMenu.cpp` - Main menu implementation
- `MapSelectMenu.cpp` - Map selection interface
- `NetworkDirectConnect.cpp` - Direct connection networking UI
- `OptionsMenu.cpp` - Game options menu
- `PopupCommunicator.cpp` - In-game communication system
- `PopupHostGame.cpp` - Host game dialog
- `PopupJoinGame.cpp` - Join game interface
- `PopupLadderSelect.cpp` - Ladder selection menu
- `PopupPlayerInfo.cpp` - Player information display
- `PopupReplay.cpp` - Replay system interface
- `PopupSaveLoad.cpp` - Save/load game menu
- `QuitMenu.cpp` - Quit confirmation menu
- `ReplayMenu.cpp` - Replay selection and options menu
- `ScoreScreen.cpp` - End-game score display
- `SinglePlayerMenu.cpp` - Single player campaign menu
- `SkirmishGameOptionsMenu.cpp` - Skirmish game configuration
- `SkirmishMapSelectMenu.cpp` - Skirmish map selection
- `WOLBuddyOverlay.cpp` - Westwood Online buddy interface
- `WOLCustomScoreScreen.cpp` - Online game score display
- `WOLGameSetupMenu.cpp` - Online game setup options

## Additional Menus

- `ChallengeMenu.cpp` - Challenge mode selection
- `CreditsMenu.cpp` - Credits screen implementation
- `DifficultySelect.cpp` - Difficulty level selection
- `DisconnectWindow.cpp` - Network disconnection handling
- `DownloadMenu.cpp` - Content download management
- `EstablishConnectionsWindow.cpp` - Connection setup
- `KeyboardOptionsMenu.cpp` - Keyboard configuration
- `LanGameOptionsMenu.cpp` - LAN game settings
- `LanLobbyMenu.cpp` - LAN lobby interface
- `LanMapSelectMenu.cpp` - LAN map selection
- `WOLLadderScreen.cpp` - Online ladder rankings
- `WOLLobbyMenu.cpp` - Westwood Online lobby
- `WOLLocaleSelectPopup.cpp` - Locale/region selection
- `WOLLoginMenu.cpp` - Online login interface
- `WOLMapSelectMenu.cpp` - Online map selection
- `WOLMessageWindow.cpp` - Online messaging system
- `WOLQMScoreScreen.cpp` - Quick match score display
- `WOLQuickMatchMenu.cpp` - Quick match setup
- `WOLStatusMenu.cpp` - Online status display
- `WOLWelcomeMenu.cpp` - Welcome screen

## Control Bar System

- `ControlBarBeacon.cpp` - Map beacon functionality
- `ControlBarCommand.cpp` - Command button handling
- `ControlBarCommandProcessing.cpp` - Command processing
- `ControlBarMultiSelect.cpp` - Multiple unit selection
- `ControlBarOCLTimer.cpp` - OCL timer display
- `ControlBarObserver.cpp` - UI state observation
- `ControlBarPrintPositions.cpp` - Position display
- `ControlBarStructureInventory.cpp` - Structure management
- `ControlBarUnderConstruction.cpp` - Construction progress
- `ControlBarCallback.cpp` - Control bar event callbacks
- `ControlBarPopupDescription.cpp` - Tooltip descriptions

## W3D Display System

Core rendering and display components:

- `W3DDebugIcons.h`/`.cpp` - Debug icon rendering
- `W3DDisplay.h`/`.cpp` - Main display management
- `W3DDisplayString.h`/`.cpp` - Text rendering system
- `W3DDisplayStringManager.h`/`.cpp` - String display management
- `W3DDynamicLight.h`/`.cpp` - Dynamic lighting system
- `W3DFileSystem.h`/`.cpp` - File system integration
- `W3DGUICallbacks.h` - GUI event callbacks
- `W3DGadget.h` - Base UI gadget class
- `W3DGameClient.h`/`.cpp` - Game client integration
- `W3DGranny.h`/`.cpp` - Granny animation integration
- `W3DInGameUI.cpp` - In-game UI components
- `W3DMirror.h` - Mirror surface rendering
- `W3DMouse.cpp` - Mouse input handling
- `W3DParticleSys.h`/`.cpp` - Particle system rendering
- `W3DPoly.h`/`.cpp` - Polygon rendering
- `W3DPropBuffer.h`/`.cpp` - Prop buffer management
- `W3DRoadBuffer.h`/`.cpp` - Road rendering system
- `W3DShaderManager.h`/`.cpp` - Shader management system
- `W3DShroud.h`/`.cpp` - Fog of war implementation
- `W3DSmudge.h`/`.cpp` - Terrain decal system
- `W3DSnow.h`/`.cpp` - Snow effects system
- `W3DStatusCircle.h`/`.cpp` - Unit status indicator
- `W3DTerrainBackground.h`/`.cpp` - Background terrain rendering

## Game Window System

- `W3DGameFont.cpp` - Game font rendering
- `W3DGameWindow.cpp` - Game window system
- `Code/GameEngineDevice/Include/W3DDevice/GameClient/W3DGameFont.h` - Font system
- `Code/GameEngineDevice/Include/W3DDevice/GameClient/W3DGameWindow.h` - Window system

## UI Callbacks

- `GeneralsExpPoints.cpp` - General's experience display
- `IMECandidate.cpp` - Input method editor support
- `InGameChat.cpp` - In-game chat system
- `InGamePopupMessage.cpp` - In-game notifications
- `ReplayControls.cpp` - Replay system interface
- `W3DControlBar.cpp` - Control bar implementation
- `W3DMOTD.cpp` - Message of the day display
- `W3DMainMenu.cpp` - Main menu implementation

## UI Gadgets

- `W3DVerticalSlider.cpp` - Vertical slider control implementation
- `GadgetHorizontalSlider.cpp` - Horizontal slider implementation
- `GadgetVerticalSlider.cpp` - Vertical slider implementation
- `W3DCheckBox.cpp` - Checkbox control
- `W3DComboBox.cpp` - Dropdown control
- `W3DHorizontalSlider.cpp` - Horizontal slider
- `W3DListBox.cpp` - List box control
- `W3DProgressBar.cpp` - Progress indicator
- `W3DPushButton.cpp` - Button control
- `W3DRadioButton.cpp` - Radio button control
- `W3DStaticText.cpp` - Static text display
- `W3DTabControl.cpp` - Tab control
- `W3DTextEntry.cpp` - Text input field

## GameSpy Integration

- `BuddyDefs.h` - Friend system definitions
- `GSConfig.h` - GameSpy configuration
- `LadderDefs.h` - Ladder/ranking system
- `LobbyUtils.h` - Lobby system utilities
- `MainMenuUtils.h` - Main menu GameSpy integration
- `PeerDefs.h` - Peer-to-peer networking
- `PeerDefsImplementation.h` - Peer system implementation
- `PersistentStorageDefs.h` - Data persistence
- `PersistentStorageThread.h` - Storage threading
- `StagingRoomGameInfo.h` - Game setup information

## Window Management

- `GameWindowManagerScript.cpp` - Window scripting
- `GameWindowTransitionsStyles.cpp` - Transition animations

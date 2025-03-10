# GameClient System

Client-side implementation handling rendering, user interface, and input. The GameClient system manages the player-facing aspects of the game.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Client

- `Code/GameEngine/Include/GameClient/GameClient.h` - Main client system
- `Code/GameEngine/Include/GameClient/Shell.h` - Game shell interface
- `Code/GameEngine/Include/GameClient/ShellHooks.h` - Shell callbacks
- `Code/GameEngine/Include/GameClient/View.h` - View system
- `Code/GameEngine/Source/GameClient/GameClient.cpp`
- `Code/GameEngine/Source/GameClient/GameClientDispatch.cpp`
- `Code/GameEngine/Source/GameClient/View.cpp`
- `Code/GameEngine/Include/GameClient/ClientRandomValue.h` - Client-side RNG
- `Code/GameEngine/Include/GameClient/HeaderTemplate.h` - Template definitions
- `Code/GameEngine/Include/GameClient/WinInstanceData.h` - Window instance data
- `Code/GameEngine/Include/GameClient/GUICallbacks.h` - UI callback system
- `Code/GameEngine/Include/GameClient/GlobalLanguage.h` - Global language settings
- `Code/GameEngine/Source/GameClient/GlobalLanguage.cpp`

## Display System

- `Code/GameEngine/Include/GameClient/Display.h` - Display management
- `Code/GameEngine/Include/GameClient/DisplayString.h` - String display
- `Code/GameEngine/Include/GameClient/DisplayStringManager.h` - String management
- `Code/GameEngine/Source/GameClient/Display.cpp`
- `Code/GameEngine/Source/GameClient/DisplayString.cpp`
- `Code/GameEngine/Source/GameClient/DisplayStringManager.cpp`

## UI Framework

- `Code/GameEngine/Include/GameClient/Gadget.h` - UI base element
- `Code/GameEngine/Include/GameClient/GadgetCheckBox.h` - Checkbox control
- `Code/GameEngine/Include/GameClient/GadgetComboBox.h` - Dropdown control
- `Code/GameEngine/Include/GameClient/GadgetListBox.h` - List control
- `Code/GameEngine/Include/GameClient/GadgetProgressBar.h` - Progress bar
- `Code/GameEngine/Include/GameClient/GadgetPushButton.h` - Button control
- `Code/GameEngine/Include/GameClient/GadgetRadioButton.h` - Radio button
- `Code/GameEngine/Include/GameClient/GadgetSlider.h` - Slider control
- `Code/GameEngine/Include/GameClient/GadgetStaticText.h` - Static text
- `Code/GameEngine/Include/GameClient/GadgetTabControl.h` - Tab control
- `Code/GameEngine/Include/GameClient/GadgetTextEntry.h` - Text entry field
- `Code/GameEngine/Include/GameClient/GameWindow.h` - Window system
- `Code/GameEngine/Include/GameClient/GameWindowGlobal.h` - Global window defs
- `Code/GameEngine/Include/GameClient/GameWindowID.h` - Window identifiers
- `Code/GameEngine/Include/GameClient/GameWindowManager.h` - Window management
- `Code/GameEngine/Include/GameClient/GameWindowTransitions.h` - Window transitions
- `Code/GameEngine/Include/GameClient/WindowLayout.h` - Layout system
- `Code/GameEngine/Include/GameClient/ShellMenuScheme.h` - Menu theming
- `Code/GameEngine/Include/GameClient/FontDesc.h` - Font handling
- `Code/GameEngine/Include/GameClient/GameFont.h` - Game font system
- `Code/GameEngine/Include/GameClient/GameText.h` - Text management
- `Code/GameEngine/Source/GameClient/GameText.cpp`
- `Code/GameEngine/Include/GameClient/MetaEvent.h` - Event system

## In-Game UI

- `Code/GameEngine/Include/GameClient/ControlBar.h` - Command interface
- `Code/GameEngine/Include/GameClient/ControlBarResizer.h` - Bar resizing
- `Code/GameEngine/Include/GameClient/ControlBarScheme.h` - Bar theming
- `Code/GameEngine/Include/GameClient/InGameUI.h` - Game interface
- `Code/GameEngine/Source/GameClient/InGameUI.cpp`
- `Code/GameEngine/Include/GameClient/SelectionInfo.h` - Selection details
- `Code/GameEngine/Source/GameClient/SelectionInfo.cpp`

## Input Handling

- `Code/GameEngine/Include/GameClient/CommandXlat.h` - Command translation
- `Code/GameEngine/Include/GameClient/GUICommandTranslator.h` - GUI commands
- `Code/GameEngine/Include/GameClient/HotKey.h` - Hotkey system
- `Code/GameEngine/Include/GameClient/Keyboard.h` - Keyboard input
- `Code/GameEngine/Include/GameClient/KeyDefs.h` - Key definitions
- `Code/GameEngine/Include/GameClient/LookAtXlat.h` - Camera look translation
- `Code/GameEngine/Include/GameClient/Mouse.h` - Mouse input
- `Code/GameEngine/Include/GameClient/PlaceEventTranslator.h` - Placement system
- `Code/GameEngine/Include/GameClient/SelectionXlat.h` - Selection system
- `Code/GameEngine/Include/GameClient/WindowXlat.h` - Window input translation

## Visual Elements

- `Code/GameEngine/Include/GameClient/Anim2D.h` - 2D animation
- `Code/GameEngine/Include/GameClient/Color.h` - Color handling
- `Code/GameEngine/Include/GameClient/Drawable.h` - Drawable objects
- `Code/GameEngine/Include/GameClient/DrawableInfo.h` - Drawable properties
- `Code/GameEngine/Include/GameClient/DrawableManager.h` - Drawable management
- `Code/GameEngine/Include/GameClient/DrawGroupInfo.h` - Drawable groups
- `Code/GameEngine/Include/GameClient/FXList.h` - Effect list
- `Code/GameEngine/Include/GameClient/GraphDraw.h` - Graph drawing
- `Code/GameEngine/Include/GameClient/Image.h` - Image handling
- `Code/GameEngine/Include/GameClient/Line2D.h` - 2D line drawing
- `Code/GameEngine/Include/GameClient/ParabolicEase.h` - Animation easing
- `Code/GameEngine/Include/GameClient/ParticleSys.h` - Particle system
- `Code/GameEngine/Include/GameClient/RadiusDecal.h` - Radius markers
- `Code/GameEngine/Include/GameClient/RayEffect.h` - Ray effects
- `Code/GameEngine/Include/GameClient/Shadow.h` - Shadow rendering
- `Code/GameEngine/Include/GameClient/Smudge.h` - Terrain marks
- `Code/GameEngine/Include/GameClient/Snow.h` - Snow effects
- `Code/GameEngine/Include/GameClient/Water.h` - Water rendering
- `Code/GameEngine/Source/GameClient/Color.cpp`
- `Code/GameEngine/Source/GameClient/Drawable.cpp`
- `Code/GameEngine/Source/GameClient/DrawableManager.cpp`
- `Code/GameEngine/Source/GameClient/DrawGroupInfo.cpp`
- `Code/GameEngine/Source/GameClient/FXList.cpp`
- `Code/GameEngine/Source/GameClient/GraphDraw.cpp`
- `Code/GameEngine/Source/GameClient/Line2D.cpp`
- `Code/GameEngine/Source/GameClient/ParabolicEase.cpp`
- `Code/GameEngine/Source/GameClient/RadiusDecal.cpp`
- `Code/GameEngine/Source/GameClient/Snow.cpp`
- `Code/GameEngine/Source/GameClient/Water.cpp`

## Game Features

- `Code/GameEngine/Include/GameClient/CampaignManager.h` - Campaign system
- `Code/GameEngine/Include/GameClient/ChallengeGenerals.h` - Challenge mode
- `Code/GameEngine/Include/GameClient/Credits.h` - Credits system
- `Code/GameEngine/Include/GameClient/DebugDisplay.h` - Debug display
- `Code/GameEngine/Include/GameClient/Diplomacy.h` - Diplomacy system
- `Code/GameEngine/Include/GameClient/Eva.h` - EVA announcer
- `Code/GameEngine/Include/GameClient/GameInfoWindow.h` - Game info display
- `Code/GameEngine/Include/GameClient/HintSpy.h` - Hint system
- `Code/GameEngine/Include/GameClient/IMEManager.h` - Input method
- `Code/GameEngine/Include/GameClient/LoadScreen.h` - Loading screen
- `Code/GameEngine/Include/GameClient/MapUtil.h` - Map utilities
- `Code/GameEngine/Include/GameClient/Statistics.h` - Statistics display
- `Code/GameEngine/Source/GameClient/Credits.cpp`
- `Code/GameEngine/Source/GameClient/Eva.cpp`
- `Code/GameEngine/Source/GameClient/MapUtil.cpp`
- `Code/GameEngine/Source/GameClient/Statistics.cpp`
- `Code/GameEngine/Include/GameClient/CDCheck.h` - CD verification
- `Code/GameEngine/Include/GameClient/LanguageFilter.h` - Text filtering
- `Code/GameEngine/Source/GameClient/LanguageFilter.cpp`

## Menus & Dialogs

- `Code/GameEngine/Include/GameClient/AnimateWindowManager.h` - Animated windows
- `Code/GameEngine/Include/GameClient/DisconnectMenu.h` - Disconnect dialog
- `Code/GameEngine/Include/GameClient/EstablishConnectionsMenu.h` - Connection menu
- `Code/GameEngine/Include/GameClient/ExtendedMessageBox.h` - Enhanced message box
- `Code/GameEngine/Include/GameClient/MessageBox.h` - Message box
- `Code/GameEngine/Include/GameClient/ProcessAnimateWindow.h` - Animation processor

## Video System

- `Code/GameEngine/Include/GameClient/VideoPlayer.h` - Video playback
- `Code/GameEngine/Include/GameClient/WindowVideoManager.h` - Video management
- `Code/GameEngine/Source/GameClient/VideoPlayer.cpp`
- `Code/GameEngine/Source/GameClient/VideoStream.cpp`

## Client Modules

- `Code/GameEngine/Include/GameClient/Module/AnimatedParticleSysBoneClientUpdate.h` - Particle bone animations
- `Code/GameEngine/Include/GameClient/Module/BeaconClientUpdate.h` - Beacon effects
- `Code/GameEngine/Include/GameClient/Module/SwayClientUpdate.h` - Sway animations

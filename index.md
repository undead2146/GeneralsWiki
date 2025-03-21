---
layout: home

hero:
  name: "GeneralsWiki"
  text: "Command & Conquer: Generals Zero Hour"
  tagline: "Technical documentation for developers, modders, and players exploring the source code and engine architecture"
  image:
    src: /assets/icon.webp
    alt: Generals Wiki Logo
  actions:
    - theme: brand
      text: Engine Documentation
      link: /SourceCode/Overview/SystemArchitecture
    - theme: alt
      text: Build Guides
      link: /SourceCode/Builds/Windows/VS2022
    - theme: alt
      text: Modding Resources
      link: /Asset/GameDesign/ini/map

features:
  - icon: 🏗️
    title: Engine Architecture
    details: Explore the modular systems that power C&C Generals Zero Hour including rendering, game logic, networking, and audio
    link: /SourceCode/Overview/SystemArchitecture
  - icon: 🧩
    title: Design Patterns
    details: Learn about the software patterns used throughout the codebase for extensibility and performance
    link: /SourceCode/Overview/DesignPatterns
  - icon: ⚙️
    title: Core Systems
    details: Deep dive into the key subsystems including GameClient, GameLogic, GameNetwork, and GameRenderer
    link: /SourceCode/Engine/CoreSystems/Common
  - icon: 🛠️
    title: Development Tools
    details: Documentation for WorldBuilder, Particle Editor, and other development utilities
    link: /SourceCode/Tools/DevelopmentTools

highlights:
  - header: Specialized Documentation
    features:
      - title: Performance Optimization
        icon: 🚀
        details: Learn about memory management, rendering optimizations, and performance tuning
        link: /SourceCode/Overview/Performance
      - title: UI Systems
        icon: 🖥️
        details: Understand the user interface framework with gadgets, windows, and input handling
        link: /SourceCode/Subsystems/UserInterface
      - title: Vegas Engine Libraries
        icon: 📚
        details: Documentation of core Westwood Vegas engine components that power the game
        link: /SourceCode/Subsystems/VegasEngineLibraries
      - title: INI Configuration
        icon: ⚙️
        details: Learn how the game's extensive INI-based configuration system works
        link: /SourceCode/Subsystems/INIConfiguration

community:
  - header: Community Resources
    features:
      - title: Source Code Map
        icon: 🗺️
        details: Navigate the codebase with our comprehensive directory and file guide
        link: /SourceCode/Resources/CodeMap
      - title: Technical Glossary
        icon: 📝
        details: Reference for technical terms, acronyms, and specialized vocabulary
        link: /SourceCode/Resources/Glossary
      - title: Contribute to the Wiki
        icon: 🤝
        details: Learn how to contribute your knowledge and improve documentation
        link: /SourceCode/Resources/Contributing
      - title: Build Environment Setup
        icon: 🔧
        details: Step-by-step guides for setting up your development environment
        link: /SourceCode/Builds/Windows/vs22_compile
---

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## About C&C Generals: Zero Hour

<div class="about-section">
  <div class="about-image">
    <img src="/assets/zerohour_generals.webp" alt="C&C Generals Screenshot" />
  </div>
  <div class="about-content">
    <p>Command & Conquer: Generals Zero Hour is built on the advanced <strong>SAGE Engine</strong> (Strategy Action Game Engine), a modified version of Westwood's <strong>Vegas Engine</strong>. This wiki provides comprehensive technical documentation of the engine architecture, source code organization, and modding capabilities.</p>
    <p>The game features a component-based architecture with multiple subsystems handling everything from 3D rendering and network synchronization to AI behavior and particle effects. With support for extensive modding through both INI files and code changes, the engine remains a fascinating study in game development.</p>
  </div>
</div>

## Documentation Highlights

<div class="card-grid">
  <div class="card">
    <div class="card-icon">💻</div>
    <h3>Source Code Architecture</h3>
    <p>Explore the modular engine design with detailed documentation of key systems and their interactions.</p>
    <div class="card-links">
      <a href="/GeneralsWiki/SourceCode/Overview/SystemArchitecture">System Overview</a>
      <a href="/GeneralsWiki/SourceCode/Overview/DesignPatterns">Design Patterns</a>
      <a href="/GeneralsWiki/SourceCode/Reference/Glossary">Glossary</a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-icon">🔧</div>
    <h3>Development Tools</h3>
    <p>Learn about the official development tools including WorldBuilder, Particle Editor, and more.</p>
    <div class="card-links">
      <a href="/GeneralsWiki/SourceCode/Tools/WorldBuilder/">WorldBuilder</a>
      <a href="/GeneralsWiki/SourceCode/Tools/ParticleEditor/">Particle Editor</a>
      <a href="/GeneralsWiki/SourceCode/Tools/CommandLine">Command Line</a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-icon">⚡</div>
    <h3>Game Systems</h3>
    <p>Detailed documentation of game mechanics, AI, networking, and rendering systems.</p>
    <div class="card-links">
      <a href="/GeneralsWiki/SourceCode/Engine/CoreSystems/GameLogic">Game Logic</a>
      <a href="/GeneralsWiki/SourceCode/Engine/CoreSystems/GameNetwork">Networking</a>
      <a href="/GeneralsWiki/SourceCode/Engine/CoreSystems/GameRenderer">Rendering</a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-icon">🔨</div>
    <h3>Building the Engine</h3>
    <p>Step-by-step guides for compiling the game from source code in various environments.</p>
    <div class="card-links">
      <a href="/GeneralsWiki/SourceCode/Builds/Windows/VS2022">VS2022 Guide</a>
      <a href="/GeneralsWiki/SourceCode/Builds/Windows/VC6">VC6 Guide</a>
      <a href="/GeneralsWiki/SourceCode/Builds/Windows/CLionVC6">CLion Guide</a>
    </div>
  </div>
</div>

## Getting Started

<div class="card-grid">
  <div class="card">
    <div class="card-icon medium">💻</div>
    <h3>For Developers</h3>
    <p>Start with the <a href="/GeneralsWiki/SourceCode/Overview/SystemArchitecture">System Architecture</a> overview to understand the engine's design philosophy and component structure.</p>
    <p>Then explore the <a href="/GeneralsWiki/SourceCode/Engine/CoreSystems/Common">Core Systems</a> documentation to learn about specific subsystems.</p>
  </div>
  
  <div class="card">
    <div class="card-icon medium">🔨</div>
    <h3>For Modders</h3>
    <p>The <a href="/GeneralsWiki/SourceCode/Tools/WorldBuilder/index.md">WorldBuilder</a> documentation will help you create and modify maps.</p>
    <p>Learn about <a href="/GeneralsWiki/SourceCode/Engine/Subsystems/INIConfiguration">INI Configuration</a> to understand how game data is defined and loaded.</p>
  </div>
  
  <div class="card">
    <div class="card-icon medium">📝</div>
    <h3>For Contributors</h3>
    <p>Check our <a href="/GeneralsWiki/community/contributing">Contributing Guidelines</a> to learn how you can improve this wiki.</p>
    <p>Use the <a href="/GeneralsWiki/SourceCode/Reference/Glossary">Technical Glossary</a> to navigate the codebase effectively.</p>
  </div>
</div>

## Recent Updates

<div class="updates-section">
  <div class="update-item">
    <span class="update-date">2023-11-15</span>
    <span class="update-title">Added comprehensive Design Patterns documentation</span>
  </div>
  <div class="update-item">
    <span class="update-date">2023-11-10</span>
    <span class="update-title">Expanded WorldBuilder tool documentation with workflow guides</span>
  </div>
  <div class="update-item">
    <span class="update-date">2023-11-05</span>
    <span class="update-title">New Performance Optimization section with memory and rendering details</span>
  </div>
  <div class="update-item">
    <span class="update-date">2023-10-28</span>
    <span class="update-title">Added Visual Studio 2022 compilation guide</span>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Process highlights and community sections from frontmatter
  const highlightsSection = document.createElement('div');
  highlightsSection.className = 'highlights-container';
  highlightsSection.innerHTML = '<h2>Specialized Documentation</h2><div class="card-grid"></div>';
  
  const communitySection = document.createElement('div');
  communitySection.className = 'community-container';
  communitySection.innerHTML = '<h2>Community Resources</h2><div class="card-grid"></div>';
  
  // Insert before the Recent Updates section
  const updatesSection = document.querySelector('.updates-section');
  if (updatesSection && updatesSection.parentNode) {
    updatesSection.parentNode.insertBefore(highlightsSection, updatesSection);
    updatesSection.parentNode.insertBefore(communitySection, updatesSection);
  }
});
</script>

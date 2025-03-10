import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "GeneralsWiki",
  description: "C&C Generals: Zero Hour Technical Documentation",
  lastUpdated: true,
  
  // MermaidConfig
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
  
  // Vite config to handle module issues
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-mermaid', 'mermaid']
    },
    resolve: {
      alias: {
        // If there are still issues with dayjs
        'dayjs/plugin': 'node_modules/dayjs/esm/plugin',
        'dayjs': 'node_modules/dayjs/esm'
      }
    },
    optimizeDeps: {
      include: ['dayjs']
    }
  },

  // Theme Config
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/icon.webp",

    nav: [
      { text: "Home", link: "/" },
      { text: "Source Code", link: "/SourceCode/Overview/SystemArchitecture" },
      { text: "Build Guides", link: "/SourceCode/Builds/Windows/VS2022" },
    ],

    sidebar: {
      '/SourceCode/': [
        {
          text: 'Overview',
          items: [
            { text: 'System Architecture', link: '/SourceCode/Overview/SystemArchitecture' },
            { text: 'Design Patterns', link: '/SourceCode/Overview/DesignPatterns' },
            { text: 'Performance Optimizations', link: '/SourceCode/Overview/Performance' },
            { text: 'Source Code Map', link: '/SourceCode/Overview/SystemOverview' }
          ]
        },
        {
          text: 'Engine Systems',
          items: [
            { 
              text: 'Core Systems',
              collapsed: false,
              items: [
                { text: 'Common', link: '/SourceCode/Engine/CoreSystems/Common' },
                { text: 'GameClient', link: '/SourceCode/Engine/CoreSystems/GameClient' },
                { text: 'GameLogic', link: '/SourceCode/Engine/CoreSystems/GameLogic' },
                { text: 'GameNetwork', link: '/SourceCode/Engine/CoreSystems/GameNetwork' },
                { text: 'GameRenderer', link: '/SourceCode/Engine/CoreSystems/GameRenderer' },
                { text: 'Main', link: '/SourceCode/Engine/CoreSystems/Main' },
              ]
            },
            { 
              text: 'Subsystems', 
              collapsed: false,
              items: [
                { text: 'Audio', link: '/SourceCode/Engine/Subsystems/Audio' },
                { text: 'Autorun', link: '/SourceCode/Engine/Subsystems/Autorun' },
                { text: 'Compression', link: '/SourceCode/Engine/Subsystems/Compression' },
                { text: 'INI Configuration', link: '/SourceCode/Engine/Subsystems/INIConfiguration' },
                { text: 'Matchmaking', link: '/SourceCode/Engine/Subsystems/Matchmaking' },
                { text: 'Platform', link: '/SourceCode/Engine/Subsystems/Platform' },
                { text: 'Profiling', link: '/SourceCode/Engine/Subsystems/Profiling' },
                { text: 'Rendering', link: '/SourceCode/Engine/Subsystems/Rendering' },
                { text: 'User Interface', link: '/SourceCode/Engine/Subsystems/UserInterface' },
                { text: 'Vegas Engine Libraries', link: '/SourceCode/Engine/Subsystems/WWVegasEngineLibraries' }
              ]
            }
          ]
        },
        {
          text: 'Development Tools',
          items: [
            { 
              text: 'WorldBuilder',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/SourceCode/Tools/WorldBuilder/' },
                { text: 'Scripting', link: '/SourceCode/Tools/WorldBuilder/Scripting' },
                { text: 'Terrain Editing', link: '/SourceCode/Tools/WorldBuilder/TerrainEditing' }
              ]
            },
            { text: 'Particle Editor', link: '/SourceCode/Tools/ParticleEditor/' },
            { text: 'Command Line', link: '/SourceCode/Tools/CommandLine' },
            { text: 'Command Line Arguments', link: '/SourceCode/Tools/switcher_arguments' },
            { text: 'Babylon', link: '/SourceCode/Tools/Babylon' },
            { text: 'CRC Diff', link: '/SourceCode/Tools/CRCDiff' },
            { text: 'Debug', link: '/SourceCode/Tools/Debug' },
            { text: 'Image Tools', link: '/SourceCode/Tools/ImageTools' },
            { text: 'Launcher', link: '/SourceCode/Tools/Launcher' },
            { text: 'Model Exporter', link: '/SourceCode/Tools/ModelExporter' },
            { text: 'Network Tools', link: '/SourceCode/Tools/NetworkTools' },
            { text: 'Plugin Library', link: '/SourceCode/Tools/PluginLib' },
            { text: 'Development Overview', link: '/SourceCode/Tools/DevelopmentTools' }
          ]
        },
        {
          text: 'Build Guides',
          items: [
            { text: 'Visual Studio 2022', link: '/SourceCode/Builds/Windows/VS2022' },
            { text: 'VC6', link: '/SourceCode/Builds/Windows/VC6' },
            { text: 'VC6 with CLion', link: '/SourceCode/Builds/Windows/CLionVC6' },
          ]
        },
        {
          text: 'References',
          items: [
            { text: 'Glossary', link: '/SourceCode/Reference/Glossary' }
          ]
        }
      ]
    },

    footer: {
      message: 'Want to contribute to this Wiki? <a href="https://github.com/TheSuperHackers/GeneralsWiki.git">Fork it and send a pull request.</a>',
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/TheSuperHackers/GeneralsWiki" },
      { icon: "discord", link: "https://www.community-outpost.com/discord" },
    ],
  },
  
  head: [["link", { rel: "icon", href: "/assets/favicon.ico" }]],
}))

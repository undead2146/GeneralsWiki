# GameLogic System

Game mechanics and simulation systems. The GameLogic system handles all game rules, object behavior, and simulation.

::: warning DOCUMENTATION NOTICE
This document was generated with AI assistance and requires verification by engineering staff familiar with the codebase.
:::

## Core Logic

- `Include/GameLogic/GameLogic.h` - Main logic system
- `Include/GameLogic/Object.h` - Base game object
- `Include/GameLogic/ObjectTypes.h` - Object type definitions
- `Include/GameLogic/ObjectIter.h` - Object iteration
- `Include/GameLogic/ObjectCreationList.h` - Object creation
- `Include/GameLogic/ObjectStatusBits.h` - Object state flags
- `Source/GameLogic/GameLogic.cpp`
- `Source/GameLogic/GameLogicDispatch.cpp`

## AI Systems

- `Include/GameLogic/AI.h` - Base AI system
- `Include/GameLogic/AIPlayer.h` - AI player
- `Include/GameLogic/AISkirmishPlayer.h` - Skirmish AI
- `Include/GameLogic/AIGuardRetaliate.h` - Guard retaliation
- `Include/GameLogic/AIPathfind.h` - Pathfinding
- `Include/GameLogic/AIStateMachine.h` - State machine
- `AIDock.h` - AI docking behavior
- `AIGuard.h` - AI guard behavior
- `AITNGuard.h` - Technical neutral guard behavior
- `Squad.h` - Squad management
- `TurretAI.h` - Turret artificial intelligence
- `Source/GameLogic/AI/AIGroup.cpp`
- `Source/GameLogic/AI/AIStates.cpp`

## Combat Systems

- `Include/GameLogic/Weapon.h` - Weapon system
- `Include/GameLogic/WeaponSet.h` - Weapon collections
- `Include/GameLogic/WeaponSetFlags.h` - Weapon set flags
- `Include/GameLogic/WeaponStatus.h` - Weapon status
- `Include/GameLogic/WeaponBonusConditionFlags.h` - Weapon bonuses
- `Include/GameLogic/FiringTracker.h` - Weapon firing
- `Include/GameLogic/Damage.h` - Damage system
- `Source/GameLogic/Damage.cpp`
- `Source/GameLogic/Weapon.cpp`
- `Source/GameLogic/WeaponSet.cpp`

## Movement & Physics

- `Include/GameLogic/Locomotor.h` - Movement system
- `Include/GameLogic/LocomotorSet.h` - Movement types

## Game Systems

- `Include/GameLogic/Powers.h` - Special powers
- `Include/GameLogic/CrateSystem.h` - Crate system
- `Include/GameLogic/CaveSystem.h` - Cave system
- `Include/GameLogic/PartitionManager.h` - Spatial partitioning
- `Include/GameLogic/RankInfo.h` - Rank system
- `Include/GameLogic/HeightMap.h` - Elevation data storage
- `Include/GameLogic/KindOf.h` - Object classification
- `Source/GameLogic/CaveSystem.cpp`
- `Source/GameLogic/CrateSystem.cpp`
- `Source/GameLogic/RankInfo.cpp`

## Terrain Systems

- `TerrainLogic.h` - Terrain behavior and functionality
- `TerrainRoads.h` - Road system implementation
- `TerrainVisual.h` - Visual representation of terrain

## Environment Systems

- `Include/GameLogic/Shadow.h` - Shadow implementation

## Module Updates

Core update modules that control gameplay behaviors:

- `NeutronBlastBehavior.h` - Special weapon behavior for neutron weapons
- `OCLUpdate.h` - Object Control Loop update system
- `ParticleUplinkCannonUpdate.h` - Uplink cannon particle effects
- `PilotFindVehicleUpdate.h` - AI pilot vehicle seeking behavior
- `PointDefenseLaserUpdate.h` - Point defense weapon system
- `SabotageFakeBuildingCrateCollide.h` - Sabotage crate collision handling
- `SlavedUpdate.h` - Update logic for slaved objects
- `SmartBombTargetHomingUpdate.h` - Smart bomb targeting system
- `SpyVisionUpdate.h` - Spy vision detection and implementation
- `SpecialAbilityUpdate.h` - Special ability update logic
- `SpecialPowerUpdateModule.h` - Special power system updates
- `StealthDetectorUpdate.h` - Stealth unit detection system
- `AnimationSteeringUpdate.h` - Animation steering behavior
- `BattleBusSlowDeathBehavior.h` - Battle bus death animation
- `BunkerBusterBehavior.h` - Bunker buster weapon behavior
- `CashBountyPower.h` - Cash bounty special power
- `CaveContain.h` - Cave containment logic
- `CleanupAreaPower.h` - Area cleanup special power
- `CleanupHazardUpdate.h` - Hazard cleanup behavior
- `CommandButtonHuntUpdate.h` - Hunt command button behavior
- `ConvertToCarBombCrateCollide.h` - Car bomb conversion crate
- `ConvertToHijackedVehicleCrateCollide.h` - Vehicle hijacking crate

## Scripting

- `Include/GameLogic/Scripts.h` - Script definitions
- `Include/GameLogic/ScriptEngine.h` - Script engine
- `Include/GameLogic/ScriptConditions.h` - Script conditions
- `Include/GameLogic/VictoryConditions.h` - Victory conditions
- `Source/GameLogic/ScriptEngine.cpp`
- `Source/GameLogic/Scripts.cpp`
- `Source/GameLogic/VictoryConditions.cpp`

## Update Modules (Core)

- `Include/GameLogic/Module/UpdateModule.h` - Base update module
- `Include/GameLogic/Module/BehaviorModule.h` - Complex behavior module
- `Include/GameLogic/Module/BodyModule.h` - Physical attributes
- `Include/GameLogic/Module/ActiveBody.h` - Active physical body
- `Include/GameLogic/Module/HighlanderBody.h` - Highlander mechanics
- `Include/GameLogic/Module/ImmortalBody.h` - Immortal object type
- `Include/GameLogic/Module/InactiveBody.h` - Inactive state
- `Include/GameLogic/Module/PhysicsUpdate.h` - Physics simulation
- `Include/GameLogic/Module/CollideModule.h` - Collision handling
- `Include/GameLogic/Module/ContainModule.h` - Container logic
- `Include/GameLogic/Module/CreateModule.h` - Object creation
- `Include/GameLogic/Module/DieModule.h` - Death handling
- `Include/GameLogic/Module/DestroyModule.h` - Object destruction
- `Include/GameLogic/Module/DamageModule.h` - Damage handling
- `Include/GameLogic/Module/UpgradeModule.h` - Upgrade system
- `Source/GameLogic/Module/UpdateModule.cpp`
- `Source/GameLogic/Module/BehaviorModule.cpp`

## AI Modules

- `Include/GameLogic/Module/AIUpdate.h` - Base AI behavior module
- `Include/GameLogic/Module/AssaultTransportAIUpdate.h` - Assault transport AI
- `Include/GameLogic/Module/ChinookAIUpdate.h` - Chinook helicopter AI
- `Include/GameLogic/Module/DeliverPayloadAIUpdate.h` - Payload delivery AI
- `Include/GameLogic/Module/DozerAIUpdate.h` - Construction dozer AI
- `Include/GameLogic/Module/HackInternetAIUpdate.h` - Hacker AI
- `Include/GameLogic/Module/JetAIUpdate.h` - Aircraft AI
- `Include/GameLogic/Module/MissileAIUpdate.h` - Missile guidance AI
- `Include/GameLogic/Module/POWTruckAIUpdate.h` - POW truck behavior
- `Include/GameLogic/Module/RailedTransportAIUpdate.h` - Train transport AI
- `Include/GameLogic/Module/RailroadGuideAIUpdate.h` - Rail pathfinding
- `Include/GameLogic/Module/SupplyTruckAIUpdate.h` - Supply truck AI
- `Include/GameLogic/Module/TransportAIUpdate.h` - Transport vehicle AI
- `Include/GameLogic/Module/WanderAIUpdate.h` - Random movement AI
- `Include/GameLogic/Module/WorkerAIUpdate.h` - Worker unit AI
- `Include/GameLogic/Module/AssistedTargetingUpdate.h` - Target assistance
- `Include/GameLogic/Module/AutoDepositUpdate.h` - Auto resource collection
- `Include/GameLogic/Module/AutoFindHealingUpdate.h` - Auto healing
- `Include/GameLogic/Module/AutoHealBehavior.h` - Healing behavior
- `Include/GameLogic/Module/BattlePlanUpdate.h` - Battle planning
- `Include/GameLogic/Module/DeployStyleAIUpdate.h` - Deployment AI
- `Include/GameLogic/Module/EnemyNearUpdate.h` - Enemy detection

## Weapon Systems

- `WeaponSetType.h` - Weapon set type definitions and handling
- `Armor.h` - Armor system implementation
- `ArmorSet.h` - Sets of armor types

## Combat & Effect Modules

- `Include/GameLogic/Module/BaseRegenerateUpdate.h` - Base regeneration
- `Include/GameLogic/Module/BoneFXDamage.h` - Bone effect damage
- `Include/GameLogic/Module/BoneFXUpdate.h` - Bone effect updates
- `Source/GameLogic/Module/BoneFXDamage.cpp`
- `Source/GameLogic/Module/BoneFXUpdate.cpp`
- `Include/GameLogic/Module/FireWeaponCollide.h` - Weapon collision
- `Include/GameLogic/Module/FireWeaponUpdate.h` - Weapon firing
- `Include/GameLogic/Module/FireWeaponWhenDamagedBehavior.h` - Revenge fire
- `Include/GameLogic/Module/FireWeaponWhenDeadBehavior.h` - Death weapon
- `Include/GameLogic/Module/StatusDamageHelper.h` - Status effects
- `Include/GameLogic/Module/SubdualDamageHelper.h` - Capture damage
- `Include/GameLogic/Module/WeaponBonusUpdate.h` - Weapon bonuses
- `Include/GameLogic/Module/EMPUpdate.h` - EMP effects
- `Include/GameLogic/Module/FireSpreadUpdate.h` - Fire spreading
- `Include/GameLogic/Module/FlammableUpdate.h` - Flammable objects
- `Include/GameLogic/Module/LaserUpdate.h` - Laser weapons
- `Include/GameLogic/Module/NeutronMissileUpdate.h` - Neutron missiles
- `Include/GameLogic/Module/PoisonedBehavior.h` - Poison effects
- `Include/GameLogic/Module/ProjectileStreamUpdate.h` - Projectile streams
- `Include/GameLogic/Module/StickyBombUpdate.h` - Sticky bombs
- `Include/GameLogic/Module/TransitionDamageFX.h` - Damage effects
- `Include/GameLogic/Module/CountermeasuresBehavior.h` - Defensive countermeasures
- `Include/GameLogic/Module/DemoTrapUpdate.h` - Demolition traps
- `Include/GameLogic/Module/DumbProjectileBehavior.h` - Unguided projectiles
- `Include/GameLogic/Module/FireOCLAfterWeaponCooldownUpdate.h` - Delayed command execution
- `Include/GameLogic/Module/FirestormDynamicGeometryInfoUpdate.h` - Firestorm effects
- `Include/GameLogic/Module/GenerateMinefieldBehavior.h` - Minefield generation

## Death & Destruction Modules
- `Include/GameLogic/Module/CreateCrateDie.h` - Crate spawning
- `Include/GameLogic/Module/CreateObjectDie.h` - Object spawning
- `Include/GameLogic/Module/CrushDie.h` - Crush death
- `Include/GameLogic/Module/DamDie.h` - Dam destruction
- `Include/GameLogic/Module/DestroyDie.h` - General destruction
- `Include/GameLogic/Module/EjectPilotDie.h` - Pilot ejection
- `Include/GameLogic/Module/FXListDie.h` - Effect cleanup
- `Include/GameLogic/Module/InstantDeathBehavior.h` - Instant death
- `Include/GameLogic/Module/JetSlowDeathBehavior.h` - Aircraft crash
- `Include/GameLogic/Module/KeepObjectDie.h` - Preserved death
- `Include/GameLogic/Module/SlowDeathBehavior.h` - Gradual death
- `Include/GameLogic/Module/SpecialPowerCompletionDie.h` - Power completion
- `Include/GameLogic/Module/UpgradeDie.h` - Upgrade removal

## Special Powers & Abilities

- `Include/GameLogic/Module/BaikonurLaunchPower.h` - Missile launch
- `Include/GameLogic/Module/CashHackSpecialPower.h` - Money theft
- `Include/GameLogic/Module/DefectorSpecialPower.h` - Unit defection
- `Include/GameLogic/Module/DemoralizeSpecialPower.h` - Morale reduction
- `Include/GameLogic/Module/OCLSpecialPower.h` - One-time abilities
- `Include/GameLogic/Module/SpecialAbility.h` - Base ability system
- `Include/GameLogic/Module/SpyVisionSpecialPower.h` - Spy detection
- `Include/GameLogic/Module/FireWeaponPower.h` - Weapon special power

## Production & Resources
- `Include/GameLogic/Module/DefaultProductionExitUpdate.h` - Production exit
- `Include/GameLogic/Module/ProductionUpdate.h` - Production system
- `Include/GameLogic/Module/QueueProductionExitUpdate.h` - Queue system
- `Include/GameLogic/Module/SpawnPointProductionExitUpdate.h` - Spawn points
- `Include/GameLogic/Module/SupplyCenterDockUpdate.h` - Supply docking
- `Include/GameLogic/Module/SupplyCenterProductionExitUpdate.h` - Supply production

## Crate System Modules
- `Include/GameLogic/Module/CrateCollide.h` - Base crate collision
- `Include/GameLogic/Module/HealCrateCollide.h` - Healing crates
- `Include/GameLogic/Module/MoneyCrateCollide.h` - Money crates
- `Include/GameLogic/Module/SalvageCrateCollide.h` - Salvage crates
- `Include/GameLogic/Module/ShroudCrateCollide.h` - Shroud crates
- `Include/GameLogic/Module/UnitCrateCollide.h` - Unit crates
- `Include/GameLogic/Module/VeterancyCrateCollide.h` - Veterancy crates

## Upgrade & Enhancement

- `Include/GameLogic/Module/ActiveShroudUpgrade.h` - Active shroud
- `Include/GameLogic/Module/ArmorUpgrade.h` - Armor improvements
- `Include/GameLogic/Module/CommandSetUpgrade.h` - Command sets
- `Include/GameLogic/Module/CostModifierUpgrade.h` - Cost changes
- `Include/GameLogic/Module/ExperienceScalarUpgrade.h` - XP gains
- `Include/GameLogic/Module/GrantScienceUpgrade.h` - Science upgrades
- `Include/GameLogic/Module/GrantUpgradeCreate.h` - Grant upgrades
- `Include/GameLogic/Module/MaxHealthUpgrade.h` - Health boost
- `Include/GameLogic/Module/ModelConditionUpgrade.h` - Visual states
- `Include/GameLogic/Module/PowerPlantUpgrade.h` - Power output
- `Include/GameLogic/Module/RadarUpgrade.h` - Radar range
- `Include/GameLogic/Module/StealthUpgrade.h` - Stealth ability
- `Include/GameLogic/Module/WeaponSetUpgrade.h` - Weapon upgrades
- `Source/GameLogic/Module/ActiveShroudUpgrade.cpp`
- `Source/GameLogic/Module/ArmorUpgrade.cpp`

## Vehicle & Transport Systems

- `Include/GameLogic/Module/TransportContain.h` - Transport capacity
- `Include/GameLogic/Module/GarrisonContain.h` - Building garrison
- `Include/GameLogic/Module/HelixContain.h` - Helix transport
- `Include/GameLogic/Module/OverlordContain.h` - Overlord transport
- `Include/GameLogic/Module/ParachuteContain.h` - Paradrop system
- `Include/GameLogic/Module/RailedTransportContain.h` - Train transport

## Structure & Building Modules

- `Include/GameLogic/Module/BridgeScaffoldBehavior.h` - Bridge scaffolding
- `Include/GameLogic/Module/BridgeTowerBehavior.h` - Bridge towers
- `Include/GameLogic/Module/ParkingPlaceBehavior.h` - Vehicle parking
- `Include/GameLogic/Module/RebuildHoleBehavior.h` - Hole rebuilding
- `Include/GameLogic/Module/StructureCollapseUpdate.h` - Building collapse
- `Include/GameLogic/Module/StructureToppleUpdate.h` - Building toppling
- `Include/GameLogic/Module/BridgeBehavior.h` - Bridge mechanics
- `Include/GameLogic/Module/FlightDeckBehavior.h` - Air field
- `Include/GameLogic/Module/HiveStructureBody.h` - Hive building
- `Include/GameLogic/Module/PowerPlantUpdate.h` - Power generation
- `Include/GameLogic/Module/PrisonBehavior.h` - Prison mechanics
- `Include/GameLogic/Module/PropagandaCenterBehavior.h` - Propaganda
- `Include/GameLogic/Module/StructureBody.h` - Base structure
- `Include/GameLogic/Module/SupplyCenterCreate.h` - Supply depot
- `Include/GameLogic/Module/TechBuildingBehavior.h` - Tech structures

## Upgrade & Enhancement Modules

- `Include/GameLogic/Module/ArmorUpgrade.h` - Armor improvements
- `Include/GameLogic/Module/CommandSetUpgrade.h` - Command sets
- `Include/GameLogic/Module/CostModifierUpgrade.h` - Cost changes
- `Include/GameLogic/Module/ExperienceScalarUpgrade.h` - XP gains
- `Include/GameLogic/Module/GrantUpgradeCreate.h` - Grant upgrades
- `Include/GameLogic/Module/MaxHealthUpgrade.h` - Health boost
- `Include/GameLogic/Module/ModelConditionUpgrade.h` - Visual states
- `Include/GameLogic/Module/PowerPlantUpgrade.h` - Power output
- `Include/GameLogic/Module/RadarUpgrade.h` - Radar range
- `Include/GameLogic/Module/StealthUpgrade.h` - Stealth ability
- `Include/GameLogic/Module/WeaponSetUpgrade.h` - Weapon upgrades

## Object Systems

- `ExperienceTracker.h` - Experience point tracking
- `FPUControl.h` - Floating point unit control
- `GhostObject.h` - Ghost/placeholder objects
- `LogicRandomValue.h` - Randomization for game logic
- `ObjectScriptStatusBits.h` - Object script status flags
- `PolygonTrigger.h` - Polygon-based trigger areas
- `ScriptActions.h` - Script action definitions
- `SidesList.h` - Game sides/factions

## Object Updates

Object-specific update implementations:

- `OCLUpdate.cpp` - Object Control Loop implementation
- `ParticleUplinkCannonUpdate.cpp` - Particle effects for uplink cannon
- `PilotFindVehicleUpdate.cpp` - Pilot AI for finding vehicles
- `PointDefenseLaserUpdate.cpp` - Point defense laser behavior
- `SlavedUpdate.cpp` - Slaved object update implementation
- `SmartBombTargetHomingUpdate.cpp` - Smart bomb homing logic
- `SpecialAbilityUpdate.cpp` - Special ability update implementation
- `SpecialPowerUpdateModule.cpp` - Special power module implementation
- `SpectreGunshipDeploymentUpdate.cpp` - Spectre gunship deployment logic
- `SpectreGunshipUpdate.cpp` - Spectre gunship behavior updates
- `SpyVisionUpdate.cpp` - Spy vision functionality implementation
- `StealthDetectorUpdate.cpp` - Stealth unit detection implementation

## Special Updates
- `Include/GameLogic/Module/CheckpointUpdate.h` - Checkpoints
- `Include/GameLogic/Module/DeletionUpdate.h` - Object deletion
- `Include/GameLogic/Module/DynamicGeometryInfoUpdate.h` - Geometry updates
- `Include/GameLogic/Module/FloatUpdate.h` - Floating objects
- `Include/GameLogic/Module/HeightDieUpdate.h` - Height-based death
- `Include/GameLogic/Module/LifetimeUpdate.h` - Object lifetime
- `Include/GameLogic/Module/ProneUpdate.h` - Prone movement
- `Include/GameLogic/Module/RadarUpdate.h` - Radar system
- `Include/GameLogic/Module/RadiusDecalUpdate.h` - Decal updates
- `Include/GameLogic/Module/StealthUpdate.h` - Stealth system
- `Include/GameLogic/Module/TensileFormationUpdate.h` - Formation system
- `Include/GameLogic/Module/ToppleUpdate.h` - Toppling physics
- `Include/GameLogic/Module/WaveGuideUpdate.h` - Wave effect
- `Include/GameLogic/Module/DockUpdate.h` - Docking functionality
- `Include/GameLogic/Module/DynamicShroudClearingRangeUpdate.h` - Fog of war updates

## Behaviors & Special Abilities

- `GrantStealthBehavior.h/.cpp` - Grants stealth capability to units
- `MinefieldBehavior.h/.cpp` - Controls minefield behavior and damage
- `OverchargeBehavior.h/.cpp` - Implements overcharge weapon functionality
- `POWTruckBehavior.h/.cpp` - POW truck special behavior
- `PropagandaTowerBehavior.h/.cpp` - Propaganda tower buff effects
- `SpawnBehavior.h/.cpp` - Controls unit spawning mechanics
- `SupplyWarehouseCripplingBehavior.h/.cpp` - Damaged supply warehouse effects

## Container Systems

- `HealContain.h/.cpp` - Healing container functionality
- `InternetHackContain.h/.cpp` - Internet Center hack mechanics
- `MobNexusContain.h/.cpp` - Mob rally point system
- `OpenContain.h/.cpp` - Generic container system
- `RiderChangeContain.h/.cpp` - Unit rider swap mechanics
- `TunnelContain.h/.cpp` - Tunnel network transport system

## Create & Initialization

- `LockWeaponCreate.h/.cpp` - Locked weapon initialization
- `PreorderCreate.h/.cpp` - Pre-order bonus unit creation
- `SpecialPowerCreate.h/.cpp` - Special power initialization
- `SupplyWarehouseCreate.h/.cpp` - Supply warehouse setup
- `VeterancyGainCreate.h/.cpp` - Veteran status initialization

## Upgrade Systems

- `LocomotorSetUpgrade.h/.cpp` - Movement capability upgrades
- `ObjectCreationUpgrade.h/.cpp` - Object creation modifiers
- `PassengersFireUpgrade.h/.cpp` - Passenger firing capability
- `ReplaceObjectUpgrade.h/.cpp` - Object replacement system
- `StatusBitsUpgrade.h/.cpp` - Status flag modifications
- `SubObjectsUpgrade.h/.cpp` - Sub-component upgrades
- `UnpauseSpecialPowerUpgrade.h/.cpp` - Special power cooldown reset
- `WeaponBonusUpgrade.h/.cpp` - Weapon enhancement system

## Helper Modules

- `ObjectDefectionHelper.h/.cpp` - Unit defection mechanics
- `ObjectHelper.h/.cpp` - General object utility functions
- `ObjectRepulsorHelper.h/.cpp` - Object repulsion mechanics
- `ObjectSMCHelper.h/.cpp` - State Machine Control helper
- `ObjectWeaponStatusHelper.h/.cpp` - Weapon status utility
- `TempWeaponBonusHelper.h/.cpp` - Temporary weapon bonus

## Death & Destruction

- `HelicopterSlowDeathUpdate.h/.cpp` - Helicopter crash sequence
- `NeutronMissileSlowDeathUpdate.h/.cpp` - Neutron missile effects
- `RebuildHoleExposeDie.h/.cpp` - Structure rebuild hole mechanics
- `UndeadBody.h/.cpp` - Corpse/wreckage handling

## Specialized Updates

- `HijackerUpdate.h/.cpp` - Vehicle hijacking mechanics
- `HordeUpdate.h/.cpp` - Horde bonus implementation
- `MissileLauncherBuildingUpdate.h/.cpp` - Missile silo behavior
- `MobMemberSlavedUpdate.h/.cpp` - Mob unit control
- `Source/GameLogic/Object/SimpleObjectIterator.cpp`
- `Source/GameLogic/Object/Update/BaseRenerateUpdate.cpp`

## Docking Systems

- `PrisonDockUpdate.h/.cpp` - Prison building docking
- `RailedTransportDockUpdate.h/.cpp` - Rail transport docking
- `RepairDockUpdate.h/.cpp` - Repair facility docking
- `SupplyWarehouseDockUpdate.h/.cpp` - Supply collection docking

## Sabotage Crate Effects

- `SabotageCommandCenterCrateCollide.h/.cpp` - Command center sabotage
- `SabotageInternetCenterCrateCollide.h/.cpp` - Internet center sabotage
- `SabotageMilitaryFactoryCrateCollide.h/.cpp` - War factory sabotage
- `SabotagePowerPlantCrateCollide.h/.cpp` - Power plant sabotage
- `SabotageSuperweaponCrateCollide.h/.cpp` - Superweapon sabotage
- `SabotageSupplyCenterCrateCollide.h/.cpp` - Supply center sabotage
- `SabotageSupplyDropzoneCrateCollide.h/.cpp` - Supply dropzone sabotage

## Physics & Collision

- `SquishCollide.h/.cpp` - Unit crushing mechanics

## Special Power System

- `SpecialPowerModule.h/.cpp` - Core special power implementation

## Source Implementation Files

### Behavior Implementations
- `Source/GameLogic/Object/Behavior/GrantStealthBehavior.cpp` - Stealth granting behavior
- `Source/GameLogic/Object/Behavior/MinefieldBehavior.cpp` - Minefield behavior
- `Source/GameLogic/Object/Behavior/OverchargeBehavior.cpp` - Overcharge effects
- `Source/GameLogic/Object/Behavior/POWTruckBehavior.cpp` - POW truck actions
- `Source/GameLogic/Object/Behavior/PropagandaTowerBehavior.cpp` - Propaganda tower
- `Source/GameLogic/Object/Behavior/SpawnBehavior.cpp` - Unit spawning
- `Source/GameLogic/Object/Behavior/SupplyWarehouseCripplingBehavior.cpp` - Damaged supply depot

### Container System Implementations
- `Source/GameLogic/Object/Contain/HealContain.cpp` - Healing container
- `Source/GameLogic/Object/Contain/InternetHackContain.cpp` - Internet hacking
- `Source/GameLogic/Object/Contain/MobNexusContain.cpp` - Mob nexus
- `Source/GameLogic/Object/Contain/OpenContain.cpp` - Generic container
- `Source/GameLogic/Object/Contain/RiderChangeContain.cpp` - Rider swapping
- `Source/GameLogic/Object/Contain/TunnelContain.cpp` - Tunnel network

### Creation System Implementations
- `Source/GameLogic/Object/Create/LockWeaponCreate.cpp` - Locked weapon creation
- `Source/GameLogic/Object/Create/PreorderCreate.cpp` - Pre-order unit creation
- `Source/GameLogic/Object/Create/SpecialPowerCreate.cpp` - Special power creation
- `Source/GameLogic/Object/Create/SupplyWarehouseCreate.cpp` - Supply warehouse setup
- `Source/GameLogic/Object/Create/VeterancyGainCreate.cpp` - Veteran status creation

### Upgrade System Implementations
- `Source/GameLogic/Object/Upgrade/LocomotorSetUpgrade.cpp` - Movement upgrades
- `Source/GameLogic/Object/Upgrade/ObjectCreationUpgrade.cpp` - Creation upgrades
- `Source/GameLogic/Object/Upgrade/PassengersFireUpgrade.cpp` - Passenger firing
- `Source/GameLogic/Object/Upgrade/ReplaceObjectUpgrade.cpp` - Object replacement
- `Source/GameLogic/Object/Upgrade/StatusBitsUpgrade.cpp` - Status bit changes
- `Source/GameLogic/Object/Upgrade/SubObjectsUpgrade.cpp` - Sub-object upgrades
- `Source/GameLogic/Object/Upgrade/UnpauseSpecialPowerUpgrade.cpp` - Power cooldown reset
- `Source/GameLogic/Object/Upgrade/WeaponBonusUpgrade.cpp` - Weapon enhancement

### Utility Helpers
- `Source/GameLogic/Object/Helper/ObjectDefectionHelper.cpp` - Defection system
- `Source/GameLogic/Object/Helper/ObjectHelper.cpp` - General object utilities
- `Source/GameLogic/Object/Helper/ObjectRepulsorHelper.cpp` - Object repulsion
- `Source/GameLogic/Object/Helper/ObjectSMCHelper.cpp` - State machine control
- `Source/GameLogic/Object/Helper/ObjectWeaponStatusHelper.cpp` - Weapon status
- `Source/GameLogic/Object/Helper/TempWeaponBonusHelper.cpp` - Temporary bonuses

### Update System Implementations
- `Source/GameLogic/Object/Update/HelicopterSlowDeathUpdate.cpp` - Helicopter death
- `Source/GameLogic/Object/Update/HijackerUpdate.cpp` - Hijacker behavior 
- `Source/GameLogic/Object/Update/HordeUpdate.cpp` - Horde bonuses
- `Source/GameLogic/Object/Update/MissileLauncherBuildingUpdate.cpp` - Missile silo
- `Source/GameLogic/Object/Update/MobMemberSlavedUpdate.cpp` - Mob member control
- `Source/GameLogic/Object/Update/NeutronMissileSlowDeathUpdate.cpp` - Neutron missile death

### Dock System Implementations
- `Source/GameLogic/Object/Update/DockUpdate/PrisonDockUpdate.cpp` - Prison docking
- `Source/GameLogic/Object/Update/DockUpdate/RailedTransportDockUpdate.cpp` - Rail transport
- `Source/GameLogic/Object/Update/DockUpdate/RepairDockUpdate.cpp` - Repair docking
- `Source/GameLogic/Object/Update/DockUpdate/SupplyWarehouseDockUpdate.cpp` - Supply docking

### Collision System
- `Source/GameLogic/Object/Collide/SquishCollide.cpp` - Unit crushing logic

### Death System
- `Source/GameLogic/Object/Die/RebuildHoleExposeDie.cpp` - Structure rebuild hole

### Corpse System
- `Source/GameLogic/Object/Body/UndeadBody.cpp` - Corpse/wreckage handling

### Special Powers
- `Source/GameLogic/Object/SpecialPower/SpecialPowerModule.cpp` - Special power system

### Sabotage Crate Implementations
- `Source/GameLogic/Object/Collide/CrateCollide/SabotageCommandCenterCrateCollide.cpp` - Command center sabotage
- `Source/GameLogic/Object/Collide/CrateCollide/SabotageInternetCenterCrateCollide.cpp` - Internet center sabotage
- `Source/GameLogic/Object/Collide/CrateCollide/SabotageMilitaryFactoryCrateCollide.cpp` - War factory sabotage
- `Source/GameLogic/Object/Collide/CrateCollide/SabotagePowerPlantCrateCollide.cpp` - Power plant sabotage
- `Source/GameLogic/Object/Collide/CrateCollide/SabotageSuperweaponCrateCollide.cpp` - Superweapon sabotage
- `Source/GameLogic/Object/Collide/CrateCollide/SabotageSupplyCenterCrateCollide.cpp` - Supply center sabotage
- `Source/GameLogic/Object/Collide/CrateCollide/SabotageSupplyDropzoneCrateCollide.cpp` - Supply dropzone sabotage

## Core Logic Implementation
- `Source/GameLogic/Object/SimpleObjectIterator.cpp` - Object iteration
- `Source/GameLogic/Object/Update/BaseRenerateUpdate.cpp` - Base regeneration


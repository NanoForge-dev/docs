# @nanoforge-dev/ecs-lib

## Classes

### `abstract` AbstractECSLibrary

Defined in: [src/ecs-library.abstract.ts:18](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L18)

Abstract class representing an ECS (Entity Component System) library.
Extends the BaseComponentSystemLibrary to provide ECS-specific functionality.
Manages a registry of systems and ensures proper initialization before use.

 AbstractECSLibrary

#### Extends

- [`Component`](ecs-client.md#component)

#### Constructors

##### Constructor

```ts
protected new AbstractECSLibrary(): AbstractECSLibrary;
```

Defined in: [src/ecs-library.abstract.ts:24](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L24)

###### Returns

[`AbstractECSLibrary`](#abstractecslibrary)

###### Overrides

```ts
BaseComponentSystemLibrary.constructor
```

#### Properties

##### \_registry?

```ts
protected optional _registry: Registry;
```

Defined in: [src/ecs-library.abstract.ts:20](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L20)

##### module?

```ts
protected optional module: MainModule;
```

Defined in: [src/ecs-library.abstract.ts:19](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L19)

##### path

```ts
protected path: string;
```

Defined in: [src/ecs-library.abstract.ts:22](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L22)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [src/ecs-library.abstract.ts:31](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L31)

###### Returns

`string`

##### registry

###### Get Signature

```ts
get registry(): Registry;
```

Defined in: [src/ecs-library.abstract.ts:48](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L48)

Gets the registry.

###### Throws

Will throw an error if the library is not initialized.

###### Returns

[`Registry`](#registry-1)

The registry.

#### Methods

##### \_\_run()

```ts
__run(ctx): Promise<void>;
```

Defined in: [src/ecs-library.abstract.ts:38](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/ecs-library.abstract.ts#L38)

Runs the ECS systems using the provided context.

###### Parameters

###### ctx

`Context`

The context to be used for running the systems.

###### Returns

`Promise`\<`void`\>

A promise that resolves when the systems have been run.

## Interfaces

### Registry

Defined in: [lib/libecs.d.ts:47](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L47)

#### Extends

- `ClassHandle`

#### Methods

##### \[dispose\]()

```ts
dispose: void;
```

Defined in: [lib/libecs.d.ts:16](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L16)

###### Returns

`void`

###### Inherited from

```ts
ClassHandle.[dispose]
```

##### addComponent()

```ts
addComponent(_0, _1): any;
```

Defined in: [lib/libecs.d.ts:63](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L63)

###### Parameters

###### \_0

`Entity`

###### \_1

[`Component`](#component)

###### Returns

`any`

##### addSystem()

```ts
addSystem(_0): void;
```

Defined in: [lib/libecs.d.ts:56](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L56)

###### Parameters

###### \_0

[`System`](#system)

###### Returns

`void`

##### clearEntities()

```ts
clearEntities(): void;
```

Defined in: [lib/libecs.d.ts:54](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L54)

###### Returns

`void`

##### clearSystems()

```ts
clearSystems(): void;
```

Defined in: [lib/libecs.d.ts:57](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L57)

###### Returns

`void`

##### clone()

```ts
clone(): this;
```

Defined in: [lib/libecs.d.ts:17](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L17)

###### Returns

`this`

###### Inherited from

```ts
ClassHandle.clone
```

##### delete()

```ts
delete(): void;
```

Defined in: [lib/libecs.d.ts:12](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L12)

###### Returns

`void`

###### Inherited from

```ts
ClassHandle.delete
```

##### deleteLater()

```ts
deleteLater(): this;
```

Defined in: [lib/libecs.d.ts:13](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L13)

###### Returns

`this`

###### Inherited from

```ts
ClassHandle.deleteLater
```

##### entityFromIndex()

```ts
entityFromIndex(_0): Entity;
```

Defined in: [lib/libecs.d.ts:58](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L58)

###### Parameters

###### \_0

`number`

###### Returns

`Entity`

##### getComponents()

```ts
getComponents(_0): SparseArray;
```

Defined in: [lib/libecs.d.ts:50](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L50)

###### Parameters

###### \_0

[`Component`](#component)

###### Returns

`SparseArray`

##### getComponentsConst()

```ts
getComponentsConst(_0): SparseArray;
```

Defined in: [lib/libecs.d.ts:49](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L49)

###### Parameters

###### \_0

[`Component`](#component)

###### Returns

`SparseArray`

##### getEntityComponent()

```ts
getEntityComponent(_0, _1): any;
```

Defined in: [lib/libecs.d.ts:62](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L62)

###### Parameters

###### \_0

`Entity`

###### \_1

[`Component`](#component)

###### Returns

`any`

##### getEntityComponentConst()

```ts
getEntityComponentConst(_0, _1): any;
```

Defined in: [lib/libecs.d.ts:61](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L61)

###### Parameters

###### \_0

`Entity`

###### \_1

[`Component`](#component)

###### Returns

`any`

##### getZipper()

```ts
getZipper(_0): any[];
```

Defined in: [lib/libecs.d.ts:52](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L52)

###### Parameters

###### \_0

[`Component`](#component)[]

###### Returns

`any`[]

##### isAliasOf()

```ts
isAliasOf(other): boolean;
```

Defined in: [lib/libecs.d.ts:11](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L11)

###### Parameters

###### other

`ClassHandle`

###### Returns

`boolean`

###### Inherited from

```ts
ClassHandle.isAliasOf
```

##### isDeleted()

```ts
isDeleted(): boolean;
```

Defined in: [lib/libecs.d.ts:14](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L14)

###### Returns

`boolean`

###### Inherited from

```ts
ClassHandle.isDeleted
```

##### killEntity()

```ts
killEntity(_0): void;
```

Defined in: [lib/libecs.d.ts:53](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L53)

###### Parameters

###### \_0

`Entity`

###### Returns

`void`

##### maxEntities()

```ts
maxEntities(): number;
```

Defined in: [lib/libecs.d.ts:60](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L60)

###### Returns

`number`

##### registerComponent()

```ts
registerComponent(_0): SparseArray;
```

Defined in: [lib/libecs.d.ts:48](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L48)

###### Parameters

###### \_0

[`Component`](#component)

###### Returns

`SparseArray`

##### removeComponent()

```ts
removeComponent(_0, _1): void;
```

Defined in: [lib/libecs.d.ts:55](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L55)

###### Parameters

###### \_0

`Entity`

###### \_1

[`Component`](#component)

###### Returns

`void`

##### removeSystem()

```ts
removeSystem(_0): void;
```

Defined in: [lib/libecs.d.ts:59](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L59)

###### Parameters

###### \_0

`number`

###### Returns

`void`

##### runSystems()

```ts
runSystems(_0): void;
```

Defined in: [lib/libecs.d.ts:64](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L64)

###### Parameters

###### \_0

`any`

###### Returns

`void`

##### spawnEntity()

```ts
spawnEntity(): Entity;
```

Defined in: [lib/libecs.d.ts:51](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L51)

###### Returns

`Entity`

## Type Aliases

### Component

```ts
type Component = object;
```

Defined in: [lib/libecs.d.ts:3](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L3)

#### Indexable

```ts
[key: string]: any
```

#### Properties

##### name

```ts
name: string;
```

Defined in: [lib/libecs.d.ts:3](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L3)

***

### EditorComponentManifest

```ts
type EditorComponentManifest = object;
```

Defined in: [src/editor-manifest.type.ts:100](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L100)

Manifest for a component to be used in the NanoForge Editor

#### Properties

##### description?

```ts
optional description: string;
```

Defined in: [src/editor-manifest.type.ts:109](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L109)

Description of the component

##### name

```ts
name: string;
```

Defined in: [src/editor-manifest.type.ts:104](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L104)

Displayed name of the component

##### params

```ts
params: Record<string, ECSElement>;
```

Defined in: [src/editor-manifest.type.ts:114](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L114)

Parameters of the component

***

### EditorSystemManifest

```ts
type EditorSystemManifest = object;
```

Defined in: [src/editor-manifest.type.ts:120](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L120)

Manifest for a system to be used in the NanoForge Editor

#### Properties

##### dependencies

```ts
dependencies: string[];
```

Defined in: [src/editor-manifest.type.ts:134](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L134)

Component names needed by the system

##### description?

```ts
optional description: string;
```

Defined in: [src/editor-manifest.type.ts:129](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L129)

Description of the system

##### name

```ts
name: string;
```

Defined in: [src/editor-manifest.type.ts:124](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/src/editor-manifest.type.ts#L124)

Displayed name of the system

***

### System()

```ts
type System = (registry, ctx) => void;
```

Defined in: [lib/libecs.d.ts:5](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-lib/lib/libecs.d.ts#L5)

#### Parameters

##### registry

[`Registry`](#registry-1)

##### ctx

[`Component`](ecs-client.md#component)

#### Returns

`void`

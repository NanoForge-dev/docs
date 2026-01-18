# @nanoforge-dev/common

## Enumerations

### DefaultLibrariesEnum

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:19](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L19)

#### Enumeration Members

##### ASSET\_MANAGER

```ts
ASSET_MANAGER: 0;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:20](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L20)

##### COMPONENT\_SYSTEM

```ts
COMPONENT_SYSTEM: 1;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:21](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L21)

##### GRAPHICS

```ts
GRAPHICS: 2;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:22](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L22)

##### INPUT

```ts
INPUT: 3;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L23)

##### MUSIC

```ts
MUSIC: 6;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:26](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L26)

##### NETWORK

```ts
NETWORK: 4;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:24](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L24)

##### SOUND

```ts
SOUND: 5;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:25](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L25)

***

### LibraryStatusEnum

Defined in: [packages/common/src/context/contexts/library.context.ts:1](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/library.context.ts#L1)

#### Enumeration Members

##### CLEAR

```ts
CLEAR: "CLEAR";
```

Defined in: [packages/common/src/context/contexts/library.context.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/library.context.ts#L4)

##### LOADED

```ts
LOADED: "LOADED";
```

Defined in: [packages/common/src/context/contexts/library.context.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/library.context.ts#L3)

##### UNLOADED

```ts
UNLOADED: "UNLOADED";
```

Defined in: [packages/common/src/context/contexts/library.context.ts:2](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/library.context.ts#L2)

## Classes

### `abstract` ApplicationContext

Defined in: [packages/common/src/context/contexts/application.context.ts:1](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/application.context.ts#L1)

#### Constructors

##### Constructor

```ts
new ApplicationContext(): ApplicationContext;
```

###### Returns

[`ApplicationContext`](#applicationcontext)

#### Properties

##### \_delta

```ts
protected _delta: number;
```

Defined in: [packages/common/src/context/contexts/application.context.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/application.context.ts#L3)

#### Accessors

##### delta

###### Get Signature

```ts
get delta(): number;
```

Defined in: [packages/common/src/context/contexts/application.context.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/application.context.ts#L9)

###### Returns

`number`

##### isRunning

###### Get Signature

```ts
get isRunning(): boolean;
```

Defined in: [packages/common/src/context/contexts/application.context.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/application.context.ts#L5)

###### Returns

`boolean`

#### Methods

##### muteSoundLibraries()

```ts
abstract muteSoundLibraries(): void;
```

Defined in: [packages/common/src/context/contexts/application.context.ts:17](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/application.context.ts#L17)

###### Returns

`void`

##### setIsRunning()

```ts
setIsRunning(value): void;
```

Defined in: [packages/common/src/context/contexts/application.context.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/application.context.ts#L13)

###### Parameters

###### value

`boolean`

###### Returns

`void`

***

### `abstract` BaseAssetManagerLibrary

Defined in: [packages/common/src/library/libraries/abstracts/asset-manager.library.abstract.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/asset-manager.library.abstract.ts#L6)

#### Extends

- `Library`

#### Implements

- [`IAssetManagerLibrary`](#iassetmanagerlibrary)

#### Constructors

##### Constructor

```ts
new BaseAssetManagerLibrary(rawOptions?): BaseAssetManagerLibrary;
```

Defined in: [packages/common/src/library/libraries/library.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L10)

###### Parameters

###### rawOptions?

`Partial`\<`ILibraryOptions`\>

###### Returns

[`BaseAssetManagerLibrary`](#baseassetmanagerlibrary)

###### Inherited from

```ts
Library.constructor
```

#### Properties

##### \_relationship

```ts
protected _relationship: RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L8)

###### Inherited from

```ts
Library._relationship
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.ts:27](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L27)

###### Returns

`string`

###### Implementation of

[`IAssetManagerLibrary`](#iassetmanagerlibrary).[`__name`](#__name-7)

###### Inherited from

```ts
Library.__name
```

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L23)

###### Returns

`RelationshipHandler`

###### Implementation of

[`IAssetManagerLibrary`](#iassetmanagerlibrary).[`__relationship`](#__relationship-7)

###### Inherited from

```ts
Library.__relationship
```

#### Methods

##### \_\_clear()

```ts
__clear(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:33](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L33)

###### Parameters

###### \_context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IAssetManagerLibrary`](#iassetmanagerlibrary).[`__clear`](#__clear-14)

###### Inherited from

```ts
Library.__clear
```

##### \_\_init()

```ts
abstract __init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/abstracts/asset-manager.library.abstract.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/asset-manager.library.abstract.ts#L7)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IAssetManagerLibrary`](#iassetmanagerlibrary).[`__init`](#__init-14)

###### Overrides

```ts
Library.__init
```

##### getAsset()

```ts
abstract getAsset(path): NfFile;
```

Defined in: [packages/common/src/library/libraries/abstracts/asset-manager.library.abstract.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/asset-manager.library.abstract.ts#L9)

###### Parameters

###### path

`string`

###### Returns

[`NfFile`](#nffile)

###### Implementation of

[`IAssetManagerLibrary`](#iassetmanagerlibrary).[`getAsset`](#getasset-2)

##### throwNotInitializedError()

```ts
protected throwNotInitializedError(): never;
```

Defined in: [packages/common/src/library/libraries/library.ts:35](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L35)

###### Returns

`never`

###### Inherited from

```ts
Library.throwNotInitializedError
```

***

### `abstract` BaseComponentSystemLibrary

Defined in: [packages/common/src/library/libraries/abstracts/component-system.library.abstract.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/component-system.library.abstract.ts#L5)

#### Extends

- `Library`

#### Implements

- [`IComponentSystemLibrary`](#icomponentsystemlibrary)

#### Constructors

##### Constructor

```ts
new BaseComponentSystemLibrary(rawOptions?): BaseComponentSystemLibrary;
```

Defined in: [packages/common/src/library/libraries/library.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L10)

###### Parameters

###### rawOptions?

`Partial`\<`ILibraryOptions`\>

###### Returns

[`BaseComponentSystemLibrary`](#basecomponentsystemlibrary)

###### Inherited from

```ts
Library.constructor
```

#### Properties

##### \_relationship

```ts
protected _relationship: RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L8)

###### Inherited from

```ts
Library._relationship
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.ts:27](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L27)

###### Returns

`string`

###### Implementation of

[`IComponentSystemLibrary`](#icomponentsystemlibrary).[`__name`](#__name-8)

###### Inherited from

```ts
Library.__name
```

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L23)

###### Returns

`RelationshipHandler`

###### Implementation of

[`IComponentSystemLibrary`](#icomponentsystemlibrary).[`__relationship`](#__relationship-8)

###### Inherited from

```ts
Library.__relationship
```

#### Methods

##### \_\_clear()

```ts
__clear(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:33](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L33)

###### Parameters

###### \_context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IComponentSystemLibrary`](#icomponentsystemlibrary).[`__clear`](#__clear-16)

###### Inherited from

```ts
Library.__clear
```

##### \_\_init()

```ts
__init(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:30](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L30)

###### Parameters

###### \_context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IComponentSystemLibrary`](#icomponentsystemlibrary).[`__init`](#__init-16)

###### Inherited from

```ts
Library.__init
```

##### \_\_run()

```ts
abstract __run(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/abstracts/component-system.library.abstract.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/component-system.library.abstract.ts#L9)

###### Parameters

###### context

[`Context`](#context)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IComponentSystemLibrary`](#icomponentsystemlibrary).[`__run`](#__run-4)

##### throwNotInitializedError()

```ts
protected throwNotInitializedError(): never;
```

Defined in: [packages/common/src/library/libraries/library.ts:35](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L35)

###### Returns

`never`

###### Inherited from

```ts
Library.throwNotInitializedError
```

***

### `abstract` BaseGraphicsLibrary

Defined in: [packages/common/src/library/libraries/abstracts/graphics.library.abstract.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/graphics.library.abstract.ts#L5)

#### Extends

- `Library`

#### Implements

- [`IGraphicsLibrary`](#igraphicslibrary)

#### Constructors

##### Constructor

```ts
new BaseGraphicsLibrary(rawOptions?): BaseGraphicsLibrary;
```

Defined in: [packages/common/src/library/libraries/library.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L10)

###### Parameters

###### rawOptions?

`Partial`\<`ILibraryOptions`\>

###### Returns

[`BaseGraphicsLibrary`](#basegraphicslibrary)

###### Inherited from

```ts
Library.constructor
```

#### Properties

##### \_relationship

```ts
protected _relationship: RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L8)

###### Inherited from

```ts
Library._relationship
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.ts:27](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L27)

###### Returns

`string`

###### Implementation of

[`IGraphicsLibrary`](#igraphicslibrary).[`__name`](#__name-10)

###### Inherited from

```ts
Library.__name
```

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L23)

###### Returns

`RelationshipHandler`

###### Implementation of

[`IGraphicsLibrary`](#igraphicslibrary).[`__relationship`](#__relationship-10)

###### Inherited from

```ts
Library.__relationship
```

#### Methods

##### \_\_clear()

```ts
__clear(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:33](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L33)

###### Parameters

###### \_context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IGraphicsLibrary`](#igraphicslibrary).[`__clear`](#__clear-20)

###### Inherited from

```ts
Library.__clear
```

##### \_\_init()

```ts
__init(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:30](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L30)

###### Parameters

###### \_context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IGraphicsLibrary`](#igraphicslibrary).[`__init`](#__init-20)

###### Inherited from

```ts
Library.__init
```

##### \_\_run()

```ts
abstract __run(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/abstracts/graphics.library.abstract.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/graphics.library.abstract.ts#L6)

###### Parameters

###### context

[`Context`](#context)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IGraphicsLibrary`](#igraphicslibrary).[`__run`](#__run-6)

##### throwNotInitializedError()

```ts
protected throwNotInitializedError(): never;
```

Defined in: [packages/common/src/library/libraries/library.ts:35](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L35)

###### Returns

`never`

###### Inherited from

```ts
Library.throwNotInitializedError
```

***

### `abstract` BaseInputLibrary

Defined in: [packages/common/src/library/libraries/abstracts/input.library.abstract.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/input.library.abstract.ts#L4)

#### Extends

- `Library`

#### Implements

- [`IInputLibrary`](#iinputlibrary)

#### Constructors

##### Constructor

```ts
new BaseInputLibrary(rawOptions?): BaseInputLibrary;
```

Defined in: [packages/common/src/library/libraries/library.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L10)

###### Parameters

###### rawOptions?

`Partial`\<`ILibraryOptions`\>

###### Returns

[`BaseInputLibrary`](#baseinputlibrary)

###### Inherited from

```ts
Library.constructor
```

#### Properties

##### \_relationship

```ts
protected _relationship: RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L8)

###### Inherited from

```ts
Library._relationship
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.ts:27](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L27)

###### Returns

`string`

###### Implementation of

[`IInputLibrary`](#iinputlibrary).[`__name`](#__name-11)

###### Inherited from

```ts
Library.__name
```

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L23)

###### Returns

`RelationshipHandler`

###### Implementation of

[`IInputLibrary`](#iinputlibrary).[`__relationship`](#__relationship-11)

###### Inherited from

```ts
Library.__relationship
```

#### Methods

##### \_\_clear()

```ts
__clear(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:33](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L33)

###### Parameters

###### \_context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IInputLibrary`](#iinputlibrary).[`__clear`](#__clear-22)

###### Inherited from

```ts
Library.__clear
```

##### \_\_init()

```ts
__init(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:30](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L30)

###### Parameters

###### \_context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IInputLibrary`](#iinputlibrary).[`__init`](#__init-22)

###### Inherited from

```ts
Library.__init
```

##### throwNotInitializedError()

```ts
protected throwNotInitializedError(): never;
```

Defined in: [packages/common/src/library/libraries/library.ts:35](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L35)

###### Returns

`never`

###### Inherited from

```ts
Library.throwNotInitializedError
```

***

### `abstract` BaseMusicLibrary

Defined in: [packages/common/src/library/libraries/abstracts/music.library.abstract.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/music.library.abstract.ts#L5)

#### Extends

- `Library`

#### Implements

- [`IMusicLibrary`](#imusiclibrary)

#### Constructors

##### Constructor

```ts
new BaseMusicLibrary(rawOptions?): BaseMusicLibrary;
```

Defined in: [packages/common/src/library/libraries/library.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L10)

###### Parameters

###### rawOptions?

`Partial`\<`ILibraryOptions`\>

###### Returns

[`BaseMusicLibrary`](#basemusiclibrary)

###### Inherited from

```ts
Library.constructor
```

#### Properties

##### \_relationship

```ts
protected _relationship: RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L8)

###### Inherited from

```ts
Library._relationship
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.ts:27](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L27)

###### Returns

`string`

###### Implementation of

[`IMusicLibrary`](#imusiclibrary).[`__name`](#__name-13)

###### Inherited from

```ts
Library.__name
```

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L23)

###### Returns

`RelationshipHandler`

###### Implementation of

[`IMusicLibrary`](#imusiclibrary).[`__relationship`](#__relationship-13)

###### Inherited from

```ts
Library.__relationship
```

#### Methods

##### \_\_clear()

```ts
__clear(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:33](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L33)

###### Parameters

###### \_context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IMusicLibrary`](#imusiclibrary).[`__clear`](#__clear-26)

###### Inherited from

```ts
Library.__clear
```

##### \_\_init()

```ts
abstract __init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/abstracts/music.library.abstract.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/music.library.abstract.ts#L6)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IMusicLibrary`](#imusiclibrary).[`__init`](#__init-26)

###### Overrides

```ts
Library.__init
```

##### mute()

```ts
abstract mute(): void;
```

Defined in: [packages/common/src/library/libraries/abstracts/music.library.abstract.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/music.library.abstract.ts#L13)

mutes or unmutes the sound.

###### Returns

`void`

###### Implementation of

[`IMusicLibrary`](#imusiclibrary).[`mute`](#mute-4)

##### play()

```ts
abstract play(sound): void;
```

Defined in: [packages/common/src/library/libraries/abstracts/music.library.abstract.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/music.library.abstract.ts#L8)

###### Parameters

###### sound

`string`

###### Returns

`void`

##### throwNotInitializedError()

```ts
protected throwNotInitializedError(): never;
```

Defined in: [packages/common/src/library/libraries/library.ts:35](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L35)

###### Returns

`never`

###### Inherited from

```ts
Library.throwNotInitializedError
```

***

### `abstract` BaseNetworkLibrary

Defined in: [packages/common/src/library/libraries/abstracts/network.library.abstract.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/network.library.abstract.ts#L4)

#### Extends

- `Library`

#### Implements

- [`INetworkLibrary`](#inetworklibrary)

#### Constructors

##### Constructor

```ts
new BaseNetworkLibrary(rawOptions?): BaseNetworkLibrary;
```

Defined in: [packages/common/src/library/libraries/library.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L10)

###### Parameters

###### rawOptions?

`Partial`\<`ILibraryOptions`\>

###### Returns

[`BaseNetworkLibrary`](#basenetworklibrary)

###### Inherited from

```ts
Library.constructor
```

#### Properties

##### \_relationship

```ts
protected _relationship: RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L8)

###### Inherited from

```ts
Library._relationship
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.ts:27](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L27)

###### Returns

`string`

###### Implementation of

[`INetworkLibrary`](#inetworklibrary).[`__name`](#__name-15)

###### Inherited from

```ts
Library.__name
```

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L23)

###### Returns

`RelationshipHandler`

###### Implementation of

[`INetworkLibrary`](#inetworklibrary).[`__relationship`](#__relationship-15)

###### Inherited from

```ts
Library.__relationship
```

#### Methods

##### \_\_clear()

```ts
__clear(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:33](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L33)

###### Parameters

###### \_context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`INetworkLibrary`](#inetworklibrary).[`__clear`](#__clear-30)

###### Inherited from

```ts
Library.__clear
```

##### \_\_init()

```ts
__init(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:30](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L30)

###### Parameters

###### \_context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`INetworkLibrary`](#inetworklibrary).[`__init`](#__init-30)

###### Inherited from

```ts
Library.__init
```

##### throwNotInitializedError()

```ts
protected throwNotInitializedError(): never;
```

Defined in: [packages/common/src/library/libraries/library.ts:35](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L35)

###### Returns

`never`

###### Inherited from

```ts
Library.throwNotInitializedError
```

***

### `abstract` BaseSoundLibrary

Defined in: [packages/common/src/library/libraries/abstracts/sound.library.abstract.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/sound.library.abstract.ts#L5)

#### Extends

- `Library`

#### Implements

- [`ISoundLibrary`](#isoundlibrary)

#### Constructors

##### Constructor

```ts
new BaseSoundLibrary(rawOptions?): BaseSoundLibrary;
```

Defined in: [packages/common/src/library/libraries/library.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L10)

###### Parameters

###### rawOptions?

`Partial`\<`ILibraryOptions`\>

###### Returns

[`BaseSoundLibrary`](#basesoundlibrary)

###### Inherited from

```ts
Library.constructor
```

#### Properties

##### \_relationship

```ts
protected _relationship: RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L8)

###### Inherited from

```ts
Library._relationship
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get abstract __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.ts:27](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L27)

###### Returns

`string`

###### Implementation of

[`ISoundLibrary`](#isoundlibrary).[`__name`](#__name-17)

###### Inherited from

```ts
Library.__name
```

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L23)

###### Returns

`RelationshipHandler`

###### Implementation of

[`ISoundLibrary`](#isoundlibrary).[`__relationship`](#__relationship-17)

###### Inherited from

```ts
Library.__relationship
```

#### Methods

##### \_\_clear()

```ts
__clear(_context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.ts:33](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L33)

###### Parameters

###### \_context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`ISoundLibrary`](#isoundlibrary).[`__clear`](#__clear-34)

###### Inherited from

```ts
Library.__clear
```

##### \_\_init()

```ts
abstract __init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/abstracts/sound.library.abstract.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/sound.library.abstract.ts#L6)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`ISoundLibrary`](#isoundlibrary).[`__init`](#__init-34)

###### Overrides

```ts
Library.__init
```

##### mute()

```ts
abstract mute(): void;
```

Defined in: [packages/common/src/library/libraries/abstracts/sound.library.abstract.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/sound.library.abstract.ts#L13)

mutes or unmutes the sound.

###### Returns

`void`

###### Implementation of

[`ISoundLibrary`](#isoundlibrary).[`mute`](#mute-8)

##### play()

```ts
abstract play(sound): void;
```

Defined in: [packages/common/src/library/libraries/abstracts/sound.library.abstract.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/abstracts/sound.library.abstract.ts#L8)

###### Parameters

###### sound

`string`

###### Returns

`void`

##### throwNotInitializedError()

```ts
protected throwNotInitializedError(): never;
```

Defined in: [packages/common/src/library/libraries/library.ts:35](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.ts#L35)

###### Returns

`never`

###### Inherited from

```ts
Library.throwNotInitializedError
```

***

### ClearContext

Defined in: [packages/common/src/context/contexts/executions/clear.context.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/clear.context.ts#L3)

#### Extends

- `BaseContext`

#### Constructors

##### Constructor

```ts
new ClearContext(applicationContext, libraryManager): ClearContext;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L8)

###### Parameters

###### applicationContext

[`ApplicationContext`](#applicationcontext)

###### libraryManager

[`LibraryManager`](#librarymanager)

###### Returns

[`ClearContext`](#clearcontext)

###### Inherited from

```ts
BaseContext.constructor
```

#### Accessors

##### application

###### Get Signature

```ts
get application(): ApplicationContext;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L13)

###### Returns

[`ApplicationContext`](#applicationcontext)

###### Inherited from

```ts
BaseContext.application
```

##### libraries

###### Get Signature

```ts
get libraries(): LibraryManager;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:17](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L17)

###### Returns

[`LibraryManager`](#librarymanager)

###### Inherited from

```ts
BaseContext.libraries
```

***

### ClientLibraryManager

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L13)

#### Constructors

##### Constructor

```ts
new ClientLibraryManager(libraryManager): ClientLibraryManager;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:16](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L16)

###### Parameters

###### libraryManager

[`LibraryManager`](#librarymanager)

###### Returns

[`ClientLibraryManager`](#clientlibrarymanager)

#### Methods

##### get()

```ts
get<T>(sym): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:20](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L20)

###### Type Parameters

###### T

`T` *extends* [`ILibrary`](#ilibrary) = [`ILibrary`](#ilibrary)

###### Parameters

###### sym

`symbol`

###### Returns

`T`

##### getAssetManager()

```ts
getAssetManager<T>(): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:40](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L40)

###### Type Parameters

###### T

`T` *extends* [`IAssetManagerLibrary`](#iassetmanagerlibrary) = [`IAssetManagerLibrary`](#iassetmanagerlibrary)

###### Returns

`T`

##### getComponentSystem()

```ts
getComponentSystem<T>(): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:24](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L24)

###### Type Parameters

###### T

`T` *extends* [`IComponentSystemLibrary`](#icomponentsystemlibrary) = [`IComponentSystemLibrary`](#icomponentsystemlibrary)

###### Returns

`T`

##### getGraphics()

```ts
getGraphics<T>(): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:28](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L28)

###### Type Parameters

###### T

`T` *extends* [`IGraphicsLibrary`](#igraphicslibrary) = [`IGraphicsLibrary`](#igraphicslibrary)

###### Returns

`T`

##### getInput()

```ts
getInput<T>(): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:36](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L36)

###### Type Parameters

###### T

`T` *extends* [`IInputLibrary`](#iinputlibrary) = [`IInputLibrary`](#iinputlibrary)

###### Returns

`T`

##### getMusic()

```ts
getMusic<T>(): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:48](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L48)

###### Type Parameters

###### T

`T` *extends* [`IMusicLibrary`](#imusiclibrary) = [`IMusicLibrary`](#imusiclibrary)

###### Returns

`T`

##### getNetwork()

```ts
getNetwork<T>(): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:32](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L32)

###### Type Parameters

###### T

`T` *extends* [`INetworkLibrary`](#inetworklibrary) = [`INetworkLibrary`](#inetworklibrary)

###### Returns

`T`

##### getSound()

```ts
getSound<T>(): T;
```

Defined in: [packages/common/src/library/manager/managers/client-library.manager.ts:44](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/client-library.manager.ts#L44)

###### Type Parameters

###### T

`T` *extends* [`ISoundLibrary`](#isoundlibrary) = [`ISoundLibrary`](#isoundlibrary)

###### Returns

`T`

***

### Context

Defined in: [packages/common/src/context/contexts/client.context.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/client.context.ts#L4)

#### Constructors

##### Constructor

```ts
new Context(applicationContext, libraryManager): Context;
```

Defined in: [packages/common/src/context/contexts/client.context.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/client.context.ts#L8)

###### Parameters

###### applicationContext

[`ApplicationContext`](#applicationcontext)

###### libraryManager

[`ClientLibraryManager`](#clientlibrarymanager)

###### Returns

[`Context`](#context)

#### Accessors

##### app

###### Get Signature

```ts
get app(): ApplicationContext;
```

Defined in: [packages/common/src/context/contexts/client.context.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/client.context.ts#L13)

###### Returns

[`ApplicationContext`](#applicationcontext)

##### libs

###### Get Signature

```ts
get libs(): ClientLibraryManager;
```

Defined in: [packages/common/src/context/contexts/client.context.ts:17](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/client.context.ts#L17)

###### Returns

[`ClientLibraryManager`](#clientlibrarymanager)

***

### ExecutionContext

Defined in: [packages/common/src/context/contexts/executions/execution.context.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/execution.context.ts#L3)

#### Extends

- `BaseContext`

#### Constructors

##### Constructor

```ts
new ExecutionContext(applicationContext, libraryManager): ExecutionContext;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L8)

###### Parameters

###### applicationContext

[`ApplicationContext`](#applicationcontext)

###### libraryManager

[`LibraryManager`](#librarymanager)

###### Returns

[`ExecutionContext`](#executioncontext)

###### Inherited from

```ts
BaseContext.constructor
```

#### Accessors

##### application

###### Get Signature

```ts
get application(): ApplicationContext;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L13)

###### Returns

[`ApplicationContext`](#applicationcontext)

###### Inherited from

```ts
BaseContext.application
```

##### libraries

###### Get Signature

```ts
get libraries(): LibraryManager;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:17](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L17)

###### Returns

[`LibraryManager`](#librarymanager)

###### Inherited from

```ts
BaseContext.libraries
```

***

### InitContext

Defined in: [packages/common/src/context/contexts/executions/init.context.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/init.context.ts#L6)

#### Extends

- `BaseContext`

#### Constructors

##### Constructor

```ts
new InitContext(
   context, 
   libraryManager, 
   configRegistry, 
   options): InitContext;
```

Defined in: [packages/common/src/context/contexts/executions/init.context.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/init.context.ts#L11)

###### Parameters

###### context

[`ApplicationContext`](#applicationcontext)

###### libraryManager

[`LibraryManager`](#librarymanager)

###### configRegistry

[`IConfigRegistry`](#iconfigregistry)

###### options

[`IRunOptions`](#irunoptions)

###### Returns

[`InitContext`](#initcontext)

###### Overrides

```ts
BaseContext.constructor
```

#### Accessors

##### application

###### Get Signature

```ts
get application(): ApplicationContext;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:13](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L13)

###### Returns

[`ApplicationContext`](#applicationcontext)

###### Inherited from

```ts
BaseContext.application
```

##### canvas

###### Get Signature

```ts
get canvas(): HTMLCanvasElement | undefined;
```

Defined in: [packages/common/src/context/contexts/executions/init.context.ts:24](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/init.context.ts#L24)

###### Returns

`HTMLCanvasElement` \| `undefined`

##### config

###### Get Signature

```ts
get config(): IConfigRegistry;
```

Defined in: [packages/common/src/context/contexts/executions/init.context.ts:32](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/init.context.ts#L32)

###### Returns

[`IConfigRegistry`](#iconfigregistry)

##### files

###### Get Signature

```ts
get files(): Map<string, string>;
```

Defined in: [packages/common/src/context/contexts/executions/init.context.ts:28](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/init.context.ts#L28)

###### Returns

`Map`\<`string`, `string`\>

##### libraries

###### Get Signature

```ts
get libraries(): LibraryManager;
```

Defined in: [packages/common/src/context/contexts/executions/base.context.ts:17](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/executions/base.context.ts#L17)

###### Returns

[`LibraryManager`](#librarymanager)

###### Inherited from

```ts
BaseContext.libraries
```

***

### LibraryContext

Defined in: [packages/common/src/context/contexts/library.context.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/library.context.ts#L7)

#### Constructors

##### Constructor

```ts
new LibraryContext(): LibraryContext;
```

###### Returns

[`LibraryContext`](#librarycontext)

#### Properties

##### \_status

```ts
protected _status: LibraryStatusEnum = LibraryStatusEnum.UNLOADED;
```

Defined in: [packages/common/src/context/contexts/library.context.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/library.context.ts#L8)

#### Accessors

##### status

###### Get Signature

```ts
get status(): LibraryStatusEnum;
```

Defined in: [packages/common/src/context/contexts/library.context.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/context/contexts/library.context.ts#L10)

###### Returns

[`LibraryStatusEnum`](#librarystatusenum)

***

### LibraryHandle

Defined in: [packages/common/src/library/manager/handle/library.handle.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/handle/library.handle.ts#L4)

#### Type Parameters

##### T

`T` *extends* [`ILibrary`](#ilibrary) = [`ILibrary`](#ilibrary)

#### Constructors

##### Constructor

```ts
new LibraryHandle<T>(
   sym, 
   library, 
defaultContext): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/handle/library.handle.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/handle/library.handle.ts#L9)

###### Parameters

###### sym

`symbol`

###### library

`T`

###### defaultContext

[`LibraryContext`](#librarycontext)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

#### Accessors

##### context

###### Get Signature

```ts
get context(): LibraryContext;
```

Defined in: [packages/common/src/library/manager/handle/library.handle.ts:23](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/handle/library.handle.ts#L23)

###### Returns

[`LibraryContext`](#librarycontext)

##### library

###### Get Signature

```ts
get library(): T;
```

Defined in: [packages/common/src/library/manager/handle/library.handle.ts:19](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/handle/library.handle.ts#L19)

###### Returns

`T`

##### symbol

###### Get Signature

```ts
get symbol(): symbol;
```

Defined in: [packages/common/src/library/manager/handle/library.handle.ts:15](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/handle/library.handle.ts#L15)

###### Returns

`symbol`

***

### LibraryManager

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:38](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L38)

#### Extends

- `BaseLibraryManager`

#### Constructors

##### Constructor

```ts
new LibraryManager(): LibraryManager;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:39](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L39)

###### Returns

[`LibraryManager`](#librarymanager)

###### Overrides

```ts
BaseLibraryManager.constructor
```

#### Properties

##### \_libraries

```ts
protected _libraries: LibraryHandle<ILibrary>[] = [];
```

Defined in: [packages/common/src/library/manager/managers/base-library.manager.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/base-library.manager.ts#L6)

###### Inherited from

```ts
BaseLibraryManager._libraries
```

#### Methods

##### \_get()

```ts
protected _get<T>(index, sym?): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/base-library.manager.ts:24](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/base-library.manager.ts#L24)

###### Type Parameters

###### T

`T` *extends* [`ILibrary`](#ilibrary) = [`ILibrary`](#ilibrary)

###### Parameters

###### index

`number`

###### sym?

`symbol`

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

###### Inherited from

```ts
BaseLibraryManager._get
```

##### \_set()

```ts
protected _set(
   index, 
   sym, 
   library, 
   context): void;
```

Defined in: [packages/common/src/library/manager/managers/base-library.manager.ts:30](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/base-library.manager.ts#L30)

###### Parameters

###### index

`number`

###### sym

`symbol`

###### library

[`ILibrary`](#ilibrary)

###### context

[`LibraryContext`](#librarycontext)

###### Returns

`void`

###### Inherited from

```ts
BaseLibraryManager._set
```

##### \_setIndex()

```ts
protected _setIndex(sym, index): void;
```

Defined in: [packages/common/src/library/manager/managers/base-library.manager.ts:34](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/base-library.manager.ts#L34)

###### Parameters

###### sym

`symbol`

###### index

`number`

###### Returns

`void`

###### Inherited from

```ts
BaseLibraryManager._setIndex
```

##### get()

```ts
get<T>(sym): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/base-library.manager.ts:12](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/base-library.manager.ts#L12)

###### Type Parameters

###### T

`T` *extends* [`ILibrary`](#ilibrary) = [`ILibrary`](#ilibrary)

###### Parameters

###### sym

`symbol`

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

###### Todo

Add error management

###### Inherited from

```ts
BaseLibraryManager.get
```

##### getAssetManager()

```ts
getAssetManager<T>(): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:65](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L65)

###### Type Parameters

###### T

`T` *extends* [`IAssetManagerLibrary`](#iassetmanagerlibrary) = [`IAssetManagerLibrary`](#iassetmanagerlibrary)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

##### getComponentSystem()

```ts
getComponentSystem<T>(): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:47](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L47)

###### Type Parameters

###### T

`T` *extends* [`IComponentSystemLibrary`](#icomponentsystemlibrary) = [`IComponentSystemLibrary`](#icomponentsystemlibrary)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

##### getGraphics()

```ts
getGraphics<T>(): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:53](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L53)

###### Type Parameters

###### T

`T` *extends* [`IGraphicsLibrary`](#igraphicslibrary) = [`IGraphicsLibrary`](#igraphicslibrary)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

##### getInput()

```ts
getInput<T>(): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:61](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L61)

###### Type Parameters

###### T

`T` *extends* [`IInputLibrary`](#iinputlibrary) = [`IInputLibrary`](#iinputlibrary)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

##### getMusic()

```ts
getMusic<T>(): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:75](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L75)

###### Type Parameters

###### T

`T` *extends* [`IMusicLibrary`](#imusiclibrary) = [`IMusicLibrary`](#imusiclibrary)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

##### getNetwork()

```ts
getNetwork<T>(): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:57](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L57)

###### Type Parameters

###### T

`T` *extends* [`INetworkLibrary`](#inetworklibrary) = [`INetworkLibrary`](#inetworklibrary)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

##### getSound()

```ts
getSound<T>(): LibraryHandle<T>;
```

Defined in: [packages/common/src/library/manager/managers/library.manager.ts:71](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/library.manager.ts#L71)

###### Type Parameters

###### T

`T` *extends* [`ISoundLibrary`](#isoundlibrary) = [`ISoundLibrary`](#isoundlibrary)

###### Returns

[`LibraryHandle`](#libraryhandle)\<`T`\>

##### setNewLibrary()

```ts
protected setNewLibrary(
   sym, 
   library, 
   context): void;
```

Defined in: [packages/common/src/library/manager/managers/base-library.manager.ts:18](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/manager/managers/base-library.manager.ts#L18)

###### Parameters

###### sym

`symbol`

###### library

[`ILibrary`](#ilibrary)

###### context

[`LibraryContext`](#librarycontext)

###### Returns

`void`

###### Inherited from

```ts
BaseLibraryManager.setNewLibrary
```

***

### NfConfigException

Defined in: [packages/common/src/exception/exceptions/config.exception.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/config.exception.ts#L3)

#### Extends

- `NfException`

#### Constructors

##### Constructor

```ts
new NfConfigException(message, library?): NfConfigException;
```

Defined in: [packages/common/src/exception/exceptions/config.exception.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/config.exception.ts#L8)

###### Parameters

###### message

`string`

###### library?

`string`

###### Returns

[`NfConfigException`](#nfconfigexception)

###### Overrides

```ts
NfException.constructor
```

#### Properties

##### cause?

```ts
optional cause: unknown;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

###### Inherited from

```ts
NfException.cause
```

##### message

```ts
message: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

```ts
NfException.message
```

##### name

```ts
name: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

```ts
NfException.name
```

##### stack?

```ts
optional stack: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

```ts
NfException.stack
```

##### stackTraceLimit

```ts
static stackTraceLimit: number;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:68

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

###### Inherited from

```ts
NfException.stackTraceLimit
```

#### Accessors

##### code

###### Get Signature

```ts
get code(): number;
```

Defined in: [packages/common/src/exception/exceptions/config.exception.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/config.exception.ts#L4)

###### Returns

`number`

###### Overrides

```ts
NfException.code
```

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

```ts
NfException.captureStackTrace
```

##### isError()

```ts
static isError(error): error is Error;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

###### error

`unknown`

###### Returns

`error is Error`

###### Inherited from

```ts
NfException.isError
```

##### prepareStackTrace()

```ts
static prepareStackTrace(err, stackTraces): any;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:56

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

```ts
NfException.prepareStackTrace
```

***

### NfFetchException

Defined in: [packages/common/src/exception/exceptions/fetch.exception.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/fetch.exception.ts#L3)

#### Extends

- `NfException`

#### Constructors

##### Constructor

```ts
new NfFetchException(code, text): NfFetchException;
```

Defined in: [packages/common/src/exception/exceptions/fetch.exception.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/fetch.exception.ts#L10)

###### Parameters

###### code

`number`

###### text

`string`

###### Returns

[`NfFetchException`](#nffetchexception)

###### Overrides

```ts
NfException.constructor
```

#### Properties

##### cause?

```ts
optional cause: unknown;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

###### Inherited from

```ts
NfException.cause
```

##### message

```ts
message: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

```ts
NfException.message
```

##### name

```ts
name: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

```ts
NfException.name
```

##### stack?

```ts
optional stack: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

```ts
NfException.stack
```

##### stackTraceLimit

```ts
static stackTraceLimit: number;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:68

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

###### Inherited from

```ts
NfException.stackTraceLimit
```

#### Accessors

##### code

###### Get Signature

```ts
get code(): number;
```

Defined in: [packages/common/src/exception/exceptions/fetch.exception.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/fetch.exception.ts#L6)

###### Returns

`number`

###### Overrides

```ts
NfException.code
```

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

```ts
NfException.captureStackTrace
```

##### isError()

```ts
static isError(error): error is Error;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

###### error

`unknown`

###### Returns

`error is Error`

###### Inherited from

```ts
NfException.isError
```

##### prepareStackTrace()

```ts
static prepareStackTrace(err, stackTraces): any;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:56

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

```ts
NfException.prepareStackTrace
```

***

### NfFile

Defined in: [packages/common/src/common/file.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L3)

#### Constructors

##### Constructor

```ts
new NfFile(path): NfFile;
```

Defined in: [packages/common/src/common/file.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L6)

###### Parameters

###### path

`string`

###### Returns

[`NfFile`](#nffile)

#### Accessors

##### path

###### Get Signature

```ts
get path(): string;
```

Defined in: [packages/common/src/common/file.ts:10](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L10)

###### Returns

`string`

#### Methods

##### arrayBuffer()

```ts
arrayBuffer(): Promise<ArrayBuffer>;
```

Defined in: [packages/common/src/common/file.ts:14](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L14)

###### Returns

`Promise`\<`ArrayBuffer`\>

##### blob()

```ts
blob(): Promise<Blob>;
```

Defined in: [packages/common/src/common/file.ts:19](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L19)

###### Returns

`Promise`\<`Blob`\>

##### bytes()

```ts
bytes(): Promise<Uint8Array<ArrayBuffer>>;
```

Defined in: [packages/common/src/common/file.ts:24](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L24)

###### Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

##### formData()

```ts
formData(): Promise<FormData>;
```

Defined in: [packages/common/src/common/file.ts:29](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L29)

###### Returns

`Promise`\<`FormData`\>

##### json()

```ts
json(): Promise<any>;
```

Defined in: [packages/common/src/common/file.ts:34](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L34)

###### Returns

`Promise`\<`any`\>

##### text()

```ts
text(): Promise<string>;
```

Defined in: [packages/common/src/common/file.ts:39](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/common/file.ts#L39)

###### Returns

`Promise`\<`string`\>

***

### NfNotFound

Defined in: [packages/common/src/exception/exceptions/not-found.exception.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/not-found.exception.ts#L3)

#### Extends

- `NfException`

#### Constructors

##### Constructor

```ts
new NfNotFound(item, type?): NfNotFound;
```

Defined in: [packages/common/src/exception/exceptions/not-found.exception.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/not-found.exception.ts#L8)

###### Parameters

###### item

`string`

###### type?

`string`

###### Returns

[`NfNotFound`](#nfnotfound)

###### Overrides

```ts
NfException.constructor
```

#### Properties

##### cause?

```ts
optional cause: unknown;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

###### Inherited from

```ts
NfException.cause
```

##### message

```ts
message: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

```ts
NfException.message
```

##### name

```ts
name: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

```ts
NfException.name
```

##### stack?

```ts
optional stack: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

```ts
NfException.stack
```

##### stackTraceLimit

```ts
static stackTraceLimit: number;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:68

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

###### Inherited from

```ts
NfException.stackTraceLimit
```

#### Accessors

##### code

###### Get Signature

```ts
get code(): number;
```

Defined in: [packages/common/src/exception/exceptions/not-found.exception.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/not-found.exception.ts#L4)

###### Returns

`number`

###### Overrides

```ts
NfException.code
```

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

```ts
NfException.captureStackTrace
```

##### isError()

```ts
static isError(error): error is Error;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

###### error

`unknown`

###### Returns

`error is Error`

###### Inherited from

```ts
NfException.isError
```

##### prepareStackTrace()

```ts
static prepareStackTrace(err, stackTraces): any;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:56

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

```ts
NfException.prepareStackTrace
```

***

### NfNotInitializedException

Defined in: [packages/common/src/exception/exceptions/not-initialized.exception.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/not-initialized.exception.ts#L3)

#### Extends

- `NfException`

#### Constructors

##### Constructor

```ts
new NfNotInitializedException(item, type?): NfNotInitializedException;
```

Defined in: [packages/common/src/exception/exceptions/not-initialized.exception.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/not-initialized.exception.ts#L8)

###### Parameters

###### item

`string`

###### type?

`string`

###### Returns

[`NfNotInitializedException`](#nfnotinitializedexception)

###### Overrides

```ts
NfException.constructor
```

#### Properties

##### cause?

```ts
optional cause: unknown;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

###### Inherited from

```ts
NfException.cause
```

##### message

```ts
message: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

```ts
NfException.message
```

##### name

```ts
name: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

```ts
NfException.name
```

##### stack?

```ts
optional stack: string;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

```ts
NfException.stack
```

##### stackTraceLimit

```ts
static stackTraceLimit: number;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:68

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

###### Inherited from

```ts
NfException.stackTraceLimit
```

#### Accessors

##### code

###### Get Signature

```ts
get code(): number;
```

Defined in: [packages/common/src/exception/exceptions/not-initialized.exception.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/exception/exceptions/not-initialized.exception.ts#L4)

###### Returns

`number`

###### Overrides

```ts
NfException.code
```

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

```ts
NfException.captureStackTrace
```

##### isError()

```ts
static isError(error): error is Error;
```

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

###### error

`unknown`

###### Returns

`error is Error`

###### Inherited from

```ts
NfException.isError
```

##### prepareStackTrace()

```ts
static prepareStackTrace(err, stackTraces): any;
```

Defined in: node\_modules/.pnpm/@types+node@24.10.2/node\_modules/@types/node/globals.d.ts:56

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

```ts
NfException.prepareStackTrace
```

## Interfaces

### IAssetManagerLibrary

Defined in: [packages/common/src/library/libraries/interfaces/finals/asset-manager.library.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/asset-manager.library.type.ts#L4)

#### Extends

- [`IExposedLibrary`](#iexposedlibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__name`](#__name-9)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__relationship`](#__relationship-9)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__clear`](#__clear-18)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__init`](#__init-18)

##### getAsset()

```ts
getAsset(path): NfFile;
```

Defined in: [packages/common/src/library/libraries/interfaces/finals/asset-manager.library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/asset-manager.library.type.ts#L5)

###### Parameters

###### path

`string`

###### Returns

[`NfFile`](#nffile)

***

### IComponentSystemLibrary

Defined in: [packages/common/src/library/libraries/interfaces/finals/component-system.library.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/component-system.library.type.ts#L4)

#### Extends

- [`IExposedLibrary`](#iexposedlibrary).[`IRunnerLibrary`](#irunnerlibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__name`](#__name-9)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__relationship`](#__relationship-9)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__clear`](#__clear-18)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__init`](#__init-18)

##### \_\_run()

```ts
__run(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts#L5)

###### Parameters

###### context

[`Context`](#context)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IRunnerLibrary`](#irunnerlibrary).[`__run`](#__run-8)

***

### IConfigRegistry

Defined in: [packages/common/src/library/config/interfaces/config-registry.type.ts:1](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/config/interfaces/config-registry.type.ts#L1)

#### Methods

##### registerConfig()

```ts
registerConfig<T>(config): Promise<T>;
```

Defined in: [packages/common/src/library/config/interfaces/config-registry.type.ts:2](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/config/interfaces/config-registry.type.ts#L2)

###### Type Parameters

###### T

`T` *extends* `object`

###### Parameters

###### config

() => `T`

###### Returns

`Promise`\<`T`\>

***

### IExposedLibrary

Defined in: [packages/common/src/library/libraries/interfaces/bases/exposed.library.type.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/exposed.library.type.ts#L3)

#### Extends

- [`ILibrary`](#ilibrary)

#### Extended by

- [`IAssetManagerLibrary`](#iassetmanagerlibrary)
- [`IComponentSystemLibrary`](#icomponentsystemlibrary)
- [`IGraphicsLibrary`](#igraphicslibrary)
- [`IInputLibrary`](#iinputlibrary)
- [`ISoundLibrary`](#isoundlibrary)
- [`INetworkLibrary`](#inetworklibrary)
- [`IMusicLibrary`](#imusiclibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`ILibrary`](#ilibrary).[`__name`](#__name-12)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`ILibrary`](#ilibrary).[`__relationship`](#__relationship-12)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`ILibrary`](#ilibrary).[`__clear`](#__clear-24)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`ILibrary`](#ilibrary).[`__init`](#__init-24)

***

### IGraphicsLibrary

Defined in: [packages/common/src/library/libraries/interfaces/finals/graphics.library.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/graphics.library.type.ts#L4)

#### Extends

- [`IExposedLibrary`](#iexposedlibrary).[`IRunnerLibrary`](#irunnerlibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__name`](#__name-9)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__relationship`](#__relationship-9)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__clear`](#__clear-18)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__init`](#__init-18)

##### \_\_run()

```ts
__run(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts#L5)

###### Parameters

###### context

[`Context`](#context)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IRunnerLibrary`](#irunnerlibrary).[`__run`](#__run-8)

***

### IInputLibrary

Defined in: [packages/common/src/library/libraries/interfaces/finals/input.library.type.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/input.library.type.ts#L3)

#### Extends

- [`IExposedLibrary`](#iexposedlibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__name`](#__name-9)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__relationship`](#__relationship-9)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__clear`](#__clear-18)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__init`](#__init-18)

***

### ILibrary

Defined in: [packages/common/src/library/libraries/library.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L4)

#### Extended by

- [`IExposedLibrary`](#iexposedlibrary)
- [`IRunnerLibrary`](#irunnerlibrary)
- [`IMutableLibrary`](#imutablelibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

***

### IMusicLibrary

Defined in: [packages/common/src/library/libraries/interfaces/finals/music.library.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/music.library.type.ts#L4)

#### Extends

- [`IExposedLibrary`](#iexposedlibrary).[`IMutableLibrary`](#imutablelibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__name`](#__name-9)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__relationship`](#__relationship-9)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__clear`](#__clear-18)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__init`](#__init-18)

##### mute()

```ts
mute(): void;
```

Defined in: [packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts#L7)

mutes or unmutes the sound.

###### Returns

`void`

###### Inherited from

[`IMutableLibrary`](#imutablelibrary).[`mute`](#mute-6)

***

### IMutableLibrary

Defined in: [packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts#L3)

#### Extends

- [`ILibrary`](#ilibrary)

#### Extended by

- [`ISoundLibrary`](#isoundlibrary)
- [`IMusicLibrary`](#imusiclibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`ILibrary`](#ilibrary).[`__name`](#__name-12)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`ILibrary`](#ilibrary).[`__relationship`](#__relationship-12)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`ILibrary`](#ilibrary).[`__clear`](#__clear-24)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`ILibrary`](#ilibrary).[`__init`](#__init-24)

##### mute()

```ts
mute(): void;
```

Defined in: [packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts#L7)

mutes or unmutes the sound.

###### Returns

`void`

***

### INetworkLibrary

Defined in: [packages/common/src/library/libraries/interfaces/finals/network.library.type.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/network.library.type.ts#L3)

#### Extends

- [`IExposedLibrary`](#iexposedlibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__name`](#__name-9)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__relationship`](#__relationship-9)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__clear`](#__clear-18)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__init`](#__init-18)

***

### IRunClientOptions

Defined in: [packages/common/src/options/types/options.type.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/options/types/options.type.ts#L3)

#### Properties

##### canvas

```ts
canvas: HTMLCanvasElement;
```

Defined in: [packages/common/src/options/types/options.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/options/types/options.type.ts#L4)

##### files

```ts
files: Map<string, string>;
```

Defined in: [packages/common/src/options/types/options.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/options/types/options.type.ts#L5)

***

### IRunnerLibrary

Defined in: [packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts#L4)

#### Extends

- [`ILibrary`](#ilibrary)

#### Extended by

- [`IComponentSystemLibrary`](#icomponentsystemlibrary)
- [`IGraphicsLibrary`](#igraphicslibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`ILibrary`](#ilibrary).[`__name`](#__name-12)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`ILibrary`](#ilibrary).[`__relationship`](#__relationship-12)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`ILibrary`](#ilibrary).[`__clear`](#__clear-24)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`ILibrary`](#ilibrary).[`__init`](#__init-24)

##### \_\_run()

```ts
__run(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/runner.library.type.ts#L5)

###### Parameters

###### context

[`Context`](#context)

###### Returns

`Promise`\<`void`\>

***

### IRunServerOptions

Defined in: [packages/common/src/options/types/options.type.ts:8](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/options/types/options.type.ts#L8)

#### Properties

##### files

```ts
files: Map<string, string>;
```

Defined in: [packages/common/src/options/types/options.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/options/types/options.type.ts#L9)

***

### ISoundLibrary

Defined in: [packages/common/src/library/libraries/interfaces/finals/sound.library.type.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/finals/sound.library.type.ts#L4)

#### Extends

- [`IExposedLibrary`](#iexposedlibrary).[`IMutableLibrary`](#imutablelibrary)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L5)

###### Returns

`string`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__name`](#__name-9)

##### \_\_relationship

###### Get Signature

```ts
get __relationship(): RelationshipHandler;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L7)

###### Returns

`RelationshipHandler`

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__relationship`](#__relationship-9)

#### Methods

##### \_\_clear()

```ts
__clear(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:11](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L11)

###### Parameters

###### context

[`ClearContext`](#clearcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__clear`](#__clear-18)

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/common/src/library/libraries/library.type.ts:9](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/library.type.ts#L9)

###### Parameters

###### context

[`InitContext`](#initcontext)

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`IExposedLibrary`](#iexposedlibrary).[`__init`](#__init-18)

##### mute()

```ts
mute(): void;
```

Defined in: [packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/interfaces/bases/mutable.library.type.ts#L7)

mutes or unmutes the sound.

###### Returns

`void`

###### Inherited from

[`IMutableLibrary`](#imutablelibrary).[`mute`](#mute-6)

## Type Aliases

### IRunOptions

```ts
type IRunOptions = 
  | IRunClientOptions
  | IRunServerOptions;
```

Defined in: [packages/common/src/options/types/options.type.ts:1](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/options/types/options.type.ts#L1)

## Variables

### ASSET\_MANAGER\_LIBRARY

```ts
const ASSET_MANAGER_LIBRARY: typeof ASSET_MANAGER_LIBRARY;
```

Defined in: [packages/common/src/library/libraries/consts/library-label.const.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/consts/library-label.const.ts#L6)

***

### COMPONENT\_SYSTEM\_LIBRARY

```ts
const COMPONENT_SYSTEM_LIBRARY: typeof COMPONENT_SYSTEM_LIBRARY;
```

Defined in: [packages/common/src/library/libraries/consts/library-label.const.ts:1](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/consts/library-label.const.ts#L1)

***

### GRAPHICS\_LIBRARY

```ts
const GRAPHICS_LIBRARY: typeof GRAPHICS_LIBRARY;
```

Defined in: [packages/common/src/library/libraries/consts/library-label.const.ts:2](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/consts/library-label.const.ts#L2)

***

### INPUT\_LIBRARY

```ts
const INPUT_LIBRARY: typeof INPUT_LIBRARY;
```

Defined in: [packages/common/src/library/libraries/consts/library-label.const.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/consts/library-label.const.ts#L7)

***

### MUSIC\_LIBRARY

```ts
const MUSIC_LIBRARY: typeof MUSIC_LIBRARY;
```

Defined in: [packages/common/src/library/libraries/consts/library-label.const.ts:5](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/consts/library-label.const.ts#L5)

***

### NETWORK\_LIBRARY

```ts
const NETWORK_LIBRARY: typeof NETWORK_LIBRARY;
```

Defined in: [packages/common/src/library/libraries/consts/library-label.const.ts:3](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/consts/library-label.const.ts#L3)

***

### SOUND\_LIBRARY

```ts
const SOUND_LIBRARY: typeof SOUND_LIBRARY;
```

Defined in: [packages/common/src/library/libraries/consts/library-label.const.ts:4](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/common/src/library/libraries/consts/library-label.const.ts#L4)

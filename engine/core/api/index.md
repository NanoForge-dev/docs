# @nanoforge-dev/core

## Interfaces

### NanoforgeClient

Defined in: [nanoforge-client.ts:9](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-client.ts#L9)

#### Extends

- `NanoforgeApplication`

#### Properties

##### applicationConfig

```ts
protected applicationConfig: ApplicationConfig;
```

Defined in: [nanoforge-application.ts:16](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L16)

###### Inherited from

```ts
NanoforgeApplication.applicationConfig
```

#### Methods

##### init()

```ts
init(options): Promise<void>;
```

Defined in: [nanoforge-application.ts:46](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L46)

###### Parameters

###### options

`IRunOptions`

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
NanoforgeApplication.init
```

##### run()

```ts
run(): Promise<void>;
```

Defined in: [nanoforge-application.ts:54](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L54)

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
NanoforgeApplication.run
```

##### use()

```ts
use(sym, library): void;
```

Defined in: [nanoforge-application.ts:30](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L30)

###### Parameters

###### sym

`symbol`

###### library

`ILibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.use
```

##### useAssetManager()

```ts
useAssetManager(library): void;
```

Defined in: [nanoforge-application.ts:42](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L42)

###### Parameters

###### library

`IAssetManagerLibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.useAssetManager
```

##### useComponentSystem()

```ts
useComponentSystem(library): void;
```

Defined in: [nanoforge-application.ts:34](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L34)

###### Parameters

###### library

`IComponentSystemLibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.useComponentSystem
```

##### useGraphics()

```ts
useGraphics(library): void;
```

Defined in: [nanoforge-client.ts:10](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-client.ts#L10)

###### Parameters

###### library

`IGraphicsLibrary`

###### Returns

`void`

##### useInput()

```ts
useInput(library): void;
```

Defined in: [nanoforge-client.ts:14](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-client.ts#L14)

###### Parameters

###### library

`IInputLibrary`

###### Returns

`void`

##### useNetwork()

```ts
useNetwork(library): void;
```

Defined in: [nanoforge-application.ts:38](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L38)

###### Parameters

###### library

`INetworkLibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.useNetwork
```

##### useSound()

```ts
useSound(library): void;
```

Defined in: [nanoforge-client.ts:18](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-client.ts#L18)

###### Parameters

###### library

`ISoundLibrary`

###### Returns

`void`

***

### NanoforgeServer

Defined in: [nanoforge-server.ts:3](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-server.ts#L3)

#### Extends

- `NanoforgeApplication`

#### Properties

##### applicationConfig

```ts
protected applicationConfig: ApplicationConfig;
```

Defined in: [nanoforge-application.ts:16](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L16)

###### Inherited from

```ts
NanoforgeApplication.applicationConfig
```

#### Methods

##### init()

```ts
init(options): Promise<void>;
```

Defined in: [nanoforge-application.ts:46](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L46)

###### Parameters

###### options

`IRunOptions`

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
NanoforgeApplication.init
```

##### run()

```ts
run(): Promise<void>;
```

Defined in: [nanoforge-application.ts:54](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L54)

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
NanoforgeApplication.run
```

##### use()

```ts
use(sym, library): void;
```

Defined in: [nanoforge-application.ts:30](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L30)

###### Parameters

###### sym

`symbol`

###### library

`ILibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.use
```

##### useAssetManager()

```ts
useAssetManager(library): void;
```

Defined in: [nanoforge-application.ts:42](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L42)

###### Parameters

###### library

`IAssetManagerLibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.useAssetManager
```

##### useComponentSystem()

```ts
useComponentSystem(library): void;
```

Defined in: [nanoforge-application.ts:34](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L34)

###### Parameters

###### library

`IComponentSystemLibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.useComponentSystem
```

##### useNetwork()

```ts
useNetwork(library): void;
```

Defined in: [nanoforge-application.ts:38](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-application.ts#L38)

###### Parameters

###### library

`INetworkLibrary`

###### Returns

`void`

###### Inherited from

```ts
NanoforgeApplication.useNetwork
```

## Variables

### NanoforgeFactory

```ts
const NanoforgeFactory: NanoforgeFactoryStatic;
```

Defined in: [nanoforge-factory.ts:15](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/core/src/application/nanoforge-factory.ts#L15)

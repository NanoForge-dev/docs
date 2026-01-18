# @nanoforge-dev/ecs-client

## Classes

### ECSClientLibrary

Defined in: [ecs-client-library.ts:6](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/ecs-client/src/ecs-client-library.ts#L6)

#### Extends

- [`Component`](#component)

#### Constructors

##### Constructor

```ts
new ECSClientLibrary(): ECSClientLibrary;
```

Defined in: [ecs-client-library.ts:7](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/ecs-client/src/ecs-client-library.ts#L7)

###### Returns

[`ECSClientLibrary`](#ecsclientlibrary)

###### Overrides

```ts
AbstractECSLibrary.constructor
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [ecs-client-library.ts:12](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/ecs-client/src/ecs-client-library.ts#L12)

###### Returns

`string`

#### Methods

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [ecs-client-library.ts:16](https://github.com/NanoForge-dev/Engine/blob/33f373db14dfd95dd6b0a1b04b8cbf8660079d3b/packages/ecs-client/src/ecs-client-library.ts#L16)

###### Parameters

###### context

`InitContext`

###### Returns

`Promise`\<`void`\>

## Type Aliases

### Component

```ts
type Component = any;
```

## References

### EditorComponentManifest

Renames and re-exports [Component](#component)

***

### EditorSystemManifest

Renames and re-exports [Component](#component)

***

### Registry

Renames and re-exports [Component](#component)

***

### System

Renames and re-exports [Component](#component)

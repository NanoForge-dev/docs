# @nanoforge-dev/ecs-server

## Classes

### ECSServerLibrary

Defined in: [ecs-server-library.ts:6](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-server/src/ecs-server-library.ts#L6)

#### Extends

- [`Component`](#component)

#### Constructors

##### Constructor

```ts
new ECSServerLibrary(): ECSServerLibrary;
```

Defined in: [ecs-server-library.ts:7](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-server/src/ecs-server-library.ts#L7)

###### Returns

[`ECSServerLibrary`](#ecsserverlibrary)

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

Defined in: [ecs-server-library.ts:12](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-server/src/ecs-server-library.ts#L12)

###### Returns

`string`

#### Methods

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [ecs-server-library.ts:16](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/ecs-server/src/ecs-server-library.ts#L16)

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

# @nanoforge-dev/sound

## Classes

### SoundLibrary

Defined in: [sound.library.ts:3](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/sound/src/sound.library.ts#L3)

#### Extends

- [`Component`](ecs-client.md#component)

#### Constructors

##### Constructor

```ts
new SoundLibrary(): SoundLibrary;
```

###### Returns

[`SoundLibrary`](#soundlibrary)

###### Inherited from

```ts
BaseSoundLibrary.constructor
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [sound.library.ts:7](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/sound/src/sound.library.ts#L7)

###### Returns

`string`

#### Methods

##### \_\_init()

```ts
__init(): Promise<void>;
```

Defined in: [sound.library.ts:11](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/sound/src/sound.library.ts#L11)

###### Returns

`Promise`\<`void`\>

##### load()

```ts
load(sound, file): void;
```

Defined in: [sound.library.ts:42](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/sound/src/sound.library.ts#L42)

###### Parameters

###### sound

`string`

###### file

`string`

###### Returns

`void`

##### mute()

```ts
mute(): void;
```

Defined in: [sound.library.ts:16](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/sound/src/sound.library.ts#L16)

###### Returns

`void`

##### play()

```ts
play(sound): void;
```

Defined in: [sound.library.ts:26](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/sound/src/sound.library.ts#L26)

###### Parameters

###### sound

`string`

###### Returns

`void`

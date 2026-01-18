# @nanoforge-dev/music

## Classes

### MusicLibrary

Defined in: [music.library.ts:3](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/music/src/music.library.ts#L3)

#### Extends

- [`Component`](ecs-client.md#component)

#### Constructors

##### Constructor

```ts
new MusicLibrary(): MusicLibrary;
```

###### Returns

[`MusicLibrary`](#musiclibrary)

###### Inherited from

```ts
BaseMusicLibrary.constructor
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [music.library.ts:8](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/music/src/music.library.ts#L8)

###### Returns

`string`

#### Methods

##### \_\_init()

```ts
__init(): Promise<void>;
```

Defined in: [music.library.ts:12](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/music/src/music.library.ts#L12)

###### Returns

`Promise`\<`void`\>

##### load()

```ts
load(music, file): void;
```

Defined in: [music.library.ts:46](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/music/src/music.library.ts#L46)

###### Parameters

###### music

`string`

###### file

`string`

###### Returns

`void`

##### mute()

```ts
mute(): void;
```

Defined in: [music.library.ts:17](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/music/src/music.library.ts#L17)

###### Returns

`void`

##### play()

```ts
play(music): void;
```

Defined in: [music.library.ts:27](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/music/src/music.library.ts#L27)

###### Parameters

###### music

`string`

###### Returns

`void`

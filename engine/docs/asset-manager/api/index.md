# @nanoforge-dev/asset-manager

## Classes

### AssetManagerLibrary

Defined in: [asset-manager.library.ts:8](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/asset-manager/src/asset-manager.library.ts#L8)

#### Extends

- [`Component`](ecs-client.md#component)

#### Constructors

##### Constructor

```ts
new AssetManagerLibrary(): AssetManagerLibrary;
```

###### Returns

[`AssetManagerLibrary`](#assetmanagerlibrary)

###### Inherited from

```ts
BaseAssetManagerLibrary.constructor
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [asset-manager.library.ts:11](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/asset-manager/src/asset-manager.library.ts#L11)

###### Returns

`string`

#### Methods

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [asset-manager.library.ts:15](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/asset-manager/src/asset-manager.library.ts#L15)

###### Parameters

###### context

`InitContext`

###### Returns

`Promise`\<`void`\>

##### getAsset()

```ts
getAsset(path): NfFile;
```

Defined in: [asset-manager.library.ts:19](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/asset-manager/src/asset-manager.library.ts#L19)

###### Parameters

###### path

`string`

###### Returns

`NfFile`

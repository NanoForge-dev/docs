# @nanoforge-dev/graphics-2d

## Classes

### Graphics2DLibrary

Defined in: [packages/graphics-2d/src/graphics-2d.library.ts:5](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/graphics-2d.library.ts#L5)

#### Extends

- [`Component`](ecs-client.md#component)

#### Constructors

##### Constructor

```ts
new Graphics2DLibrary(): Graphics2DLibrary;
```

###### Returns

[`Graphics2DLibrary`](#graphics2dlibrary)

###### Inherited from

```ts
BaseGraphicsLibrary.constructor
```

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [packages/graphics-2d/src/graphics-2d.library.ts:8](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/graphics-2d.library.ts#L8)

###### Returns

`string`

##### stage

###### Get Signature

```ts
get stage(): Stage;
```

Defined in: [packages/graphics-2d/src/graphics-2d.library.ts:12](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/graphics-2d.library.ts#L12)

###### Returns

`Stage`

#### Methods

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [packages/graphics-2d/src/graphics-2d.library.ts:17](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/graphics-2d.library.ts#L17)

###### Parameters

###### context

`InitContext`

###### Returns

`Promise`\<`void`\>

##### \_\_run()

```ts
__run(): Promise<void>;
```

Defined in: [packages/graphics-2d/src/graphics-2d.library.ts:28](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/graphics-2d.library.ts#L28)

###### Returns

`Promise`\<`void`\>

## Type Aliases

### Animation

```ts
type Animation = Konva.Animation;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:3](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L3)

***

### Arc

```ts
type Arc = Konva.Arc;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:6](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L6)

***

### ArcConfig

```ts
type ArcConfig = Konva.ArcConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:9](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L9)

***

### Arrow

```ts
type Arrow = Konva.Arrow;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:11](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L11)

***

### ArrowConfig

```ts
type ArrowConfig = Konva.ArrowConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:14](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L14)

***

### Canvas

```ts
type Canvas = typeof Konva.Canvas;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:16](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L16)

***

### Circle

```ts
type Circle = Konva.Circle;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:19](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L19)

***

### CircleConfig

```ts
type CircleConfig = Konva.CircleConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:22](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L22)

***

### Container

```ts
type Container = Konva.Container;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:24](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L24)

***

### ContainerConfig

```ts
type ContainerConfig = Konva.ContainerConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:27](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L27)

***

### Context

```ts
type Context = Konva.Context;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:29](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L29)

***

### DD

```ts
type DD = typeof Konva.DD;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:32](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L32)

***

### Easings

```ts
type Easings = typeof Konva.Easings;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:35](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L35)

***

### Ellipse

```ts
type Ellipse = Konva.Ellipse;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:38](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L38)

***

### EllipseConfig

```ts
type EllipseConfig = Konva.EllipseConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:41](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L41)

***

### FastLayer

```ts
type FastLayer = Konva.FastLayer;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:43](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L43)

***

### Filters

```ts
type Filters = typeof Konva.Filters;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:46](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L46)

***

### Group

```ts
type Group = Konva.Group;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:49](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L49)

***

### GroupConfig

```ts
type GroupConfig = Konva.GroupConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:52](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L52)

***

### Image

```ts
type Image = Konva.Image;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:54](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L54)

***

### ImageConfig

```ts
type ImageConfig = Konva.ImageConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:57](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L57)

***

### KonvaEventListener

```ts
type KonvaEventListener<This, EventType> = Konva.KonvaEventListener<This, EventType>;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:59](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L59)

#### Type Parameters

##### This

`This`

##### EventType

`EventType`

***

### KonvaEventObject

```ts
type KonvaEventObject<EventType> = Konva.KonvaEventObject<EventType>;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:61](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L61)

#### Type Parameters

##### EventType

`EventType`

***

### KonvaPointerEvent

```ts
type KonvaPointerEvent = Konva.KonvaPointerEvent;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:63](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L63)

***

### Label

```ts
type Label = Konva.Label;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:65](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L65)

***

### LabelConfig

```ts
type LabelConfig = Konva.LabelConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:68](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L68)

***

### Layer

```ts
type Layer = Konva.Layer;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:70](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L70)

***

### LayerConfig

```ts
type LayerConfig = Konva.LayerConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:73](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L73)

***

### Line

```ts
type Line = Konva.Line;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:75](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L75)

***

### LineConfig

```ts
type LineConfig = Konva.LineConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:78](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L78)

***

### Node

```ts
type Node = Konva.Node;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:80](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L80)

***

### NodeConfig

```ts
type NodeConfig = Konva.NodeConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:83](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L83)

***

### Path

```ts
type Path = Konva.Path;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:85](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L85)

***

### PathConfig

```ts
type PathConfig = Konva.PathConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:88](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L88)

***

### Rect

```ts
type Rect = Konva.Rect;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:90](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L90)

***

### RectConfig

```ts
type RectConfig = Konva.RectConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:93](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L93)

***

### RegularPolygon

```ts
type RegularPolygon = Konva.RegularPolygon;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:95](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L95)

***

### RegularPolygonConfig

```ts
type RegularPolygonConfig = Konva.RegularPolygonConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:98](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L98)

***

### Ring

```ts
type Ring = Konva.Ring;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:100](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L100)

***

### RingConfig

```ts
type RingConfig = Konva.RingConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:103](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L103)

***

### Shape

```ts
type Shape = Konva.Shape;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:105](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L105)

***

### ShapeConfig

```ts
type ShapeConfig = Konva.ShapeConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:108](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L108)

***

### Sprite

```ts
type Sprite = Konva.Sprite;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:110](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L110)

***

### SpriteConfig

```ts
type SpriteConfig = Konva.SpriteConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:113](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L113)

***

### Stage

```ts
type Stage = Konva.Stage;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:115](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L115)

***

### StageConfig

```ts
type StageConfig = Konva.StageConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:118](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L118)

***

### Star

```ts
type Star = Konva.Star;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:120](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L120)

***

### StarConfig

```ts
type StarConfig = Konva.StarConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:123](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L123)

***

### Tag

```ts
type Tag = Konva.Tag;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:125](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L125)

***

### TagConfig

```ts
type TagConfig = Konva.TagConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:128](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L128)

***

### Text

```ts
type Text = Konva.Text;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:130](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L130)

***

### TextConfig

```ts
type TextConfig = Konva.TextConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:133](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L133)

***

### TextPath

```ts
type TextPath = Konva.TextPath;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:135](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L135)

***

### TextPathConfig

```ts
type TextPathConfig = Konva.TextPathConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:138](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L138)

***

### Transform

```ts
type Transform = Konva.Transform;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:140](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L140)

***

### Transformer

```ts
type Transformer = Konva.Transformer;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:143](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L143)

***

### TransformerConfig

```ts
type TransformerConfig = Konva.TransformerConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:146](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L146)

***

### Tween

```ts
type Tween = Konva.Tween;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:148](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L148)

***

### TweenConfig

```ts
type TweenConfig = Konva.TweenConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:151](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L151)

***

### Util

```ts
type Util = typeof Konva.Util;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:153](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L153)

***

### Vector2d

```ts
type Vector2d = Konva.Vector2d;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:156](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L156)

***

### Wedge

```ts
type Wedge = Konva.Wedge;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:158](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L158)

***

### WedgeConfig

```ts
type WedgeConfig = Konva.WedgeConfig;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:161](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L161)

## Variables

### \_global

```ts
const _global: any = Konva._global;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:163](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L163)

***

### \_injectGlobal()

```ts
const _injectGlobal: (Konva) => void = Konva._injectGlobal;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:165](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L165)

#### Parameters

##### Konva

`any`

#### Returns

`void`

***

### \_mouseDblClickPointerId

```ts
const _mouseDblClickPointerId: null = Konva._mouseDblClickPointerId;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:167](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L167)

***

### \_mouseInDblClickWindow

```ts
const _mouseInDblClickWindow: boolean = Konva._mouseInDblClickWindow;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:169](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L169)

***

### \_mouseListenClick

```ts
const _mouseListenClick: boolean = Konva._mouseListenClick;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:171](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L171)

***

### \_pointerDblClickPointerId

```ts
const _pointerDblClickPointerId: null = Konva._pointerDblClickPointerId;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:173](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L173)

***

### \_pointerInDblClickWindow

```ts
const _pointerInDblClickWindow: boolean = Konva._pointerInDblClickWindow;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:175](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L175)

***

### \_pointerListenClick

```ts
const _pointerListenClick: boolean = Konva._pointerListenClick;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:177](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L177)

***

### \_renderBackend

```ts
const _renderBackend: string = Konva._renderBackend;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:179](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L179)

***

### \_touchDblClickPointerId

```ts
const _touchDblClickPointerId: null = Konva._touchDblClickPointerId;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:181](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L181)

***

### \_touchInDblClickWindow

```ts
const _touchInDblClickWindow: boolean = Konva._touchInDblClickWindow;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:183](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L183)

***

### \_touchListenClick

```ts
const _touchListenClick: boolean = Konva._touchListenClick;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:185](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L185)

***

### angleDeg

```ts
const angleDeg: boolean = Konva.angleDeg;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:187](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L187)

***

### Animation

```ts
const Animation: typeof Animation = Konva.Animation;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:3](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L3)

***

### Arc

```ts
const Arc: typeof Arc = Konva.Arc;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:6](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L6)

***

### Arrow

```ts
const Arrow: typeof Arrow = Konva.Arrow;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:11](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L11)

***

### autoDrawEnabled

```ts
const autoDrawEnabled: boolean = Konva.autoDrawEnabled;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:189](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L189)

***

### Canvas

```ts
const Canvas: typeof Canvas = Konva.Canvas;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:16](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L16)

***

### capturePointerEventsEnabled

```ts
const capturePointerEventsEnabled: boolean = Konva.capturePointerEventsEnabled;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:191](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L191)

***

### Circle

```ts
const Circle: typeof Circle = Konva.Circle;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:19](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L19)

***

### Container

```ts
const Container: typeof Container = Konva.Container;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:24](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L24)

***

### Context

```ts
const Context: typeof Context = Konva.Context;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:29](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L29)

***

### dblClickWindow

```ts
const dblClickWindow: number = Konva.dblClickWindow;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:193](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L193)

***

### DD

```ts
const DD: object = Konva.DD;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:32](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L32)

#### Type Declaration

##### \_dragElements

```ts
_dragElements: Map<number, {
  dragStatus: "ready" | "dragging" | "stopped";
  node: Node<NodeConfig>;
  offset: Vector2d;
  pointerId?: number;
  startPointerPos: Vector2d;
}>;
```

##### isDragging

```ts
readonly isDragging: boolean;
```

##### justDragged

```ts
justDragged: boolean;
```

##### node

```ts
readonly node: Node<NodeConfig> | undefined;
```

##### \_drag()

```ts
_drag(evt): void;
```

###### Parameters

###### evt

`any`

###### Returns

`void`

##### \_endDragAfter()

```ts
_endDragAfter(evt): void;
```

###### Parameters

###### evt

`any`

###### Returns

`void`

##### \_endDragBefore()

```ts
_endDragBefore(evt?): void;
```

###### Parameters

###### evt?

`any`

###### Returns

`void`

***

### document

```ts
const document: any = Konva.document;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:195](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L195)

***

### dragButtons

```ts
const dragButtons: number[] = Konva.dragButtons;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:197](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L197)

***

### dragDistance

```ts
const dragDistance: number = Konva.dragDistance;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:199](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L199)

***

### Easings

```ts
const Easings: object = Konva.Easings;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:35](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L35)

#### Type Declaration

##### BackEaseIn()

```ts
BackEaseIn(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### BackEaseInOut()

```ts
BackEaseInOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### BackEaseOut()

```ts
BackEaseOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### BounceEaseIn()

```ts
BounceEaseIn(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### BounceEaseInOut()

```ts
BounceEaseInOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### BounceEaseOut()

```ts
BounceEaseOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### EaseIn()

```ts
EaseIn(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### EaseInOut()

```ts
EaseInOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### EaseOut()

```ts
EaseOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### ElasticEaseIn()

```ts
ElasticEaseIn(
   t, 
   b, 
   c, 
   d, 
   a, 
   p): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### a

`any`

###### p

`any`

###### Returns

`any`

##### ElasticEaseInOut()

```ts
ElasticEaseInOut(
   t, 
   b, 
   c, 
   d, 
   a, 
   p): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### a

`any`

###### p

`any`

###### Returns

`any`

##### ElasticEaseOut()

```ts
ElasticEaseOut(
   t, 
   b, 
   c, 
   d, 
   a, 
   p): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### a

`any`

###### p

`any`

###### Returns

`any`

##### Linear()

```ts
Linear(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### StrongEaseIn()

```ts
StrongEaseIn(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### StrongEaseInOut()

```ts
StrongEaseInOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

##### StrongEaseOut()

```ts
StrongEaseOut(
   t, 
   b, 
   c, 
   d): any;
```

###### Parameters

###### t

`any`

###### b

`any`

###### c

`any`

###### d

`any`

###### Returns

`any`

***

### Ellipse

```ts
const Ellipse: typeof Ellipse = Konva.Ellipse;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:38](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L38)

***

### enableTrace

```ts
const enableTrace: boolean = Konva.enableTrace;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:201](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L201)

***

### FastLayer

```ts
const FastLayer: typeof FastLayer = Konva.FastLayer;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:43](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L43)

***

### Filters

```ts
const Filters: object = Konva.Filters;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:46](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L46)

#### Type Declaration

##### Blur

```ts
Blur: Filter;
```

##### Brighten

```ts
Brighten: Filter;
```

##### Brightness

```ts
Brightness: Filter;
```

##### Contrast

```ts
Contrast: Filter;
```

##### Emboss

```ts
Emboss: Filter;
```

##### Enhance

```ts
Enhance: Filter;
```

##### Grayscale

```ts
Grayscale: Filter;
```

##### HSL

```ts
HSL: Filter;
```

##### HSV

```ts
HSV: Filter;
```

##### Invert

```ts
Invert: Filter;
```

##### Kaleidoscope

```ts
Kaleidoscope: Filter;
```

##### Mask

```ts
Mask: Filter;
```

##### Noise

```ts
Noise: Filter;
```

##### Pixelate

```ts
Pixelate: Filter;
```

##### Posterize

```ts
Posterize: Filter;
```

##### RGB

```ts
RGB: Filter;
```

##### RGBA

```ts
RGBA: Filter;
```

##### Sepia

```ts
Sepia: Filter;
```

##### Solarize

```ts
Solarize: Filter;
```

##### Threshold

```ts
Threshold: Filter;
```

***

### getAngle()

```ts
const getAngle: (angle) => number = Konva.getAngle;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:203](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L203)

#### Parameters

##### angle

`number`

#### Returns

`number`

***

### Group

```ts
const Group: typeof Group = Konva.Group;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:49](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L49)

***

### hitOnDragEnabled

```ts
const hitOnDragEnabled: boolean = Konva.hitOnDragEnabled;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:205](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L205)

***

### Image

```ts
const Image: typeof Image = Konva.Image;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:54](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L54)

***

### isBrowser

```ts
const isBrowser: boolean = Konva.isBrowser;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:207](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L207)

***

### isDragging()

```ts
const isDragging: () => boolean = Konva.isDragging;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:211](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L211)

#### Returns

`boolean`

***

### isDragReady()

```ts
const isDragReady: () => boolean = Konva.isDragReady;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:209](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L209)

#### Returns

`boolean`

***

### isTransforming()

```ts
const isTransforming: () => boolean = Konva.isTransforming;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:213](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L213)

#### Returns

`boolean`

***

### isUnminified

```ts
const isUnminified: boolean = Konva.isUnminified;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:215](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L215)

***

### Label

```ts
const Label: typeof Label = Konva.Label;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:65](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L65)

***

### Layer

```ts
const Layer: typeof Layer = Konva.Layer;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:70](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L70)

***

### legacyTextRendering

```ts
const legacyTextRendering: boolean = Konva.legacyTextRendering;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:217](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L217)

***

### Line

```ts
const Line: typeof Line = Konva.Line;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:75](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L75)

***

### Node

```ts
const Node: typeof Node = Konva.Node;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:80](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L80)

***

### Path

```ts
const Path: typeof Path = Konva.Path;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:85](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L85)

***

### pixelRatio

```ts
const pixelRatio: number = Konva.pixelRatio;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:219](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L219)

***

### pointerEventsEnabled

```ts
const pointerEventsEnabled: boolean = Konva.pointerEventsEnabled;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:221](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L221)

***

### Rect

```ts
const Rect: typeof Rect = Konva.Rect;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:90](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L90)

***

### RegularPolygon

```ts
const RegularPolygon: typeof RegularPolygon = Konva.RegularPolygon;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:95](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L95)

***

### releaseCanvasOnDestroy

```ts
const releaseCanvasOnDestroy: boolean = Konva.releaseCanvasOnDestroy;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:223](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L223)

***

### Ring

```ts
const Ring: typeof Ring = Konva.Ring;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:100](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L100)

***

### Shape

```ts
const Shape: typeof Shape = Konva.Shape;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:105](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L105)

***

### shapes

```ts
const shapes: object = Konva.shapes;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:225](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L225)

#### Index Signature

```ts
[key: string]: Shape<ShapeConfig>
```

***

### showWarnings

```ts
const showWarnings: boolean = Konva.showWarnings;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:227](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L227)

***

### Sprite

```ts
const Sprite: typeof Sprite = Konva.Sprite;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:110](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L110)

***

### Stage

```ts
const Stage: typeof Stage = Konva.Stage;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:115](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L115)

***

### stages

```ts
const stages: Stage[] = Konva.stages;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:229](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L229)

***

### Star

```ts
const Star: typeof Star = Konva.Star;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:120](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L120)

***

### Tag

```ts
const Tag: typeof Tag = Konva.Tag;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:125](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L125)

***

### Text

```ts
const Text: typeof Text = Konva.Text;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:130](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L130)

***

### TextPath

```ts
const TextPath: typeof TextPath = Konva.TextPath;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:135](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L135)

***

### Transform

```ts
const Transform: typeof Transform = Konva.Transform;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:140](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L140)

***

### Transformer

```ts
const Transformer: typeof Transformer = Konva.Transformer;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:143](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L143)

***

### Tween

```ts
const Tween: typeof Tween = Konva.Tween;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:148](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L148)

***

### Util

```ts
const Util: object = Konva.Util;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:153](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L153)

#### Type Declaration

##### \_assign()

```ts
_assign<T, U>(target, source): T & U;
```

###### Type Parameters

###### T

`T`

###### U

`U`

###### Parameters

###### target

`T`

###### source

`U`

###### Returns

`T` & `U`

##### \_capitalize()

```ts
_capitalize(str): string;
```

###### Parameters

###### str

`string`

###### Returns

`string`

##### \_degToRad()

```ts
_degToRad(deg): number;
```

###### Parameters

###### deg

`number`

###### Returns

`number`

##### \_getFirstPointerId()

```ts
_getFirstPointerId(evt): any;
```

###### Parameters

###### evt

`any`

###### Returns

`any`

##### \_getProjectionToLine()

```ts
_getProjectionToLine(
   pt, 
   line, 
   isClosed): Vector2d;
```

###### Parameters

###### pt

`Vector2d`

###### line

`Vector2d`[]

###### isClosed

`boolean`

###### Returns

`Vector2d`

##### \_getProjectionToSegment()

```ts
_getProjectionToSegment(
   x1, 
   y1, 
   x2, 
   y2, 
   x3, 
   y3): any[];
```

###### Parameters

###### x1

`any`

###### y1

`any`

###### x2

`any`

###### y2

`any`

###### x3

`any`

###### y3

`any`

###### Returns

`any`[]

##### \_getRotation()

```ts
_getRotation(radians): number;
```

###### Parameters

###### radians

`number`

###### Returns

`number`

##### \_hex3ColorToRGBA()

```ts
_hex3ColorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### \_hex4ColorToRGBA()

```ts
_hex4ColorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### \_hex6ColorToRGBA()

```ts
_hex6ColorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### \_hex8ColorToRGBA()

```ts
_hex8ColorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### \_hexToRgb()

```ts
_hexToRgb(hex): RGB;
```

###### Parameters

###### hex

`string`

###### Returns

`RGB`

##### \_hslColorToRGBA()

```ts
_hslColorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### \_inRange()

```ts
_inRange(
   val, 
   left, 
   right): boolean;
```

###### Parameters

###### val

`number`

###### left

`number`

###### right

`number`

###### Returns

`boolean`

##### \_isArray()

```ts
_isArray(obj): obj is any[];
```

###### Parameters

###### obj

`any`

###### Returns

`obj is any[]`

##### \_isBoolean()

```ts
_isBoolean(obj): obj is boolean;
```

###### Parameters

###### obj

`any`

###### Returns

`obj is boolean`

##### \_isElement()

```ts
_isElement(obj): obj is Element;
```

###### Parameters

###### obj

`any`

###### Returns

`obj is Element`

##### \_isFunction()

```ts
_isFunction(obj): boolean;
```

###### Parameters

###### obj

`any`

###### Returns

`boolean`

##### \_isInDocument()

```ts
_isInDocument(el): boolean;
```

###### Parameters

###### el

`any`

###### Returns

`boolean`

##### \_isNumber()

```ts
_isNumber(obj): obj is number;
```

###### Parameters

###### obj

`any`

###### Returns

`obj is number`

##### \_isPlainObject()

```ts
_isPlainObject(obj): boolean;
```

###### Parameters

###### obj

`any`

###### Returns

`boolean`

##### \_isString()

```ts
_isString(obj): obj is string;
```

###### Parameters

###### obj

`any`

###### Returns

`obj is string`

##### \_namedColorToRBA()

```ts
_namedColorToRBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | null;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `null`

##### \_prepareArrayForTween()

```ts
_prepareArrayForTween(
   startArray, 
   endArray, 
   isClosed): number[];
```

###### Parameters

###### startArray

`any`

###### endArray

`any`

###### isClosed

`any`

###### Returns

`number`[]

##### \_prepareToStringify()

```ts
_prepareToStringify<T>(obj): T | null;
```

###### Type Parameters

###### T

`T`

###### Parameters

###### obj

`any`

###### Returns

`T` \| `null`

##### \_radToDeg()

```ts
_radToDeg(rad): number;
```

###### Parameters

###### rad

`number`

###### Returns

`number`

##### \_rgbaColorToRGBA()

```ts
_rgbaColorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### \_rgbColorToRGBA()

```ts
_rgbColorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### \_rgbToHex()

```ts
_rgbToHex(
   r, 
   g, 
   b): string;
```

###### Parameters

###### r

`number`

###### g

`number`

###### b

`number`

###### Returns

`string`

##### \_sign()

```ts
_sign(number): -1 | 1;
```

###### Parameters

###### number

`number`

###### Returns

`-1` \| `1`

##### \_urlToImage()

```ts
_urlToImage(url, callback): void;
```

###### Parameters

###### url

`string`

###### callback

`Function`

###### Returns

`void`

##### cloneArray()

```ts
cloneArray(arr): any[];
```

###### Parameters

###### arr

`any`[]

###### Returns

`any`[]

##### cloneObject()

```ts
cloneObject<Any>(obj): Any;
```

###### Type Parameters

###### Any

`Any`

###### Parameters

###### obj

`Any`

###### Returns

`Any`

##### colorToRGBA()

```ts
colorToRGBA(str): 
  | {
  a: number;
  b: number;
  g: number;
  r: number;
}
  | undefined;
```

###### Parameters

###### str

`string`

###### Returns

  \| \{
  `a`: `number`;
  `b`: `number`;
  `g`: `number`;
  `r`: `number`;
\}
  \| `undefined`

##### createCanvasElement()

```ts
createCanvasElement(): HTMLCanvasElement;
```

###### Returns

`HTMLCanvasElement`

##### createImageElement()

```ts
createImageElement(): HTMLImageElement;
```

###### Returns

`HTMLImageElement`

##### degToRad()

```ts
degToRad(deg): number;
```

###### Parameters

###### deg

`number`

###### Returns

`number`

##### drawRoundedPolygonPath()

```ts
drawRoundedPolygonPath(
   context, 
   points, 
   sides, 
   radius, 
   cornerRadius): void;
```

###### Parameters

###### context

`Context`

###### points

`Vector2d`[]

###### sides

`number`

###### radius

`number`

###### cornerRadius

`number` | `number`[]

###### Returns

`void`

##### drawRoundedRectPath()

```ts
drawRoundedRectPath(
   context, 
   width, 
   height, 
   cornerRadius): void;
```

###### Parameters

###### context

`Context`

###### width

`number`

###### height

`number`

###### cornerRadius

`number` | `number`[]

###### Returns

`void`

##### each()

```ts
each(obj, func): void;
```

###### Parameters

###### obj

`object`

###### func

`Function`

###### Returns

`void`

##### error()

```ts
error(str): void;
```

###### Parameters

###### str

`string`

###### Returns

`void`

##### getHitColor()

```ts
getHitColor(): string;
```

###### Returns

`string`

##### getHitColorKey()

```ts
getHitColorKey(
   r, 
   g, 
   b): string;
```

###### Parameters

###### r

`number`

###### g

`number`

###### b

`number`

###### Returns

`string`

##### getRandomColor()

```ts
getRandomColor(): string;
```

###### Returns

`string`

##### getRGB()

```ts
getRGB(color): RGB;
```

###### Parameters

###### color

`string`

###### Returns

`RGB`

##### getSnappedHexColor()

```ts
getSnappedHexColor(hex): string;
```

###### Parameters

###### hex

`string`

###### Returns

`string`

##### haveIntersection()

```ts
haveIntersection(r1, r2): boolean;
```

###### Parameters

###### r1

`IRect`

###### r2

`IRect`

###### Returns

`boolean`

##### isCanvasFarblingActive()

```ts
isCanvasFarblingActive(): boolean;
```

###### Returns

`boolean`

##### isObject()

```ts
isObject(val): val is object;
```

###### Parameters

###### val

`any`

###### Returns

`val is object`

##### isValidSelector()

```ts
isValidSelector(selector): boolean;
```

###### Parameters

###### selector

`any`

###### Returns

`boolean`

##### radToDeg()

```ts
radToDeg(rad): number;
```

###### Parameters

###### rad

`number`

###### Returns

`number`

##### releaseCanvas()

```ts
releaseCanvas(...canvases): void;
```

###### Parameters

###### canvases

...`HTMLCanvasElement`[]

###### Returns

`void`

##### requestAnimFrame()

```ts
requestAnimFrame(callback): void;
```

###### Parameters

###### callback

`Function`

###### Returns

`void`

##### throw()

```ts
throw(str): never;
```

###### Parameters

###### str

`string`

###### Returns

`never`

##### warn()

```ts
warn(str): void;
```

###### Parameters

###### str

`string`

###### Returns

`void`

***

### version

```ts
const version: string = Konva.version;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:231](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L231)

***

### Wedge

```ts
const Wedge: typeof Wedge = Konva.Wedge;
```

Defined in: [packages/graphics-2d/src/exports/konva.ts:158](https://github.com/NanoForge-dev/Engine/blob/d82cfcce288e03364bbf74b28cae1eb757a148cf/packages/graphics-2d/src/exports/konva.ts#L158)

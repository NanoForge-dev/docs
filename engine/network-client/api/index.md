# @nanoforge-dev/network-client

## Classes

### NetworkClientLibrary

Defined in: [client.network.library.ts:7](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/client.network.library.ts#L7)

#### Extends

- [`Component`](ecs-client.md#component)

#### Constructors

##### Constructor

```ts
new NetworkClientLibrary(): NetworkClientLibrary;
```

###### Returns

[`NetworkClientLibrary`](#networkclientlibrary)

###### Inherited from

```ts
BaseNetworkLibrary.constructor
```

#### Properties

##### tcp

```ts
tcp: TCPClient;
```

Defined in: [client.network.library.ts:12](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/client.network.library.ts#L12)

##### udp

```ts
udp: UDPClient;
```

Defined in: [client.network.library.ts:9](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/client.network.library.ts#L9)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [client.network.library.ts:14](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/client.network.library.ts#L14)

###### Returns

`string`

#### Methods

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [client.network.library.ts:18](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/client.network.library.ts#L18)

###### Parameters

###### context

`InitContext`

###### Returns

`Promise`\<`void`\>

## Interfaces

### TCPClient

Defined in: [tcp.client.network.ts:6](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/tcp.client.network.ts#L6)

TCPClient
Reliable ordered send/receive of packets to a TCP server

#### Methods

##### connect()

```ts
connect(): Promise<void>;
```

Defined in: [tcp.client.network.ts:25](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/tcp.client.network.ts#L25)

Initiate a WebSocket connection to the server (e.g. `ws://<ip>:<port>`).

###### Returns

`Promise`\<`void`\>

Promise<void>

##### getReceivedPackets()

```ts
getReceivedPackets(): Uint8Array<ArrayBufferLike>[];
```

Defined in: [tcp.client.network.ts:57](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/tcp.client.network.ts#L57)

Return an array of complete packets that were reassembled from received chunks.

###### Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

Uint8Array[] — array of packet buffers.

##### isConnected()

```ts
isConnected(): boolean;
```

Defined in: [tcp.client.network.ts:34](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/tcp.client.network.ts#L34)

Return `true` when the underlying WebSocket is open.

###### Returns

`boolean`

boolean

##### sendData()

```ts
sendData(data): void;
```

Defined in: [tcp.client.network.ts:44](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/tcp.client.network.ts#L44)

Send a payload to the server.

###### Parameters

###### data

`Uint8Array`

Uint8Array — raw payload bytes.

###### Returns

`void`

void

***

### UDPClient

Defined in: [udp.client.network.ts:6](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/udp.client.network.ts#L6)

UDPClient
Fast but less reliable send/receive of packets to a UDP server

#### Methods

##### connect()

```ts
connect(): Promise<void>;
```

Defined in: [udp.client.network.ts:25](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/udp.client.network.ts#L25)

Open a WebSocket for signaling, create an RTCPeerConnection and initiate an SDP offer.

###### Returns

`Promise`\<`void`\>

Promise<void>

##### getReceivedPackets()

```ts
getReceivedPackets(): Uint8Array<ArrayBufferLike>[];
```

Defined in: [udp.client.network.ts:60](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/udp.client.network.ts#L60)

Return an array of complete packets reassembled from received data-channel chunks.

###### Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

Uint8Array[] — array of packet buffers.

##### isConnected()

```ts
isConnected(): boolean;
```

Defined in: [udp.client.network.ts:37](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/udp.client.network.ts#L37)

Return `true` when the RTCDataChannel is open.

###### Returns

`boolean`

boolean

##### sendData()

```ts
sendData(data): void;
```

Defined in: [udp.client.network.ts:47](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-client/src/udp.client.network.ts#L47)

Send a payload on the data channel.

###### Parameters

###### data

`Uint8Array`

Uint8Array — raw payload bytes.

###### Returns

`void`

void

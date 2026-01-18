# @nanoforge-dev/network-server

## Classes

### NetworkServerLibrary

Defined in: [server.network.library.ts:7](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/server.network.library.ts#L7)

#### Extends

- [`Component`](ecs-client.md#component)

#### Constructors

##### Constructor

```ts
new NetworkServerLibrary(): NetworkServerLibrary;
```

###### Returns

[`NetworkServerLibrary`](#networkserverlibrary)

###### Inherited from

```ts
BaseNetworkLibrary.constructor
```

#### Properties

##### tcp

```ts
tcp: TCPServer;
```

Defined in: [server.network.library.ts:12](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/server.network.library.ts#L12)

##### udp

```ts
udp: UDPServer;
```

Defined in: [server.network.library.ts:9](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/server.network.library.ts#L9)

#### Accessors

##### \_\_name

###### Get Signature

```ts
get __name(): string;
```

Defined in: [server.network.library.ts:14](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/server.network.library.ts#L14)

###### Returns

`string`

#### Methods

##### \_\_init()

```ts
__init(context): Promise<void>;
```

Defined in: [server.network.library.ts:18](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/server.network.library.ts#L18)

###### Parameters

###### context

`InitContext`

###### Returns

`Promise`\<`void`\>

## Interfaces

### TCPServer

Defined in: [tcp.server.network.ts:8](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/tcp.server.network.ts#L8)

TCPServer
Reliable ordered send/receive of packets to multiple TCP clients

#### Methods

##### getConnectedClients()

```ts
getConnectedClients(): number[];
```

Defined in: [tcp.server.network.ts:62](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/tcp.server.network.ts#L62)

Return a snapshot array of numeric client IDs currently connected.

###### Returns

`number`[]

number[]

##### getReceivedPackets()

```ts
getReceivedPackets(): Map<number, Uint8Array<ArrayBufferLike>[]>;
```

Defined in: [tcp.server.network.ts:100](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/tcp.server.network.ts#L100)

Parse and return complete packets received from each client. Each packet is a `Uint8Array` buffer.

###### Returns

`Map`\<`number`, `Uint8Array`\<`ArrayBufferLike`\>[]\>

Map<number, Uint8Array[]> — mapping client ID to array of packets.

##### listen()

```ts
listen(): void;
```

Defined in: [tcp.server.network.ts:29](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/tcp.server.network.ts#L29)

Start the WebSocket server and begin accepting clients.

###### Returns

`void`

void

##### sendToClient()

```ts
sendToClient(clientId, data): void;
```

Defined in: [tcp.server.network.ts:86](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/tcp.server.network.ts#L86)

Send a payload to the client identified by `clientId`.

###### Parameters

###### clientId

`number`

number — numeric client identifier.

###### data

`Uint8Array`

Uint8Array — payload bytes.

###### Returns

`void`

void

##### sendToEverybody()

```ts
sendToEverybody(data): void;
```

Defined in: [tcp.server.network.ts:72](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/tcp.server.network.ts#L72)

Send a payload to every connected client.

###### Parameters

###### data

`Uint8Array`

Uint8Array — raw payload bytes.

###### Returns

`void`

void

***

### UDPServer

Defined in: [udp.server.network.ts:9](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/udp.server.network.ts#L9)

UDPServer
Fast but less reliable unordered send/receive to multiple UDP clients

#### Methods

##### getConnectedClients()

```ts
getConnectedClients(): number[];
```

Defined in: [udp.server.network.ts:65](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/udp.server.network.ts#L65)

Return a snapshot array of client IDs with active data channels.

###### Returns

`number`[]

number[]

##### getReceivedPackets()

```ts
getReceivedPackets(): Map<number, Uint8Array<ArrayBufferLike>[]>;
```

Defined in: [udp.server.network.ts:108](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/udp.server.network.ts#L108)

Reassemble buffered chunks and return a map of clientId => complete packets.
Partial packets are retained internally for the next call so callers may
repeatedly poll this method to consume newly arrived data.

###### Returns

`Map`\<`number`, `Uint8Array`\<`ArrayBufferLike`\>[]\>

Map<number, Uint8Array[]>

##### listen()

```ts
listen(): void;
```

Defined in: [udp.server.network.ts:30](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/udp.server.network.ts#L30)

Start the signaling WebSocket and accept incoming client offers (SDP/ICE).

###### Returns

`void`

void

##### sendToClient()

```ts
sendToClient(clientId, data): void;
```

Defined in: [udp.server.network.ts:92](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/udp.server.network.ts#L92)

Send a packet to a single client via the unreliable data channel.
The packet will be framed with the server's configured magic terminator
bytes before being sent.

###### Parameters

###### clientId

`number`

Numeric client identifier returned by `listen()` events

###### data

`Uint8Array`

Raw packet bytes (Uint8Array) to send

###### Returns

`void`

void

##### sendToEverybody()

```ts
sendToEverybody(data): void;
```

Defined in: [udp.server.network.ts:76](https://github.com/NanoForge-dev/Engine/blob/fa908e7e268fa1770be58fc62a0257f3760480b2/packages/network-server/src/udp.server.network.ts#L76)

Broadcast a packet to all connected clients over the unreliable data channels.
The server will frame the provided data with the configured magic terminator.

###### Parameters

###### data

`Uint8Array`

Raw packet bytes (Uint8Array) to send to every client

###### Returns

`void`

void

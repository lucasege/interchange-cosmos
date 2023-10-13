/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "interchange.dex";

export interface MsgSendCreatePair {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  sourceDenom: string;
  targetDenom: string;
}

export interface MsgSendCreatePairResponse {
}

export interface MsgSendSellOrder {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
}

export interface MsgSendSellOrderResponse {
}

export interface MsgSendBuyOrder {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
}

export interface MsgSendBuyOrderResponse {
}

export interface MsgCancelSellOrder {
  creator: string;
  port: string;
  channel: string;
  amountDenom: string;
  priceDenom: string;
  orderID: number;
}

export interface MsgCancelSellOrderResponse {
}

export interface MsgCancelBuyOrder {
  creator: string;
  port: string;
  channel: string;
  amountDenom: string;
  priceDenom: string;
  orderID: number;
}

export interface MsgCancelBuyOrderResponse {
}

function createBaseMsgSendCreatePair(): MsgSendCreatePair {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, sourceDenom: "", targetDenom: "" };
}

export const MsgSendCreatePair = {
  encode(message: MsgSendCreatePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.sourceDenom !== "") {
      writer.uint32(42).string(message.sourceDenom);
    }
    if (message.targetDenom !== "") {
      writer.uint32(50).string(message.targetDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCreatePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCreatePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.sourceDenom = reader.string();
          break;
        case 6:
          message.targetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCreatePair {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
      targetDenom: isSet(object.targetDenom) ? String(object.targetDenom) : "",
    };
  },

  toJSON(message: MsgSendCreatePair): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom);
    message.targetDenom !== undefined && (obj.targetDenom = message.targetDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendCreatePair>, I>>(object: I): MsgSendCreatePair {
    const message = createBaseMsgSendCreatePair();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.sourceDenom = object.sourceDenom ?? "";
    message.targetDenom = object.targetDenom ?? "";
    return message;
  },
};

function createBaseMsgSendCreatePairResponse(): MsgSendCreatePairResponse {
  return {};
}

export const MsgSendCreatePairResponse = {
  encode(_: MsgSendCreatePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCreatePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCreatePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendCreatePairResponse {
    return {};
  },

  toJSON(_: MsgSendCreatePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendCreatePairResponse>, I>>(_: I): MsgSendCreatePairResponse {
    const message = createBaseMsgSendCreatePairResponse();
    return message;
  },
};

function createBaseMsgSendSellOrder(): MsgSendSellOrder {
  return {
    creator: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
    amountDenom: "",
    amount: 0,
    priceDenom: "",
    price: 0,
  };
}

export const MsgSendSellOrder = {
  encode(message: MsgSendSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.amountDenom !== "") {
      writer.uint32(42).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(48).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(58).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(64).int32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.amountDenom = reader.string();
          break;
        case 6:
          message.amount = reader.int32();
          break;
        case 7:
          message.priceDenom = reader.string();
          break;
        case 8:
          message.price = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendSellOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: MsgSendSellOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.price !== undefined && (obj.price = Math.round(message.price));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendSellOrder>, I>>(object: I): MsgSendSellOrder {
    const message = createBaseMsgSendSellOrder();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseMsgSendSellOrderResponse(): MsgSendSellOrderResponse {
  return {};
}

export const MsgSendSellOrderResponse = {
  encode(_: MsgSendSellOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendSellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendSellOrderResponse {
    return {};
  },

  toJSON(_: MsgSendSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendSellOrderResponse>, I>>(_: I): MsgSendSellOrderResponse {
    const message = createBaseMsgSendSellOrderResponse();
    return message;
  },
};

function createBaseMsgSendBuyOrder(): MsgSendBuyOrder {
  return {
    creator: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
    amountDenom: "",
    amount: 0,
    priceDenom: "",
    price: 0,
  };
}

export const MsgSendBuyOrder = {
  encode(message: MsgSendBuyOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.amountDenom !== "") {
      writer.uint32(42).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(48).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(58).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(64).int32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendBuyOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendBuyOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.amountDenom = reader.string();
          break;
        case 6:
          message.amount = reader.int32();
          break;
        case 7:
          message.priceDenom = reader.string();
          break;
        case 8:
          message.price = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendBuyOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: MsgSendBuyOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.price !== undefined && (obj.price = Math.round(message.price));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendBuyOrder>, I>>(object: I): MsgSendBuyOrder {
    const message = createBaseMsgSendBuyOrder();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseMsgSendBuyOrderResponse(): MsgSendBuyOrderResponse {
  return {};
}

export const MsgSendBuyOrderResponse = {
  encode(_: MsgSendBuyOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendBuyOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendBuyOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendBuyOrderResponse {
    return {};
  },

  toJSON(_: MsgSendBuyOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendBuyOrderResponse>, I>>(_: I): MsgSendBuyOrderResponse {
    const message = createBaseMsgSendBuyOrderResponse();
    return message;
  },
};

function createBaseMsgCancelSellOrder(): MsgCancelSellOrder {
  return { creator: "", port: "", channel: "", amountDenom: "", priceDenom: "", orderID: 0 };
}

export const MsgCancelSellOrder = {
  encode(message: MsgCancelSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    if (message.amountDenom !== "") {
      writer.uint32(34).string(message.amountDenom);
    }
    if (message.priceDenom !== "") {
      writer.uint32(42).string(message.priceDenom);
    }
    if (message.orderID !== 0) {
      writer.uint32(48).int32(message.orderID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channel = reader.string();
          break;
        case 4:
          message.amountDenom = reader.string();
          break;
        case 5:
          message.priceDenom = reader.string();
          break;
        case 6:
          message.orderID = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelSellOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      orderID: isSet(object.orderID) ? Number(object.orderID) : 0,
    };
  },

  toJSON(message: MsgCancelSellOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channel !== undefined && (obj.channel = message.channel);
    message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.orderID !== undefined && (obj.orderID = Math.round(message.orderID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSellOrder>, I>>(object: I): MsgCancelSellOrder {
    const message = createBaseMsgCancelSellOrder();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    message.amountDenom = object.amountDenom ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.orderID = object.orderID ?? 0;
    return message;
  },
};

function createBaseMsgCancelSellOrderResponse(): MsgCancelSellOrderResponse {
  return {};
}

export const MsgCancelSellOrderResponse = {
  encode(_: MsgCancelSellOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelSellOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSellOrderResponse>, I>>(_: I): MsgCancelSellOrderResponse {
    const message = createBaseMsgCancelSellOrderResponse();
    return message;
  },
};

function createBaseMsgCancelBuyOrder(): MsgCancelBuyOrder {
  return { creator: "", port: "", channel: "", amountDenom: "", priceDenom: "", orderID: 0 };
}

export const MsgCancelBuyOrder = {
  encode(message: MsgCancelBuyOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    if (message.amountDenom !== "") {
      writer.uint32(34).string(message.amountDenom);
    }
    if (message.priceDenom !== "") {
      writer.uint32(42).string(message.priceDenom);
    }
    if (message.orderID !== 0) {
      writer.uint32(48).int32(message.orderID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBuyOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBuyOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channel = reader.string();
          break;
        case 4:
          message.amountDenom = reader.string();
          break;
        case 5:
          message.priceDenom = reader.string();
          break;
        case 6:
          message.orderID = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelBuyOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      orderID: isSet(object.orderID) ? Number(object.orderID) : 0,
    };
  },

  toJSON(message: MsgCancelBuyOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channel !== undefined && (obj.channel = message.channel);
    message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.orderID !== undefined && (obj.orderID = Math.round(message.orderID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBuyOrder>, I>>(object: I): MsgCancelBuyOrder {
    const message = createBaseMsgCancelBuyOrder();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    message.amountDenom = object.amountDenom ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.orderID = object.orderID ?? 0;
    return message;
  },
};

function createBaseMsgCancelBuyOrderResponse(): MsgCancelBuyOrderResponse {
  return {};
}

export const MsgCancelBuyOrderResponse = {
  encode(_: MsgCancelBuyOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBuyOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBuyOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelBuyOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelBuyOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBuyOrderResponse>, I>>(_: I): MsgCancelBuyOrderResponse {
    const message = createBaseMsgCancelBuyOrderResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse>;
  SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse>;
  SendBuyOrder(request: MsgSendBuyOrder): Promise<MsgSendBuyOrderResponse>;
  CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendCreatePair = this.SendCreatePair.bind(this);
    this.SendSellOrder = this.SendSellOrder.bind(this);
    this.SendBuyOrder = this.SendBuyOrder.bind(this);
    this.CancelSellOrder = this.CancelSellOrder.bind(this);
    this.CancelBuyOrder = this.CancelBuyOrder.bind(this);
  }
  SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse> {
    const data = MsgSendCreatePair.encode(request).finish();
    const promise = this.rpc.request("interchange.dex.Msg", "SendCreatePair", data);
    return promise.then((data) => MsgSendCreatePairResponse.decode(new _m0.Reader(data)));
  }

  SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse> {
    const data = MsgSendSellOrder.encode(request).finish();
    const promise = this.rpc.request("interchange.dex.Msg", "SendSellOrder", data);
    return promise.then((data) => MsgSendSellOrderResponse.decode(new _m0.Reader(data)));
  }

  SendBuyOrder(request: MsgSendBuyOrder): Promise<MsgSendBuyOrderResponse> {
    const data = MsgSendBuyOrder.encode(request).finish();
    const promise = this.rpc.request("interchange.dex.Msg", "SendBuyOrder", data);
    return promise.then((data) => MsgSendBuyOrderResponse.decode(new _m0.Reader(data)));
  }

  CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse> {
    const data = MsgCancelSellOrder.encode(request).finish();
    const promise = this.rpc.request("interchange.dex.Msg", "CancelSellOrder", data);
    return promise.then((data) => MsgCancelSellOrderResponse.decode(new _m0.Reader(data)));
  }

  CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse> {
    const data = MsgCancelBuyOrder.encode(request).finish();
    const promise = this.rpc.request("interchange.dex.Msg", "CancelBuyOrder", data);
    return promise.then((data) => MsgCancelBuyOrderResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

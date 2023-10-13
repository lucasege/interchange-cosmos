/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "interchange.dex";

export interface DexPacketData {
  noData:
    | NoData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  buyOrderPacket:
    | BuyOrderPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  sellOrderPacket:
    | SellOrderPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  createPairPacket: CreatePairPacketData | undefined;
}

export interface NoData {
}

/** CreatePairPacketData defines a struct for the packet payload */
export interface CreatePairPacketData {
  sourceDenom: string;
  targetDenom: string;
}

/** CreatePairPacketAck defines a struct for the packet acknowledgment */
export interface CreatePairPacketAck {
}

/** SellOrderPacketData defines a struct for the packet payload */
export interface SellOrderPacketData {
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
}

/** SellOrderPacketAck defines a struct for the packet acknowledgment */
export interface SellOrderPacketAck {
  remainingAmount: number;
  gain: number;
}

/** BuyOrderPacketData defines a struct for the packet payload */
export interface BuyOrderPacketData {
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
}

/** BuyOrderPacketAck defines a struct for the packet acknowledgment */
export interface BuyOrderPacketAck {
  remainingAmount: number;
  purchase: number;
}

function createBaseDexPacketData(): DexPacketData {
  return { noData: undefined, buyOrderPacket: undefined, sellOrderPacket: undefined, createPairPacket: undefined };
}

export const DexPacketData = {
  encode(message: DexPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.buyOrderPacket !== undefined) {
      BuyOrderPacketData.encode(message.buyOrderPacket, writer.uint32(34).fork()).ldelim();
    }
    if (message.sellOrderPacket !== undefined) {
      SellOrderPacketData.encode(message.sellOrderPacket, writer.uint32(26).fork()).ldelim();
    }
    if (message.createPairPacket !== undefined) {
      CreatePairPacketData.encode(message.createPairPacket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DexPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDexPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 4:
          message.buyOrderPacket = BuyOrderPacketData.decode(reader, reader.uint32());
          break;
        case 3:
          message.sellOrderPacket = SellOrderPacketData.decode(reader, reader.uint32());
          break;
        case 2:
          message.createPairPacket = CreatePairPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DexPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      buyOrderPacket: isSet(object.buyOrderPacket) ? BuyOrderPacketData.fromJSON(object.buyOrderPacket) : undefined,
      sellOrderPacket: isSet(object.sellOrderPacket) ? SellOrderPacketData.fromJSON(object.sellOrderPacket) : undefined,
      createPairPacket: isSet(object.createPairPacket)
        ? CreatePairPacketData.fromJSON(object.createPairPacket)
        : undefined,
    };
  },

  toJSON(message: DexPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.buyOrderPacket !== undefined
      && (obj.buyOrderPacket = message.buyOrderPacket ? BuyOrderPacketData.toJSON(message.buyOrderPacket) : undefined);
    message.sellOrderPacket !== undefined && (obj.sellOrderPacket = message.sellOrderPacket
      ? SellOrderPacketData.toJSON(message.sellOrderPacket)
      : undefined);
    message.createPairPacket !== undefined && (obj.createPairPacket = message.createPairPacket
      ? CreatePairPacketData.toJSON(message.createPairPacket)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DexPacketData>, I>>(object: I): DexPacketData {
    const message = createBaseDexPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.buyOrderPacket = (object.buyOrderPacket !== undefined && object.buyOrderPacket !== null)
      ? BuyOrderPacketData.fromPartial(object.buyOrderPacket)
      : undefined;
    message.sellOrderPacket = (object.sellOrderPacket !== undefined && object.sellOrderPacket !== null)
      ? SellOrderPacketData.fromPartial(object.sellOrderPacket)
      : undefined;
    message.createPairPacket = (object.createPairPacket !== undefined && object.createPairPacket !== null)
      ? CreatePairPacketData.fromPartial(object.createPairPacket)
      : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseCreatePairPacketData(): CreatePairPacketData {
  return { sourceDenom: "", targetDenom: "" };
}

export const CreatePairPacketData = {
  encode(message: CreatePairPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceDenom !== "") {
      writer.uint32(10).string(message.sourceDenom);
    }
    if (message.targetDenom !== "") {
      writer.uint32(18).string(message.targetDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePairPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePairPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceDenom = reader.string();
          break;
        case 2:
          message.targetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePairPacketData {
    return {
      sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
      targetDenom: isSet(object.targetDenom) ? String(object.targetDenom) : "",
    };
  },

  toJSON(message: CreatePairPacketData): unknown {
    const obj: any = {};
    message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom);
    message.targetDenom !== undefined && (obj.targetDenom = message.targetDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePairPacketData>, I>>(object: I): CreatePairPacketData {
    const message = createBaseCreatePairPacketData();
    message.sourceDenom = object.sourceDenom ?? "";
    message.targetDenom = object.targetDenom ?? "";
    return message;
  },
};

function createBaseCreatePairPacketAck(): CreatePairPacketAck {
  return {};
}

export const CreatePairPacketAck = {
  encode(_: CreatePairPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePairPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePairPacketAck();
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

  fromJSON(_: any): CreatePairPacketAck {
    return {};
  },

  toJSON(_: CreatePairPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePairPacketAck>, I>>(_: I): CreatePairPacketAck {
    const message = createBaseCreatePairPacketAck();
    return message;
  },
};

function createBaseSellOrderPacketData(): SellOrderPacketData {
  return { amountDenom: "", amount: 0, priceDenom: "", price: 0 };
}

export const SellOrderPacketData = {
  encode(message: SellOrderPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountDenom !== "") {
      writer.uint32(10).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountDenom = reader.string();
          break;
        case 2:
          message.amount = reader.int32();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.price = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellOrderPacketData {
    return {
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: SellOrderPacketData): unknown {
    const obj: any = {};
    message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.price !== undefined && (obj.price = Math.round(message.price));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SellOrderPacketData>, I>>(object: I): SellOrderPacketData {
    const message = createBaseSellOrderPacketData();
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseSellOrderPacketAck(): SellOrderPacketAck {
  return { remainingAmount: 0, gain: 0 };
}

export const SellOrderPacketAck = {
  encode(message: SellOrderPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remainingAmount !== 0) {
      writer.uint32(8).int32(message.remainingAmount);
    }
    if (message.gain !== 0) {
      writer.uint32(16).int32(message.gain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainingAmount = reader.int32();
          break;
        case 2:
          message.gain = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellOrderPacketAck {
    return {
      remainingAmount: isSet(object.remainingAmount) ? Number(object.remainingAmount) : 0,
      gain: isSet(object.gain) ? Number(object.gain) : 0,
    };
  },

  toJSON(message: SellOrderPacketAck): unknown {
    const obj: any = {};
    message.remainingAmount !== undefined && (obj.remainingAmount = Math.round(message.remainingAmount));
    message.gain !== undefined && (obj.gain = Math.round(message.gain));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SellOrderPacketAck>, I>>(object: I): SellOrderPacketAck {
    const message = createBaseSellOrderPacketAck();
    message.remainingAmount = object.remainingAmount ?? 0;
    message.gain = object.gain ?? 0;
    return message;
  },
};

function createBaseBuyOrderPacketData(): BuyOrderPacketData {
  return { amountDenom: "", amount: 0, priceDenom: "", price: 0 };
}

export const BuyOrderPacketData = {
  encode(message: BuyOrderPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountDenom !== "") {
      writer.uint32(10).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountDenom = reader.string();
          break;
        case 2:
          message.amount = reader.int32();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.price = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyOrderPacketData {
    return {
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: BuyOrderPacketData): unknown {
    const obj: any = {};
    message.amountDenom !== undefined && (obj.amountDenom = message.amountDenom);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.price !== undefined && (obj.price = Math.round(message.price));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuyOrderPacketData>, I>>(object: I): BuyOrderPacketData {
    const message = createBaseBuyOrderPacketData();
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseBuyOrderPacketAck(): BuyOrderPacketAck {
  return { remainingAmount: 0, purchase: 0 };
}

export const BuyOrderPacketAck = {
  encode(message: BuyOrderPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remainingAmount !== 0) {
      writer.uint32(8).int32(message.remainingAmount);
    }
    if (message.purchase !== 0) {
      writer.uint32(16).int32(message.purchase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainingAmount = reader.int32();
          break;
        case 2:
          message.purchase = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyOrderPacketAck {
    return {
      remainingAmount: isSet(object.remainingAmount) ? Number(object.remainingAmount) : 0,
      purchase: isSet(object.purchase) ? Number(object.purchase) : 0,
    };
  },

  toJSON(message: BuyOrderPacketAck): unknown {
    const obj: any = {};
    message.remainingAmount !== undefined && (obj.remainingAmount = Math.round(message.remainingAmount));
    message.purchase !== undefined && (obj.purchase = Math.round(message.purchase));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuyOrderPacketAck>, I>>(object: I): BuyOrderPacketAck {
    const message = createBaseBuyOrderPacketAck();
    message.remainingAmount = object.remainingAmount ?? 0;
    message.purchase = object.purchase ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

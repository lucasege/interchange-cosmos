/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "interchange.dex";

export interface DenomTrace {
  index: string;
  port: string;
  channel: string;
  origin: string;
}

function createBaseDenomTrace(): DenomTrace {
  return { index: "", port: "", channel: "", origin: "" };
}

export const DenomTrace = {
  encode(message: DenomTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    if (message.origin !== "") {
      writer.uint32(34).string(message.origin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomTrace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channel = reader.string();
          break;
        case 4:
          message.origin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomTrace {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      origin: isSet(object.origin) ? String(object.origin) : "",
    };
  },

  toJSON(message: DenomTrace): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.port !== undefined && (obj.port = message.port);
    message.channel !== undefined && (obj.channel = message.channel);
    message.origin !== undefined && (obj.origin = message.origin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DenomTrace>, I>>(object: I): DenomTrace {
    const message = createBaseDenomTrace();
    message.index = object.index ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    message.origin = object.origin ?? "";
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

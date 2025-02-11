//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo } from "./fees";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Rpc } from "../../../helpers";
export const protobufPackage = "evmos.fees.v1";
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 */
export interface QueryDevFeeInfosRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 */
export interface QueryDevFeeInfosResponse {
  fees: DevFeeInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoRequest {
  /** contract identifier is the hex contract address of a contract */
  contractAddress: string;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoResponse {
  fee?: DevFeeInfo;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params?: Params;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerRequest {
  /** deployer bech32 address */
  deployerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerResponse {
  fees: DevFeeInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
function createBaseQueryDevFeeInfosRequest(): QueryDevFeeInfosRequest {
  return {
    pagination: undefined
  };
}
export const QueryDevFeeInfosRequest = {
  encode(message: QueryDevFeeInfosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDevFeeInfosRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfosRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosRequest>): QueryDevFeeInfosRequest {
    const message = createBaseQueryDevFeeInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDevFeeInfosResponse(): QueryDevFeeInfosResponse {
  return {
    fees: [],
    pagination: undefined
  };
}
export const QueryDevFeeInfosResponse = {
  encode(message: QueryDevFeeInfosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDevFeeInfosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfosResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosResponse): unknown {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosResponse>): QueryDevFeeInfosResponse {
    const message = createBaseQueryDevFeeInfosResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDevFeeInfoRequest(): QueryDevFeeInfoRequest {
  return {
    contractAddress: ""
  };
}
export const QueryDevFeeInfoRequest = {
  encode(message: QueryDevFeeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDevFeeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryDevFeeInfoRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoRequest>): QueryDevFeeInfoRequest {
    const message = createBaseQueryDevFeeInfoRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryDevFeeInfoResponse(): QueryDevFeeInfoResponse {
  return {
    fee: undefined
  };
}
export const QueryDevFeeInfoResponse = {
  encode(message: QueryDevFeeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      DevFeeInfo.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDevFeeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = DevFeeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoResponse {
    return {
      fee: isSet(object.fee) ? DevFeeInfo.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfoResponse): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DevFeeInfo.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoResponse>): QueryDevFeeInfoResponse {
    const message = createBaseQueryDevFeeInfoResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? DevFeeInfo.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryDevFeeInfosPerDeployerRequest(): QueryDevFeeInfosPerDeployerRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}
export const QueryDevFeeInfosPerDeployerRequest = {
  encode(message: QueryDevFeeInfosPerDeployerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDevFeeInfosPerDeployerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployerAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfosPerDeployerRequest {
    return {
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosPerDeployerRequest): unknown {
    const obj: any = {};
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerRequest>): QueryDevFeeInfosPerDeployerRequest {
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDevFeeInfosPerDeployerResponse(): QueryDevFeeInfosPerDeployerResponse {
  return {
    fees: [],
    pagination: undefined
  };
}
export const QueryDevFeeInfosPerDeployerResponse = {
  encode(message: QueryDevFeeInfosPerDeployerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDevFeeInfosPerDeployerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfosPerDeployerResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosPerDeployerResponse): unknown {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerResponse>): QueryDevFeeInfosPerDeployerResponse {
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** DevFeeInfos retrieves all registered contracts for fee distribution */
  DevFeeInfos(request?: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponse>;
  /** DevFeeInfo retrieves a registered contract for fee distribution */
  DevFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse>;
  /** Params retrieves the fees module params */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   * registered for fee distribution
   */
  DevFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DevFeeInfos = this.DevFeeInfos.bind(this);
    this.DevFeeInfo = this.DevFeeInfo.bind(this);
    this.Params = this.Params.bind(this);
    this.DevFeeInfosPerDeployer = this.DevFeeInfosPerDeployer.bind(this);
  }
  DevFeeInfos(request: QueryDevFeeInfosRequest = {
    pagination: undefined
  }): Promise<QueryDevFeeInfosResponse> {
    const data = QueryDevFeeInfosRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfos", data);
    return promise.then(data => QueryDevFeeInfosResponse.decode(new _m0.Reader(data)));
  }
  DevFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> {
    const data = QueryDevFeeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfo", data);
    return promise.then(data => QueryDevFeeInfoResponse.decode(new _m0.Reader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  DevFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> {
    const data = QueryDevFeeInfosPerDeployerRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfosPerDeployer", data);
    return promise.then(data => QueryDevFeeInfosPerDeployerResponse.decode(new _m0.Reader(data)));
  }
}
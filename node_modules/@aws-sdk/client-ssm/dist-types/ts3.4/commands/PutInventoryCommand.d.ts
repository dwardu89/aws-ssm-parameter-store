import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { PutInventoryRequest, PutInventoryResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface PutInventoryCommandInput extends PutInventoryRequest {}
export interface PutInventoryCommandOutput
  extends PutInventoryResult,
    __MetadataBearer {}
declare const PutInventoryCommand_base: {
  new (
    input: PutInventoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutInventoryCommandInput,
    PutInventoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutInventoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutInventoryCommandInput,
    PutInventoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutInventoryCommand extends PutInventoryCommand_base {
  protected static __types: {
    api: {
      input: PutInventoryRequest;
      output: PutInventoryResult;
    };
    sdk: {
      input: PutInventoryCommandInput;
      output: PutInventoryCommandOutput;
    };
  };
}

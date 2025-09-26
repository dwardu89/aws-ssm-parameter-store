import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface RemoveTagsFromResourceCommandInput
  extends RemoveTagsFromResourceRequest {}
export interface RemoveTagsFromResourceCommandOutput
  extends RemoveTagsFromResourceResult,
    __MetadataBearer {}
declare const RemoveTagsFromResourceCommand_base: {
  new (
    input: RemoveTagsFromResourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveTagsFromResourceCommandInput,
    RemoveTagsFromResourceCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RemoveTagsFromResourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveTagsFromResourceCommandInput,
    RemoveTagsFromResourceCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RemoveTagsFromResourceCommand extends RemoveTagsFromResourceCommand_base {
  protected static __types: {
    api: {
      input: RemoveTagsFromResourceRequest;
      output: {};
    };
    sdk: {
      input: RemoveTagsFromResourceCommandInput;
      output: RemoveTagsFromResourceCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  UpdateResourceDataSyncRequest,
  UpdateResourceDataSyncResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface UpdateResourceDataSyncCommandInput
  extends UpdateResourceDataSyncRequest {}
export interface UpdateResourceDataSyncCommandOutput
  extends UpdateResourceDataSyncResult,
    __MetadataBearer {}
declare const UpdateResourceDataSyncCommand_base: {
  new (
    input: UpdateResourceDataSyncCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateResourceDataSyncCommandInput,
    UpdateResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateResourceDataSyncCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateResourceDataSyncCommandInput,
    UpdateResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateResourceDataSyncCommand extends UpdateResourceDataSyncCommand_base {
  protected static __types: {
    api: {
      input: UpdateResourceDataSyncRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceDataSyncCommandInput;
      output: UpdateResourceDataSyncCommandOutput;
    };
  };
}

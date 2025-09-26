import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CreateResourceDataSyncRequest,
  CreateResourceDataSyncResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface CreateResourceDataSyncCommandInput
  extends CreateResourceDataSyncRequest {}
export interface CreateResourceDataSyncCommandOutput
  extends CreateResourceDataSyncResult,
    __MetadataBearer {}
declare const CreateResourceDataSyncCommand_base: {
  new (
    input: CreateResourceDataSyncCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateResourceDataSyncCommandInput,
    CreateResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateResourceDataSyncCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateResourceDataSyncCommandInput,
    CreateResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateResourceDataSyncCommand extends CreateResourceDataSyncCommand_base {
  protected static __types: {
    api: {
      input: CreateResourceDataSyncRequest;
      output: {};
    };
    sdk: {
      input: CreateResourceDataSyncCommandInput;
      output: CreateResourceDataSyncCommandOutput;
    };
  };
}

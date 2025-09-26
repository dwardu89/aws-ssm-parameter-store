import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  UpdateServiceSettingRequest,
  UpdateServiceSettingResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface UpdateServiceSettingCommandInput
  extends UpdateServiceSettingRequest {}
export interface UpdateServiceSettingCommandOutput
  extends UpdateServiceSettingResult,
    __MetadataBearer {}
declare const UpdateServiceSettingCommand_base: {
  new (
    input: UpdateServiceSettingCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateServiceSettingCommandInput,
    UpdateServiceSettingCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateServiceSettingCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateServiceSettingCommandInput,
    UpdateServiceSettingCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateServiceSettingCommand extends UpdateServiceSettingCommand_base {
  protected static __types: {
    api: {
      input: UpdateServiceSettingRequest;
      output: {};
    };
    sdk: {
      input: UpdateServiceSettingCommandInput;
      output: UpdateServiceSettingCommandOutput;
    };
  };
}

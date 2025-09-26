import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CancelMaintenanceWindowExecutionRequest,
  CancelMaintenanceWindowExecutionResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface CancelMaintenanceWindowExecutionCommandInput
  extends CancelMaintenanceWindowExecutionRequest {}
export interface CancelMaintenanceWindowExecutionCommandOutput
  extends CancelMaintenanceWindowExecutionResult,
    __MetadataBearer {}
declare const CancelMaintenanceWindowExecutionCommand_base: {
  new (
    input: CancelMaintenanceWindowExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelMaintenanceWindowExecutionCommandInput,
    CancelMaintenanceWindowExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CancelMaintenanceWindowExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CancelMaintenanceWindowExecutionCommandInput,
    CancelMaintenanceWindowExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CancelMaintenanceWindowExecutionCommand extends CancelMaintenanceWindowExecutionCommand_base {
  protected static __types: {
    api: {
      input: CancelMaintenanceWindowExecutionRequest;
      output: CancelMaintenanceWindowExecutionResult;
    };
    sdk: {
      input: CancelMaintenanceWindowExecutionCommandInput;
      output: CancelMaintenanceWindowExecutionCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTargetFromMaintenanceWindowResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DeregisterTargetFromMaintenanceWindowCommandInput
  extends DeregisterTargetFromMaintenanceWindowRequest {}
export interface DeregisterTargetFromMaintenanceWindowCommandOutput
  extends DeregisterTargetFromMaintenanceWindowResult,
    __MetadataBearer {}
declare const DeregisterTargetFromMaintenanceWindowCommand_base: {
  new (
    input: DeregisterTargetFromMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeregisterTargetFromMaintenanceWindowCommandInput,
    DeregisterTargetFromMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeregisterTargetFromMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeregisterTargetFromMaintenanceWindowCommandInput,
    DeregisterTargetFromMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeregisterTargetFromMaintenanceWindowCommand extends DeregisterTargetFromMaintenanceWindowCommand_base {
  protected static __types: {
    api: {
      input: DeregisterTargetFromMaintenanceWindowRequest;
      output: DeregisterTargetFromMaintenanceWindowResult;
    };
    sdk: {
      input: DeregisterTargetFromMaintenanceWindowCommandInput;
      output: DeregisterTargetFromMaintenanceWindowCommandOutput;
    };
  };
}

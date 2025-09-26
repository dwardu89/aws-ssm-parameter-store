import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  RegisterTaskWithMaintenanceWindowRequest,
  RegisterTaskWithMaintenanceWindowResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface RegisterTaskWithMaintenanceWindowCommandInput
  extends RegisterTaskWithMaintenanceWindowRequest {}
export interface RegisterTaskWithMaintenanceWindowCommandOutput
  extends RegisterTaskWithMaintenanceWindowResult,
    __MetadataBearer {}
declare const RegisterTaskWithMaintenanceWindowCommand_base: {
  new (
    input: RegisterTaskWithMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterTaskWithMaintenanceWindowCommandInput,
    RegisterTaskWithMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RegisterTaskWithMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterTaskWithMaintenanceWindowCommandInput,
    RegisterTaskWithMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RegisterTaskWithMaintenanceWindowCommand extends RegisterTaskWithMaintenanceWindowCommand_base {
  protected static __types: {
    api: {
      input: RegisterTaskWithMaintenanceWindowRequest;
      output: RegisterTaskWithMaintenanceWindowResult;
    };
    sdk: {
      input: RegisterTaskWithMaintenanceWindowCommandInput;
      output: RegisterTaskWithMaintenanceWindowCommandOutput;
    };
  };
}

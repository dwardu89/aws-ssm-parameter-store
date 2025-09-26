import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  RegisterTargetWithMaintenanceWindowRequest,
  RegisterTargetWithMaintenanceWindowResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface RegisterTargetWithMaintenanceWindowCommandInput
  extends RegisterTargetWithMaintenanceWindowRequest {}
export interface RegisterTargetWithMaintenanceWindowCommandOutput
  extends RegisterTargetWithMaintenanceWindowResult,
    __MetadataBearer {}
declare const RegisterTargetWithMaintenanceWindowCommand_base: {
  new (
    input: RegisterTargetWithMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterTargetWithMaintenanceWindowCommandInput,
    RegisterTargetWithMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RegisterTargetWithMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterTargetWithMaintenanceWindowCommandInput,
    RegisterTargetWithMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RegisterTargetWithMaintenanceWindowCommand extends RegisterTargetWithMaintenanceWindowCommand_base {
  protected static __types: {
    api: {
      input: RegisterTargetWithMaintenanceWindowRequest;
      output: RegisterTargetWithMaintenanceWindowResult;
    };
    sdk: {
      input: RegisterTargetWithMaintenanceWindowCommandInput;
      output: RegisterTargetWithMaintenanceWindowCommandOutput;
    };
  };
}

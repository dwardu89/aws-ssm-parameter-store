import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DeregisterTaskFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DeregisterTaskFromMaintenanceWindowCommandInput
  extends DeregisterTaskFromMaintenanceWindowRequest {}
export interface DeregisterTaskFromMaintenanceWindowCommandOutput
  extends DeregisterTaskFromMaintenanceWindowResult,
    __MetadataBearer {}
declare const DeregisterTaskFromMaintenanceWindowCommand_base: {
  new (
    input: DeregisterTaskFromMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeregisterTaskFromMaintenanceWindowCommandInput,
    DeregisterTaskFromMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeregisterTaskFromMaintenanceWindowCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeregisterTaskFromMaintenanceWindowCommandInput,
    DeregisterTaskFromMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeregisterTaskFromMaintenanceWindowCommand extends DeregisterTaskFromMaintenanceWindowCommand_base {
  protected static __types: {
    api: {
      input: DeregisterTaskFromMaintenanceWindowRequest;
      output: DeregisterTaskFromMaintenanceWindowResult;
    };
    sdk: {
      input: DeregisterTaskFromMaintenanceWindowCommandInput;
      output: DeregisterTaskFromMaintenanceWindowCommandOutput;
    };
  };
}

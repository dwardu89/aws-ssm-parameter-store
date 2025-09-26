import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DescribeMaintenanceWindowTargetsRequest,
  DescribeMaintenanceWindowTargetsResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeMaintenanceWindowTargetsCommandInput
  extends DescribeMaintenanceWindowTargetsRequest {}
export interface DescribeMaintenanceWindowTargetsCommandOutput
  extends DescribeMaintenanceWindowTargetsResult,
    __MetadataBearer {}
declare const DescribeMaintenanceWindowTargetsCommand_base: {
  new (
    input: DescribeMaintenanceWindowTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowTargetsCommandInput,
    DescribeMaintenanceWindowTargetsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeMaintenanceWindowTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowTargetsCommandInput,
    DescribeMaintenanceWindowTargetsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeMaintenanceWindowTargetsCommand extends DescribeMaintenanceWindowTargetsCommand_base {
  protected static __types: {
    api: {
      input: DescribeMaintenanceWindowTargetsRequest;
      output: DescribeMaintenanceWindowTargetsResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowTargetsCommandInput;
      output: DescribeMaintenanceWindowTargetsCommandOutput;
    };
  };
}

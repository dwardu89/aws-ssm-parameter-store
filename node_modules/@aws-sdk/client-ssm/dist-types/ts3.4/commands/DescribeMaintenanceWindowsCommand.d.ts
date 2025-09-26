import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { DescribeMaintenanceWindowsRequest } from "../models/models_0";
import { DescribeMaintenanceWindowsResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeMaintenanceWindowsCommandInput
  extends DescribeMaintenanceWindowsRequest {}
export interface DescribeMaintenanceWindowsCommandOutput
  extends DescribeMaintenanceWindowsResult,
    __MetadataBearer {}
declare const DescribeMaintenanceWindowsCommand_base: {
  new (
    input: DescribeMaintenanceWindowsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowsCommandInput,
    DescribeMaintenanceWindowsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeMaintenanceWindowsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowsCommandInput,
    DescribeMaintenanceWindowsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeMaintenanceWindowsCommand extends DescribeMaintenanceWindowsCommand_base {
  protected static __types: {
    api: {
      input: DescribeMaintenanceWindowsRequest;
      output: DescribeMaintenanceWindowsResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowsCommandInput;
      output: DescribeMaintenanceWindowsCommandOutput;
    };
  };
}

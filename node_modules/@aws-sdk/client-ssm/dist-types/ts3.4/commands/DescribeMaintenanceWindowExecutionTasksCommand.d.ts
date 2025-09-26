import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DescribeMaintenanceWindowExecutionTasksRequest,
  DescribeMaintenanceWindowExecutionTasksResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeMaintenanceWindowExecutionTasksCommandInput
  extends DescribeMaintenanceWindowExecutionTasksRequest {}
export interface DescribeMaintenanceWindowExecutionTasksCommandOutput
  extends DescribeMaintenanceWindowExecutionTasksResult,
    __MetadataBearer {}
declare const DescribeMaintenanceWindowExecutionTasksCommand_base: {
  new (
    input: DescribeMaintenanceWindowExecutionTasksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowExecutionTasksCommandInput,
    DescribeMaintenanceWindowExecutionTasksCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeMaintenanceWindowExecutionTasksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowExecutionTasksCommandInput,
    DescribeMaintenanceWindowExecutionTasksCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeMaintenanceWindowExecutionTasksCommand extends DescribeMaintenanceWindowExecutionTasksCommand_base {
  protected static __types: {
    api: {
      input: DescribeMaintenanceWindowExecutionTasksRequest;
      output: DescribeMaintenanceWindowExecutionTasksResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowExecutionTasksCommandInput;
      output: DescribeMaintenanceWindowExecutionTasksCommandOutput;
    };
  };
}

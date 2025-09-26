import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DescribeMaintenanceWindowScheduleRequest,
  DescribeMaintenanceWindowScheduleResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeMaintenanceWindowScheduleCommandInput
  extends DescribeMaintenanceWindowScheduleRequest {}
export interface DescribeMaintenanceWindowScheduleCommandOutput
  extends DescribeMaintenanceWindowScheduleResult,
    __MetadataBearer {}
declare const DescribeMaintenanceWindowScheduleCommand_base: {
  new (
    input: DescribeMaintenanceWindowScheduleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowScheduleCommandInput,
    DescribeMaintenanceWindowScheduleCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeMaintenanceWindowScheduleCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMaintenanceWindowScheduleCommandInput,
    DescribeMaintenanceWindowScheduleCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeMaintenanceWindowScheduleCommand extends DescribeMaintenanceWindowScheduleCommand_base {
  protected static __types: {
    api: {
      input: DescribeMaintenanceWindowScheduleRequest;
      output: DescribeMaintenanceWindowScheduleResult;
    };
    sdk: {
      input: DescribeMaintenanceWindowScheduleCommandInput;
      output: DescribeMaintenanceWindowScheduleCommandOutput;
    };
  };
}

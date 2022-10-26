import { Paginator } from "@aws-sdk/types";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMaintenanceWindowExecutionTaskInvocations(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;

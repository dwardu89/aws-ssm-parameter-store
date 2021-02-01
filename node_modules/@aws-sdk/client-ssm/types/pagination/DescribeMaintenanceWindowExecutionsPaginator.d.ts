import { DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMaintenanceWindowExecutions(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowExecutionsCommandOutput>;

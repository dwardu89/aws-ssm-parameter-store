import { Paginator } from "@aws-sdk/types";
import { DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMaintenanceWindowExecutions(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowExecutionsCommandOutput>;

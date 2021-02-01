import { DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput } from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMaintenanceWindowTasks(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowTasksCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowTasksCommandOutput>;

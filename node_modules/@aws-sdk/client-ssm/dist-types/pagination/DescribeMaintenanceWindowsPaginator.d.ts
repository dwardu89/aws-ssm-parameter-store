import { Paginator } from "@aws-sdk/types";
import { DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput } from "../commands/DescribeMaintenanceWindowsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMaintenanceWindows(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowsCommandOutput>;

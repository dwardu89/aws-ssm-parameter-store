import { Paginator } from "@aws-sdk/types";
import { DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput } from "../commands/DescribeMaintenanceWindowTargetsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMaintenanceWindowTargets(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowTargetsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowTargetsCommandOutput>;

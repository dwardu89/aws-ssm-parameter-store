import { DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput } from "../commands/DescribeMaintenanceWindowScheduleCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMaintenanceWindowSchedule(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowScheduleCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowScheduleCommandOutput>;

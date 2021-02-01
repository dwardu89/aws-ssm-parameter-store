import { DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput } from "../commands/DescribeAutomationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAutomationExecutions(config: SSMPaginationConfiguration, input: DescribeAutomationExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeAutomationExecutionsCommandOutput>;

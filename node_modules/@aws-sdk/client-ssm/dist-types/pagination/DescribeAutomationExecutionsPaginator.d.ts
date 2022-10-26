import { Paginator } from "@aws-sdk/types";
import { DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput } from "../commands/DescribeAutomationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeAutomationExecutions(config: SSMPaginationConfiguration, input: DescribeAutomationExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeAutomationExecutionsCommandOutput>;

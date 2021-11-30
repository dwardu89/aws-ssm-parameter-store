import { Paginator } from "@aws-sdk/types";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "../commands/DescribeSessionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeSessions(config: SSMPaginationConfiguration, input: DescribeSessionsCommandInput, ...additionalArguments: any): Paginator<DescribeSessionsCommandOutput>;

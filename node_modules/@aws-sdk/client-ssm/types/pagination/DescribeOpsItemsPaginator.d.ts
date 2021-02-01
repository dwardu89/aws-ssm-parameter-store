import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "../commands/DescribeOpsItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeOpsItems(config: SSMPaginationConfiguration, input: DescribeOpsItemsCommandInput, ...additionalArguments: any): Paginator<DescribeOpsItemsCommandOutput>;

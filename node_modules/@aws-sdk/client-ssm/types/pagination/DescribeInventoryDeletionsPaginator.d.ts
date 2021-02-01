import { DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput } from "../commands/DescribeInventoryDeletionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInventoryDeletions(config: SSMPaginationConfiguration, input: DescribeInventoryDeletionsCommandInput, ...additionalArguments: any): Paginator<DescribeInventoryDeletionsCommandOutput>;

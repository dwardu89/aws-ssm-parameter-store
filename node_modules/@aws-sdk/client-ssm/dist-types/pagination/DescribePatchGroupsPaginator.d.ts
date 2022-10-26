import { Paginator } from "@aws-sdk/types";
import { DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput } from "../commands/DescribePatchGroupsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribePatchGroups(config: SSMPaginationConfiguration, input: DescribePatchGroupsCommandInput, ...additionalArguments: any): Paginator<DescribePatchGroupsCommandOutput>;

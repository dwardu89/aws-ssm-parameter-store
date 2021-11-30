import { Paginator } from "@aws-sdk/types";
import { ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput } from "../commands/ListOpsItemRelatedItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListOpsItemRelatedItems(config: SSMPaginationConfiguration, input: ListOpsItemRelatedItemsCommandInput, ...additionalArguments: any): Paginator<ListOpsItemRelatedItemsCommandOutput>;

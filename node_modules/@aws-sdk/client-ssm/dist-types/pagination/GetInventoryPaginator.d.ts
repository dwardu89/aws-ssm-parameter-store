import { Paginator } from "@aws-sdk/types";
import { GetInventoryCommandInput, GetInventoryCommandOutput } from "../commands/GetInventoryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateGetInventory(config: SSMPaginationConfiguration, input: GetInventoryCommandInput, ...additionalArguments: any): Paginator<GetInventoryCommandOutput>;

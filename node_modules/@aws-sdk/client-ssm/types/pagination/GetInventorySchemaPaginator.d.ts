import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "../commands/GetInventorySchemaCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetInventorySchema(config: SSMPaginationConfiguration, input: GetInventorySchemaCommandInput, ...additionalArguments: any): Paginator<GetInventorySchemaCommandOutput>;

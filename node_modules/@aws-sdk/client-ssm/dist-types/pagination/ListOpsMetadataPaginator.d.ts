import { Paginator } from "@aws-sdk/types";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "../commands/ListOpsMetadataCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListOpsMetadata(config: SSMPaginationConfiguration, input: ListOpsMetadataCommandInput, ...additionalArguments: any): Paginator<ListOpsMetadataCommandOutput>;

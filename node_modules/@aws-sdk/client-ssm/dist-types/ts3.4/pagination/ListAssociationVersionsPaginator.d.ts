import { Paginator } from "@aws-sdk/types";
import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput } from "../commands/ListAssociationVersionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListAssociationVersions(config: SSMPaginationConfiguration, input: ListAssociationVersionsCommandInput, ...additionalArguments: any): Paginator<ListAssociationVersionsCommandOutput>;

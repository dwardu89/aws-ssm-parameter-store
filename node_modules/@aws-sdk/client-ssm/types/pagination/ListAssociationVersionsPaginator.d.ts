import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput } from "../commands/ListAssociationVersionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssociationVersions(config: SSMPaginationConfiguration, input: ListAssociationVersionsCommandInput, ...additionalArguments: any): Paginator<ListAssociationVersionsCommandOutput>;

import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssociations(config: SSMPaginationConfiguration, input: ListAssociationsCommandInput, ...additionalArguments: any): Paginator<ListAssociationsCommandOutput>;

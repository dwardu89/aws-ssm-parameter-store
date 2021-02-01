import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "../commands/ListDocumentsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDocuments(config: SSMPaginationConfiguration, input: ListDocumentsCommandInput, ...additionalArguments: any): Paginator<ListDocumentsCommandOutput>;

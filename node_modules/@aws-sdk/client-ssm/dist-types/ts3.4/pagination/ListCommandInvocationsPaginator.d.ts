import { Paginator } from "@aws-sdk/types";
import { ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput } from "../commands/ListCommandInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListCommandInvocations(config: SSMPaginationConfiguration, input: ListCommandInvocationsCommandInput, ...additionalArguments: any): Paginator<ListCommandInvocationsCommandOutput>;

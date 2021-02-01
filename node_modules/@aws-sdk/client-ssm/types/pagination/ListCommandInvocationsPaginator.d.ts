import { ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput } from "../commands/ListCommandInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCommandInvocations(config: SSMPaginationConfiguration, input: ListCommandInvocationsCommandInput, ...additionalArguments: any): Paginator<ListCommandInvocationsCommandOutput>;

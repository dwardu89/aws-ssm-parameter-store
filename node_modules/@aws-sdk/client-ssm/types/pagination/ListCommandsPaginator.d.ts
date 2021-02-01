import { ListCommandsCommandInput, ListCommandsCommandOutput } from "../commands/ListCommandsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCommands(config: SSMPaginationConfiguration, input: ListCommandsCommandInput, ...additionalArguments: any): Paginator<ListCommandsCommandOutput>;

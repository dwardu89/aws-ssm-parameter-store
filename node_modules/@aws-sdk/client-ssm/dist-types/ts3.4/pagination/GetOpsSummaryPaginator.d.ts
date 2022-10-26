import { Paginator } from "@aws-sdk/types";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "../commands/GetOpsSummaryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateGetOpsSummary(config: SSMPaginationConfiguration, input: GetOpsSummaryCommandInput, ...additionalArguments: any): Paginator<GetOpsSummaryCommandOutput>;

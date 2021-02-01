import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "../commands/GetOpsSummaryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetOpsSummary(config: SSMPaginationConfiguration, input: GetOpsSummaryCommandInput, ...additionalArguments: any): Paginator<GetOpsSummaryCommandOutput>;

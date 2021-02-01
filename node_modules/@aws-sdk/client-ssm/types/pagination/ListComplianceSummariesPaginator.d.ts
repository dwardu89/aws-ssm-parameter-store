import { ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput } from "../commands/ListComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListComplianceSummaries(config: SSMPaginationConfiguration, input: ListComplianceSummariesCommandInput, ...additionalArguments: any): Paginator<ListComplianceSummariesCommandOutput>;

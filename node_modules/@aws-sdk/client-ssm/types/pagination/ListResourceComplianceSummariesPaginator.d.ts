import { ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput } from "../commands/ListResourceComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResourceComplianceSummaries(config: SSMPaginationConfiguration, input: ListResourceComplianceSummariesCommandInput, ...additionalArguments: any): Paginator<ListResourceComplianceSummariesCommandOutput>;

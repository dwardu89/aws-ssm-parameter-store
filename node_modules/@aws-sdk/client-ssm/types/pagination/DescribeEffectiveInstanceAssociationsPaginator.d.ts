import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput } from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEffectiveInstanceAssociations(config: SSMPaginationConfiguration, input: DescribeEffectiveInstanceAssociationsCommandInput, ...additionalArguments: any): Paginator<DescribeEffectiveInstanceAssociationsCommandOutput>;

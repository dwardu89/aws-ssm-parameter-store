import { DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput } from "../commands/DescribeAssociationExecutionTargetsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAssociationExecutionTargets(config: SSMPaginationConfiguration, input: DescribeAssociationExecutionTargetsCommandInput, ...additionalArguments: any): Paginator<DescribeAssociationExecutionTargetsCommandOutput>;

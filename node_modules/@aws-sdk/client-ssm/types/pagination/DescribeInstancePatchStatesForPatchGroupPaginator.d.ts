import { DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput } from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInstancePatchStatesForPatchGroup(config: SSMPaginationConfiguration, input: DescribeInstancePatchStatesForPatchGroupCommandInput, ...additionalArguments: any): Paginator<DescribeInstancePatchStatesForPatchGroupCommandOutput>;

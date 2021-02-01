import { DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput } from "../commands/DescribeInstancePatchStatesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInstancePatchStates(config: SSMPaginationConfiguration, input: DescribeInstancePatchStatesCommandInput, ...additionalArguments: any): Paginator<DescribeInstancePatchStatesCommandOutput>;

import { DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput } from "../commands/DescribeInstancePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInstancePatches(config: SSMPaginationConfiguration, input: DescribeInstancePatchesCommandInput, ...additionalArguments: any): Paginator<DescribeInstancePatchesCommandOutput>;

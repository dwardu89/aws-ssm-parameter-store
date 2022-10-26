import { Paginator } from "@aws-sdk/types";
import { DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput } from "../commands/DescribeInstancePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeInstancePatches(config: SSMPaginationConfiguration, input: DescribeInstancePatchesCommandInput, ...additionalArguments: any): Paginator<DescribeInstancePatchesCommandOutput>;

import { DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput } from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEffectivePatchesForPatchBaseline(config: SSMPaginationConfiguration, input: DescribeEffectivePatchesForPatchBaselineCommandInput, ...additionalArguments: any): Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput>;

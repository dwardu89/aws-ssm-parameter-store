import { DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput } from "../commands/DescribeAvailablePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAvailablePatches(config: SSMPaginationConfiguration, input: DescribeAvailablePatchesCommandInput, ...additionalArguments: any): Paginator<DescribeAvailablePatchesCommandOutput>;

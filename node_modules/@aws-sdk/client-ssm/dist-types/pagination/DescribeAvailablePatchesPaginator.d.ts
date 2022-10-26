import { Paginator } from "@aws-sdk/types";
import { DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput } from "../commands/DescribeAvailablePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeAvailablePatches(config: SSMPaginationConfiguration, input: DescribeAvailablePatchesCommandInput, ...additionalArguments: any): Paginator<DescribeAvailablePatchesCommandOutput>;

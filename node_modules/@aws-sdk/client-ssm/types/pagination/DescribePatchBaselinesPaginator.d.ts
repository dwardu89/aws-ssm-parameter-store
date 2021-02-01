import { DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput } from "../commands/DescribePatchBaselinesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePatchBaselines(config: SSMPaginationConfiguration, input: DescribePatchBaselinesCommandInput, ...additionalArguments: any): Paginator<DescribePatchBaselinesCommandOutput>;

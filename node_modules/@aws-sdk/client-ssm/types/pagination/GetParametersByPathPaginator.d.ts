import { GetParametersByPathCommandInput, GetParametersByPathCommandOutput } from "../commands/GetParametersByPathCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetParametersByPath(config: SSMPaginationConfiguration, input: GetParametersByPathCommandInput, ...additionalArguments: any): Paginator<GetParametersByPathCommandOutput>;

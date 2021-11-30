import { Paginator } from "@aws-sdk/types";
import { GetParametersByPathCommandInput, GetParametersByPathCommandOutput } from "../commands/GetParametersByPathCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateGetParametersByPath(config: SSMPaginationConfiguration, input: GetParametersByPathCommandInput, ...additionalArguments: any): Paginator<GetParametersByPathCommandOutput>;

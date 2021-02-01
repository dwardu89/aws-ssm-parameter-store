import { DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput } from "../commands/DescribeInstanceInformationCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInstanceInformation(config: SSMPaginationConfiguration, input: DescribeInstanceInformationCommandInput, ...additionalArguments: any): Paginator<DescribeInstanceInformationCommandOutput>;

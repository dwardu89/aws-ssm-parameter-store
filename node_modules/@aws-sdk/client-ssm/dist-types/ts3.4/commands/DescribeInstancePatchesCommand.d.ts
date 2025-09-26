import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DescribeInstancePatchesRequest,
  DescribeInstancePatchesResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeInstancePatchesCommandInput
  extends DescribeInstancePatchesRequest {}
export interface DescribeInstancePatchesCommandOutput
  extends DescribeInstancePatchesResult,
    __MetadataBearer {}
declare const DescribeInstancePatchesCommand_base: {
  new (
    input: DescribeInstancePatchesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInstancePatchesCommandInput,
    DescribeInstancePatchesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeInstancePatchesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInstancePatchesCommandInput,
    DescribeInstancePatchesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeInstancePatchesCommand extends DescribeInstancePatchesCommand_base {
  protected static __types: {
    api: {
      input: DescribeInstancePatchesRequest;
      output: DescribeInstancePatchesResult;
    };
    sdk: {
      input: DescribeInstancePatchesCommandInput;
      output: DescribeInstancePatchesCommandOutput;
    };
  };
}

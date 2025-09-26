import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DescribeInventoryDeletionsRequest,
  DescribeInventoryDeletionsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeInventoryDeletionsCommandInput
  extends DescribeInventoryDeletionsRequest {}
export interface DescribeInventoryDeletionsCommandOutput
  extends DescribeInventoryDeletionsResult,
    __MetadataBearer {}
declare const DescribeInventoryDeletionsCommand_base: {
  new (
    input: DescribeInventoryDeletionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInventoryDeletionsCommandInput,
    DescribeInventoryDeletionsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeInventoryDeletionsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInventoryDeletionsCommandInput,
    DescribeInventoryDeletionsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeInventoryDeletionsCommand extends DescribeInventoryDeletionsCommand_base {
  protected static __types: {
    api: {
      input: DescribeInventoryDeletionsRequest;
      output: DescribeInventoryDeletionsResult;
    };
    sdk: {
      input: DescribeInventoryDeletionsCommandInput;
      output: DescribeInventoryDeletionsCommandOutput;
    };
  };
}

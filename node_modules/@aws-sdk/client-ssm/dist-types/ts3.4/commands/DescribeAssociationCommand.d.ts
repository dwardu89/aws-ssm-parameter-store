import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DescribeAssociationRequest,
  DescribeAssociationResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeAssociationCommandInput
  extends DescribeAssociationRequest {}
export interface DescribeAssociationCommandOutput
  extends DescribeAssociationResult,
    __MetadataBearer {}
declare const DescribeAssociationCommand_base: {
  new (
    input: DescribeAssociationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeAssociationCommandInput,
    DescribeAssociationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeAssociationCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeAssociationCommandInput,
    DescribeAssociationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeAssociationCommand extends DescribeAssociationCommand_base {
  protected static __types: {
    api: {
      input: DescribeAssociationRequest;
      output: DescribeAssociationResult;
    };
    sdk: {
      input: DescribeAssociationCommandInput;
      output: DescribeAssociationCommandOutput;
    };
  };
}

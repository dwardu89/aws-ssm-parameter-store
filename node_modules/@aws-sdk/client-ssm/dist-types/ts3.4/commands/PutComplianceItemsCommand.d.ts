import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  PutComplianceItemsRequest,
  PutComplianceItemsResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface PutComplianceItemsCommandInput
  extends PutComplianceItemsRequest {}
export interface PutComplianceItemsCommandOutput
  extends PutComplianceItemsResult,
    __MetadataBearer {}
declare const PutComplianceItemsCommand_base: {
  new (
    input: PutComplianceItemsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutComplianceItemsCommandInput,
    PutComplianceItemsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutComplianceItemsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutComplianceItemsCommandInput,
    PutComplianceItemsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutComplianceItemsCommand extends PutComplianceItemsCommand_base {
  protected static __types: {
    api: {
      input: PutComplianceItemsRequest;
      output: {};
    };
    sdk: {
      input: PutComplianceItemsCommandInput;
      output: PutComplianceItemsCommandOutput;
    };
  };
}

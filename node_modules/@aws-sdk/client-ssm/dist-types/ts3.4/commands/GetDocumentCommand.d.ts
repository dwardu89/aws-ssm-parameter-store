import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetDocumentRequest, GetDocumentResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface GetDocumentCommandInput extends GetDocumentRequest {}
export interface GetDocumentCommandOutput
  extends GetDocumentResult,
    __MetadataBearer {}
declare const GetDocumentCommand_base: {
  new (
    input: GetDocumentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDocumentCommandInput,
    GetDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetDocumentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDocumentCommandInput,
    GetDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDocumentCommand extends GetDocumentCommand_base {
  protected static __types: {
    api: {
      input: GetDocumentRequest;
      output: GetDocumentResult;
    };
    sdk: {
      input: GetDocumentCommandInput;
      output: GetDocumentCommandOutput;
    };
  };
}

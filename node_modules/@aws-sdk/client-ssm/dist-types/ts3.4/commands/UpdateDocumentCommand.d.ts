import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  UpdateDocumentRequest,
  UpdateDocumentResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {}
export interface UpdateDocumentCommandOutput
  extends UpdateDocumentResult,
    __MetadataBearer {}
declare const UpdateDocumentCommand_base: {
  new (
    input: UpdateDocumentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDocumentCommandInput,
    UpdateDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateDocumentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDocumentCommandInput,
    UpdateDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateDocumentCommand extends UpdateDocumentCommand_base {
  protected static __types: {
    api: {
      input: UpdateDocumentRequest;
      output: UpdateDocumentResult;
    };
    sdk: {
      input: UpdateDocumentCommandInput;
      output: UpdateDocumentCommandOutput;
    };
  };
}

import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CreateDocumentRequest,
  CreateDocumentResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface CreateDocumentCommandInput extends CreateDocumentRequest {}
export interface CreateDocumentCommandOutput
  extends CreateDocumentResult,
    __MetadataBearer {}
declare const CreateDocumentCommand_base: {
  new (
    input: CreateDocumentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateDocumentCommandInput,
    CreateDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateDocumentCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateDocumentCommandInput,
    CreateDocumentCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateDocumentCommand extends CreateDocumentCommand_base {
  protected static __types: {
    api: {
      input: CreateDocumentRequest;
      output: CreateDocumentResult;
    };
    sdk: {
      input: CreateDocumentCommandInput;
      output: CreateDocumentCommandOutput;
    };
  };
}

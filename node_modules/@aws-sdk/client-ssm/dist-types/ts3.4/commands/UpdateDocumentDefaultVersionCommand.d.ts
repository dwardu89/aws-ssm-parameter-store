import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  UpdateDocumentDefaultVersionRequest,
  UpdateDocumentDefaultVersionResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface UpdateDocumentDefaultVersionCommandInput
  extends UpdateDocumentDefaultVersionRequest {}
export interface UpdateDocumentDefaultVersionCommandOutput
  extends UpdateDocumentDefaultVersionResult,
    __MetadataBearer {}
declare const UpdateDocumentDefaultVersionCommand_base: {
  new (
    input: UpdateDocumentDefaultVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDocumentDefaultVersionCommandInput,
    UpdateDocumentDefaultVersionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateDocumentDefaultVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateDocumentDefaultVersionCommandInput,
    UpdateDocumentDefaultVersionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateDocumentDefaultVersionCommand extends UpdateDocumentDefaultVersionCommand_base {
  protected static __types: {
    api: {
      input: UpdateDocumentDefaultVersionRequest;
      output: UpdateDocumentDefaultVersionResult;
    };
    sdk: {
      input: UpdateDocumentDefaultVersionCommandInput;
      output: UpdateDocumentDefaultVersionCommandOutput;
    };
  };
}

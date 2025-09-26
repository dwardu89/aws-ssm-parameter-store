import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListDocumentMetadataHistoryRequest,
  ListDocumentMetadataHistoryResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface ListDocumentMetadataHistoryCommandInput
  extends ListDocumentMetadataHistoryRequest {}
export interface ListDocumentMetadataHistoryCommandOutput
  extends ListDocumentMetadataHistoryResponse,
    __MetadataBearer {}
declare const ListDocumentMetadataHistoryCommand_base: {
  new (
    input: ListDocumentMetadataHistoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDocumentMetadataHistoryCommandInput,
    ListDocumentMetadataHistoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListDocumentMetadataHistoryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDocumentMetadataHistoryCommandInput,
    ListDocumentMetadataHistoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListDocumentMetadataHistoryCommand extends ListDocumentMetadataHistoryCommand_base {
  protected static __types: {
    api: {
      input: ListDocumentMetadataHistoryRequest;
      output: ListDocumentMetadataHistoryResponse;
    };
    sdk: {
      input: ListDocumentMetadataHistoryCommandInput;
      output: ListDocumentMetadataHistoryCommandOutput;
    };
  };
}

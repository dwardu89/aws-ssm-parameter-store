import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface ListDocumentsCommandInput extends ListDocumentsRequest {}
export interface ListDocumentsCommandOutput
  extends ListDocumentsResult,
    __MetadataBearer {}
declare const ListDocumentsCommand_base: {
  new (
    input: ListDocumentsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListDocumentsCommandInput,
    ListDocumentsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListDocumentsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListDocumentsCommandInput,
    ListDocumentsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListDocumentsCommand extends ListDocumentsCommand_base {
  protected static __types: {
    api: {
      input: ListDocumentsRequest;
      output: ListDocumentsResult;
    };
    sdk: {
      input: ListDocumentsCommandInput;
      output: ListDocumentsCommandOutput;
    };
  };
}

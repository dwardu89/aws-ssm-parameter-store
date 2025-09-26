import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DeleteAssociationRequest,
  DeleteAssociationResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface DeleteAssociationCommandInput
  extends DeleteAssociationRequest {}
export interface DeleteAssociationCommandOutput
  extends DeleteAssociationResult,
    __MetadataBearer {}
declare const DeleteAssociationCommand_base: {
  new (
    input: DeleteAssociationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAssociationCommandInput,
    DeleteAssociationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DeleteAssociationCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAssociationCommandInput,
    DeleteAssociationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteAssociationCommand extends DeleteAssociationCommand_base {
  protected static __types: {
    api: {
      input: DeleteAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssociationCommandInput;
      output: DeleteAssociationCommandOutput;
    };
  };
}

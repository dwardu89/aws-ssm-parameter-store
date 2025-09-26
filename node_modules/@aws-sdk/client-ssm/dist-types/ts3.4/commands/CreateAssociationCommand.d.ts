import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CreateAssociationRequest,
  CreateAssociationResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface CreateAssociationCommandInput
  extends CreateAssociationRequest {}
export interface CreateAssociationCommandOutput
  extends CreateAssociationResult,
    __MetadataBearer {}
declare const CreateAssociationCommand_base: {
  new (
    input: CreateAssociationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateAssociationCommandInput,
    CreateAssociationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateAssociationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateAssociationCommandInput,
    CreateAssociationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateAssociationCommand extends CreateAssociationCommand_base {
  protected static __types: {
    api: {
      input: CreateAssociationRequest;
      output: CreateAssociationResult;
    };
    sdk: {
      input: CreateAssociationCommandInput;
      output: CreateAssociationCommandOutput;
    };
  };
}

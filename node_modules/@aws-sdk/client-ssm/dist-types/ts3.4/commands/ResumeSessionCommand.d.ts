import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ResumeSessionRequest,
  ResumeSessionResponse,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface ResumeSessionCommandInput extends ResumeSessionRequest {}
export interface ResumeSessionCommandOutput
  extends ResumeSessionResponse,
    __MetadataBearer {}
declare const ResumeSessionCommand_base: {
  new (
    input: ResumeSessionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResumeSessionCommandInput,
    ResumeSessionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ResumeSessionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResumeSessionCommandInput,
    ResumeSessionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ResumeSessionCommand extends ResumeSessionCommand_base {
  protected static __types: {
    api: {
      input: ResumeSessionRequest;
      output: ResumeSessionResponse;
    };
    sdk: {
      input: ResumeSessionCommandInput;
      output: ResumeSessionCommandOutput;
    };
  };
}

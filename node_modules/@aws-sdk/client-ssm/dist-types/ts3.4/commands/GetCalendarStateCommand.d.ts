import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetCalendarStateRequest,
  GetCalendarStateResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface GetCalendarStateCommandInput extends GetCalendarStateRequest {}
export interface GetCalendarStateCommandOutput
  extends GetCalendarStateResponse,
    __MetadataBearer {}
declare const GetCalendarStateCommand_base: {
  new (
    input: GetCalendarStateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCalendarStateCommandInput,
    GetCalendarStateCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetCalendarStateCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCalendarStateCommandInput,
    GetCalendarStateCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetCalendarStateCommand extends GetCalendarStateCommand_base {
  protected static __types: {
    api: {
      input: GetCalendarStateRequest;
      output: GetCalendarStateResponse;
    };
    sdk: {
      input: GetCalendarStateCommandInput;
      output: GetCalendarStateCommandOutput;
    };
  };
}

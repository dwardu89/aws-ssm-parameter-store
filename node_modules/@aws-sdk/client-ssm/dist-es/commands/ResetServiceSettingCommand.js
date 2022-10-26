import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ResetServiceSettingRequest, ResetServiceSettingResult } from "../models/models_1";
import { deserializeAws_json1_1ResetServiceSettingCommand, serializeAws_json1_1ResetServiceSettingCommand, } from "../protocols/Aws_json1_1";
var ResetServiceSettingCommand = (function (_super) {
    __extends(ResetServiceSettingCommand, _super);
    function ResetServiceSettingCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ResetServiceSettingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ResetServiceSettingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetServiceSettingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetServiceSettingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetServiceSettingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResetServiceSettingCommand(input, context);
    };
    ResetServiceSettingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResetServiceSettingCommand(output, context);
    };
    return ResetServiceSettingCommand;
}($Command));
export { ResetServiceSettingCommand };

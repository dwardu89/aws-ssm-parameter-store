import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetServiceSettingRequest, GetServiceSettingResult } from "../models/models_1";
import { deserializeAws_json1_1GetServiceSettingCommand, serializeAws_json1_1GetServiceSettingCommand, } from "../protocols/Aws_json1_1";
var GetServiceSettingCommand = (function (_super) {
    __extends(GetServiceSettingCommand, _super);
    function GetServiceSettingCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetServiceSettingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetServiceSettingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServiceSettingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServiceSettingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServiceSettingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetServiceSettingCommand(input, context);
    };
    GetServiceSettingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetServiceSettingCommand(output, context);
    };
    return GetServiceSettingCommand;
}($Command));
export { GetServiceSettingCommand };

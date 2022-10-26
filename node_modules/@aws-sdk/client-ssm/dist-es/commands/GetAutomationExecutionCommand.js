import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetAutomationExecutionRequest, GetAutomationExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1GetAutomationExecutionCommand, serializeAws_json1_1GetAutomationExecutionCommand, } from "../protocols/Aws_json1_1";
var GetAutomationExecutionCommand = (function (_super) {
    __extends(GetAutomationExecutionCommand, _super);
    function GetAutomationExecutionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetAutomationExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetAutomationExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAutomationExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAutomationExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAutomationExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAutomationExecutionCommand(input, context);
    };
    GetAutomationExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAutomationExecutionCommand(output, context);
    };
    return GetAutomationExecutionCommand;
}($Command));
export { GetAutomationExecutionCommand };

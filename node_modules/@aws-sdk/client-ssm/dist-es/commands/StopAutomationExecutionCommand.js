import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1StopAutomationExecutionCommand, serializeAws_json1_1StopAutomationExecutionCommand, } from "../protocols/Aws_json1_1";
var StopAutomationExecutionCommand = (function (_super) {
    __extends(StopAutomationExecutionCommand, _super);
    function StopAutomationExecutionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    StopAutomationExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StopAutomationExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopAutomationExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopAutomationExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopAutomationExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopAutomationExecutionCommand(input, context);
    };
    StopAutomationExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopAutomationExecutionCommand(output, context);
    };
    return StopAutomationExecutionCommand;
}($Command));
export { StopAutomationExecutionCommand };

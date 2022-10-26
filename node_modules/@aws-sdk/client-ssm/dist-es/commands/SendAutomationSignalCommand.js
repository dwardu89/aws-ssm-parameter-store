import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { SendAutomationSignalRequest, SendAutomationSignalResult } from "../models/models_1";
import { deserializeAws_json1_1SendAutomationSignalCommand, serializeAws_json1_1SendAutomationSignalCommand, } from "../protocols/Aws_json1_1";
var SendAutomationSignalCommand = (function (_super) {
    __extends(SendAutomationSignalCommand, _super);
    function SendAutomationSignalCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SendAutomationSignalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "SendAutomationSignalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendAutomationSignalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendAutomationSignalResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendAutomationSignalCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendAutomationSignalCommand(input, context);
    };
    SendAutomationSignalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendAutomationSignalCommand(output, context);
    };
    return SendAutomationSignalCommand;
}($Command));
export { SendAutomationSignalCommand };

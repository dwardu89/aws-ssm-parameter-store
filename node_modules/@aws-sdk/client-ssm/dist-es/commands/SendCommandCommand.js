import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { SendCommandRequest, SendCommandResult } from "../models/models_1";
import { deserializeAws_json1_1SendCommandCommand, serializeAws_json1_1SendCommandCommand, } from "../protocols/Aws_json1_1";
var SendCommandCommand = (function (_super) {
    __extends(SendCommandCommand, _super);
    function SendCommandCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SendCommandCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "SendCommandCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendCommandRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendCommandResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendCommandCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendCommandCommand(input, context);
    };
    SendCommandCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendCommandCommand(output, context);
    };
    return SendCommandCommand;
}($Command));
export { SendCommandCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { TerminateSessionRequest, TerminateSessionResponse } from "../models/models_1";
import { deserializeAws_json1_1TerminateSessionCommand, serializeAws_json1_1TerminateSessionCommand, } from "../protocols/Aws_json1_1";
var TerminateSessionCommand = (function (_super) {
    __extends(TerminateSessionCommand, _super);
    function TerminateSessionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    TerminateSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "TerminateSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TerminateSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TerminateSessionCommand(input, context);
    };
    TerminateSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TerminateSessionCommand(output, context);
    };
    return TerminateSessionCommand;
}($Command));
export { TerminateSessionCommand };

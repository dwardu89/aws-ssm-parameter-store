import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { StartSessionRequest, StartSessionResponse } from "../models/models_1";
import { deserializeAws_json1_1StartSessionCommand, serializeAws_json1_1StartSessionCommand, } from "../protocols/Aws_json1_1";
var StartSessionCommand = (function (_super) {
    __extends(StartSessionCommand, _super);
    function StartSessionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    StartSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StartSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartSessionCommand(input, context);
    };
    StartSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartSessionCommand(output, context);
    };
    return StartSessionCommand;
}($Command));
export { StartSessionCommand };

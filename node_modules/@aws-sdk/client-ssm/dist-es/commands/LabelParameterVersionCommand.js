import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { LabelParameterVersionRequest, LabelParameterVersionResult } from "../models/models_1";
import { deserializeAws_json1_1LabelParameterVersionCommand, serializeAws_json1_1LabelParameterVersionCommand, } from "../protocols/Aws_json1_1";
var LabelParameterVersionCommand = (function (_super) {
    __extends(LabelParameterVersionCommand, _super);
    function LabelParameterVersionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    LabelParameterVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "LabelParameterVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: LabelParameterVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: LabelParameterVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    LabelParameterVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1LabelParameterVersionCommand(input, context);
    };
    LabelParameterVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1LabelParameterVersionCommand(output, context);
    };
    return LabelParameterVersionCommand;
}($Command));
export { LabelParameterVersionCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { PutParameterRequest, PutParameterResult } from "../models/models_1";
import { deserializeAws_json1_1PutParameterCommand, serializeAws_json1_1PutParameterCommand, } from "../protocols/Aws_json1_1";
var PutParameterCommand = (function (_super) {
    __extends(PutParameterCommand, _super);
    function PutParameterCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PutParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "PutParameterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutParameterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutParameterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutParameterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutParameterCommand(input, context);
    };
    PutParameterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutParameterCommand(output, context);
    };
    return PutParameterCommand;
}($Command));
export { PutParameterCommand };

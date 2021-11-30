import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteParameterRequest, DeleteParameterResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteParameterCommand, serializeAws_json1_1DeleteParameterCommand, } from "../protocols/Aws_json1_1";
var DeleteParameterCommand = (function (_super) {
    __extends(DeleteParameterCommand, _super);
    function DeleteParameterCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteParameterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteParameterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteParameterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteParameterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteParameterCommand(input, context);
    };
    DeleteParameterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteParameterCommand(output, context);
    };
    return DeleteParameterCommand;
}($Command));
export { DeleteParameterCommand };

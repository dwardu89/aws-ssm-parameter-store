import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteActivationRequest, DeleteActivationResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteActivationCommand, serializeAws_json1_1DeleteActivationCommand, } from "../protocols/Aws_json1_1";
var DeleteActivationCommand = (function (_super) {
    __extends(DeleteActivationCommand, _super);
    function DeleteActivationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteActivationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteActivationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteActivationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteActivationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteActivationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteActivationCommand(input, context);
    };
    DeleteActivationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteActivationCommand(output, context);
    };
    return DeleteActivationCommand;
}($Command));
export { DeleteActivationCommand };

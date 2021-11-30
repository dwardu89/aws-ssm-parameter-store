import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteParametersRequest, DeleteParametersResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteParametersCommand, serializeAws_json1_1DeleteParametersCommand, } from "../protocols/Aws_json1_1";
var DeleteParametersCommand = (function (_super) {
    __extends(DeleteParametersCommand, _super);
    function DeleteParametersCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteParametersCommand(input, context);
    };
    DeleteParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteParametersCommand(output, context);
    };
    return DeleteParametersCommand;
}($Command));
export { DeleteParametersCommand };

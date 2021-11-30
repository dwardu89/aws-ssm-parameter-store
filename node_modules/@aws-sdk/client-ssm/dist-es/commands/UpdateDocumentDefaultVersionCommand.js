import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateDocumentDefaultVersionCommand, serializeAws_json1_1UpdateDocumentDefaultVersionCommand, } from "../protocols/Aws_json1_1";
var UpdateDocumentDefaultVersionCommand = (function (_super) {
    __extends(UpdateDocumentDefaultVersionCommand, _super);
    function UpdateDocumentDefaultVersionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateDocumentDefaultVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateDocumentDefaultVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentDefaultVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDocumentDefaultVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentDefaultVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDocumentDefaultVersionCommand(input, context);
    };
    UpdateDocumentDefaultVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDocumentDefaultVersionCommand(output, context);
    };
    return UpdateDocumentDefaultVersionCommand;
}($Command));
export { UpdateDocumentDefaultVersionCommand };

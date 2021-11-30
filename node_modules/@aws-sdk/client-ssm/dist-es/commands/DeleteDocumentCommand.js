import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteDocumentRequest, DeleteDocumentResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDocumentCommand, serializeAws_json1_1DeleteDocumentCommand, } from "../protocols/Aws_json1_1";
var DeleteDocumentCommand = (function (_super) {
    __extends(DeleteDocumentCommand, _super);
    function DeleteDocumentCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDocumentCommand(input, context);
    };
    DeleteDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDocumentCommand(output, context);
    };
    return DeleteDocumentCommand;
}($Command));
export { DeleteDocumentCommand };

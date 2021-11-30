import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateDocumentRequest, UpdateDocumentResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateDocumentCommand, serializeAws_json1_1UpdateDocumentCommand, } from "../protocols/Aws_json1_1";
var UpdateDocumentCommand = (function (_super) {
    __extends(UpdateDocumentCommand, _super);
    function UpdateDocumentCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDocumentCommand(input, context);
    };
    UpdateDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDocumentCommand(output, context);
    };
    return UpdateDocumentCommand;
}($Command));
export { UpdateDocumentCommand };

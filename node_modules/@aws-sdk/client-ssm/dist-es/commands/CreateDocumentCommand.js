import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateDocumentRequest, CreateDocumentResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDocumentCommand, serializeAws_json1_1CreateDocumentCommand, } from "../protocols/Aws_json1_1";
var CreateDocumentCommand = (function (_super) {
    __extends(CreateDocumentCommand, _super);
    function CreateDocumentCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDocumentCommand(input, context);
    };
    CreateDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDocumentCommand(output, context);
    };
    return CreateDocumentCommand;
}($Command));
export { CreateDocumentCommand };

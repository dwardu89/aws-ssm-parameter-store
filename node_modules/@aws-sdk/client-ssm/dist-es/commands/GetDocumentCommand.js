import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetDocumentRequest, GetDocumentResult } from "../models/models_1";
import { deserializeAws_json1_1GetDocumentCommand, serializeAws_json1_1GetDocumentCommand, } from "../protocols/Aws_json1_1";
var GetDocumentCommand = (function (_super) {
    __extends(GetDocumentCommand, _super);
    function GetDocumentCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDocumentCommand(input, context);
    };
    GetDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDocumentCommand(output, context);
    };
    return GetDocumentCommand;
}($Command));
export { GetDocumentCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListDocumentVersionsRequest, ListDocumentVersionsResult } from "../models/models_1";
import { deserializeAws_json1_1ListDocumentVersionsCommand, serializeAws_json1_1ListDocumentVersionsCommand, } from "../protocols/Aws_json1_1";
var ListDocumentVersionsCommand = (function (_super) {
    __extends(ListDocumentVersionsCommand, _super);
    function ListDocumentVersionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListDocumentVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListDocumentVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDocumentVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDocumentVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDocumentVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDocumentVersionsCommand(input, context);
    };
    ListDocumentVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDocumentVersionsCommand(output, context);
    };
    return ListDocumentVersionsCommand;
}($Command));
export { ListDocumentVersionsCommand };

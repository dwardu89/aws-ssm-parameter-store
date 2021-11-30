import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListDocumentMetadataHistoryRequest, ListDocumentMetadataHistoryResponse } from "../models/models_1";
import { deserializeAws_json1_1ListDocumentMetadataHistoryCommand, serializeAws_json1_1ListDocumentMetadataHistoryCommand, } from "../protocols/Aws_json1_1";
var ListDocumentMetadataHistoryCommand = (function (_super) {
    __extends(ListDocumentMetadataHistoryCommand, _super);
    function ListDocumentMetadataHistoryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListDocumentMetadataHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListDocumentMetadataHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDocumentMetadataHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDocumentMetadataHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDocumentMetadataHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDocumentMetadataHistoryCommand(input, context);
    };
    ListDocumentMetadataHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDocumentMetadataHistoryCommand(output, context);
    };
    return ListDocumentMetadataHistoryCommand;
}($Command));
export { ListDocumentMetadataHistoryCommand };

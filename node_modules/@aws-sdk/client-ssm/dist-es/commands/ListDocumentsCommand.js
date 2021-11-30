import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import { deserializeAws_json1_1ListDocumentsCommand, serializeAws_json1_1ListDocumentsCommand, } from "../protocols/Aws_json1_1";
var ListDocumentsCommand = (function (_super) {
    __extends(ListDocumentsCommand, _super);
    function ListDocumentsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListDocumentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListDocumentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDocumentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDocumentsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDocumentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDocumentsCommand(input, context);
    };
    ListDocumentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDocumentsCommand(output, context);
    };
    return ListDocumentsCommand;
}($Command));
export { ListDocumentsCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListAssociationsRequest, ListAssociationsResult } from "../models/models_1";
import { deserializeAws_json1_1ListAssociationsCommand, serializeAws_json1_1ListAssociationsCommand, } from "../protocols/Aws_json1_1";
var ListAssociationsCommand = (function (_super) {
    __extends(ListAssociationsCommand, _super);
    function ListAssociationsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssociationsCommand(input, context);
    };
    ListAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssociationsCommand(output, context);
    };
    return ListAssociationsCommand;
}($Command));
export { ListAssociationsCommand };

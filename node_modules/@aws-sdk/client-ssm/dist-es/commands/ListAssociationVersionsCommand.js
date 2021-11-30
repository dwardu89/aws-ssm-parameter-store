import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListAssociationVersionsRequest, ListAssociationVersionsResult } from "../models/models_1";
import { deserializeAws_json1_1ListAssociationVersionsCommand, serializeAws_json1_1ListAssociationVersionsCommand, } from "../protocols/Aws_json1_1";
var ListAssociationVersionsCommand = (function (_super) {
    __extends(ListAssociationVersionsCommand, _super);
    function ListAssociationVersionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListAssociationVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListAssociationVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssociationVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssociationVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssociationVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssociationVersionsCommand(input, context);
    };
    ListAssociationVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssociationVersionsCommand(output, context);
    };
    return ListAssociationVersionsCommand;
}($Command));
export { ListAssociationVersionsCommand };

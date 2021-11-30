import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListOpsItemRelatedItemsRequest, ListOpsItemRelatedItemsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListOpsItemRelatedItemsCommand, serializeAws_json1_1ListOpsItemRelatedItemsCommand, } from "../protocols/Aws_json1_1";
var ListOpsItemRelatedItemsCommand = (function (_super) {
    __extends(ListOpsItemRelatedItemsCommand, _super);
    function ListOpsItemRelatedItemsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListOpsItemRelatedItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListOpsItemRelatedItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpsItemRelatedItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpsItemRelatedItemsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpsItemRelatedItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOpsItemRelatedItemsCommand(input, context);
    };
    ListOpsItemRelatedItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOpsItemRelatedItemsCommand(output, context);
    };
    return ListOpsItemRelatedItemsCommand;
}($Command));
export { ListOpsItemRelatedItemsCommand };

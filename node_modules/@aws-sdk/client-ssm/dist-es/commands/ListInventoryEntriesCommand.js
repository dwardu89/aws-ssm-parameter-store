import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListInventoryEntriesRequest, ListInventoryEntriesResult } from "../models/models_1";
import { deserializeAws_json1_1ListInventoryEntriesCommand, serializeAws_json1_1ListInventoryEntriesCommand, } from "../protocols/Aws_json1_1";
var ListInventoryEntriesCommand = (function (_super) {
    __extends(ListInventoryEntriesCommand, _super);
    function ListInventoryEntriesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListInventoryEntriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListInventoryEntriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInventoryEntriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInventoryEntriesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInventoryEntriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListInventoryEntriesCommand(input, context);
    };
    ListInventoryEntriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListInventoryEntriesCommand(output, context);
    };
    return ListInventoryEntriesCommand;
}($Command));
export { ListInventoryEntriesCommand };

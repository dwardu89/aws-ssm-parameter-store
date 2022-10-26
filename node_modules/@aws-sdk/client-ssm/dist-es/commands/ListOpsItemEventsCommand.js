import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListOpsItemEventsRequest, ListOpsItemEventsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListOpsItemEventsCommand, serializeAws_json1_1ListOpsItemEventsCommand, } from "../protocols/Aws_json1_1";
var ListOpsItemEventsCommand = (function (_super) {
    __extends(ListOpsItemEventsCommand, _super);
    function ListOpsItemEventsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListOpsItemEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListOpsItemEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpsItemEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpsItemEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpsItemEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOpsItemEventsCommand(input, context);
    };
    ListOpsItemEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOpsItemEventsCommand(output, context);
    };
    return ListOpsItemEventsCommand;
}($Command));
export { ListOpsItemEventsCommand };

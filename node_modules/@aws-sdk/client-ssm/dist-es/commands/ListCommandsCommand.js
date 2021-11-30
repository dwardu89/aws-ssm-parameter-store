import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListCommandsRequest, ListCommandsResult } from "../models/models_1";
import { deserializeAws_json1_1ListCommandsCommand, serializeAws_json1_1ListCommandsCommand, } from "../protocols/Aws_json1_1";
var ListCommandsCommand = (function (_super) {
    __extends(ListCommandsCommand, _super);
    function ListCommandsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListCommandsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListCommandsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCommandsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCommandsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCommandsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCommandsCommand(input, context);
    };
    ListCommandsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCommandsCommand(output, context);
    };
    return ListCommandsCommand;
}($Command));
export { ListCommandsCommand };

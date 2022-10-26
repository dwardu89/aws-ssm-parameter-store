import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListResourceDataSyncRequest, ListResourceDataSyncResult } from "../models/models_1";
import { deserializeAws_json1_1ListResourceDataSyncCommand, serializeAws_json1_1ListResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
var ListResourceDataSyncCommand = (function (_super) {
    __extends(ListResourceDataSyncCommand, _super);
    function ListResourceDataSyncCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourceDataSyncCommand(input, context);
    };
    ListResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourceDataSyncCommand(output, context);
    };
    return ListResourceDataSyncCommand;
}($Command));
export { ListResourceDataSyncCommand };

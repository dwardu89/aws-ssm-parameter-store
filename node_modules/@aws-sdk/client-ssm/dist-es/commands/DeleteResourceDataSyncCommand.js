import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteResourceDataSyncCommand, serializeAws_json1_1DeleteResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
var DeleteResourceDataSyncCommand = (function (_super) {
    __extends(DeleteResourceDataSyncCommand, _super);
    function DeleteResourceDataSyncCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResourceDataSyncCommand(input, context);
    };
    DeleteResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResourceDataSyncCommand(output, context);
    };
    return DeleteResourceDataSyncCommand;
}($Command));
export { DeleteResourceDataSyncCommand };

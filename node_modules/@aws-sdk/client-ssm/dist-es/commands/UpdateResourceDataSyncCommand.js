import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateResourceDataSyncCommand, serializeAws_json1_1UpdateResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
var UpdateResourceDataSyncCommand = (function (_super) {
    __extends(UpdateResourceDataSyncCommand, _super);
    function UpdateResourceDataSyncCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateResourceDataSyncCommand(input, context);
    };
    UpdateResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateResourceDataSyncCommand(output, context);
    };
    return UpdateResourceDataSyncCommand;
}($Command));
export { UpdateResourceDataSyncCommand };

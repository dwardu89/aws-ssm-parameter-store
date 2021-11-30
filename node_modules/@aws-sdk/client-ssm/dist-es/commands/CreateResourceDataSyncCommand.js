import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateResourceDataSyncRequest, CreateResourceDataSyncResult } from "../models/models_0";
import { deserializeAws_json1_1CreateResourceDataSyncCommand, serializeAws_json1_1CreateResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
var CreateResourceDataSyncCommand = (function (_super) {
    __extends(CreateResourceDataSyncCommand, _super);
    function CreateResourceDataSyncCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateResourceDataSyncCommand(input, context);
    };
    CreateResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateResourceDataSyncCommand(output, context);
    };
    return CreateResourceDataSyncCommand;
}($Command));
export { CreateResourceDataSyncCommand };

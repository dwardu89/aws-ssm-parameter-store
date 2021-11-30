import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteOpsMetadataRequest, DeleteOpsMetadataResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteOpsMetadataCommand, serializeAws_json1_1DeleteOpsMetadataCommand, } from "../protocols/Aws_json1_1";
var DeleteOpsMetadataCommand = (function (_super) {
    __extends(DeleteOpsMetadataCommand, _super);
    function DeleteOpsMetadataCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteOpsMetadataCommand(input, context);
    };
    DeleteOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteOpsMetadataCommand(output, context);
    };
    return DeleteOpsMetadataCommand;
}($Command));
export { DeleteOpsMetadataCommand };

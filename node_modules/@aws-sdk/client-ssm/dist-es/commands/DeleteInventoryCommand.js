import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteInventoryCommand, serializeAws_json1_1DeleteInventoryCommand, } from "../protocols/Aws_json1_1";
var DeleteInventoryCommand = (function (_super) {
    __extends(DeleteInventoryCommand, _super);
    function DeleteInventoryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteInventoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteInventoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInventoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInventoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInventoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteInventoryCommand(input, context);
    };
    DeleteInventoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteInventoryCommand(output, context);
    };
    return DeleteInventoryCommand;
}($Command));
export { DeleteInventoryCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteMaintenanceWindowRequest, DeleteMaintenanceWindowResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteMaintenanceWindowCommand, serializeAws_json1_1DeleteMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var DeleteMaintenanceWindowCommand = (function (_super) {
    __extends(DeleteMaintenanceWindowCommand, _super);
    function DeleteMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeleteMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMaintenanceWindowCommand(input, context);
    };
    DeleteMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMaintenanceWindowCommand(output, context);
    };
    return DeleteMaintenanceWindowCommand;
}($Command));
export { DeleteMaintenanceWindowCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateMaintenanceWindowTaskRequest, UpdateMaintenanceWindowTaskResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand, serializeAws_json1_1UpdateMaintenanceWindowTaskCommand, } from "../protocols/Aws_json1_1";
var UpdateMaintenanceWindowTaskCommand = (function (_super) {
    __extends(UpdateMaintenanceWindowTaskCommand, _super);
    function UpdateMaintenanceWindowTaskCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateMaintenanceWindowTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateMaintenanceWindowTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMaintenanceWindowTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMaintenanceWindowTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMaintenanceWindowTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMaintenanceWindowTaskCommand(input, context);
    };
    UpdateMaintenanceWindowTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand(output, context);
    };
    return UpdateMaintenanceWindowTaskCommand;
}($Command));
export { UpdateMaintenanceWindowTaskCommand };

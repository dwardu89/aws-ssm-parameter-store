import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeregisterTargetFromMaintenanceWindowRequest, DeregisterTargetFromMaintenanceWindowResult, } from "../models/models_0";
import { deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand, serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var DeregisterTargetFromMaintenanceWindowCommand = (function (_super) {
    __extends(DeregisterTargetFromMaintenanceWindowCommand, _super);
    function DeregisterTargetFromMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeregisterTargetFromMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeregisterTargetFromMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterTargetFromMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterTargetFromMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterTargetFromMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(input, context);
    };
    DeregisterTargetFromMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(output, context);
    };
    return DeregisterTargetFromMaintenanceWindowCommand;
}($Command));
export { DeregisterTargetFromMaintenanceWindowCommand };

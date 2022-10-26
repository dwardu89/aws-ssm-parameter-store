import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { RegisterTaskWithMaintenanceWindowRequest, RegisterTaskWithMaintenanceWindowResult } from "../models/models_1";
import { deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand, serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var RegisterTaskWithMaintenanceWindowCommand = (function (_super) {
    __extends(RegisterTaskWithMaintenanceWindowCommand, _super);
    function RegisterTaskWithMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RegisterTaskWithMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterTaskWithMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTaskWithMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTaskWithMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTaskWithMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand(input, context);
    };
    RegisterTaskWithMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterTaskWithMaintenanceWindowCommand(output, context);
    };
    return RegisterTaskWithMaintenanceWindowCommand;
}($Command));
export { RegisterTaskWithMaintenanceWindowCommand };

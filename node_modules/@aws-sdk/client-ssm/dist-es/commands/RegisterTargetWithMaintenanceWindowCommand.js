import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { RegisterTargetWithMaintenanceWindowRequest, RegisterTargetWithMaintenanceWindowResult, } from "../models/models_1";
import { deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand, serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var RegisterTargetWithMaintenanceWindowCommand = (function (_super) {
    __extends(RegisterTargetWithMaintenanceWindowCommand, _super);
    function RegisterTargetWithMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RegisterTargetWithMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterTargetWithMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTargetWithMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTargetWithMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTargetWithMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand(input, context);
    };
    RegisterTargetWithMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterTargetWithMaintenanceWindowCommand(output, context);
    };
    return RegisterTargetWithMaintenanceWindowCommand;
}($Command));
export { RegisterTargetWithMaintenanceWindowCommand };

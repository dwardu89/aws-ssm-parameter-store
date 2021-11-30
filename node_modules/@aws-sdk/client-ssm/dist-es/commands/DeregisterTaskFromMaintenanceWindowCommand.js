import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeregisterTaskFromMaintenanceWindowRequest, DeregisterTaskFromMaintenanceWindowResult, } from "../models/models_0";
import { deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand, serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var DeregisterTaskFromMaintenanceWindowCommand = (function (_super) {
    __extends(DeregisterTaskFromMaintenanceWindowCommand, _super);
    function DeregisterTaskFromMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeregisterTaskFromMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeregisterTaskFromMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterTaskFromMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterTaskFromMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterTaskFromMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand(input, context);
    };
    DeregisterTaskFromMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand(output, context);
    };
    return DeregisterTaskFromMaintenanceWindowCommand;
}($Command));
export { DeregisterTaskFromMaintenanceWindowCommand };

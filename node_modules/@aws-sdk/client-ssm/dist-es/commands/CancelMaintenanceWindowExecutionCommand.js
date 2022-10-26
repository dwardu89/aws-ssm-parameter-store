import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CancelMaintenanceWindowExecutionRequest, CancelMaintenanceWindowExecutionResult } from "../models/models_0";
import { deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand, serializeAws_json1_1CancelMaintenanceWindowExecutionCommand, } from "../protocols/Aws_json1_1";
var CancelMaintenanceWindowExecutionCommand = (function (_super) {
    __extends(CancelMaintenanceWindowExecutionCommand, _super);
    function CancelMaintenanceWindowExecutionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CancelMaintenanceWindowExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CancelMaintenanceWindowExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelMaintenanceWindowExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelMaintenanceWindowExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelMaintenanceWindowExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelMaintenanceWindowExecutionCommand(input, context);
    };
    CancelMaintenanceWindowExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelMaintenanceWindowExecutionCommand(output, context);
    };
    return CancelMaintenanceWindowExecutionCommand;
}($Command));
export { CancelMaintenanceWindowExecutionCommand };

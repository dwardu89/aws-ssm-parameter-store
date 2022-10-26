import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMaintenanceWindowExecutionTaskInvocationRequest, GetMaintenanceWindowExecutionTaskInvocationResult, } from "../models/models_1";
import { deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand, serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand, } from "../protocols/Aws_json1_1";
var GetMaintenanceWindowExecutionTaskInvocationCommand = (function (_super) {
    __extends(GetMaintenanceWindowExecutionTaskInvocationCommand, _super);
    function GetMaintenanceWindowExecutionTaskInvocationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMaintenanceWindowExecutionTaskInvocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetMaintenanceWindowExecutionTaskInvocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskInvocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskInvocationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMaintenanceWindowExecutionTaskInvocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand(input, context);
    };
    GetMaintenanceWindowExecutionTaskInvocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskInvocationCommand(output, context);
    };
    return GetMaintenanceWindowExecutionTaskInvocationCommand;
}($Command));
export { GetMaintenanceWindowExecutionTaskInvocationCommand };

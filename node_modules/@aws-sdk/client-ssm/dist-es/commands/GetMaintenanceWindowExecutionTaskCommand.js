import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMaintenanceWindowExecutionTaskRequest, GetMaintenanceWindowExecutionTaskResult } from "../models/models_1";
import { deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand, serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand, } from "../protocols/Aws_json1_1";
var GetMaintenanceWindowExecutionTaskCommand = (function (_super) {
    __extends(GetMaintenanceWindowExecutionTaskCommand, _super);
    function GetMaintenanceWindowExecutionTaskCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMaintenanceWindowExecutionTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetMaintenanceWindowExecutionTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMaintenanceWindowExecutionTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(input, context);
    };
    GetMaintenanceWindowExecutionTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(output, context);
    };
    return GetMaintenanceWindowExecutionTaskCommand;
}($Command));
export { GetMaintenanceWindowExecutionTaskCommand };

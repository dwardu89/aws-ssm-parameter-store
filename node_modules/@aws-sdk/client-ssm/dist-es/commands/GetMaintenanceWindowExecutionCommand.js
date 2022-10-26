import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMaintenanceWindowExecutionRequest, GetMaintenanceWindowExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1GetMaintenanceWindowExecutionCommand, serializeAws_json1_1GetMaintenanceWindowExecutionCommand, } from "../protocols/Aws_json1_1";
var GetMaintenanceWindowExecutionCommand = (function (_super) {
    __extends(GetMaintenanceWindowExecutionCommand, _super);
    function GetMaintenanceWindowExecutionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMaintenanceWindowExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetMaintenanceWindowExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMaintenanceWindowExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMaintenanceWindowExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMaintenanceWindowExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMaintenanceWindowExecutionCommand(input, context);
    };
    GetMaintenanceWindowExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMaintenanceWindowExecutionCommand(output, context);
    };
    return GetMaintenanceWindowExecutionCommand;
}($Command));
export { GetMaintenanceWindowExecutionCommand };

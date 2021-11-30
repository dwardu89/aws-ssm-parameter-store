import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMaintenanceWindowTaskRequest, GetMaintenanceWindowTaskResult } from "../models/models_1";
import { deserializeAws_json1_1GetMaintenanceWindowTaskCommand, serializeAws_json1_1GetMaintenanceWindowTaskCommand, } from "../protocols/Aws_json1_1";
var GetMaintenanceWindowTaskCommand = (function (_super) {
    __extends(GetMaintenanceWindowTaskCommand, _super);
    function GetMaintenanceWindowTaskCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMaintenanceWindowTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetMaintenanceWindowTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMaintenanceWindowTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMaintenanceWindowTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMaintenanceWindowTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMaintenanceWindowTaskCommand(input, context);
    };
    GetMaintenanceWindowTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMaintenanceWindowTaskCommand(output, context);
    };
    return GetMaintenanceWindowTaskCommand;
}($Command));
export { GetMaintenanceWindowTaskCommand };

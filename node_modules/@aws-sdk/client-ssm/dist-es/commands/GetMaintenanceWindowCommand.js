import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetMaintenanceWindowRequest, GetMaintenanceWindowResult } from "../models/models_1";
import { deserializeAws_json1_1GetMaintenanceWindowCommand, serializeAws_json1_1GetMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var GetMaintenanceWindowCommand = (function (_super) {
    __extends(GetMaintenanceWindowCommand, _super);
    function GetMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMaintenanceWindowCommand(input, context);
    };
    GetMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMaintenanceWindowCommand(output, context);
    };
    return GetMaintenanceWindowCommand;
}($Command));
export { GetMaintenanceWindowCommand };

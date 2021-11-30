import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateMaintenanceWindowRequest, CreateMaintenanceWindowResult } from "../models/models_0";
import { deserializeAws_json1_1CreateMaintenanceWindowCommand, serializeAws_json1_1CreateMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
var CreateMaintenanceWindowCommand = (function (_super) {
    __extends(CreateMaintenanceWindowCommand, _super);
    function CreateMaintenanceWindowCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMaintenanceWindowCommand(input, context);
    };
    CreateMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMaintenanceWindowCommand(output, context);
    };
    return CreateMaintenanceWindowCommand;
}($Command));
export { CreateMaintenanceWindowCommand };

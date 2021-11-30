import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand, serializeAws_json1_1UpdateMaintenanceWindowTargetCommand, } from "../protocols/Aws_json1_1";
var UpdateMaintenanceWindowTargetCommand = (function (_super) {
    __extends(UpdateMaintenanceWindowTargetCommand, _super);
    function UpdateMaintenanceWindowTargetCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateMaintenanceWindowTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateMaintenanceWindowTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMaintenanceWindowTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMaintenanceWindowTargetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMaintenanceWindowTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMaintenanceWindowTargetCommand(input, context);
    };
    UpdateMaintenanceWindowTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand(output, context);
    };
    return UpdateMaintenanceWindowTargetCommand;
}($Command));
export { UpdateMaintenanceWindowTargetCommand };

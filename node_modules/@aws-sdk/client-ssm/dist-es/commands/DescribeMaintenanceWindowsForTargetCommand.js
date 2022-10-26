import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowsForTargetRequest, DescribeMaintenanceWindowsForTargetResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand, serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowsForTargetCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowsForTargetCommand, _super);
    function DescribeMaintenanceWindowsForTargetCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowsForTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowsForTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowsForTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(input, context);
    };
    DescribeMaintenanceWindowsForTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(output, context);
    };
    return DescribeMaintenanceWindowsForTargetCommand;
}($Command));
export { DescribeMaintenanceWindowsForTargetCommand };

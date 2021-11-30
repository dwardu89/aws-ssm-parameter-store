import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowTargetsRequest, DescribeMaintenanceWindowTargetsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand, serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowTargetsCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowTargetsCommand, _super);
    function DescribeMaintenanceWindowTargetsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowTargetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowTargetsCommand(input, context);
    };
    DescribeMaintenanceWindowTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowTargetsCommand(output, context);
    };
    return DescribeMaintenanceWindowTargetsCommand;
}($Command));
export { DescribeMaintenanceWindowTargetsCommand };

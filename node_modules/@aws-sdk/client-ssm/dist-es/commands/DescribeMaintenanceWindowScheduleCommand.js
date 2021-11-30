import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowScheduleRequest, DescribeMaintenanceWindowScheduleResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand, serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowScheduleCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowScheduleCommand, _super);
    function DescribeMaintenanceWindowScheduleCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowScheduleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowScheduleCommand(input, context);
    };
    DescribeMaintenanceWindowScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowScheduleCommand(output, context);
    };
    return DescribeMaintenanceWindowScheduleCommand;
}($Command));
export { DescribeMaintenanceWindowScheduleCommand };

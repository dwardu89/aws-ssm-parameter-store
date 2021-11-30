import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowExecutionTasksRequest, DescribeMaintenanceWindowExecutionTasksResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand, serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowExecutionTasksCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowExecutionTasksCommand, _super);
    function DescribeMaintenanceWindowExecutionTasksCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowExecutionTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowExecutionTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowExecutionTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand(input, context);
    };
    DescribeMaintenanceWindowExecutionTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTasksCommand(output, context);
    };
    return DescribeMaintenanceWindowExecutionTasksCommand;
}($Command));
export { DescribeMaintenanceWindowExecutionTasksCommand };

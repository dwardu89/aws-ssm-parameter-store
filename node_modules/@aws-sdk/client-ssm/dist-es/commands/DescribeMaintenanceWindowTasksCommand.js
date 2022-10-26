import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowTasksRequest, DescribeMaintenanceWindowTasksResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand, serializeAws_json1_1DescribeMaintenanceWindowTasksCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowTasksCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowTasksCommand, _super);
    function DescribeMaintenanceWindowTasksCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowTasksCommand(input, context);
    };
    DescribeMaintenanceWindowTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowTasksCommand(output, context);
    };
    return DescribeMaintenanceWindowTasksCommand;
}($Command));
export { DescribeMaintenanceWindowTasksCommand };

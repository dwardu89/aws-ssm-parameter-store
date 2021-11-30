import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowExecutionTaskInvocationsRequest, DescribeMaintenanceWindowExecutionTaskInvocationsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand, serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowExecutionTaskInvocationsCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowExecutionTaskInvocationsCommand, _super);
    function DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowExecutionTaskInvocationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTaskInvocationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTaskInvocationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowExecutionTaskInvocationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input, context);
    };
    DescribeMaintenanceWindowExecutionTaskInvocationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(output, context);
    };
    return DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
}($Command));
export { DescribeMaintenanceWindowExecutionTaskInvocationsCommand };

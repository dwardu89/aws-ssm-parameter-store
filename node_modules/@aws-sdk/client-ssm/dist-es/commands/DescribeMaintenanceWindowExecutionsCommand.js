import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowExecutionsRequest, DescribeMaintenanceWindowExecutionsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand, serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowExecutionsCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowExecutionsCommand, _super);
    function DescribeMaintenanceWindowExecutionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowExecutionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand(input, context);
    };
    DescribeMaintenanceWindowExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand(output, context);
    };
    return DescribeMaintenanceWindowExecutionsCommand;
}($Command));
export { DescribeMaintenanceWindowExecutionsCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeMaintenanceWindowsRequest, DescribeMaintenanceWindowsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeMaintenanceWindowsCommand, serializeAws_json1_1DescribeMaintenanceWindowsCommand, } from "../protocols/Aws_json1_1";
var DescribeMaintenanceWindowsCommand = (function (_super) {
    __extends(DescribeMaintenanceWindowsCommand, _super);
    function DescribeMaintenanceWindowsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeMaintenanceWindowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeMaintenanceWindowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMaintenanceWindowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMaintenanceWindowsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMaintenanceWindowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMaintenanceWindowsCommand(input, context);
    };
    DescribeMaintenanceWindowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMaintenanceWindowsCommand(output, context);
    };
    return DescribeMaintenanceWindowsCommand;
}($Command));
export { DescribeMaintenanceWindowsCommand };

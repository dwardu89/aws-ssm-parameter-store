import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeAutomationStepExecutionsRequest, DescribeAutomationStepExecutionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAutomationStepExecutionsCommand, serializeAws_json1_1DescribeAutomationStepExecutionsCommand, } from "../protocols/Aws_json1_1";
var DescribeAutomationStepExecutionsCommand = (function (_super) {
    __extends(DescribeAutomationStepExecutionsCommand, _super);
    function DescribeAutomationStepExecutionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeAutomationStepExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAutomationStepExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAutomationStepExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAutomationStepExecutionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAutomationStepExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAutomationStepExecutionsCommand(input, context);
    };
    DescribeAutomationStepExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAutomationStepExecutionsCommand(output, context);
    };
    return DescribeAutomationStepExecutionsCommand;
}($Command));
export { DescribeAutomationStepExecutionsCommand };

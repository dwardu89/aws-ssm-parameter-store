import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeAutomationExecutionsRequest, DescribeAutomationExecutionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAutomationExecutionsCommand, serializeAws_json1_1DescribeAutomationExecutionsCommand, } from "../protocols/Aws_json1_1";
var DescribeAutomationExecutionsCommand = (function (_super) {
    __extends(DescribeAutomationExecutionsCommand, _super);
    function DescribeAutomationExecutionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeAutomationExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAutomationExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAutomationExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAutomationExecutionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAutomationExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAutomationExecutionsCommand(input, context);
    };
    DescribeAutomationExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAutomationExecutionsCommand(output, context);
    };
    return DescribeAutomationExecutionsCommand;
}($Command));
export { DescribeAutomationExecutionsCommand };

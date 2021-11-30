import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeInstanceInformationRequest, DescribeInstanceInformationResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstanceInformationCommand, serializeAws_json1_1DescribeInstanceInformationCommand, } from "../protocols/Aws_json1_1";
var DescribeInstanceInformationCommand = (function (_super) {
    __extends(DescribeInstanceInformationCommand, _super);
    function DescribeInstanceInformationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeInstanceInformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInstanceInformationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceInformationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceInformationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceInformationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstanceInformationCommand(input, context);
    };
    DescribeInstanceInformationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstanceInformationCommand(output, context);
    };
    return DescribeInstanceInformationCommand;
}($Command));
export { DescribeInstanceInformationCommand };

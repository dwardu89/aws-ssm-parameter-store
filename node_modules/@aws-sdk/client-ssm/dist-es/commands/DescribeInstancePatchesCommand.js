import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeInstancePatchesRequest, DescribeInstancePatchesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstancePatchesCommand, serializeAws_json1_1DescribeInstancePatchesCommand, } from "../protocols/Aws_json1_1";
var DescribeInstancePatchesCommand = (function (_super) {
    __extends(DescribeInstancePatchesCommand, _super);
    function DescribeInstancePatchesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeInstancePatchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInstancePatchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstancePatchesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstancePatchesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstancePatchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstancePatchesCommand(input, context);
    };
    DescribeInstancePatchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstancePatchesCommand(output, context);
    };
    return DescribeInstancePatchesCommand;
}($Command));
export { DescribeInstancePatchesCommand };

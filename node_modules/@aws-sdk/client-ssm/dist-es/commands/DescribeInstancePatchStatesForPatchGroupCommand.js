import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeInstancePatchStatesForPatchGroupRequest, DescribeInstancePatchStatesForPatchGroupResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand, serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand, } from "../protocols/Aws_json1_1";
var DescribeInstancePatchStatesForPatchGroupCommand = (function (_super) {
    __extends(DescribeInstancePatchStatesForPatchGroupCommand, _super);
    function DescribeInstancePatchStatesForPatchGroupCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeInstancePatchStatesForPatchGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeInstancePatchStatesForPatchGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstancePatchStatesForPatchGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstancePatchStatesForPatchGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstancePatchStatesForPatchGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(input, context);
    };
    DescribeInstancePatchStatesForPatchGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeInstancePatchStatesForPatchGroupCommand(output, context);
    };
    return DescribeInstancePatchStatesForPatchGroupCommand;
}($Command));
export { DescribeInstancePatchStatesForPatchGroupCommand };

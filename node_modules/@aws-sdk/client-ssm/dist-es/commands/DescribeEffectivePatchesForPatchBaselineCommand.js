import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeEffectivePatchesForPatchBaselineRequest, DescribeEffectivePatchesForPatchBaselineResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand, serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand, } from "../protocols/Aws_json1_1";
var DescribeEffectivePatchesForPatchBaselineCommand = (function (_super) {
    __extends(DescribeEffectivePatchesForPatchBaselineCommand, _super);
    function DescribeEffectivePatchesForPatchBaselineCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeEffectivePatchesForPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeEffectivePatchesForPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEffectivePatchesForPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEffectivePatchesForPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEffectivePatchesForPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(input, context);
    };
    DescribeEffectivePatchesForPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(output, context);
    };
    return DescribeEffectivePatchesForPatchBaselineCommand;
}($Command));
export { DescribeEffectivePatchesForPatchBaselineCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeEffectiveInstanceAssociationsRequest, DescribeEffectiveInstanceAssociationsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand, serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand, } from "../protocols/Aws_json1_1";
var DescribeEffectiveInstanceAssociationsCommand = (function (_super) {
    __extends(DescribeEffectiveInstanceAssociationsCommand, _super);
    function DescribeEffectiveInstanceAssociationsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeEffectiveInstanceAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeEffectiveInstanceAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEffectiveInstanceAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEffectiveInstanceAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEffectiveInstanceAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(input, context);
    };
    DescribeEffectiveInstanceAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(output, context);
    };
    return DescribeEffectiveInstanceAssociationsCommand;
}($Command));
export { DescribeEffectiveInstanceAssociationsCommand };

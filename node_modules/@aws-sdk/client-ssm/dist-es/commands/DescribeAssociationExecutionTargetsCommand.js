import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeAssociationExecutionTargetsRequest, DescribeAssociationExecutionTargetsResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand, serializeAws_json1_1DescribeAssociationExecutionTargetsCommand, } from "../protocols/Aws_json1_1";
var DescribeAssociationExecutionTargetsCommand = (function (_super) {
    __extends(DescribeAssociationExecutionTargetsCommand, _super);
    function DescribeAssociationExecutionTargetsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeAssociationExecutionTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAssociationExecutionTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssociationExecutionTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssociationExecutionTargetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssociationExecutionTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssociationExecutionTargetsCommand(input, context);
    };
    DescribeAssociationExecutionTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssociationExecutionTargetsCommand(output, context);
    };
    return DescribeAssociationExecutionTargetsCommand;
}($Command));
export { DescribeAssociationExecutionTargetsCommand };

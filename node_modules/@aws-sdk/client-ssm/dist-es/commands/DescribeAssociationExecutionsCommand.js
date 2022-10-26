import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeAssociationExecutionsRequest, DescribeAssociationExecutionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAssociationExecutionsCommand, serializeAws_json1_1DescribeAssociationExecutionsCommand, } from "../protocols/Aws_json1_1";
var DescribeAssociationExecutionsCommand = (function (_super) {
    __extends(DescribeAssociationExecutionsCommand, _super);
    function DescribeAssociationExecutionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeAssociationExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeAssociationExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAssociationExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAssociationExecutionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAssociationExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAssociationExecutionsCommand(input, context);
    };
    DescribeAssociationExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAssociationExecutionsCommand(output, context);
    };
    return DescribeAssociationExecutionsCommand;
}($Command));
export { DescribeAssociationExecutionsCommand };

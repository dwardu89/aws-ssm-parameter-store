import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeSessionsRequest, DescribeSessionsResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeSessionsCommand, serializeAws_json1_1DescribeSessionsCommand, } from "../protocols/Aws_json1_1";
var DescribeSessionsCommand = (function (_super) {
    __extends(DescribeSessionsCommand, _super);
    function DescribeSessionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSessionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSessionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSessionsCommand(input, context);
    };
    DescribeSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSessionsCommand(output, context);
    };
    return DescribeSessionsCommand;
}($Command));
export { DescribeSessionsCommand };

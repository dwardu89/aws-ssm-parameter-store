import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeDocumentRequest, DescribeDocumentResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeDocumentCommand, serializeAws_json1_1DescribeDocumentCommand, } from "../protocols/Aws_json1_1";
var DescribeDocumentCommand = (function (_super) {
    __extends(DescribeDocumentCommand, _super);
    function DescribeDocumentCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDocumentCommand(input, context);
    };
    DescribeDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDocumentCommand(output, context);
    };
    return DescribeDocumentCommand;
}($Command));
export { DescribeDocumentCommand };

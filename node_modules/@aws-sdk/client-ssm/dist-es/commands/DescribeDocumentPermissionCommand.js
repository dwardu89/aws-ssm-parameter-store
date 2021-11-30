import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDocumentPermissionCommand, serializeAws_json1_1DescribeDocumentPermissionCommand, } from "../protocols/Aws_json1_1";
var DescribeDocumentPermissionCommand = (function (_super) {
    __extends(DescribeDocumentPermissionCommand, _super);
    function DescribeDocumentPermissionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribeDocumentPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeDocumentPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDocumentPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDocumentPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDocumentPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDocumentPermissionCommand(input, context);
    };
    DescribeDocumentPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDocumentPermissionCommand(output, context);
    };
    return DescribeDocumentPermissionCommand;
}($Command));
export { DescribeDocumentPermissionCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetCommandInvocationRequest, GetCommandInvocationResult } from "../models/models_1";
import { deserializeAws_json1_1GetCommandInvocationCommand, serializeAws_json1_1GetCommandInvocationCommand, } from "../protocols/Aws_json1_1";
var GetCommandInvocationCommand = (function (_super) {
    __extends(GetCommandInvocationCommand, _super);
    function GetCommandInvocationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetCommandInvocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetCommandInvocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCommandInvocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCommandInvocationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCommandInvocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCommandInvocationCommand(input, context);
    };
    GetCommandInvocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCommandInvocationCommand(output, context);
    };
    return GetCommandInvocationCommand;
}($Command));
export { GetCommandInvocationCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult } from "../models/models_1";
import { deserializeAws_json1_1GetDefaultPatchBaselineCommand, serializeAws_json1_1GetDefaultPatchBaselineCommand, } from "../protocols/Aws_json1_1";
var GetDefaultPatchBaselineCommand = (function (_super) {
    __extends(GetDefaultPatchBaselineCommand, _super);
    function GetDefaultPatchBaselineCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetDefaultPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetDefaultPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDefaultPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDefaultPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDefaultPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDefaultPatchBaselineCommand(input, context);
    };
    GetDefaultPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDefaultPatchBaselineCommand(output, context);
    };
    return GetDefaultPatchBaselineCommand;
}($Command));
export { GetDefaultPatchBaselineCommand };

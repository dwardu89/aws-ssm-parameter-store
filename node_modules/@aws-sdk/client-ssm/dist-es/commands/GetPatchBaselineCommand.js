import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetPatchBaselineRequest, GetPatchBaselineResult } from "../models/models_1";
import { deserializeAws_json1_1GetPatchBaselineCommand, serializeAws_json1_1GetPatchBaselineCommand, } from "../protocols/Aws_json1_1";
var GetPatchBaselineCommand = (function (_super) {
    __extends(GetPatchBaselineCommand, _super);
    function GetPatchBaselineCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPatchBaselineCommand(input, context);
    };
    GetPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPatchBaselineCommand(output, context);
    };
    return GetPatchBaselineCommand;
}($Command));
export { GetPatchBaselineCommand };

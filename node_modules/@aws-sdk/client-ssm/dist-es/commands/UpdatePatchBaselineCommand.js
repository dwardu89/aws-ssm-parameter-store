import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdatePatchBaselineRequest, UpdatePatchBaselineResult } from "../models/models_2";
import { deserializeAws_json1_1UpdatePatchBaselineCommand, serializeAws_json1_1UpdatePatchBaselineCommand, } from "../protocols/Aws_json1_1";
var UpdatePatchBaselineCommand = (function (_super) {
    __extends(UpdatePatchBaselineCommand, _super);
    function UpdatePatchBaselineCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdatePatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdatePatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePatchBaselineCommand(input, context);
    };
    UpdatePatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePatchBaselineCommand(output, context);
    };
    return UpdatePatchBaselineCommand;
}($Command));
export { UpdatePatchBaselineCommand };

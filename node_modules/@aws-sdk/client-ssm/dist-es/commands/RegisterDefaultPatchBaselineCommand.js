import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult } from "../models/models_1";
import { deserializeAws_json1_1RegisterDefaultPatchBaselineCommand, serializeAws_json1_1RegisterDefaultPatchBaselineCommand, } from "../protocols/Aws_json1_1";
var RegisterDefaultPatchBaselineCommand = (function (_super) {
    __extends(RegisterDefaultPatchBaselineCommand, _super);
    function RegisterDefaultPatchBaselineCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RegisterDefaultPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterDefaultPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterDefaultPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterDefaultPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterDefaultPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterDefaultPatchBaselineCommand(input, context);
    };
    RegisterDefaultPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterDefaultPatchBaselineCommand(output, context);
    };
    return RegisterDefaultPatchBaselineCommand;
}($Command));
export { RegisterDefaultPatchBaselineCommand };

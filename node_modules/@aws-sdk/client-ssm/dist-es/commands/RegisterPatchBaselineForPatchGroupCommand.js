import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { RegisterPatchBaselineForPatchGroupRequest, RegisterPatchBaselineForPatchGroupResult, } from "../models/models_1";
import { deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand, serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand, } from "../protocols/Aws_json1_1";
var RegisterPatchBaselineForPatchGroupCommand = (function (_super) {
    __extends(RegisterPatchBaselineForPatchGroupCommand, _super);
    function RegisterPatchBaselineForPatchGroupCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RegisterPatchBaselineForPatchGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterPatchBaselineForPatchGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterPatchBaselineForPatchGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterPatchBaselineForPatchGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterPatchBaselineForPatchGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(input, context);
    };
    RegisterPatchBaselineForPatchGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(output, context);
    };
    return RegisterPatchBaselineForPatchGroupCommand;
}($Command));
export { RegisterPatchBaselineForPatchGroupCommand };

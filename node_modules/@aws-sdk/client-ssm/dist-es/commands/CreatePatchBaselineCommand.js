import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreatePatchBaselineRequest, CreatePatchBaselineResult } from "../models/models_0";
import { deserializeAws_json1_1CreatePatchBaselineCommand, serializeAws_json1_1CreatePatchBaselineCommand, } from "../protocols/Aws_json1_1";
var CreatePatchBaselineCommand = (function (_super) {
    __extends(CreatePatchBaselineCommand, _super);
    function CreatePatchBaselineCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreatePatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreatePatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePatchBaselineCommand(input, context);
    };
    CreatePatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePatchBaselineCommand(output, context);
    };
    return CreatePatchBaselineCommand;
}($Command));
export { CreatePatchBaselineCommand };

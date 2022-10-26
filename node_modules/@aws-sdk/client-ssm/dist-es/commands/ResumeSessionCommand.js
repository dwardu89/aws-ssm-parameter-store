import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ResumeSessionRequest, ResumeSessionResponse } from "../models/models_1";
import { deserializeAws_json1_1ResumeSessionCommand, serializeAws_json1_1ResumeSessionCommand, } from "../protocols/Aws_json1_1";
var ResumeSessionCommand = (function (_super) {
    __extends(ResumeSessionCommand, _super);
    function ResumeSessionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ResumeSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ResumeSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResumeSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResumeSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResumeSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResumeSessionCommand(input, context);
    };
    ResumeSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResumeSessionCommand(output, context);
    };
    return ResumeSessionCommand;
}($Command));
export { ResumeSessionCommand };

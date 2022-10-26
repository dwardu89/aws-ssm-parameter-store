import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetParameterRequest, GetParameterResult } from "../models/models_1";
import { deserializeAws_json1_1GetParameterCommand, serializeAws_json1_1GetParameterCommand, } from "../protocols/Aws_json1_1";
var GetParameterCommand = (function (_super) {
    __extends(GetParameterCommand, _super);
    function GetParameterCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParameterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParameterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParameterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParameterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParameterCommand(input, context);
    };
    GetParameterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParameterCommand(output, context);
    };
    return GetParameterCommand;
}($Command));
export { GetParameterCommand };

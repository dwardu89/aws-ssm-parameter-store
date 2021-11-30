import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetParametersByPathRequest, GetParametersByPathResult } from "../models/models_1";
import { deserializeAws_json1_1GetParametersByPathCommand, serializeAws_json1_1GetParametersByPathCommand, } from "../protocols/Aws_json1_1";
var GetParametersByPathCommand = (function (_super) {
    __extends(GetParametersByPathCommand, _super);
    function GetParametersByPathCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetParametersByPathCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParametersByPathCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParametersByPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParametersByPathResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParametersByPathCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParametersByPathCommand(input, context);
    };
    GetParametersByPathCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParametersByPathCommand(output, context);
    };
    return GetParametersByPathCommand;
}($Command));
export { GetParametersByPathCommand };

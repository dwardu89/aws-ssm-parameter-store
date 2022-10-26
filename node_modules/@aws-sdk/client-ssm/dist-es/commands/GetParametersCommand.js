import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetParametersRequest, GetParametersResult } from "../models/models_1";
import { deserializeAws_json1_1GetParametersCommand, serializeAws_json1_1GetParametersCommand, } from "../protocols/Aws_json1_1";
var GetParametersCommand = (function (_super) {
    __extends(GetParametersCommand, _super);
    function GetParametersCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParametersCommand(input, context);
    };
    GetParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParametersCommand(output, context);
    };
    return GetParametersCommand;
}($Command));
export { GetParametersCommand };

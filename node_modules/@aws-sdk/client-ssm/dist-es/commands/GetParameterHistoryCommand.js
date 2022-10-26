import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetParameterHistoryRequest, GetParameterHistoryResult } from "../models/models_1";
import { deserializeAws_json1_1GetParameterHistoryCommand, serializeAws_json1_1GetParameterHistoryCommand, } from "../protocols/Aws_json1_1";
var GetParameterHistoryCommand = (function (_super) {
    __extends(GetParameterHistoryCommand, _super);
    function GetParameterHistoryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetParameterHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParameterHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParameterHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParameterHistoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParameterHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParameterHistoryCommand(input, context);
    };
    GetParameterHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParameterHistoryCommand(output, context);
    };
    return GetParameterHistoryCommand;
}($Command));
export { GetParameterHistoryCommand };

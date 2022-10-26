import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/models_1";
import { deserializeAws_json1_1GetCalendarStateCommand, serializeAws_json1_1GetCalendarStateCommand, } from "../protocols/Aws_json1_1";
var GetCalendarStateCommand = (function (_super) {
    __extends(GetCalendarStateCommand, _super);
    function GetCalendarStateCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetCalendarStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetCalendarStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCalendarStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCalendarStateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCalendarStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCalendarStateCommand(input, context);
    };
    GetCalendarStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCalendarStateCommand(output, context);
    };
    return GetCalendarStateCommand;
}($Command));
export { GetCalendarStateCommand };

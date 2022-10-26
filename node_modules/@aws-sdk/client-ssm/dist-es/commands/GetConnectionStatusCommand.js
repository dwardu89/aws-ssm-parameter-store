import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetConnectionStatusRequest, GetConnectionStatusResponse } from "../models/models_1";
import { deserializeAws_json1_1GetConnectionStatusCommand, serializeAws_json1_1GetConnectionStatusCommand, } from "../protocols/Aws_json1_1";
var GetConnectionStatusCommand = (function (_super) {
    __extends(GetConnectionStatusCommand, _super);
    function GetConnectionStatusCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetConnectionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetConnectionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConnectionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConnectionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConnectionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetConnectionStatusCommand(input, context);
    };
    GetConnectionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetConnectionStatusCommand(output, context);
    };
    return GetConnectionStatusCommand;
}($Command));
export { GetConnectionStatusCommand };

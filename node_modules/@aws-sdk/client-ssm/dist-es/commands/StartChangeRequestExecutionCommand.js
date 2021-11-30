import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { StartChangeRequestExecutionRequest, StartChangeRequestExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1StartChangeRequestExecutionCommand, serializeAws_json1_1StartChangeRequestExecutionCommand, } from "../protocols/Aws_json1_1";
var StartChangeRequestExecutionCommand = (function (_super) {
    __extends(StartChangeRequestExecutionCommand, _super);
    function StartChangeRequestExecutionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    StartChangeRequestExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StartChangeRequestExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartChangeRequestExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartChangeRequestExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartChangeRequestExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartChangeRequestExecutionCommand(input, context);
    };
    StartChangeRequestExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartChangeRequestExecutionCommand(output, context);
    };
    return StartChangeRequestExecutionCommand;
}($Command));
export { StartChangeRequestExecutionCommand };

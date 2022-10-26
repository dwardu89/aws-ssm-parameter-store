import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateActivationRequest, CreateActivationResult } from "../models/models_0";
import { deserializeAws_json1_1CreateActivationCommand, serializeAws_json1_1CreateActivationCommand, } from "../protocols/Aws_json1_1";
var CreateActivationCommand = (function (_super) {
    __extends(CreateActivationCommand, _super);
    function CreateActivationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateActivationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateActivationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateActivationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateActivationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateActivationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateActivationCommand(input, context);
    };
    CreateActivationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateActivationCommand(output, context);
    };
    return CreateActivationCommand;
}($Command));
export { CreateActivationCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult } from "../models/models_0";
import { deserializeAws_json1_1DeregisterManagedInstanceCommand, serializeAws_json1_1DeregisterManagedInstanceCommand, } from "../protocols/Aws_json1_1";
var DeregisterManagedInstanceCommand = (function (_super) {
    __extends(DeregisterManagedInstanceCommand, _super);
    function DeregisterManagedInstanceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DeregisterManagedInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeregisterManagedInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterManagedInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterManagedInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterManagedInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterManagedInstanceCommand(input, context);
    };
    DeregisterManagedInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterManagedInstanceCommand(output, context);
    };
    return DeregisterManagedInstanceCommand;
}($Command));
export { DeregisterManagedInstanceCommand };

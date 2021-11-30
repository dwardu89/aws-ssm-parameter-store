import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateManagedInstanceRoleCommand, serializeAws_json1_1UpdateManagedInstanceRoleCommand, } from "../protocols/Aws_json1_1";
var UpdateManagedInstanceRoleCommand = (function (_super) {
    __extends(UpdateManagedInstanceRoleCommand, _super);
    function UpdateManagedInstanceRoleCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateManagedInstanceRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateManagedInstanceRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateManagedInstanceRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateManagedInstanceRoleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateManagedInstanceRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateManagedInstanceRoleCommand(input, context);
    };
    UpdateManagedInstanceRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateManagedInstanceRoleCommand(output, context);
    };
    return UpdateManagedInstanceRoleCommand;
}($Command));
export { UpdateManagedInstanceRoleCommand };

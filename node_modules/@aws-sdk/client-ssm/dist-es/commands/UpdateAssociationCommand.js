import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateAssociationRequest, UpdateAssociationResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateAssociationCommand, serializeAws_json1_1UpdateAssociationCommand, } from "../protocols/Aws_json1_1";
var UpdateAssociationCommand = (function (_super) {
    __extends(UpdateAssociationCommand, _super);
    function UpdateAssociationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAssociationCommand(input, context);
    };
    UpdateAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAssociationCommand(output, context);
    };
    return UpdateAssociationCommand;
}($Command));
export { UpdateAssociationCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateAssociationStatusRequest, UpdateAssociationStatusResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateAssociationStatusCommand, serializeAws_json1_1UpdateAssociationStatusCommand, } from "../protocols/Aws_json1_1";
var UpdateAssociationStatusCommand = (function (_super) {
    __extends(UpdateAssociationStatusCommand, _super);
    function UpdateAssociationStatusCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateAssociationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateAssociationStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssociationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAssociationStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssociationStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAssociationStatusCommand(input, context);
    };
    UpdateAssociationStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAssociationStatusCommand(output, context);
    };
    return UpdateAssociationStatusCommand;
}($Command));
export { UpdateAssociationStatusCommand };

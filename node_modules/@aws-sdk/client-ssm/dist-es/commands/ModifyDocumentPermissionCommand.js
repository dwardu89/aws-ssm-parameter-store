import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse } from "../models/models_1";
import { deserializeAws_json1_1ModifyDocumentPermissionCommand, serializeAws_json1_1ModifyDocumentPermissionCommand, } from "../protocols/Aws_json1_1";
var ModifyDocumentPermissionCommand = (function (_super) {
    __extends(ModifyDocumentPermissionCommand, _super);
    function ModifyDocumentPermissionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ModifyDocumentPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ModifyDocumentPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDocumentPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDocumentPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDocumentPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyDocumentPermissionCommand(input, context);
    };
    ModifyDocumentPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyDocumentPermissionCommand(output, context);
    };
    return ModifyDocumentPermissionCommand;
}($Command));
export { ModifyDocumentPermissionCommand };

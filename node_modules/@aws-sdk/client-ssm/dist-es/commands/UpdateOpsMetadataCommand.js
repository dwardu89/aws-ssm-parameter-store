import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateOpsMetadataRequest, UpdateOpsMetadataResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateOpsMetadataCommand, serializeAws_json1_1UpdateOpsMetadataCommand, } from "../protocols/Aws_json1_1";
var UpdateOpsMetadataCommand = (function (_super) {
    __extends(UpdateOpsMetadataCommand, _super);
    function UpdateOpsMetadataCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateOpsMetadataCommand(input, context);
    };
    UpdateOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateOpsMetadataCommand(output, context);
    };
    return UpdateOpsMetadataCommand;
}($Command));
export { UpdateOpsMetadataCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { UpdateOpsItemRequest, UpdateOpsItemResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateOpsItemCommand, serializeAws_json1_1UpdateOpsItemCommand, } from "../protocols/Aws_json1_1";
var UpdateOpsItemCommand = (function (_super) {
    __extends(UpdateOpsItemCommand, _super);
    function UpdateOpsItemCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateOpsItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateOpsItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOpsItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateOpsItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOpsItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateOpsItemCommand(input, context);
    };
    UpdateOpsItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateOpsItemCommand(output, context);
    };
    return UpdateOpsItemCommand;
}($Command));
export { UpdateOpsItemCommand };

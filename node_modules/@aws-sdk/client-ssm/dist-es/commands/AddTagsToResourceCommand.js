import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { AddTagsToResourceRequest, AddTagsToResourceResult } from "../models/models_0";
import { deserializeAws_json1_1AddTagsToResourceCommand, serializeAws_json1_1AddTagsToResourceCommand, } from "../protocols/Aws_json1_1";
var AddTagsToResourceCommand = (function (_super) {
    __extends(AddTagsToResourceCommand, _super);
    function AddTagsToResourceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    AddTagsToResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "AddTagsToResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsToResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddTagsToResourceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsToResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddTagsToResourceCommand(input, context);
    };
    AddTagsToResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddTagsToResourceCommand(output, context);
    };
    return AddTagsToResourceCommand;
}($Command));
export { AddTagsToResourceCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { RemoveTagsFromResourceRequest, RemoveTagsFromResourceResult } from "../models/models_1";
import { deserializeAws_json1_1RemoveTagsFromResourceCommand, serializeAws_json1_1RemoveTagsFromResourceCommand, } from "../protocols/Aws_json1_1";
var RemoveTagsFromResourceCommand = (function (_super) {
    __extends(RemoveTagsFromResourceCommand, _super);
    function RemoveTagsFromResourceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RemoveTagsFromResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RemoveTagsFromResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsFromResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveTagsFromResourceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsFromResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveTagsFromResourceCommand(input, context);
    };
    RemoveTagsFromResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommand(output, context);
    };
    return RemoveTagsFromResourceCommand;
}($Command));
export { RemoveTagsFromResourceCommand };

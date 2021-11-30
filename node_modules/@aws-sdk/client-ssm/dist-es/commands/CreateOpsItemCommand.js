import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateOpsItemRequest, CreateOpsItemResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateOpsItemCommand, serializeAws_json1_1CreateOpsItemCommand, } from "../protocols/Aws_json1_1";
var CreateOpsItemCommand = (function (_super) {
    __extends(CreateOpsItemCommand, _super);
    function CreateOpsItemCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateOpsItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateOpsItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOpsItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOpsItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOpsItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateOpsItemCommand(input, context);
    };
    CreateOpsItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateOpsItemCommand(output, context);
    };
    return CreateOpsItemCommand;
}($Command));
export { CreateOpsItemCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateAssociationBatchRequest, CreateAssociationBatchResult } from "../models/models_0";
import { deserializeAws_json1_1CreateAssociationBatchCommand, serializeAws_json1_1CreateAssociationBatchCommand, } from "../protocols/Aws_json1_1";
var CreateAssociationBatchCommand = (function (_super) {
    __extends(CreateAssociationBatchCommand, _super);
    function CreateAssociationBatchCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateAssociationBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateAssociationBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssociationBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssociationBatchResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssociationBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAssociationBatchCommand(input, context);
    };
    CreateAssociationBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAssociationBatchCommand(output, context);
    };
    return CreateAssociationBatchCommand;
}($Command));
export { CreateAssociationBatchCommand };

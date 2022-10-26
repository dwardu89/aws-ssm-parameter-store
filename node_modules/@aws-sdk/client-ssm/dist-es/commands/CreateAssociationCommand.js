import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateAssociationRequest, CreateAssociationResult } from "../models/models_0";
import { deserializeAws_json1_1CreateAssociationCommand, serializeAws_json1_1CreateAssociationCommand, } from "../protocols/Aws_json1_1";
var CreateAssociationCommand = (function (_super) {
    __extends(CreateAssociationCommand, _super);
    function CreateAssociationCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAssociationCommand(input, context);
    };
    CreateAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAssociationCommand(output, context);
    };
    return CreateAssociationCommand;
}($Command));
export { CreateAssociationCommand };

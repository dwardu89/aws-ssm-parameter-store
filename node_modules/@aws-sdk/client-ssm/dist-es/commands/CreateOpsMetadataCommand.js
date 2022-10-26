import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { CreateOpsMetadataRequest, CreateOpsMetadataResult } from "../models/models_0";
import { deserializeAws_json1_1CreateOpsMetadataCommand, serializeAws_json1_1CreateOpsMetadataCommand, } from "../protocols/Aws_json1_1";
var CreateOpsMetadataCommand = (function (_super) {
    __extends(CreateOpsMetadataCommand, _super);
    function CreateOpsMetadataCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreateOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateOpsMetadataCommand(input, context);
    };
    CreateOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateOpsMetadataCommand(output, context);
    };
    return CreateOpsMetadataCommand;
}($Command));
export { CreateOpsMetadataCommand };

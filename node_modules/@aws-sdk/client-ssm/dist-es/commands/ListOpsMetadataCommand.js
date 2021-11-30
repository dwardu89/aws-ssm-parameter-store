import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListOpsMetadataRequest, ListOpsMetadataResult } from "../models/models_1";
import { deserializeAws_json1_1ListOpsMetadataCommand, serializeAws_json1_1ListOpsMetadataCommand, } from "../protocols/Aws_json1_1";
var ListOpsMetadataCommand = (function (_super) {
    __extends(ListOpsMetadataCommand, _super);
    function ListOpsMetadataCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOpsMetadataCommand(input, context);
    };
    ListOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOpsMetadataCommand(output, context);
    };
    return ListOpsMetadataCommand;
}($Command));
export { ListOpsMetadataCommand };

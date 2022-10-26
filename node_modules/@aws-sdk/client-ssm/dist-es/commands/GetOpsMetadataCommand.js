import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetOpsMetadataRequest, GetOpsMetadataResult } from "../models/models_1";
import { deserializeAws_json1_1GetOpsMetadataCommand, serializeAws_json1_1GetOpsMetadataCommand, } from "../protocols/Aws_json1_1";
var GetOpsMetadataCommand = (function (_super) {
    __extends(GetOpsMetadataCommand, _super);
    function GetOpsMetadataCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOpsMetadataCommand(input, context);
    };
    GetOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOpsMetadataCommand(output, context);
    };
    return GetOpsMetadataCommand;
}($Command));
export { GetOpsMetadataCommand };

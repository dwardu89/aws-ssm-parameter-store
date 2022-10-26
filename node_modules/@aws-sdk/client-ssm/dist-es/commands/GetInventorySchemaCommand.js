import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_1";
import { deserializeAws_json1_1GetInventorySchemaCommand, serializeAws_json1_1GetInventorySchemaCommand, } from "../protocols/Aws_json1_1";
var GetInventorySchemaCommand = (function (_super) {
    __extends(GetInventorySchemaCommand, _super);
    function GetInventorySchemaCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetInventorySchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetInventorySchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInventorySchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInventorySchemaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInventorySchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInventorySchemaCommand(input, context);
    };
    GetInventorySchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInventorySchemaCommand(output, context);
    };
    return GetInventorySchemaCommand;
}($Command));
export { GetInventorySchemaCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetInventoryResult } from "../models/models_1";
import { GetInventoryRequest } from "../models/models_2";
import { deserializeAws_json1_1GetInventoryCommand, serializeAws_json1_1GetInventoryCommand, } from "../protocols/Aws_json1_1";
var GetInventoryCommand = (function (_super) {
    __extends(GetInventoryCommand, _super);
    function GetInventoryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetInventoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetInventoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInventoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInventoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInventoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInventoryCommand(input, context);
    };
    GetInventoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInventoryCommand(output, context);
    };
    return GetInventoryCommand;
}($Command));
export { GetInventoryCommand };

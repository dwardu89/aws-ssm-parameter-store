import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { PutInventoryRequest, PutInventoryResult } from "../models/models_1";
import { deserializeAws_json1_1PutInventoryCommand, serializeAws_json1_1PutInventoryCommand, } from "../protocols/Aws_json1_1";
var PutInventoryCommand = (function (_super) {
    __extends(PutInventoryCommand, _super);
    function PutInventoryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PutInventoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "PutInventoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutInventoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutInventoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutInventoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutInventoryCommand(input, context);
    };
    PutInventoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutInventoryCommand(output, context);
    };
    return PutInventoryCommand;
}($Command));
export { PutInventoryCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DisassociateOpsItemRelatedItemRequest, DisassociateOpsItemRelatedItemResponse } from "../models/models_1";
import { deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand, serializeAws_json1_1DisassociateOpsItemRelatedItemCommand, } from "../protocols/Aws_json1_1";
var DisassociateOpsItemRelatedItemCommand = (function (_super) {
    __extends(DisassociateOpsItemRelatedItemCommand, _super);
    function DisassociateOpsItemRelatedItemCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DisassociateOpsItemRelatedItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DisassociateOpsItemRelatedItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateOpsItemRelatedItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateOpsItemRelatedItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateOpsItemRelatedItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateOpsItemRelatedItemCommand(input, context);
    };
    DisassociateOpsItemRelatedItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand(output, context);
    };
    return DisassociateOpsItemRelatedItemCommand;
}($Command));
export { DisassociateOpsItemRelatedItemCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateOpsItemRelatedItemCommand, serializeAws_json1_1AssociateOpsItemRelatedItemCommand, } from "../protocols/Aws_json1_1";
var AssociateOpsItemRelatedItemCommand = (function (_super) {
    __extends(AssociateOpsItemRelatedItemCommand, _super);
    function AssociateOpsItemRelatedItemCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    AssociateOpsItemRelatedItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "AssociateOpsItemRelatedItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateOpsItemRelatedItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateOpsItemRelatedItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateOpsItemRelatedItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateOpsItemRelatedItemCommand(input, context);
    };
    AssociateOpsItemRelatedItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateOpsItemRelatedItemCommand(output, context);
    };
    return AssociateOpsItemRelatedItemCommand;
}($Command));
export { AssociateOpsItemRelatedItemCommand };

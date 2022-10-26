import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { PutComplianceItemsRequest, PutComplianceItemsResult } from "../models/models_1";
import { deserializeAws_json1_1PutComplianceItemsCommand, serializeAws_json1_1PutComplianceItemsCommand, } from "../protocols/Aws_json1_1";
var PutComplianceItemsCommand = (function (_super) {
    __extends(PutComplianceItemsCommand, _super);
    function PutComplianceItemsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PutComplianceItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "PutComplianceItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutComplianceItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutComplianceItemsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutComplianceItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutComplianceItemsCommand(input, context);
    };
    PutComplianceItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutComplianceItemsCommand(output, context);
    };
    return PutComplianceItemsCommand;
}($Command));
export { PutComplianceItemsCommand };

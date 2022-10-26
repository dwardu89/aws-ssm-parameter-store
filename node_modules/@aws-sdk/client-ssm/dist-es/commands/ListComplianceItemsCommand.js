import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListComplianceItemsRequest, ListComplianceItemsResult } from "../models/models_1";
import { deserializeAws_json1_1ListComplianceItemsCommand, serializeAws_json1_1ListComplianceItemsCommand, } from "../protocols/Aws_json1_1";
var ListComplianceItemsCommand = (function (_super) {
    __extends(ListComplianceItemsCommand, _super);
    function ListComplianceItemsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListComplianceItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListComplianceItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComplianceItemsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComplianceItemsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComplianceItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListComplianceItemsCommand(input, context);
    };
    ListComplianceItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListComplianceItemsCommand(output, context);
    };
    return ListComplianceItemsCommand;
}($Command));
export { ListComplianceItemsCommand };

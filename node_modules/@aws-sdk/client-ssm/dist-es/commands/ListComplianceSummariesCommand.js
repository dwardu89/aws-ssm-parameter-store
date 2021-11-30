import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListComplianceSummariesRequest, ListComplianceSummariesResult } from "../models/models_1";
import { deserializeAws_json1_1ListComplianceSummariesCommand, serializeAws_json1_1ListComplianceSummariesCommand, } from "../protocols/Aws_json1_1";
var ListComplianceSummariesCommand = (function (_super) {
    __extends(ListComplianceSummariesCommand, _super);
    function ListComplianceSummariesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListComplianceSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListComplianceSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComplianceSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComplianceSummariesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComplianceSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListComplianceSummariesCommand(input, context);
    };
    ListComplianceSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListComplianceSummariesCommand(output, context);
    };
    return ListComplianceSummariesCommand;
}($Command));
export { ListComplianceSummariesCommand };

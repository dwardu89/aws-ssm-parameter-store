import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribePatchGroupsRequest, DescribePatchGroupsResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchGroupsCommand, serializeAws_json1_1DescribePatchGroupsCommand, } from "../protocols/Aws_json1_1";
var DescribePatchGroupsCommand = (function (_super) {
    __extends(DescribePatchGroupsCommand, _super);
    function DescribePatchGroupsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribePatchGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchGroupsCommand(input, context);
    };
    DescribePatchGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchGroupsCommand(output, context);
    };
    return DescribePatchGroupsCommand;
}($Command));
export { DescribePatchGroupsCommand };

import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchGroupStateCommand, serializeAws_json1_1DescribePatchGroupStateCommand, } from "../protocols/Aws_json1_1";
var DescribePatchGroupStateCommand = (function (_super) {
    __extends(DescribePatchGroupStateCommand, _super);
    function DescribePatchGroupStateCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribePatchGroupStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchGroupStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchGroupStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchGroupStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchGroupStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchGroupStateCommand(input, context);
    };
    DescribePatchGroupStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchGroupStateCommand(output, context);
    };
    return DescribePatchGroupStateCommand;
}($Command));
export { DescribePatchGroupStateCommand };

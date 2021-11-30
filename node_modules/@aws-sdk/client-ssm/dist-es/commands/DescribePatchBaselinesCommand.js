import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribePatchBaselinesRequest, DescribePatchBaselinesResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchBaselinesCommand, serializeAws_json1_1DescribePatchBaselinesCommand, } from "../protocols/Aws_json1_1";
var DescribePatchBaselinesCommand = (function (_super) {
    __extends(DescribePatchBaselinesCommand, _super);
    function DescribePatchBaselinesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribePatchBaselinesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchBaselinesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchBaselinesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchBaselinesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchBaselinesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchBaselinesCommand(input, context);
    };
    DescribePatchBaselinesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchBaselinesCommand(output, context);
    };
    return DescribePatchBaselinesCommand;
}($Command));
export { DescribePatchBaselinesCommand };

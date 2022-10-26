import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DescribePatchPropertiesRequest, DescribePatchPropertiesResult } from "../models/models_1";
import { deserializeAws_json1_1DescribePatchPropertiesCommand, serializeAws_json1_1DescribePatchPropertiesCommand, } from "../protocols/Aws_json1_1";
var DescribePatchPropertiesCommand = (function (_super) {
    __extends(DescribePatchPropertiesCommand, _super);
    function DescribePatchPropertiesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    DescribePatchPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribePatchPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePatchPropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePatchPropertiesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePatchPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePatchPropertiesCommand(input, context);
    };
    DescribePatchPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePatchPropertiesCommand(output, context);
    };
    return DescribePatchPropertiesCommand;
}($Command));
export { DescribePatchPropertiesCommand };

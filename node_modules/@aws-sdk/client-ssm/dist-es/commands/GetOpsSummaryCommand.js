import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetOpsSummaryResult } from "../models/models_1";
import { GetOpsSummaryRequest } from "../models/models_2";
import { deserializeAws_json1_1GetOpsSummaryCommand, serializeAws_json1_1GetOpsSummaryCommand, } from "../protocols/Aws_json1_1";
var GetOpsSummaryCommand = (function (_super) {
    __extends(GetOpsSummaryCommand, _super);
    function GetOpsSummaryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetOpsSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetOpsSummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOpsSummaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOpsSummaryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOpsSummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOpsSummaryCommand(input, context);
    };
    GetOpsSummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOpsSummaryCommand(output, context);
    };
    return GetOpsSummaryCommand;
}($Command));
export { GetOpsSummaryCommand };

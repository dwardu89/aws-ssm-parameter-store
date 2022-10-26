import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetPatchBaselineForPatchGroupRequest, GetPatchBaselineForPatchGroupResult } from "../models/models_1";
import { deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand, serializeAws_json1_1GetPatchBaselineForPatchGroupCommand, } from "../protocols/Aws_json1_1";
var GetPatchBaselineForPatchGroupCommand = (function (_super) {
    __extends(GetPatchBaselineForPatchGroupCommand, _super);
    function GetPatchBaselineForPatchGroupCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPatchBaselineForPatchGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetPatchBaselineForPatchGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPatchBaselineForPatchGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPatchBaselineForPatchGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPatchBaselineForPatchGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPatchBaselineForPatchGroupCommand(input, context);
    };
    GetPatchBaselineForPatchGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand(output, context);
    };
    return GetPatchBaselineForPatchGroupCommand;
}($Command));
export { GetPatchBaselineForPatchGroupCommand };

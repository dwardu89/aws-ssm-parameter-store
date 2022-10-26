import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetDeployablePatchSnapshotForInstanceRequest, GetDeployablePatchSnapshotForInstanceResult, } from "../models/models_1";
import { deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand, serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand, } from "../protocols/Aws_json1_1";
var GetDeployablePatchSnapshotForInstanceCommand = (function (_super) {
    __extends(GetDeployablePatchSnapshotForInstanceCommand, _super);
    function GetDeployablePatchSnapshotForInstanceCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetDeployablePatchSnapshotForInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetDeployablePatchSnapshotForInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeployablePatchSnapshotForInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeployablePatchSnapshotForInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeployablePatchSnapshotForInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(input, context);
    };
    GetDeployablePatchSnapshotForInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(output, context);
    };
    return GetDeployablePatchSnapshotForInstanceCommand;
}($Command));
export { GetDeployablePatchSnapshotForInstanceCommand };

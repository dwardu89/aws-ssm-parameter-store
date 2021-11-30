import { __assign, __awaiter, __generator } from "tslib";
import { checkExceptions, createWaiter, WaiterState } from "@aws-sdk/util-waiter";
import { GetCommandInvocationCommand } from "../commands/GetCommandInvocationCommand";
var checkState = function (client, input) { return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, returnComparator, returnComparator, returnComparator, returnComparator, returnComparator, returnComparator, returnComparator, exception_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, client.send(new GetCommandInvocationCommand(input))];
            case 1:
                result_1 = _a.sent();
                reason = result_1;
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "Pending") {
                        return [2, { state: WaiterState.RETRY, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "InProgress") {
                        return [2, { state: WaiterState.RETRY, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "Delayed") {
                        return [2, { state: WaiterState.RETRY, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "Success") {
                        return [2, { state: WaiterState.SUCCESS, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "Cancelled") {
                        return [2, { state: WaiterState.FAILURE, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "TimedOut") {
                        return [2, { state: WaiterState.FAILURE, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "Failed") {
                        return [2, { state: WaiterState.FAILURE, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        return result_1.Status;
                    };
                    if (returnComparator() === "Cancelling") {
                        return [2, { state: WaiterState.FAILURE, reason: reason }];
                    }
                }
                catch (e) { }
                return [3, 3];
            case 2:
                exception_1 = _a.sent();
                reason = exception_1;
                if (exception_1.name && exception_1.name == "InvocationDoesNotExist") {
                    return [2, { state: WaiterState.RETRY, reason: reason }];
                }
                return [3, 3];
            case 3: return [2, { state: WaiterState.RETRY, reason: reason }];
        }
    });
}); };
export var waitForCommandExecuted = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
        serviceDefaults = { minDelay: 5, maxDelay: 120 };
        return [2, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
}); };
export var waitUntilCommandExecuted = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                serviceDefaults = { minDelay: 5, maxDelay: 120 };
                return [4, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
            case 1:
                result = _a.sent();
                return [2, checkExceptions(result)];
        }
    });
}); };

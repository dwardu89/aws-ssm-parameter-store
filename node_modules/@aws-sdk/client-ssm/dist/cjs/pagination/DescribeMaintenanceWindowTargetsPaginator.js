"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeMaintenanceWindowTargets = void 0;
const SSM_1 = require("../SSM");
const SSMClient_1 = require("../SSMClient");
const DescribeMaintenanceWindowTargetsCommand_1 = require("../commands/DescribeMaintenanceWindowTargetsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DescribeMaintenanceWindowTargetsCommand_1.DescribeMaintenanceWindowTargetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.describeMaintenanceWindowTargets(input, ...args);
};
async function* paginateDescribeMaintenanceWindowTargets(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SSM_1.SSM) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof SSMClient_1.SSMClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSM | SSMClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDescribeMaintenanceWindowTargets = paginateDescribeMaintenanceWindowTargets;
//# sourceMappingURL=DescribeMaintenanceWindowTargetsPaginator.js.map
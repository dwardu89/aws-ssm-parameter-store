"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListResourceComplianceSummaries = void 0;
const SSM_1 = require("../SSM");
const SSMClient_1 = require("../SSMClient");
const ListResourceComplianceSummariesCommand_1 = require("../commands/ListResourceComplianceSummariesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListResourceComplianceSummariesCommand_1.ListResourceComplianceSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listResourceComplianceSummaries(input, ...args);
};
async function* paginateListResourceComplianceSummaries(config, input, ...additionalArguments) {
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
exports.paginateListResourceComplianceSummaries = paginateListResourceComplianceSummaries;
//# sourceMappingURL=ListResourceComplianceSummariesPaginator.js.map
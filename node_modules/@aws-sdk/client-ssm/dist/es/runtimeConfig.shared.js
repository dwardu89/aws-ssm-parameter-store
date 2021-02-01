import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
    apiVersion: "2014-11-06",
    disableHostPrefix: false,
    logger: {},
    regionInfoProvider: defaultRegionInfoProvider,
    serviceId: "SSM",
    urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
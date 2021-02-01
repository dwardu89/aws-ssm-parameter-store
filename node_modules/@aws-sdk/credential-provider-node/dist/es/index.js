import { fromEnv } from "@aws-sdk/credential-provider-env";
import { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata, } from "@aws-sdk/credential-provider-imds";
import { ENV_PROFILE, fromIni } from "@aws-sdk/credential-provider-ini";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { chain, memoize, ProviderError } from "@aws-sdk/property-provider";
export var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromProcess             The functino used to sources credentials from
 *                              credential_process in INI files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
export function defaultProvider(init) {
    if (init === void 0) { init = {}; }
    var _a = init.profile, profile = _a === void 0 ? process.env[ENV_PROFILE] : _a;
    var providerChain = profile
        ? chain(fromIni(init), fromProcess(init))
        : chain(fromEnv(), fromIni(init), fromProcess(init), remoteProvider(init));
    return memoize(providerChain, function (credentials) { return credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000; }, function (credentials) { return credentials.expiration !== undefined; });
}
function remoteProvider(init) {
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        return fromContainerMetadata(init);
    }
    if (process.env[ENV_IMDS_DISABLED]) {
        return function () { return Promise.reject(new ProviderError("EC2 Instance Metadata Service access disabled")); };
    }
    return fromInstanceMetadata(init);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixvQkFBb0IsR0FFckIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBZSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQW1CLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0UsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsMkJBQTJCLENBQUM7QUFFN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBNkQ7SUFBN0QscUJBQUEsRUFBQSxTQUE2RDtJQUNuRixJQUFBLEtBQXVDLElBQUksUUFBVCxFQUFsQyxPQUFPLG1CQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUEsQ0FBVTtJQUNwRCxJQUFNLGFBQWEsR0FBRyxPQUFPO1FBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFN0UsT0FBTyxPQUFPLENBQ1osYUFBYSxFQUNiLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUE5RixDQUE4RixFQUMvRyxVQUFDLFdBQVcsSUFBSyxPQUFBLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFwQyxDQUFvQyxDQUN0RCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLElBQXdCO0lBQzlDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUN4RSxPQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDbEMsT0FBTyxjQUFNLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLEVBQWxGLENBQWtGLENBQUM7S0FDakc7SUFFRCxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tRW52IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItZW52XCI7XG5pbXBvcnQge1xuICBFTlZfQ01EU19GVUxMX1VSSSxcbiAgRU5WX0NNRFNfUkVMQVRJVkVfVVJJLFxuICBmcm9tQ29udGFpbmVyTWV0YWRhdGEsXG4gIGZyb21JbnN0YW5jZU1ldGFkYXRhLFxuICBSZW1vdGVQcm92aWRlckluaXQsXG59IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHNcIjtcbmltcG9ydCB7IEVOVl9QUk9GSUxFLCBmcm9tSW5pLCBGcm9tSW5pSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaVwiO1xuaW1wb3J0IHsgZnJvbVByb2Nlc3MsIEZyb21Qcm9jZXNzSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXByb2Nlc3NcIjtcbmltcG9ydCB7IGNoYWluLCBtZW1vaXplLCBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEVOVl9JTURTX0RJU0FCTEVEID0gXCJBV1NfRUMyX01FVEFEQVRBX0RJU0FCTEVEXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNyZWRlbnRpYWwgcHJvdmlkZXIgdGhhdCB3aWxsIGF0dGVtcHQgdG8gZmluZCBjcmVkZW50aWFscyBmcm9tIHRoZVxuICogZm9sbG93aW5nIHNvdXJjZXMgKGxpc3RlZCBpbiBvcmRlciBvZiBwcmVjZWRlbmNlKTpcbiAqICAgKiBFbnZpcm9ubWVudCB2YXJpYWJsZXMgZXhwb3NlZCB2aWEgYHByb2Nlc3MuZW52YFxuICogICAqIFNoYXJlZCBjcmVkZW50aWFscyBhbmQgY29uZmlnIGluaSBmaWxlc1xuICogICAqIFRoZSBFQzIvRUNTIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2VcbiAqXG4gKiBUaGUgZGVmYXVsdCBjcmVkZW50aWFsIHByb3ZpZGVyIHdpbGwgaW52b2tlIG9uZSBwcm92aWRlciBhdCBhIHRpbWUgYW5kIG9ubHlcbiAqIGNvbnRpbnVlIHRvIHRoZSBuZXh0IGlmIG5vIGNyZWRlbnRpYWxzIGhhdmUgYmVlbiBsb2NhdGVkLiBGb3IgZXhhbXBsZSwgaWZcbiAqIHRoZSBwcm9jZXNzIGZpbmRzIHZhbHVlcyBkZWZpbmVkIHZpYSB0aGUgYEFXU19BQ0NFU1NfS0VZX0lEYCBhbmRcbiAqIGBBV1NfU0VDUkVUX0FDQ0VTU19LRVlgIGVudmlyb25tZW50IHZhcmlhYmxlcywgdGhlIGZpbGVzIGF0XG4gKiBgfi8uYXdzL2NyZWRlbnRpYWxzYCBhbmQgYH4vLmF3cy9jb25maWdgIHdpbGwgbm90IGJlIHJlYWQsIG5vciB3aWxsIGFueVxuICogbWVzc2FnZXMgYmUgc2VudCB0byB0aGUgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZS5cbiAqXG4gKiBAcGFyYW0gaW5pdCAgICAgICAgICAgICAgICAgIENvbmZpZ3VyYXRpb24gdGhhdCBpcyBwYXNzZWQgdG8gZWFjaCBpbmRpdmlkdWFsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyXG4gKlxuICogQHNlZSBmcm9tRW52ICAgICAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAqIEBzZWUgZnJvbUluaSAgICAgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb20gSU5JXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzXG4gKiBAc2VlIGZyb21Qcm9jZXNzICAgICAgICAgICAgIFRoZSBmdW5jdGlubyB1c2VkIHRvIHNvdXJjZXMgY3JlZGVudGlhbHMgZnJvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsX3Byb2Nlc3MgaW4gSU5JIGZpbGVzXG4gKiBAc2VlIGZyb21JbnN0YW5jZU1ldGFkYXRhICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFQzIgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZVxuICogQHNlZSBmcm9tQ29udGFpbmVyTWV0YWRhdGEgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRUNTIENvbnRhaW5lciBNZXRhZGF0YSBTZXJ2aWNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UHJvdmlkZXIoaW5pdDogRnJvbUluaUluaXQgJiBSZW1vdGVQcm92aWRlckluaXQgJiBGcm9tUHJvY2Vzc0luaXQgPSB7fSk6IENyZWRlbnRpYWxQcm92aWRlciB7XG4gIGNvbnN0IHsgcHJvZmlsZSA9IHByb2Nlc3MuZW52W0VOVl9QUk9GSUxFXSB9ID0gaW5pdDtcbiAgY29uc3QgcHJvdmlkZXJDaGFpbiA9IHByb2ZpbGVcbiAgICA/IGNoYWluKGZyb21JbmkoaW5pdCksIGZyb21Qcm9jZXNzKGluaXQpKVxuICAgIDogY2hhaW4oZnJvbUVudigpLCBmcm9tSW5pKGluaXQpLCBmcm9tUHJvY2Vzcyhpbml0KSwgcmVtb3RlUHJvdmlkZXIoaW5pdCkpO1xuXG4gIHJldHVybiBtZW1vaXplKFxuICAgIHByb3ZpZGVyQ2hhaW4sXG4gICAgKGNyZWRlbnRpYWxzKSA9PiBjcmVkZW50aWFscy5leHBpcmF0aW9uICE9PSB1bmRlZmluZWQgJiYgY3JlZGVudGlhbHMuZXhwaXJhdGlvbi5nZXRUaW1lKCkgLSBEYXRlLm5vdygpIDwgMzAwMDAwLFxuICAgIChjcmVkZW50aWFscykgPT4gY3JlZGVudGlhbHMuZXhwaXJhdGlvbiAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbW90ZVByb3ZpZGVyKGluaXQ6IFJlbW90ZVByb3ZpZGVySW5pdCk6IENyZWRlbnRpYWxQcm92aWRlciB7XG4gIGlmIChwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldIHx8IHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSkge1xuICAgIHJldHVybiBmcm9tQ29udGFpbmVyTWV0YWRhdGEoaW5pdCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0lNRFNfRElTQUJMRURdKSB7XG4gICAgcmV0dXJuICgpID0+IFByb21pc2UucmVqZWN0KG5ldyBQcm92aWRlckVycm9yKFwiRUMyIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2UgYWNjZXNzIGRpc2FibGVkXCIpKTtcbiAgfVxuXG4gIHJldHVybiBmcm9tSW5zdGFuY2VNZXRhZGF0YShpbml0KTtcbn1cbiJdfQ==
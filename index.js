const core = require('@actions/core');
const github = require('@actions/github');
var AWS = require('aws-sdk');
const { SSM } = require("@aws-sdk/client-ssm");

try {
    var ssm_path = core.getInput('ssm-path', { required: true })
    core.info(`Storing Variable in path [${ssm_path}]`);
    // Load the AWS Region to use in SSM
    core.debug(`Setting aws-region [${core.getInput('aws-region')}]`)
    AWS.config.update({ region: core.getInput('aws-region') });
    const ssm = new SSM()
    var params = {
        Name: core.getInput('ssm-path', { required: true }),
        Value: core.getInput('ssm-value', { required: true }),
        Type: core.getInput('ssm-value-type', { required: true }),
        Overwrite: core.getInput('ssm-value-overwrite', { required: true }),
        Description: core.getInput('ssm-value-description')
    }
    const keyId = core.getInput('ssm-kms-key-id')
    if (params['Type'] === "SecureString" && keyId !== '') {
        core.debug(`Setting the KeyId to ${keyId}`)
        params['KeyId'] = keyId
    }
    await ssm.putParameter(params).then(value => {
        core.info(`Successfully Stored parameter in path [${ssm_path}]`);
    }).catch(reason => {
        core.setFailed(reason);
    })
} catch (error) {
    core.setFailed(error.message);
}

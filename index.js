const core = require('@actions/core');
const github = require('@actions/github');
var AWS = require('aws-sdk');
const { SSM } = require("@aws-sdk/client-ssm");

try {
    console.log(`Storing Variable in path [${core.getInput('ssm-path', { required: true })}]`);
    // Set the region 
    AWS.config.update({ region: core.getInput('aws-region') });
    // Load the AWS Region to use in SSM
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
        params['KeyId'] = keyId
    }
    ssm.putParameter(params).then(value => {
        console.log(`Successfully Stored parameter in path [${value}]`);
    }).catch(reason => {
        core.setFailed(reason);
    })

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
} catch (error) {
    core.setFailed(error.message);
}

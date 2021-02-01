const core = require('@actions/core');
const github = require('@actions/github');
const { SSM } = require("@aws-sdk/client-ssm");

try {
    // Load the AWS Region to use in SSM
    const ssm = new SSM({ region=core.getInput('aws-region') })
    var ssm_path_name = core.getInput('ssm-path')
    var params = {
        Name=ssm_path_name,
        Value=core.getInput('ssm-value'),
        Type=core.getInput('ssm-value-type'),
        Overwrite=core.getInput('ssm-value-overwrite')
    }
    ssm.putParameter(params).then(value => {
        console.log(`Storing Variable in path [${ssm_path_name}]`);
    }).catch(reason => {
        core.setFailed(reason);
    })

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
} catch (error) {
    core.setFailed(error.message);
}

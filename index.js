const core = require("@actions/core");
const { SSM } = require("aws-sdk");

async function run() {
  try {
    var ssm_path = core.getInput("ssm-path", { required: true });
    core.info(`Storing Variable in path [${ssm_path}]`);
    // Load the AWS Region to use in SSM
    core.debug(`Setting aws-region [${core.getInput("aws-region")}]`);
    const ssm = new SSM({
      apiVersion: "2014-11-06",
      region: core.getInput("aws-region"),
    });
    var params = {
      Name: core.getInput("ssm-path", { required: true }),
      Value: core.getInput("ssm-value", { required: true }),
      Type: core.getInput("ssm-value-type", { required: true }),
      Overwrite: core.getBooleanInput("ssm-value-overwrite", {
        required: true,
      }),
      Description: core.getInput("ssm-value-description"),
    };
    var skip = core.getInput("skip-empty-value", { required: false });
    if (skip === true && params.Value === '') {
      core.info(`Skipping empty value parameter in path [${ssm_path}]`);
      return;
    }
    core.debug(
      `Prepared parameters for SSM parameter update. ${JSON.stringify(params)}`
    );
    const keyId = core.getInput("ssm-kms-key-id");
    if (params["Type"] === "SecureString" && keyId !== "") {
      core.debug(`Setting the KeyId to ${keyId}`);
      params["KeyId"] = keyId;
    }
    var result = await ssm.putParameter(params).promise();
    core.debug(
      `Parameter details Version [${result.Version}] Tier [${result.Tier}]`
    );
    core.info(`Successfully Stored parameter in path [${ssm_path}]`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

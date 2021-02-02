# AWS SSM Parameter Store GitHub Action

This GitHub Action was created with the problem that was discovered when working with secrets and infrastructure as code.

The problem that was faced was when using Terraform or CloudFormation, you would have to store the secret in plain text and then run some extra checks to encrypt it. Or you would have to add the value manually.

This action helps solve this problem by taking allowing the user to provide the path and the value that wants to be stored in a GitHub Action and the value can be passed in as a secret.

## Inputs

### `aws-region`

**Required** The AWS Region to use.

### `ssm-path`

**Required** The value to be stored in the SSM Parameter Store Path.

### `ssm-value-description`

A description of the value being inserted into SSM.

### `ssm-value`

**Required** The value to be stored in the SSM Parameter Store Path.

### `ssm-value-type`

**Required** The value type to store the SSM Parameter (String | StringList | SecureString). Default `SecureString`.

### `ssm-value-overwrite`

**Required** TOverwrite the value of the SSM Parameter when inserting. Default `true`.

### `ssm-kms-key-id`

The AWS KMS Key ARN to use to encrypt the key. Default uses the AWS Provided KMS Key ID .

## Example usage

```yaml
uses: dwardu89/aws-ssm-parameter-store
with:
  aws-region: eu-west-1
  ssm-path: /dwardu89/hello
  ssm-value: ${{ secrets.WORLD }}
```

## Required IAM Permissions

In order to use this, your AWS User/Role must allow the `ssm:PutParameter` action.

e.g.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PutSSMParameters",
      "Effect": "Allow",
      "Action": "ssm:PutParameter",
      "Resource": ["arn:aws:ssm:eu-west-1:1234567890:parameter/dwardu89/hello"]
    }
  ]
}
```

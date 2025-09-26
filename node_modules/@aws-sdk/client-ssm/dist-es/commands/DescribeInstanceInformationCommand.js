import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceInformationResultFilterSensitiveLog, } from "../models/models_0";
import { de_DescribeInstanceInformationCommand, se_DescribeInstanceInformationCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DescribeInstanceInformationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AmazonSSM", "DescribeInstanceInformation", {})
    .n("SSMClient", "DescribeInstanceInformationCommand")
    .f(void 0, DescribeInstanceInformationResultFilterSensitiveLog)
    .ser(se_DescribeInstanceInformationCommand)
    .de(de_DescribeInstanceInformationCommand)
    .build() {
}

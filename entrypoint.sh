#!/bin/sh -l

aws ssm put-parameter \
    --region $AWS_REGION \
    --name $SSM_PATH \
    --type $SSM_VALUE_TYPE
    --value $SSM_VALUE \
    $EXTRA_PARAMS 

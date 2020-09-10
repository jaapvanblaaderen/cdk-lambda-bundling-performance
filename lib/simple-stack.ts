import * as cdk from '@aws-cdk/core';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { Runtime } from '@aws-cdk/aws-lambda';

export class SimpleStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new NodejsFunction(this, 'HandlerLambda', {
            entry: 'lib/app/lambda.ts',
            memorySize: 512,
            runtime: Runtime.NODEJS_12_X
        });
    }
}

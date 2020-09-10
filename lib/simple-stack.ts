import * as cdk from '@aws-cdk/core';
import * as apigw from '@aws-cdk/aws-apigatewayv2';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';

export class SimpleStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const handlerLambda = new NodejsFunction(this, 'HandlerLambda', {
            entry: 'lib/app/lambda.ts',
            memorySize: 512,
        });

        const handlerLambdaIntegration = new apigw.LambdaProxyIntegration({
            handler: handlerLambda,
        });

        const httpApi = new apigw.HttpApi(this, 'SimpleStack');

        httpApi.addRoutes({
            path: '/',
            methods: [apigw.HttpMethod.GET],
            integration: handlerLambdaIntegration,
        });
    }
}

import * as cdk from '@aws-cdk/core';
import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert';
import { SimpleStack } from './simple-stack';

describe('Simple Stack', () => {
    it('Should create an API Gateway resource', () => {
        const app = new cdk.App();
        const stack = new SimpleStack(app, 'simple-stack');
        expectCDK(stack).to(
            haveResourceLike('AWS::ApiGatewayV2::Api', {
                Name: 'SimpleStack',
            }),
        );
    });

    it('Should create a Lambda Function', () => {
        const app = new cdk.App();
        const stack = new SimpleStack(app, 'simple-stack');
        expectCDK(stack).to(
            haveResourceLike('AWS::Lambda::Function', {
                MemorySize: 512,
            }),
        );
    });
});

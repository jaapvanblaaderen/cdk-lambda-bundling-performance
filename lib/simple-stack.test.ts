import * as cdk from '@aws-cdk/core';
import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert';
import { SimpleStack } from './simple-stack';

describe('Simple Stack', () => {
    it('Should have memory size set to 512MB', () => {
        const stack = new SimpleStack(new cdk.App(), 'simple-stack');
        expectCDK(stack).to(
            haveResourceLike('AWS::Lambda::Function', {
                MemorySize: 512,
            }),
        );
    });

    it('Should use Node 12 as runtime', () => {
        const stack = new SimpleStack(new cdk.App(), 'simple-stack');
        expectCDK(stack).to(
            haveResourceLike('AWS::Lambda::Function', {
                Runtime: 'nodejs12.x',
            }),
        );
    });
});

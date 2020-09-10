#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { SimpleStack } from '../lib/simple-stack';

new SimpleStack(new App(), 'simple-stack');

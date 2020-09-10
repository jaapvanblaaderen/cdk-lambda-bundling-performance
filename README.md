Simple CDK project to test performance of bundling Lambda code. Package consist of a single CDK stack `SimpleStack` with a very simple lambda function.

## Usage

* Install dependencies: `npm install`
* Run tests: `npm run test`
* Synthesize app: `npx cdk synth`

## Performance issue description

Parcel bundling is slow (takes 6-8 seconds for a lambda with no logic) and the Parcel cache doesn't seem to work properly. To demonstrate this, run the test, it will perform two tests on the same stack which results in the lambda being bundled twice. I would expect that bundling is almost instant for the second test as Parcel cached it.

Example test output:
```
Bundling asset simple-stack/HandlerLambda/Code/Stage...

 RUNS  lib/simple-stack.test.ts
✨ Built in 6.71s
Bundling asset simple-stack/HandlerLambda/Code/Stage...

 RUNS  lib/simple-stack.test.ts
✨ Built in 6.57s
 PASS  lib/simple-stack.test.ts (18.8 s)
  Simple Stack
    ✓ Should create an API Gateway resource (8141 ms)
    ✓ Should create a Lambda Function (7338 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        19.815 s, estimated 24 s
Ran all test suites.
```
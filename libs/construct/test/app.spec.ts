import { describe, expect, it } from 'vitest';

import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyConstruct } from '../src/construct';

describe('SQS Queue Created', () => {
   it('test construct', () => {
      const app = new App();

      const stack = new MyConstruct(app, 'MyConstruct');
      const template = Template.fromJSON(stack);

      expect(template).toBeDefined();
   });
});

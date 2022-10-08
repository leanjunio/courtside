import { sharedUtilEnvironment } from './shared-util-environment';

describe('sharedUtilEnvironment', () => {
  it('should work', () => {
    expect(sharedUtilEnvironment()).toEqual('shared-util-environment');
  });
});

import { sharedUtilServerExceptions } from './shared-util-server-exceptions';

describe('sharedUtilServerExceptions', () => {
  it('should work', () => {
    expect(sharedUtilServerExceptions()).toEqual(
      'shared-util-server-exceptions'
    );
  });
});

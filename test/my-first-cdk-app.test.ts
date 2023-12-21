import { handler } from '../src';

describe('My first CDK App Tests', () => {
  it('returns name and text', async () => {
    const output = await handler({ name: 'Martijn' });
    expect(output).toStrictEqual('Very good Job Martijn!');
  });

  it('returns no name and text', async () => {
    const output = await handler({ name: '' });
    expect(output).toStrictEqual('Good Job');
  });
});

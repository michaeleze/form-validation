import { validate } from './index';
import { ERRORMESSAGE } from '../constant';

describe('Validation Function', () => {
  it('should return default error message - no password', () => {
    const test = validate('');

    expect(test).toBe(ERRORMESSAGE);
  });

  it ('should check true for min 8 character length password', () => {
    const test = validate('awwrrndind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === '8+ characters');

    expect(charlength?.value).toEqual(true);
  });

  it ('should contain lowercase letter', () => {
    const test = validate('awwrrndind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'lowercase letter');

    expect(charlength?.value).toEqual(true);
  });

  it ('should contain uppercase letter', () => {
    const test = validate('awwrrGdind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'uppercase letter');

    expect(charlength?.value).toEqual(true);
  });


  it ('should contain numbers', () => {
    const test = validate('aww23Gdind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'number');

    expect(charlength?.value).toEqual(true);
  });

  it ('should contain special characters', () => {
    const test = validate('aww23G?<dind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'special character');

    expect(charlength?.value).toEqual(true);
  });
})

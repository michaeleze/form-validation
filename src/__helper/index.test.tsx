import {Validate} from './index';
import {ERRORMESSAGE} from "./index";

describe('Validation Function', () => {
  it('should return default error message - no password', () => {
    const test = Validate.check('');

    expect(test).toBe(ERRORMESSAGE);
  });

  it ('should check true for min 8 character length password', () => {
    const test = Validate.check('awwrrndind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === '8+ characters');

    console.log(charlength);

    expect(charlength?.value).toEqual(true);
  });

  it ('should contain lowercase letter', () => {
    const test = Validate.check('awwrrndind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'lowercase letter');

    console.log(charlength);

    expect(charlength?.value).toEqual(true);
  });

  it ('should contain uppercase letter', () => {
    const test = Validate.check('awwrrGdind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'uppercase letter');

    console.log(charlength);

    expect(charlength?.value).toEqual(true);
  });


  it ('should contain numbers', () => {
    const test = Validate.check('aww23Gdind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'number');

    console.log(charlength);

    expect(charlength?.value).toEqual(true);
  });

  it ('should contain special characters', () => {
    const test = Validate.check('aww23G?<dind');

    const charlength = test?.find((item: {value: boolean, text: string}) => item.text === 'special character');

    console.log(charlength);

    expect(charlength?.value).toEqual(true);
  });
})

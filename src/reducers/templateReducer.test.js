import * as ACTION from '../constants/templateConstant';
import { templateListReducer } from './templateReducer';

describe('template Reducer', () => {
  it('Should return default state', () => {
    const newState = templateListReducer({}, {});
    expect(newState).toEqual({});
  });

  it('Should return new state if receiving type', () => {
    const post = [
      {
        category: ['Health', 'E-commerce', 'Education'],
        created: '2021-06-02T12:24:52.954175',
        description: 'tempor irure fugiat cupidatat mollit',
        link: 'https://formpl.us/templates',
        name: 'fugiat adipiscing mollit',
      },
    ];

    const newState = templateListReducer(
      {},
      {
        type: ACTION.TEMPLATE_SUCCESS,
        payload: post,
      }
    );
    expect(newState.templates).toEqual(post);
  });
});

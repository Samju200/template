import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchTemplate } from './templateAction';

describe('fetchTemplate action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = [
      {
        category: ['Health', 'E-commerce', 'Education'],
        created: '2021-06-02T12:24:52.954175',
        description: 'tempor irure fugiat cupidatat mollit',
        link: 'https://formpl.us/templates',
        name: 'fugiat adipiscing mollit',
      },
      {
        category: ['Health', 'E-commerce', 'Education'],
        created: '2021-06-02T12:24:52.844971',
        description: 'occaecat tempor mollit Lorem eiusmod',
        link: 'https://formpl.us/templates',
        name: 'voluptate aliqua. veniam,',
      },
      {
        category: ['Health', 'E-commerce', 'Education'],
        created: '2021-06-02T12:24:52.795516',
        description: 'Excepteur dolor consectetur voluptate aliqua.',
        link: 'https://formpl.us/templates',
        name: 'exercitation Lorem occaecat',
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchTemplate()).then(() => {
      const newState = store.getState();
      expect(newState.templates).toBe(expectedState);
    });
  });
});

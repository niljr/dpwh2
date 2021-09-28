import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

export const decorators = [
  Story => (
    <Provider store={store}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </Provider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

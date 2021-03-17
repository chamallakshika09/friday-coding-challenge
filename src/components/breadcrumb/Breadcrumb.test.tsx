import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const make = 'make';
  const model = 'model';

  it('should render a single list item for home when an empty array was received as items', () => {
    render(
      <BrowserRouter>
        <Breadcrumb items={[]} />
      </BrowserRouter>
    );

    const listItems = screen.getAllByRole('listitem');

    const homeElement = screen.getByText('Home');

    expect(homeElement).toBeDefined();

    expect(listItems.length).toEqual(1);
  });

  it('should render two list items for home and make when an array with single item was received as items', () => {
    render(
      <BrowserRouter>
        <Breadcrumb items={[make]} />
      </BrowserRouter>
    );

    const listItems = screen.getAllByRole('listitem');

    const homeElement = screen.getByText('Home');
    const makeElement = screen.getByText(make);

    expect(homeElement).toBeDefined();
    expect(makeElement).toBeDefined();

    expect(listItems.length).toEqual(2);
  });

  it('should render three list items for home, make and model when an array with two items was received as items', () => {
    render(
      <BrowserRouter>
        <Breadcrumb items={[make, model]} />
      </BrowserRouter>
    );

    const listItems = screen.getAllByRole('listitem');

    const homeElement = screen.getByText('Home');
    const makeElement = screen.getByText(make);
    const modelElement = screen.getByText(model);

    expect(homeElement).toBeDefined();
    expect(makeElement).toBeDefined();
    expect(modelElement).toBeDefined();
    expect(listItems.length).toEqual(3);
  });
});

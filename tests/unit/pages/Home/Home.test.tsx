import { render, screen } from '@testing-library/react';
import Home from '../../../../src/pages/Home/Home';

jest.mock('../../../../src/pages/Home/Home.module.scss', () => ({
  home: 'home-mock-class'
}));

describe('Composant Home', () => {
  it('affiche "Test"', () => {
    render(<Home />);
    const titre = screen.getByRole('heading', { level: 1 });
    expect(titre).toBeInTheDocument();
    expect(titre).toHaveTextContent('Test');
  });

  it('contient une div avec une classe', () => {
    const { container } = render(<Home />);
    const divElement = container.querySelector('div');
    expect(divElement).not.toBeNull();
    expect(divElement?.className).toContain('home-mock-class');
  });
});
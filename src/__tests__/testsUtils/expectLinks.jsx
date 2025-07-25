import { screen } from '@testing-library/react';

export const linksEN = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
export const linksPL = ['Strona główna', 'O mnie', 'Umiejętności', 'Projekty', 'Kontakt'];

export const expectLinks = (links) => {
  links.forEach(link => {
    expect(screen.getByRole('link', { name: link })).toBeInTheDocument();
  });
};
import { ReactElement } from 'react';
import css from './pages.module.css'

export function HomePage(): ReactElement {
  return <section className={css.home}>hola desde home</section>;
}

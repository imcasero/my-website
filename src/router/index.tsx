import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderComponent } from '../components/header/header.component';
import { HomePage } from '../pages/home.page';
import { ProjectsPage } from '../pages/projects.page';
import { CarrerPage } from '../pages/carrer.page';

export default function AppRouter(): ReactElement {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/carrer" element={<CarrerPage />} />
      </Routes>
    </>
  );
}

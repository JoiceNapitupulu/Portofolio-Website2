import { useState } from 'react';
import { PortfolioLanding } from './components/PortfolioLanding';
import { PortfolioContent } from './components/PortfolioContent';
import { ProjectDetail } from './components/ProjectDetail';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <CustomCursor />
      {!isOpen ? (
        <PortfolioLanding onOpen={() => setIsOpen(true)} />
      ) : selectedProject ? (
        <ProjectDetail projectId={selectedProject} onBack={handleBackToPortfolio} />
      ) : (
        <PortfolioContent onProjectClick={handleProjectClick} />
      )}
    </div>
  );
}
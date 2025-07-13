
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MainContent from '@/components/MainContent';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <MainContent activeSection={activeSection} onSectionChange={setActiveSection} />
    </div>
  );
};

export default Index;

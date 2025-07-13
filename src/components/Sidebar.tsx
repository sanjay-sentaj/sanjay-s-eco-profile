
import { useState } from 'react';
import { 
  Home, 
  User, 
  GraduationCap, 
  Wrench, 
  FolderOpen, 
  FileText, 
  Award, 
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ChevronDown,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'skills', name: 'Skills', icon: Wrench },
    { id: 'certifications', name: 'Certifications', icon: Award },
    { id: 'projects', name: 'Projects', icon: FolderOpen },
    { id: 'publications', name: 'Publications', icon: FileText },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-[#1a1d29] text-white flex flex-col">
      {/* Profile Section */}
      <div className="p-8 text-center border-b border-gray-700">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-600 flex items-center justify-center">
          <User className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold mb-1">Sanjay S</h2>
        <p className="text-gray-400 text-sm">Biotech Student</p>
        <p className="text-gray-400 text-xs mt-1">Certifications in Bioenergy & Environmental Technology</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/sanjay-s-sentaj" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:sanjaysenthil62@gmail.com" 
             className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a href="tel:+919080553408" 
             className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-primary transition-colors">
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                isActive ? 'bg-primary text-white border-r-2 border-primary' : 'text-gray-300'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </button>
          );
        })}
        
        {/* Dropdown Example */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-700 transition-colors text-gray-300"
          >
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-3" />
              <span>Resume</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="bg-gray-800 border-l-2 border-gray-600">
              <button className="w-full flex items-center px-10 py-2 text-left hover:bg-gray-700 transition-colors text-gray-400 text-sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Info */}
      <div className="p-6 border-t border-gray-700">
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-xs">sanjaysenthil62@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91 9080553408</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Anakaputhur, Chennai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

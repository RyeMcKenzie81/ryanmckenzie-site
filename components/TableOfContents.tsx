'use client';

import { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
  number: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="pl-6 pr-4">
      <h2 className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-4 uppercase tracking-wider">On this page</h2>
      <ol className="space-y-2 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`flex items-start gap-3 py-1 transition-all duration-200 hover:text-gray-900 ${
                activeSection === section.id 
                  ? 'text-gray-900 font-medium border-l-2 border-cyan-500 pl-3 -ml-3 bg-gradient-to-r from-cyan-50 to-pink-50 rounded-r-md' 
                  : 'text-gray-500 hover:pl-1 hover:text-cyan-600'
              }`}
            >
              <span className={`flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 ${
                parseInt(section.number) % 2 === 0 
                  ? 'bg-pink-500 hover:shadow-pink-300' 
                  : 'bg-cyan-500 hover:shadow-cyan-300'
              }`}>
                {section.number}
              </span>
              <span className="leading-relaxed">{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
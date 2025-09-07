import React from 'react';

interface SectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ number, title, children }: SectionProps) {
  return (
    <section className="mb-16 scroll-mt-24">
      <h2 className="flex items-center text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
        {number && <span className="section-number mr-4">{number}</span>}
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}

export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="info-box">
      {children}
    </div>
  );
}

export function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="warning-box">
      {children}
    </div>
  );
}

export function SuccessBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="success-box">
      {children}
    </div>
  );
}

export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-6">
      <code className="text-sm font-mono">{children}</code>
    </pre>
  );
}

export function StepList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="space-y-4 my-8">
      {children}
    </ol>
  );
}

export function Step({ number, title, children }: { number: number; title: string; children?: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
        {number}
      </span>
      <div className="flex-1">
        <p className="font-semibold text-gray-900 mb-2">{title}</p>
        {children && <div className="text-gray-600">{children}</div>}
      </div>
    </li>
  );
}

export function NodeType({ type, color, children }: { type: string; color: string; children: React.ReactNode }) {
  const colorClasses = {
    green: 'border-green-500 bg-green-50',
    blue: 'border-blue-500 bg-blue-50',
    purple: 'border-purple-500 bg-purple-50',
    yellow: 'border-yellow-500 bg-yellow-50',
    red: 'border-red-500 bg-red-50',
    gray: 'border-gray-500 bg-gray-50',
  };

  return (
    <div className={`border-l-4 ${colorClasses[color as keyof typeof colorClasses]} p-6 rounded-r-lg my-4`}>
      <p className="font-semibold text-gray-900 mb-2">{type}:</p>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

export function Recipe({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="section-card my-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="section-number">{String(number).padStart(2, '0')}</span>
        <h3 className="text-2xl font-bold text-gray-900">Recipe #{number} — {title}</h3>
      </div>
      {children}
    </div>
  );
}

export function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-100 pb-6 mb-6">
      <p className="font-semibold text-gray-900 mb-2">Q: {question}</p>
      <p className="text-gray-700 ml-4">A: {answer}</p>
    </div>
  );
}

export function Checklist({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-3 my-6">
      {children}
    </ul>
  );
}

export function ChecklistItem({ checked = false, children }: { checked?: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-0.5">
        {checked ? '✅' : '☐'}
      </span>
      <span className={checked ? 'text-gray-700' : 'text-gray-900'}>{children}</span>
    </li>
  );
}
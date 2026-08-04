import React, { useState, useEffect } from 'react';
import { Building, BookOpen, ArrowLeft, Terminal, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { companyStaticQuestions } from '../data/companyQuestions';

interface Company {
  id: string;
  name: string;
  description: string;
  color: string;
}

const COMPANIES: Company[] = [
  { id: 'tcs', name: 'TCS NQT', description: 'Tata Consultancy Services National Qualifier Test preparation with actual previous year questions.', color: 'border-blue-200 hover:border-blue-500 hover:bg-blue-50' },
  { id: 'infosys', name: 'Infosys', description: 'Infosys Certification and freshers recruitment test preparation.', color: 'border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50' },
  { id: 'wipro', name: 'Wipro', description: 'Wipro Elite National Talent Hunt (NTH) practice tests.', color: 'border-purple-200 hover:border-purple-500 hover:bg-purple-50' },
  { id: 'cognizant', name: 'Cognizant', description: 'Cognizant GenC programming and aptitude questions.', color: 'border-green-200 hover:border-green-500 hover:bg-green-50' },
];

export function CompanyTests({ user }: { user: any }) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [questions, setQuestions] = useState<{ title: string; body: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const fetchTCSQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://raw.githubusercontent.com/Arjunpolen/TCS-NQT-PYQ-QUESTIONS/main/questions.md");
      if (!res.ok) throw new Error("Failed to fetch questions");
      const text = await res.text();
      
      const qSections = text.split("## Q").slice(1);
      const parsed = qSections.map(section => {
        const lines = section.split("\n");
        const titleLine = lines[0];
        const title = "Q" + titleLine.trim();
        const body = section.substring(titleLine.length).trim();
        return { title, body };
      });
      setQuestions(parsed);
    } catch (err: any) {
      setError(err.message || "Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

    const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setExpandedIndex(null);
    if (company.id === 'tcs') {
      fetchTCSQuestions();
    } else if (companyStaticQuestions[company.id]) {
      setQuestions(companyStaticQuestions[company.id]);
    } else {
      setQuestions([]);
    }
  };

  if (!selectedCompany) {
    return (
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Specific Practice Tests</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Prepare for specific recruitment drives with previous year questions (PYQs) and patterns from top IT companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPANIES.map((company) => (
            <button
              key={company.id}
              onClick={() => handleCompanySelect(company)}
              className={`bg-white p-8 rounded-xl shadow-sm border-2 transition-all text-left group flex items-start justify-between ${company.color}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-sm">{company.description}</p>
                {company.id === 'tcs' && (
                  <span className="inline-block mt-4 text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">Live Data available</span>
                )}
              </div>
              <Building className="w-10 h-10 text-gray-400 group-hover:text-indigo-600 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => setSelectedCompany(null)}
          className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Companies
        </button>
        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          {selectedCompany.name} Practice
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {selectedCompany.name} Previous Year Questions
          </h2>
          {questions.length > 0 && (
            <span className="text-sm text-gray-500">{questions.length} Questions loaded</span>
          )}
        </div>

        <div className="p-6">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-500">Fetching latest questions from GitHub...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5" />
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && questions.length === 0 && selectedCompany.id !== 'tcs' && (
            <div className="text-center py-12">
              <Terminal className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-500">We are currently gathering verified questions for {selectedCompany.name}. Check back later!</p>
            </div>
          )}

          {!loading && questions.length > 0 && (
            <div className="space-y-4">
              {questions.map((q, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">{q.title}</span>
                    <span className="text-indigo-600 text-sm font-medium">
                      {expandedIndex === idx ? "Hide Details" : "Solve Question"}
                    </span>
                  </button>
                  {expandedIndex === idx && (
                    <div className="p-6 prose prose-indigo max-w-none prose-pre:bg-gray-900 prose-pre:text-gray-100">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {q.body}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

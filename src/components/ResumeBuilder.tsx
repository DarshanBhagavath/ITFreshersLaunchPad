import React, { useState, useRef } from "react";
import Markdown from "react-markdown";
import { Download, FileText, FileDown, Loader2, CheckCircle2, Edit2, Save, Type, Printer } from "lucide-react";
import { Job, UserDetails } from "../types";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { saveAs } from "file-saver";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

interface ResumeBuilderProps {
  job: Job;
  userDetails: UserDetails;
  onClose: () => void;
}

export function ResumeBuilder({ job, userDetails, onClose }: ResumeBuilderProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isReformatting, setIsReformatting] = useState(false);
  const [generatedResume, setGeneratedResume] = useState<string | null>(null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editableResume, setEditableResume] = useState<string>("");
  
  type ThemeType = 'modern' | 'classic' | 'minimalist';
  const [theme, setTheme] = useState<ThemeType>('modern');

  const contentRef = useRef<HTMLDivElement>(null);

  const themes = {
    modern: "prose prose-indigo font-sans max-w-none text-sm text-gray-800 prose-headings:font-bold prose-headings:bg-indigo-50 prose-headings:text-indigo-900 prose-headings:px-3 prose-headings:py-1.5 prose-headings:rounded-md prose-headings:border-l-4 prose-headings:border-indigo-600 prose-h1:text-2xl prose-h2:text-xl",
    classic: "prose prose-stone font-serif max-w-none text-sm text-gray-900 prose-headings:font-bold prose-headings:bg-stone-100 prose-headings:text-stone-900 prose-headings:px-3 prose-headings:py-1.5 prose-headings:border-b-2 prose-headings:border-stone-800",
    minimalist: "prose prose-slate font-mono max-w-none text-xs text-gray-700 leading-relaxed prose-headings:font-bold prose-headings:bg-slate-100 prose-headings:text-slate-900 prose-headings:px-2 prose-headings:py-1 prose-headings:rounded uppercase tracking-widest",
  };

  const stripTags = (text: string) => {
    if (!text) return "";
    return text
      .replace(/<[^>]*>?/gm, '') // Remove HTML tags
      .replace(/[#_*~`]/g, '') // Remove Markdown formatting chars
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
      .replace(/^\s*>\s?/gm, '') // Remove blockquotes
      .trim();
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedResume(null);
    setIsEditing(false);

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userDetails: userDetails,
          jobDescription: `${job.title} at ${job.company} (${job.location}) - ${job.description}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate resume");
      }

      const data = await response.json();
      setGeneratedResume(data.resumeMarkdown);
      setEditableResume(stripTags(data.resumeMarkdown));
    } catch (error) {
      console.error(error);
      alert("Error generating resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleEdit = async () => {
    if (isEditing) {
      // Saving edits
      setIsReformatting(true);
      try {
        const response = await fetch("/api/reformat-resume", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            originalMarkdown: generatedResume,
            editedText: editableResume,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to reformat resume");
        }

        const data = await response.json();
        setGeneratedResume(data.resumeMarkdown);
      } catch (error) {
        console.error(error);
        alert("Error saving edits. Storing as plain text.");
        setGeneratedResume(editableResume);
      } finally {
        setIsReformatting(false);
        setIsEditing(false);
      }
    } else {
      setEditableResume(stripTags(generatedResume || ""));
      setIsEditing(true);
    }
  };

  const downloadPDF = async () => {
    const element = document.getElementById("resume-preview-content");
    if (!element) return;
    
    // Save edits if currently editing
    const wasEditing = isEditing;
    if (wasEditing) {
      setGeneratedResume(editableResume);
      setIsEditing(false);
    }
    
    setTimeout(async () => {
      try {
        const dataUrl = await toPng(element, { quality: 1, pixelRatio: 2 });
        const pdf = new jsPDF("p", "mm", "a4");
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        const imgProps = pdf.getImageProperties(dataUrl);
        const imgHeightInMm = (imgProps.height * pdfWidth) / imgProps.width;
        
        let heightLeft = imgHeightInMm;
        let position = 0;
        
        // Add first page
        pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, imgHeightInMm);
        heightLeft -= pdfHeight;
        
        // Add subsequent pages if content overflows
        while (heightLeft >= 0) {
          position = heightLeft - imgHeightInMm; // Shift image up
          pdf.addPage();
          pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, imgHeightInMm);
          heightLeft -= pdfHeight;
        }
        
        pdf.save(`${userDetails.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
      } catch (err) {
        console.error("PDF generation failed:", err);
      } finally {
        if (wasEditing) setIsEditing(true);
      }
    }, 100);
  };

  const downloadDocx = () => {
    const currentResumeText = isEditing ? editableResume : generatedResume;
    if (!currentResumeText) return;

    const parseInlineMarkdown = (text: string): TextRun[] => {
      const runs: TextRun[] = [];
      const regex = /(\*\*.*?\*\*|__.*?__|\*.*?\*|_.*?_)/g;
      let lastIndex = 0;
      
      let match;
      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          const plainText = text.substring(lastIndex, match.index).replace(/(\*\*|__|\*|_|--)/g, '');
          if (plainText) runs.push(new TextRun({ text: plainText }));
        }
        const matchedText = match[0];
        if (matchedText.startsWith('**') || matchedText.startsWith('__')) {
          runs.push(new TextRun({ text: matchedText.substring(2, matchedText.length - 2), bold: true }));
        } else {
          runs.push(new TextRun({ text: matchedText.substring(1, matchedText.length - 1), italics: true }));
        }
        lastIndex = regex.lastIndex;
      }
      
      if (lastIndex < text.length) {
        const plainText = text.substring(lastIndex).replace(/(\*\*|__|\*|_|--)/g, '');
        if (plainText) runs.push(new TextRun({ text: plainText }));
      }
      
      if (runs.length === 0) {
         const plainText = text.replace(/(\*\*|__|\*|_|--)/g, '');
         if (plainText.trim().length > 0) runs.push(new TextRun({ text: plainText }));
      }
      
      return runs;
    };

    const lines = currentResumeText.split(/\r?\n/);
    const paragraphs = lines.map(line => {
      const trimmedLine = line.trim();
      if (/^[-*_]{2,}$/.test(trimmedLine) || trimmedLine.startsWith("--")) {
        return new Paragraph({ text: "" });
      } else if (line.startsWith("# ")) {
        return new Paragraph({
          children: parseInlineMarkdown(line.substring(2)),
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 100 }
        });
      } else if (line.startsWith("## ")) {
        return new Paragraph({
          children: parseInlineMarkdown(line.substring(3)),
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 150, after: 100 }
        });
      } else if (line.startsWith("### ")) {
        return new Paragraph({
          children: parseInlineMarkdown(line.substring(4)),
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 100, after: 50 }
        });
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        return new Paragraph({
          children: parseInlineMarkdown(line.substring(2)),
          bullet: { level: 0 }
        });
      } else if (trimmedLine === "") {
        return new Paragraph({ text: "" });
      } else {
        return new Paragraph({
          children: parseInlineMarkdown(line),
          spacing: { after: 50 }
        });
      }
    });

    const doc = new Document({
      sections: [{
        properties: {},
        children: paragraphs,
      }],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${userDetails.fullName.replace(/\s+/g, '_')}_Resume.docx`);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-hidden">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col md:flex-row shadow-xl overflow-hidden">
        
        {/* User Details Review Section */}
        <div className="w-full md:w-1/4 p-6 md:p-8 border-r border-gray-100 overflow-y-auto bg-white flex-shrink-0 md:h-full hidden md:block">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Tailor Resume</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 md:hidden">&times;</button>
          </div>
          
          <div className="mb-6 p-4 bg-indigo-50 text-indigo-900 rounded-lg text-sm border border-indigo-100">
            <p className="font-semibold text-xs text-indigo-600 uppercase tracking-wider mb-1">Target Job</p>
            <p className="font-bold">{job.title}</p>
            <p className="opacity-80">{job.company}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 border-b pb-2">Your Profile</h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Full Name</p>
                <p className="font-medium text-gray-900">{userDetails.fullName}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Contact</p>
                <p className="font-medium text-gray-900">{userDetails.emailId}</p>
                <p className="font-medium text-gray-900">{userDetails.phoneNumber}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Education</p>
                <p className="font-medium text-gray-900">{userDetails.highestEducation}</p>
                <p className="text-gray-700">{userDetails.stream}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Address</p>
                <p className="font-medium text-gray-900">{userDetails.address}</p>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full mt-8 bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <FileText className="w-5 h-5" />}
              {isGenerating ? "Crafting..." : "Generate Resume"}
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-full md:w-3/4 bg-gray-50 p-6 md:p-8 flex flex-col min-h-0 h-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 flex-shrink-0">
            <h3 className="text-xl font-bold text-gray-900">Preview & Customize</h3>
            
            <div className="flex items-center gap-2 flex-wrap">
              {!generatedResume && (
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="md:hidden flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium"
                >
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Generate"}
                </button>
              )}
              {generatedResume && (
                <>
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
                    <button 
                      onClick={() => setTheme('modern')}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${theme === 'modern' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      Modern
                    </button>
                    <button 
                      onClick={() => setTheme('classic')}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${theme === 'classic' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      Classic
                    </button>
                    <button 
                      onClick={() => setTheme('minimalist')}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${theme === 'minimalist' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      Minimal
                    </button>
                  </div>
                  
                  <button 
                    onClick={toggleEdit}
                    disabled={isReformatting}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700 transition disabled:opacity-50"
                  >
                    {isReformatting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
                    ) : isEditing ? (
                      <><Save className="w-4 h-4" /> Save Edits</>
                    ) : (
                      <><Edit2 className="w-4 h-4" /> Edit Content</>
                    )}
                  </button>
                </>
              )}
              <button onClick={onClose} className="text-gray-500 hover:text-gray-800 p-2 bg-white rounded-lg border border-gray-200">&times;</button>
            </div>
          </div>
          
          <div className="flex-grow min-h-0 bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-8 overflow-y-auto">
            {generatedResume ? (
              isEditing ? (
                <textarea
                  value={editableResume}
                  onChange={(e) => setEditableResume(e.target.value)}
                  className="w-full h-full min-h-[500px] p-2 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none font-mono text-sm resize-none"
                  placeholder="Edit your resume content in Markdown..."
                />
              ) : (
                <div className="w-full flex justify-center bg-white p-4 sm:p-8" style={{ minHeight: "100%" }}>
                  <div ref={contentRef} id="resume-preview-content" className={`${themes[theme]} mx-auto w-full max-w-[800px] bg-white`}>
                    <Markdown>{generatedResume}</Markdown>
                  </div>
                </div>
              )
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center space-y-4 py-20">
                <FileText className="w-16 h-16 opacity-20" />
                <p>Click Generate to create an AI-tailored resume based on your profile.</p>
              </div>
            )}
          </div>

          {generatedResume && !isEditing && (
            <div className="mt-6 flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button onClick={downloadPDF} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-700 font-medium rounded-lg hover:bg-red-100 transition border border-red-200">
                <Download className="w-5 h-5" /> Download PDF
              </button>
              <button onClick={downloadDocx} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition border border-blue-200">
                <FileDown className="w-5 h-5" /> Download DOCX
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}


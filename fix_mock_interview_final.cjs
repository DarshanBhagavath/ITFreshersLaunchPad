const fs = require('fs');

let content = fs.readFileSync('src/components/MockInterview.tsx', 'utf-8');

const newComponentCode = `function ActiveInterview({ sectionTitle, onClose }: ActiveInterviewProps) {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState("");
  
  const recognitionRef = useRef<any>(null);
  const existingTextRef = useRef("");
  const fetchedRef = useRef(false);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        let currentSessionTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentSessionTranscript += event.results[i][0].transcript;
        }
        
        const base = existingTextRef.current;
        const newText = base + (base && !base.endsWith(' ') && currentSessionTranscript ? ' ' : '') + currentSessionTranscript;
        setTranscript(newText);
      };

      recognition.onerror = (event: any) => {
        if (event.error === 'no-speech') return;
        console.error("Speech recognition error", event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
    
    if (!fetchedRef.current) {
      fetchedRef.current = true;
      fetchQuestion();
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      window.speechSynthesis.cancel();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchQuestion = async () => {
    setLoading(true);
    setFeedback("");
    setTranscript("");
    existingTextRef.current = "";
    
    try {
      // Capture the current value of previousQuestions using the state updater function's closure bypass,
      // or just rely on the latest render state. To be safe, we can use a ref or just rely on the latest state since fetchQuestion is recreated.
      // Wait, inside fetchQuestion we use \`previousQuestions\` from the render scope.
      const res = await fetch("/api/generate-interview-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, previousQuestions })
      });
      const data = await res.json();
      
      if (data.question) {
        setQuestion(data.question);
        setPreviousQuestions(prev => [...prev, data.question]);
        speakText(data.question);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const speakText = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleTranscriptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(e.target.value);
  };

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      if (recognitionRef.current) {
        try {
          existingTextRef.current = transcript;
          recognitionRef.current.start();
        } catch (e) {
          console.error(e);
        }
      } else {
        alert("Speech recognition is not supported in this browser. Please type your answer.");
      }
    }
  };

  const submitAnswer = async () => {
    if (!transcript.trim()) return;
    
    setLoading(true);
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    }
    
    try {
      const res = await fetch("/api/evaluate-interview-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionTitle, question, answer: transcript })
      });
      const data = await res.json();
      
      if (data.feedback) {
        setFeedback(data.feedback);
        speakText("Here is my feedback. " + data.feedback);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-indigo-100 p-6 my-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Active Interview Session
          </span>
          <h3 className="text-xl font-bold text-gray-900">{sectionTitle}</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Exit
        </button>
      </div>

      <div className="space-y-6">
        {/* Question Area */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-700 flex items-center gap-2">
              <Users className="w-4 h-4" /> Interviewer
            </h4>
            {question && (
              <button 
                onClick={() => speakText(question)}
                className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center gap-1"
                disabled={loading}
              >
                <Play className="w-4 h-4" /> Replay
              </button>
            )}
          </div>
          
          {loading && !question ? (
            <div className="flex items-center gap-2 text-gray-500 py-4">
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating question...
            </div>
          ) : (
            <p className="text-lg text-gray-900">{question}</p>
          )}
        </div>

        {/* Answer Area */}
        {question && !feedback && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-700">Your Answer</h4>
              <button
                onClick={toggleRecording}
                disabled={loading}
                className={\`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors \${
                  isRecording 
                    ? "bg-red-50 text-red-600 hover:bg-red-100" 
                    : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                }\`}
              >
                {isRecording ? (
                  <><StopCircle className="w-4 h-4" /> Stop Recording</>
                ) : (
                  <><Mic className="w-4 h-4" /> Start Speaking</>
                )}
              </button>
            </div>
            
            <textarea
              value={transcript}
              onChange={handleTranscriptChange}
              placeholder="Your answer will appear here as you speak, or you can type it manually..."
              className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
              disabled={loading}
            />
            
            <div className="flex justify-end">
              <button
                onClick={submitAnswer}
                disabled={!transcript.trim() || loading}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading && transcript ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                Complete Answer
              </button>
            </div>
          </div>
        )}

        {/* Feedback Area */}
        {feedback && (
          <div className="bg-green-50 rounded-lg p-6 border border-green-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Feedback
            </h4>
            <p className="text-gray-800 leading-relaxed mb-6">{feedback}</p>
            
            <div className="flex justify-end">
              <button
                onClick={fetchQuestion}
                disabled={loading}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Next Question
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;

const startIndex = content.indexOf('function ActiveInterview(');
const endIndex = content.indexOf('export function MockInterview() {');
if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newComponentCode + '\n\n' + content.substring(endIndex);
  fs.writeFileSync('src/components/MockInterview.tsx', content);
  console.log("Successfully replaced ActiveInterview component.");
} else {
  console.error("Could not find ActiveInterview boundaries.");
}


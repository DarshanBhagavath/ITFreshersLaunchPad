const fs = require('fs');
let content = fs.readFileSync('src/components/InterviewQuiz.tsx', 'utf8');

const bad = `          ))}
        </div>
      </div>
    );
  }`;

const good = `          ))}
          </div>
        )}
      </div>
    );
  }`;

content = content.replace(bad, good);

fs.writeFileSync('src/components/InterviewQuiz.tsx', content);

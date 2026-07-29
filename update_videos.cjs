const fs = require('fs');

let content = fs.readFileSync('src/components/TrainingVideos.tsx', 'utf-8');

// Insert interfaces at the top after imports
const interfaces = `
interface Video {
  id: string;
  title: string;
  description: string;
  tag?: string;
}

interface VideoCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  videos: Video[];
}

const VIDEO_CATEGORIES: VideoCategory[] = [
`;

content = content.replace("const VIDEO_CATEGORIES = [", interfaces);

fs.writeFileSync('src/components/TrainingVideos.tsx', content);

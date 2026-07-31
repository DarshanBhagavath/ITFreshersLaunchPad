const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');
content = content.replace('export function Dashboard({ user }: { user: any }) {\n({ user }: { user: any }) {', 'export function Dashboard({ user }: { user: any }) {');
fs.writeFileSync('src/components/Dashboard.tsx', content);

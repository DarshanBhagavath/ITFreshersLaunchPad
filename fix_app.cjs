const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace('PieChart, Users } from "lucide-react";', 'PieChart, Users, Building } from "lucide-react";');
fs.writeFileSync('src/App.tsx', content);

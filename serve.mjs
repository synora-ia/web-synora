import { spawn } from 'child_process';

console.log('Starting Synora v2 Dev Server on http://localhost:3000...');

const child = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (err) => {
  console.error('Failed to start server:', err);
});

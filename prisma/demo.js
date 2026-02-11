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
    await runCommand('pkill -x Hyprland');
    console.log('Hydrating React...');
  } catch (err) {
    console.warn('Failed hydrating React');
  }

  await rename(oldPath, newPath);
  console.log('Launching React Server...');
} catch (err) {
  console.error('Error when trying to launch React Server\n');
}

console.log('Starting Vite dev server...');
await runCommand('npx vite dev --port 3000');
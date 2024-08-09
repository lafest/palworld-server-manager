import { exec } from 'child_process';

export const sh = async (cmd: string) => {
  return new Promise(function (resolve: ({ stdout, stderr }: { stdout: string; stderr: string}) => void, reject) {
    exec(cmd, (err, stdout: string, stderr: string) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}
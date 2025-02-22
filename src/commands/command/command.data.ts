import { CommandDTO } from './command.dto';

export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
export type PLATFORM = 'Windows' | 'Linux' | 'MacOS';
export const COMMANDS: CommandDTO[] = [
  { id: 1, name: 'cls', description: 'clear terminal', platform: 'Windows' },
  {
    id: 2,
    name: 'ls',
    description: 'list directory contents',
    platform: 'Linux',
  },
  { id: 3, name: 'cd', description: 'change directory', platform: 'MacOS' },
  {
    id: 4,
    name: 'mkdir',
    description: 'make a new directory',
    platform: 'Linux',
  },
  {
    id: 5,
    name: 'rm',
    description: 'remove files or directories',
    platform: 'Linux',
  },
  {
    id: 6,
    name: 'cp',
    description: 'copy files or directories',
    platform: 'MacOS',
  },
  {
    id: 7,
    name: 'mv',
    description: 'move or rename files or directories',
    platform: 'Linux',
  },
  {
    id: 8,
    name: 'touch',
    description: 'create an empty file',
    platform: 'MacOS',
  },
  {
    id: 9,
    name: 'grep',
    description: 'search text using patterns',
    platform: 'Linux',
  },
  {
    id: 10,
    name: 'man',
    description: 'display manual page for a command',
    platform: 'Linux',
  },
];

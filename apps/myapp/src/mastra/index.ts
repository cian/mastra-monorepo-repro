import path from 'path';
import { Mastra } from '@mastra/core/mastra';
import { weatherAgent } from './agents/weather-agent';

import { config } from 'dotenv';
config({ path: path.resolve(__dirname, '../../../../.env'), quiet: true });

export const mastra = new Mastra({
  agents: { weatherAgent },
  bundler: {
  },
});

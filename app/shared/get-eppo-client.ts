'use server'; // directive needed for server-side rendering

import { init } from '@eppo/node-server-sdk';

const eppoClientPromise = init({
  apiKey: process.env.EPPO_SDK_KEY!,
  assignmentLogger: {
    logAssignment(assignment) {
      console.log('TODO: log ', assignment);
    },
  },
}).catch((err) => {
  console.error('Error initializing Eppo SDK:', err);
});

export default async function getEppoClient() {
  return await eppoClientPromise;
}
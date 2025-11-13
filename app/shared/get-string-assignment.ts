'use server'; // directive needed for server-side rendering

import getEppoClient from './get-eppo-client';

export default async function getStringAssignment(
  flagKey: string,
  subjectKey: string,
  subjectAttributes: Record<string, string> = {},
  defaultValue: string = ''
): Promise<string> {
  const eppoClient = await getEppoClient();
  return (
    eppoClient?.getStringAssignment(
      flagKey,
      subjectKey,
      subjectAttributes,
      defaultValue
    ) ?? defaultValue
  );
}
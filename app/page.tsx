import OfferExperiment from './OfferExperiment';
import getStringAssignment from './shared/get-string-assignment';

export const experimental_ppr = true

export default async function Home() {
  const flagKey = 'investigate-eppo-server-islands';
  const subjectKey = 'test-subject';
  const offerVariation = await getStringAssignment(flagKey, subjectKey);

  return (
    <main>
      <div>
        <p>Some static stuff here...</p>
        <div>
          <OfferExperiment variation={offerVariation} />
        </div>
      </div>
    </main>
  );
}
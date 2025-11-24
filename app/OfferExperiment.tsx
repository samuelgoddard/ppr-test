import { headers } from 'next/headers';

import type { FunctionComponent } from 'react';

interface OfferExperimentProps {
  variation: string;
}

export const OfferExperiment: FunctionComponent<OfferExperimentProps> = ({
  variation,
}) => (
  <>
    {JSON.stringify(headers())}
    <h1>
      {variation === 'control' && <p>Control Variation</p>}
      {variation === 'test' && <p>Test Variation</p>}
      {!variation && <p>No Variation</p>}
    </h1>
  </>
);

export default OfferExperiment;
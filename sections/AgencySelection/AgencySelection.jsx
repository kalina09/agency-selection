import Image from 'next/image';
import { AgencyMain } from '../../collections/AgencyMain/AgencyMain';
import { AgencyHeaderWrapper } from '../../components/AgencyHeaderWrapper/AgencyHeaderWrapper';

import { StyledAgencySelection } from './elements';

const agencyImageProps = {
  image: { src: '/img/video.png', alt: '', width: 1000, height: 1680 },
  title: 'Agency procurement, outsourced.',
  description: 'Start the process here',
  ctaText: 'Start',
};

const AgencySelection = ({}) => {
  return (
    <StyledAgencySelection>
      <AgencyHeaderWrapper />
      <AgencyMain {...agencyImageProps} />
    </StyledAgencySelection>
  );
};

export { AgencySelection };

import {
  StyledSectionBigHeading,
  StyledSectionSubheading,
} from '../Typography/elements';
import { StyledAgencyHeaderWrapper } from './elements';

const AgencyHeaderWrapper = ({}) => {
  return (
    <StyledAgencyHeaderWrapper>
      <StyledSectionBigHeading>
        Managed agency selection
      </StyledSectionBigHeading>
      <StyledSectionSubheading>
        Strenghten your onboarding process
      </StyledSectionSubheading>
    </StyledAgencyHeaderWrapper>
  );
};

export { AgencyHeaderWrapper };

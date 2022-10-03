import { SectionBigHeading } from "../Typography/SectionBigHeading";
import { SectionSubheading } from "../Typography/SectionSubheading";
import { StyledAgencyHeaderWrapper } from "./elements";

const AgencyHeaderWrapper = ({}) => {
  return (
    <StyledAgencyHeaderWrapper>
      <SectionBigHeading>Managed agency selection</SectionBigHeading>
      <SectionSubheading>Strenghten your onboarding process</SectionSubheading>
    </StyledAgencyHeaderWrapper>
  );
};

export { AgencyHeaderWrapper };

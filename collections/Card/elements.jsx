import styled from "styled-components";
import { SectionHeading } from "../../components/Typography/SectionHeading";

// Styled elements for the Card go here
const StyledCardTitle = styled((props) => <SectionHeading {...props} />)`
  font-size: 1.2rem;
  line-height: 2rem;
`;

export { StyledCardTitle };

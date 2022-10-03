// The Card to be exported goes here
import { SectionParagraph } from "../../components/Typography/SectionParagraph";
import { SectionHeading } from "../../components/Typography/SectionHeading";

import { CardDescription } from "../../components/CardDescription/CardDescription";
import { Icon } from "../../components/Icon/Icon";
import { StyledCardTitle } from "./elements";

const Card = (props) => {
  return (
    <>
      {/* tuka she e icona */}
      <p>{props.icon}</p>
      <div>
        <StyledCardTitle>{props.title}</StyledCardTitle>
        <SectionParagraph>{props.text}</SectionParagraph>
      </div>
    </>
  );
};

export { Card };

import { Card } from "../../collections/Card/Card";
import { StyledAgencyCardsWrapper } from "./elements";

const AgencyCardsWrapper = (props) => {
  return (
    <div>
      <StyledAgencyCardsWrapper>
        <Card
          icon={props.info[0].icon}
          title={props.info[0].title}
          text={props.info[0].text}
        />
        <Card
          icon={props.info[1].icon}
          title={props.info[1].title}
          text={props.info[1].text}
        />
        <Card
          icon={props.info[2].icon}
          title={props.info[2].title}
          text={props.info[2].text}
        />
      </StyledAgencyCardsWrapper>
    </div>
  );
};

export { AgencyCardsWrapper };

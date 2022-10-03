import { StyledSectionContainer } from "../../components/Containers/SectionContainer/elements";
import { StyledAgencyImageWrapper } from "./elements";
import Image from "next/image";
import { AgencyCardsWrapper } from "../../components/AgencyCardsWrapper/AgencyCardsWrapper";

const AgencyMain = ({ image }) => {
  const agencyInformation = [
    {
      id: "a1",
      icon: "",
      title: "Brief",
      text: "Complete brief writing or simple guidance on what to include, we've got you covered.",
    },
    {
      id: "a2",
      icon: "",
      title: "Search",
      text: "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
    },
    {
      icon: "",
      id: "a3",
      title: "Pitch",
      text: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    },
  ];

  return (
    <StyledSectionContainer>
      <StyledAgencyImageWrapper>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledAgencyImageWrapper>
      <AgencyCardsWrapper info={agencyInformation} />
    </StyledSectionContainer>
  );
};

export { AgencyMain };

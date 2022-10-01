import { StyledSectionContainer } from '../../components/Containers/SectionContainer/elements';
import { StyledAgencyImageWrapper } from './elements';
import Image from 'next/image';

const AgencyMain = ({ image }) => {
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
    </StyledSectionContainer>
  );
};

export { AgencyMain };

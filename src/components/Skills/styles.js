import styled from 'styled-components';

export const TextContainer = styled.div`

`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.gap.xl};

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SkillsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex: 0 0 calc(16.66% - 1rem);
    transition: ${({ theme }) => theme.transition.transform};
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
 width: 30px;
 height: 30px;
`;

export const SkillsDescription = styled.p`
  line-height: 1.4;
  max-width: 60ch;
  margin: ${({ theme }) => theme.spacing.margin.center};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.font.sizes.base};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.lg};
  }
`;

import styled from '@emotion/styled';

export const SkillGroup = styled.div`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkillGroupLabel = styled.p`
  margin: 0 0 6px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.6;
`;

export const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

interface ChipProps {
  category: string;
}

export const Chip = styled.span<ChipProps>`
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  border: 1px solid;

  ${(props) => {
    switch (props.category) {
      case 'language':
        return `
          background: #dbeafe;
          color: #1e40af;
          border-color: #93c5fd;
        `;
      case 'framework':
        return `
          background: #dcfce7;
          color: #166534;
          border-color: #86efac;
        `;
      case 'tool':
        return `
          background: #fef3c7;
          color: #92400e;
          border-color: #fcd34d;
        `;
      case 'soft':
        return `
          background: #ede9fe;
          color: #5b21b6;
          border-color: #c4b5fd;
        `;
      default:
        return '';
    }
  }}
`;

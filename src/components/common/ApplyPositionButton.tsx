import styled from '@emotion/styled';
import { useState } from 'react';
import { positions } from 'utils/positions';

const ApplyPositionButton = () => {
  const [clickValue, setClickValue] = useState(0);

  const onClickEvent = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    setClickValue(idx);
  };

  return (
    <>
      {positions.map((position: { name: string }, idx: number) => {
        return (
          <PositionButton
            key={position.name}
            onClick={(e) => onClickEvent(e, idx)}
            isActive={clickValue === idx}
          >
            {position.name}
          </PositionButton>
        );
      })}
    </>
  );
};

export default ApplyPositionButton;

const PositionButton = styled.button`
  width: 146px;
  height: 40px;
  border-radius: 16px;

  background-color: ${(props: { isActive: boolean }) =>
    props.isActive === true ? '#5D50F0' : '#f2f4f6'};
  color: ${(props: { isActive: boolean }) =>
    props.isActive === true ? '#ffffff' : '#000000'};
`;

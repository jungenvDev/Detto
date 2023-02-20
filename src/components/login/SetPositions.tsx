import styled from '@emotion/styled';
import { firestore } from 'apis/firebaseService';
import COLORS from 'assets/styles/colors';
import { doc, updateDoc } from 'firebase/firestore';
import { useAuth, useGlobalModal, useToastPopup } from 'hooks';
import React, { useState } from 'react';
import { career as careerList, positionList } from 'utils/positions';
import ConfirmButton from './ConfirmButton';
import ModalNavigator from '../common/modal/ModalNavigator';
import ValidationToastPopup from 'components/common/ValidationToastPopup';

// 페이지 1 : 포지션 선택
const page = 1;

export default function SetPositions() {
  const [positions, setPositions] = useState<string[]>([]);
  const [career, setCareer] = useState<string>('');

  const { showToast, ToastMessage, handleToastPopup } = useToastPopup();
  const { openModal } = useGlobalModal();
  const { uid } = useAuth();

  const handleCheckPositions = (isChecked: boolean, pos: string) => {
    if (!isChecked) {
      setPositions(positions.filter((p) => p !== pos).sort());
    } else {
      setPositions([...positions, pos].sort().sort());
    }
  };

  // 포지션 선택 유효성 검사
  const checkValidation = () => {
    if (positions.length === 0) {
      handleToastPopup('포지션을 선택해주세요.');
      return false;
    }
    if (career === '') {
      handleToastPopup('경력을 선택해주세요.');
      return false;
    }
    return true;
  };

  const handleConfirmButtonClick = async () => {
    if (!uid) return;
    if (!checkValidation()) return;
    await updateDoc(doc(firestore, `users/${uid}`), {
      positions,
      isJunior: career === 'junior',
    });
    openModal('login', page + 1);
  };

  return (
    <Container>
      {showToast && <ValidationToastPopup message={ToastMessage} top={2} />}
      <ModalNavigator page={page} back />
      <BodyContainer>
        <TextContainer>
          <TitleText>어떤 포지션인지 알려주세요</TitleText>
          <SubText>(중복 선택 가능해요)</SubText>
        </TextContainer>
        <Buttons>
          {positionList.map(({ type, name }) => (
            <React.Fragment key={type}>
              <Input
                type="checkbox"
                name="position"
                id={type}
                onChange={(e) =>
                  handleCheckPositions(e.currentTarget.checked, type)
                }
              />
              <Label htmlFor={type}>{name}</Label>
            </React.Fragment>
          ))}
        </Buttons>
        <TextContainer>
          <TitleText>경력을 선택해주세요</TitleText>
        </TextContainer>
        <Buttons>
          {careerList.map(({ id, value }) => (
            <React.Fragment key={id}>
              <Input
                type="radio"
                name="career"
                value={id}
                id={id}
                onChange={(e) => setCareer(e.currentTarget.value)}
              />
              <Label htmlFor={id}>{value}</Label>
            </React.Fragment>
          ))}
        </Buttons>
      </BodyContainer>
      <ConfirmButton onClick={handleConfirmButtonClick} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 2.5rem 2.5rem 3rem;
  gap: 2.5rem;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1.875rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.25rem;
`;

const TitleText = styled.h3`
  color: ${COLORS.gray850};
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.4375rem;
  margin-bottom: 0.25rem;
`;

const SubText = styled.h2`
  color: ${COLORS.gray750};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: -0.02rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.1875rem;

  /* margin-bottom: 3.75rem; */
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8.125rem;
  height: 3.25rem;

  font-size: 1.125rem;
  font-weight: 400;

  background-color: ${COLORS.gray50};
  border-radius: 1rem;

  cursor: pointer;

  transition: 100ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Input = styled.input`
  display: none;

  color: ${COLORS.gray100};

  &:checked + label {
    color: ${COLORS.white};
    background-color: ${COLORS.violetB400};
    font-weight: 700;
  }
`;
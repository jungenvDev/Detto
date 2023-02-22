import styled from '@emotion/styled';
import COLORS from 'assets/styles/colors';
import { HiMail } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { modalTypes } from 'components/common/modal/modal';
import { useAuth, useGlobalModal } from 'hooks';

const PublicProfileImage = ({ userInfoData, photoURL }: any) => {
  const { uid } = useAuth(); //보내는 사람 id
  const { id } = useParams(); //받는사람 id
  const { openModalWithData, openModal } = useGlobalModal();

  const handleSendNoteButtonClick = () => {
    openModalWithData(modalTypes.sendNote, {
      id: 'id', //addDoc이라 id 필요없음
      senderUid: uid,
      receiverUid: id as string,
      date: 0,
      title: '',
      content: '',
      isRead: false,
    });
  };

  return (
    <>
      <UserImageBox>
        <UserImage src={photoURL} />
        {userInfoData?.uid !== uid && (
          <SendNoteButton
            onClick={() => {
              if (!uid) {
                openModal('login', 0);
                return;
              }
              handleSendNoteButtonClick();
            }}
          >
            <EditIcon />
          </SendNoteButton>
        )}
      </UserImageBox>
    </>
  );
};

export default PublicProfileImage;

const UserImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 122px;
  height: 122px;
`;

const UserImage = styled.img`
  width: 122px;
  height: 122px;
  border-radius: 50%;
`;

const SendNoteButton = styled.button<{ page?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${COLORS.violetB300};
  border: 1px solid ${COLORS.white};
  cursor: pointer;
  transform: all 300ms ease-in-out;

  &:hover {
    background-color: ${COLORS.violetB400};
  }
`;

const EditIcon = styled(HiMail)`
  font-size: 1.5rem;
  color: ${COLORS.white};
`;

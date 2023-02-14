import { useEdtiBoard, useModal } from 'hooks';
import ConfirmAlert from 'components/common/ConfirmAlert';
import WebContainer from 'components/common/WebContainer';
import ProjectEditPageHeader from 'components/editpage/ProjectEditPageHeader';
import ProjectEditPageBody from 'components/editpage/ProjectEditPageBody';
import ProjectEditPageFooter from 'components/editpage/ProjectEditPageFooter';
import styled from '@emotion/styled';

const ProjectEditPage = () => {
  const { isOpen, handleModalStateChange } = useModal(false);
  const { editFormValue, handleFormValueChange } = useEdtiBoard();

  return (
    <WebContainer>
      <EditPageWrapper>
        <ProjectEditPageHeader
          editFormValue={editFormValue}
          onFormValueChangeEvent={handleFormValueChange}
        />
        <ProjectEditPageBody
          editFormValue={editFormValue}
          onFormValueChangeEvent={handleFormValueChange}
        />
        <ProjectEditPageFooter />
        <ConfirmAlert
          isOpen={isOpen}
          message="게시글을 수정하시겠습니까?"
          subMessage="수정한 게시글은 마이페이지에서 확인할 수 있습니다."
          onClickEvent={handleModalStateChange}
          onCloseEvent={handleModalStateChange}
        />
      </EditPageWrapper>
    </WebContainer>
  );
};

const EditPageWrapper = styled.div`
  height: 133.5625rem;
`;

export default ProjectEditPage;

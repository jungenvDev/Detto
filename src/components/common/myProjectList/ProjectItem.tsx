import styled from '@emotion/styled';
import COLORS from 'assets/styles/colors';
import { EditType } from 'types/write/writeType';
import defaultThumbnail from 'assets/images/thumbnail_small.jpg';
import ProjectItemMembers from './ProjectItemMembers';
import { concatSkills } from 'utils/skills';
import UserStacks from 'components/publicProfile/UserStacks';
interface ProjectProps {
  category: string;
  project: EditType.EditFormType;
  pid: string;
  onNavigateToProjectDetailEvent: (path: string) => () => void;
}

const ProjectItem = ({
  category,
  project,
  pid,
  onNavigateToProjectDetailEvent,
}: ProjectProps) => {
  const { plannerStack, designerStack, developerStack, applicants }: any =
    project;

  const stacks = concatSkills(plannerStack, designerStack, developerStack);

  return (
    <ProjectItemContainer onClick={onNavigateToProjectDetailEvent(pid)}>
      <ProjectThumbnailWrapper>
        <ProjectThumbnailImg
          src={project.thumbnail ?? defaultThumbnail}
          alt="썸네일이미지"
        />
      </ProjectThumbnailWrapper>
      <ProjectInfoWrapper>
        <ProjectInfoBox>
          <ProjectInfoLabel>프로젝트</ProjectInfoLabel>
          <ProjectInfoTitle>{project.title}</ProjectInfoTitle>
        </ProjectInfoBox>
        <ProjectInfoBox>
          <ProjectInfoLabel>팀원스택</ProjectInfoLabel>
          <UserStacks stacks={stacks} />
        </ProjectInfoBox>
        <ProjectInfoBox>
          <ProjectItemMembers category={category} applicants={applicants} />
        </ProjectInfoBox>
      </ProjectInfoWrapper>
    </ProjectItemContainer>
  );
};

export default ProjectItem;

const ProjectItemContainer = styled.div`
  width: 100%;
  height: 20.625rem;
  display: flex;

  background-color: ${COLORS.white};
  padding: 1.25rem 1rem;
  margin-bottom: 1.4rem;
`;

const ProjectThumbnailWrapper = styled.div`
  width: 7.375rem;
  height: 7.375rem;
  margin-right: 2.25rem;
`;

const ProjectThumbnailImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectInfoWrapper = styled.div``;

const ProjectInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  &:last-child {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const ProjectInfoLabel = styled.span`
  display: block;
  font-size: 1rem;
  color: #464646;
  margin-right: 1rem;
`;

const ProjectInfoTitle = styled.h3`
  font-size: 1rem;
  color: ${COLORS.black};
  font-weight: 500;
`;

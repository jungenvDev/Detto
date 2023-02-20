import styled from '@emotion/styled';
import COLORS from 'assets/styles/colors';
import { getDate } from 'utils/date';
import UserStacks from 'components/publicProfile/UserStacks';

const WriterToProjectInfoArea = ({ projectData, userData }: any) => {
  const {
    positions,
    plannerStack,
    developerStack,
    designerStack,
    startDate,
    endDate,
  } = projectData;
  return (
    <>
      <WriterToProjectInfoContainer>
        <WriterWrapper>
          <WriterProfileImg src={userData?.photoURL} />
          <WriterNickname>{userData?.displayName}</WriterNickname>
        </WriterWrapper>
        <ProjectInfoWrapper>
          <ProjectInfoObject>
            <ProjectInfoKey>모집 인원</ProjectInfoKey>
            <ProjectInfoValue>
              {`기획 ${positions['planner'] ?? `0`}명/ 프론트
              ${positions['frontend'] ?? `0`}명 / 백엔드
              ${positions['backend'] ?? `0`}명/ 디자인
              ${positions['designer'] ?? `0`}명`}
            </ProjectInfoValue>
          </ProjectInfoObject>
          <ProjectInfoObject>
            <ProjectInfoKey>프로젝트 스택</ProjectInfoKey>
            <ProjectInfoStackWrap>
              <StackDiv>
                <StackTitle>기획</StackTitle>
                {plannerStack?.map((skill: string) => {
                  return <StackValue key={skill}>{skill}</StackValue>;
                }) ?? '없음'}
              </StackDiv>
              <StackDiv>
                <StackTitle>개발</StackTitle>
                <Bumper>
                  {developerStack?.map((skill: string) => {
                    return <StackValue key={skill}>{skill}</StackValue>;
                  }) ?? '없음'}
                </Bumper>
                {/* <UserStacks stacks={developerStack} version="mobile" /> */}
              </StackDiv>
              <StackDiv>
                <StackTitle>디자인</StackTitle>
                {designerStack?.map((skill: string) => {
                  return <StackValue key={skill}>{skill}</StackValue>;
                }) ?? '없음'}
              </StackDiv>
            </ProjectInfoStackWrap>
          </ProjectInfoObject>
          <ProjectInfoObject>
            <ProjectInfoKey>예상 기간</ProjectInfoKey>
            <ProjectInfoValue>
              {getDate(startDate)} - {getDate(endDate)}
            </ProjectInfoValue>
          </ProjectInfoObject>
        </ProjectInfoWrapper>
      </WriterToProjectInfoContainer>
    </>
  );
};

export default WriterToProjectInfoArea;

const WriterToProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* width: 100%; */
  height: 271px;
  background-color: ${COLORS.white};
  gap: 13px;
  margin: 20px auto;
`;

const WriterWrapper = styled.div`
  display: flex;
  margin: 8px 20px 0 20px;
  /* width: 100%; */
  height: 32px;
  align-items: center;
`;

const WriterProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
`;

const WriterNickname = styled.div`
  height: 32px;
  font-size: 11px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 8px 20px;
  /* width: 100%; */
  height: 100%;
  gap: 8px;
`;

const ProjectInfoObject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
`;

const ProjectInfoKey = styled.div`
  width: 68px;
  height: 28px;
  font-size: 12px;
  line-height: 28px;

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #383838;
`;

const ProjectInfoValue = styled.div`
  height: 28px;

  font-weight: 500;
  font-size: 13px;
  line-height: 28px;
  /* identical to box height, or 215% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #383838;
`;

const ProjectInfoStackWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 282px;
  height: 104px;
`;

const StackDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  /* gap: 0.625rem; */
  width: 100%;
  height: 100%;
`;

const StackTitle = styled.div`
  width: 40px;
  height: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
const Bumper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  margin-left: 0.625rem;
`;

const StackValue = styled.div`
  background-color: ${COLORS.gray100};
  height: 26px;
  padding: 0 4px;
  border-radius: 12px;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* white-space: nowrap; */
  /* overflow: scroll; */
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  height: 2.5rem;
`;

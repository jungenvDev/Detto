import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import COLORS from 'assets/styles/colors';

const MemberInfoArea = ({ applicantsData }: any) => {
  const navigate = useNavigate();
  if (applicantsData === undefined) applicantsData = {};

  const data = Object?.keys(applicantsData).filter((key) => {
    return applicantsData?.[key]?.recruit === true;
  });

  return (
    <>
      <MemberInfoWrapper>
        <MemberInfoTitle>현재 참여 중인 인원</MemberInfoTitle>
        <MemberInfoBox>
          <MemberInfoDiv>
            <PositionDiv>기획</PositionDiv>
            {data?.map((key) => {
              if (applicantsData[key].position === '기획')
                return (
                  <Div key={key}>
                    <MemberProfileImg
                      key={key}
                      onClick={() =>
                        navigate(`/profile/${applicantsData[key].uid}`)
                      }
                      src={applicantsData[key].profileURL}
                    ></MemberProfileImg>
                    <HoverText>{applicantsData[key].displayName}</HoverText>
                  </Div>
                );
            })}
          </MemberInfoDiv>
          <MemberInfoDiv>
            <PositionDiv>프론트</PositionDiv>

            {data.map((key) => {
              if (applicantsData[key].position === '프론트엔드')
                return (
                  <Div key={key}>
                    <MemberProfileImg
                      onClick={() =>
                        navigate(`/profile/${applicantsData[key].uid}`)
                      }
                      src={applicantsData[key].profileURL}
                    ></MemberProfileImg>
                    <HoverText>{applicantsData[key].displayName}</HoverText>
                  </Div>
                );
            })}
          </MemberInfoDiv>
          <MemberInfoDiv>
            <PositionDiv>백엔드</PositionDiv>

            {data.map((key) => {
              if (applicantsData[key].position === '백엔드')
                return (
                  <Div key={key}>
                    <MemberProfileImg
                      onClick={() =>
                        navigate(`/profile/${applicantsData[key].uid}`)
                      }
                      src={applicantsData[key].profileURL}
                    ></MemberProfileImg>
                    <HoverText>{applicantsData[key].displayName}</HoverText>
                  </Div>
                );
            })}
          </MemberInfoDiv>
          <MemberInfoDiv>
            <PositionDiv>디자인</PositionDiv>
            {data.map((key) => {
              if (applicantsData[key].position === '디자인')
                return (
                  <Div key={key}>
                    <MemberProfileImg
                      key={key}
                      onClick={() =>
                        navigate(`/profile/${applicantsData[key].uid}`)
                      }
                      src={applicantsData[key].profileURL}
                    ></MemberProfileImg>
                    <HoverText>{applicantsData[key].displayName}</HoverText>
                  </Div>
                );
            })}
          </MemberInfoDiv>
        </MemberInfoBox>
      </MemberInfoWrapper>
    </>
  );
};

export default MemberInfoArea;

const MemberInfoWrapper = styled.div`
  width: 63.625rem;
  height: 100%;
  margin-top: 2.75rem;
  display: flex;
  flex-direction: column;
`;

const MemberInfoTitle = styled.div`
  height: 2rem;
  font-weight: 500;
  font-size: 1.25rem;
`;

const MemberInfoBox = styled.div`
  height: 100%;
  margin: 2.25rem 0 1.25rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MemberInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  height: 5rem;
`;

const PositionDiv = styled.div`
  font-size: 1.5rem;
  background-color: ${COLORS.violetB400};
  width: 7.9375rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  border-radius: 1.125rem;
`;

const MemberProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  /* position: relative; */
  object-fit: cover;

  z-index: 0;
`;

const HoverText = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: ${(props: { children: string }) =>
    props.children.length > 5 ? '100%' : '30px'};
  border-radius: 0.625rem;
  background-color: ${COLORS.white};
  box-shadow: 0.0313rem 0.0313rem 0.625rem 0.1rem ${COLORS.violetB300};
  color: ${COLORS.black};
  z-index: 999;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;

  display: none;
`;

const Div = styled.div`
  position: relative;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  z-index: 0;
  :hover > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

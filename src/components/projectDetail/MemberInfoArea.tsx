import styled from '@emotion/styled';
import COLORS from 'assets/styles/colors';

const MemberInfoArea = ({ applicantsData }: any) => {
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
            {/*  Todo: 클릭시 공개프로필로 연결 */}
            {data?.map((key) => {
              if (applicantsData[key].position === '기획')
                return (
                  <>
                    <MemberProfileImg
                      key={key}
                      src={applicantsData[key].profileURL}
                    ></MemberProfileImg>
                    <HoverText>{applicantsData[key].displayName}</HoverText>
                  </>
                );
            })}
          </MemberInfoDiv>
          <MemberInfoDiv>
            <PositionDiv>개발</PositionDiv>

            {data.map((key) => {
              if (
                applicantsData[key].position === '프론트엔드' ||
                applicantsData[key].position === '백엔드'
              )
                return (
                  <>
                    <MemberProfileImg
                      key={key}
                      src={applicantsData[key].profileURL}
                    />
                    <HoverText>{applicantsData[key].displayName}</HoverText>
                  </>
                );
            })}
          </MemberInfoDiv>
          <MemberInfoDiv>
            <PositionDiv>디자인</PositionDiv>
            {data.map((key) => {
              if (applicantsData[key].position === '디자인')
                return (
                  <>
                    <MemberProfileImg
                      key={key}
                      src={applicantsData[key].profileURL}
                    />
                    <HoverText>{applicantsData[key].displayName}</HoverText>
                  </>
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
  height: 22.75rem;
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
  :hover + div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HoverText = styled.div`
  position: relative;
  right: 50px;
  top: 30px;
  width: 6rem;
  height: 2rem;
  border-radius: 10px;
  background-color: ${COLORS.white};
  box-shadow: 0.5px 0.5px 10px 1px ${COLORS.violetA300};
  color: ${COLORS.black};

  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;

  display: none;
`;

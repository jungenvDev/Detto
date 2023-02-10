import { products, develops, designs } from 'utils/skills';
import SkillButton from 'components/common/SkillButton';
import styled from '@emotion/styled';

const EditPageStack = () => {
  return (
    <StackContainer>
      <StackPageLeftBox>
        <StackText>필요 스택</StackText>
      </StackPageLeftBox>
      <StackPageRightBox>
        <StackProductBox>
          <StackProductLeftBox>
            <StackCategoryText>기획</StackCategoryText>
          </StackProductLeftBox>
          <StackProductRightBox>
            {products.map((product) => (
              <SkillButton key={product} name={product} />
            ))}
          </StackProductRightBox>
        </StackProductBox>
        <StackDeveloopBox>
          <StackDevelopLeftBox>
            <StackCategoryText>디자인</StackCategoryText>
          </StackDevelopLeftBox>
          <StackDevelopRightBox>
            {designs.map((design) => (
              <SkillButton key={design} name={design} />
            ))}
          </StackDevelopRightBox>
        </StackDeveloopBox>
        <StackDesignBox>
          <StackDesignLeftBox>
            <StackCategoryText>개발</StackCategoryText>
          </StackDesignLeftBox>
          <StackDesignRightBox>
            {develops.map((develop) => (
              <SkillButton key={develop} name={develop} />
            ))}
          </StackDesignRightBox>
        </StackDesignBox>
      </StackPageRightBox>
    </StackContainer>
  );
};

const StackContainer = styled.div`
  width: 100%;
  max-width: 70.875rem;
  display: flex;
  flex-direction: row;
`;
const StackPageLeftBox = styled.div`
  width: 10%;
`;
const StackPageRightBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
const StackText = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: -0.02rem;
  color: #383838;
`;
const StackProductBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const StackProductLeftBox = styled.div`
  width: 8%;
`;
const StackProductRightBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;
const StackDeveloopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const StackDevelopLeftBox = styled.div`
  width: 8%;
`;
const StackDevelopRightBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;
const StackDesignBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const StackDesignLeftBox = styled.div`
  width: 8%;
`;
const StackDesignRightBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;
const StackCategoryText = styled.p`
  height: 1.75rem;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.75rem;
  color: #383838;
  margin-right: 1.2rem;
`;

export default EditPageStack;

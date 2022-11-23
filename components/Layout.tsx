import Head from 'next/head';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-bottom: 35px;
  flex-direction: column;
`;
const Spacer = styled.div`
  height: 50px;
`;

const Layout = ({ children }: React.PropsWithChildren) => {

  return (
    <Wrapper>
      <Head>
        <title>Full Stack Test</title>
      </Head>
      <Spacer />
      {children}
      <Spacer />
    </Wrapper>
  );
};

export default Layout;

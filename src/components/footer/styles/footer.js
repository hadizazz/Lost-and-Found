import styled from "styled-components";

export const Container = styled.div`
  background: #e0557c;
`;

export const Wrapper = styled.div`
  padding: 49px 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  grid-gap: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
`;

export const Row2 = styled.div`
  display: flex;
  grid-gap: 20px;
  justify-content: center;
`;

export const Row3 = styled.div`
  display: flex;
  grid-gap: 20px;
  justify-content: left;
`;

export const Link = styled.div`
  color: #efefed;
  margin-bottom: 20px;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
`;

export const Title = styled.div`
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

export const Line = styled.div`
  border: 1px solid #d4d0d0;
`;

export const Text = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
`;

export const Image = styled.div``;

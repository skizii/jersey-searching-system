import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	height: 94px;
	display: flex;
	justify-content: start;
	align-items: center;
`;

export const Logo = styled.a`
  height: 24px;
  width: 59px;
  margin-left: 69px;
`;

export const SearchBar = styled.div`
  height: 46px;
  width: 500px;
  padding: 11px 16px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  margin-left: 32px;
`;

export const Filter = styled.img`
  height: 32px;
  width: 32px;
`;
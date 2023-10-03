import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .MuiPaginationItem-root {
    margin: 0 8px;
    &.Mui-selected {
      background-color: #010101;
    }
  }

  .info {
    margin-top: 18px;
    color: #222;
  }
`;

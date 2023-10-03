import styled from "styled-components";


export const EntireRoomsWrapper = styled.div`
  padding: 20px 20px;
  position: relative;

  .title {
    font-style: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .entire-cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8)
  }
`
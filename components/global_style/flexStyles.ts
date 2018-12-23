import { css } from 'utils/styled-components';

export default css`
  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  .flex-center {
    align-items: center;
    justify-content: center;
  }

  .items-center {
    align-items: center;
  }

  .items-start {
    align-items: flex-start;
  }

  .content-start {
    justify-content: flex-start;
  }

  .content-around {
    justify-content: space-around;
  }

  .content-between {
    justify-content: space-between;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }
`;

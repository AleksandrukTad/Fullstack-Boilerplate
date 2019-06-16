import styled, { css } from "styled-components";

interface ICircleProps {
  active: boolean;
  borderColor: string | undefined;
  overlay?: string;
  loading: boolean;
  extended: boolean;
}

interface ITextProps {
  color?: string;
}

export const Wrapper = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }
`;

export const Circle = styled.div<ICircleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgb(135, 206, 250);

  ${({ active }) =>
    !active &&
    css`
      transition: 0.25s ease-in-out;

      ${(props: ICircleProps) => props.extended && "transform: scale(1.2)"};
  };
`};

  /* Border */
  &::after {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: transparent;

    ${({ borderColor, loading, theme }) =>
      `border: solid 5px  ${loading ? theme.Loading_Color : borderColor}`};
  }
  /* Overlay */
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${({ overlay }) => overlay && `background-color: ${overlay}`};
    opacity: 0.5;
  }
`;

export const Text = styled.p<ITextProps>`
  color: ${({ color }) => color || "black"};
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

export const Canvas = styled.canvas`
  position: absolute;
`;

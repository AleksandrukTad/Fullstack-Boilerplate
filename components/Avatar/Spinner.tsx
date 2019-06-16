import React from "react";

import { Circle, Spinner } from "./Spinner.style";

interface ILoadingProps extends React.Props<any> {
  loading: boolean;
}

const Loading: React.FunctionComponent<ILoadingProps> = ({ loading }) => {
  return (
    <Spinner loading={loading}>
      <Circle cx="20" cy="20" r="18" />
    </Spinner>
  );
};

export default Loading;

import React from "react";

import { SpinWrapper, Spinner as SpinLoading, BtnSpinner } from "./styled";

export const Spinner = () => {
  return (
    <SpinWrapper>
      <SpinLoading />
    </SpinWrapper>
  );
};

export const ButtonSpinner = () => {
  return <BtnSpinner />;
};

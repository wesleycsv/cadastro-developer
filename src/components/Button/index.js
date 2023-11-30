import React from "react";

import { Button as ContainerBtn } from "./style";

const Button = ({ children, ...props }) => {
  return <ContainerBtn {...props}>{children}</ContainerBtn>;
};

export default Button;

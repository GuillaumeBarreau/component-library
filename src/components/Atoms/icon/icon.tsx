import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome/index";
import { ComponentIconProps } from "./icon.d";

import {
  faCheckSquare,
  faCoffee,
  faExclamationCircle,
  faCircleXmark,
  faCircleCheck,
  faBell,
  faBomb,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckSquare,
  faCoffee,
  faExclamationCircle,
  faCircleXmark,
  faCircleCheck,
  faBell,
  faBug,
  faBomb
);

export const Icon: React.FC<FontAwesomeIconProps & ComponentIconProps> = (
  props
) => {
  const { icon, size } = props;

  return <FontAwesomeIcon icon={icon} size={size} />;
};

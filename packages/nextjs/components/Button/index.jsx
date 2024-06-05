import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    white_A700_7f: "bg-white-A700_7f text-white-A700",
    white_A700_19: "bg-white-A700_19 text-white-A700",
  },
  outline: {
    deep_purple_A100_deep_purple_A700: "border border-solid deep_purple_A100_deep_purple_A700_border",
  },
  gradient: {
    deep_purple_A100_deep_purple_A700: "bg-gradient  text-white-A700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "sm",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf(["white_A700_7f", "white_A700_19", "deep_purple_A100_deep_purple_A700"]),
};

export { Button };

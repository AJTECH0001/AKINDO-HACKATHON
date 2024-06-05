import React from "react";

const sizeClasses = {
  txtRobotoBold40: "font-bold font-roboto",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtPoppinsBold50: "font-bold font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsBold30: "font-bold font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsBold25: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

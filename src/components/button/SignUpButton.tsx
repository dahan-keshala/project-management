import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

interface SignUpButtonProps {
  color: any;
  name?: React.ReactNode;
}

export const SignUpButton = ({ color, name }: SignUpButtonProps) => {
  const [count, setCount] = useState(10);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Button placeholder="" onClick={onClick} color={color}>
        {name}
      </Button>
    </div>
  );
};

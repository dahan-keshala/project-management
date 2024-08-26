import { Card, CardHeader, Typography } from "@material-tailwind/react";

export const CardDefault = () => {
  return (
    <div className="pt-24 flex justify-center">
      <Card placeholder="" className="mt-6 w-full max-w-[28rem]">
        <CardHeader placeholder="" color="blue-gray" className="relative h-56">
          <Typography variant="h3" placeholder="">
            Task
          </Typography>
        </CardHeader>
      </Card>
    </div>
  );
};

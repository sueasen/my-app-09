import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';

export function ProfileCard({ img, name, role }) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={img} alt="profile" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {role}
        </Typography>
      </CardBody>
    </Card>
  );
}

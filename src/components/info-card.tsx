import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import "./styles.css";

export enum color {
  Grad1 = "carrara-100",
  Grad2 = "carrara-200",
  Grad3 = "carrara-300",
  Grad4 = "carrara-400",
  Grad5 = "carrara-500",
}
export interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
  link: string;
  bgcolor?: color;
}

export function InfoCard({
  icon: Icon,
  title,
  date,
  children,
  link,
  bgcolor = color.Grad1,
}: InfoCardProps) {
  const classname = `rounded-md bg-${bgcolor}`;
  return (
    <Card shadow={false} className={classname}>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}
        color="transparent"
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="deep-purple" className="font-bold text-xs">
            {date}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full">
            <a href={link}>{title}</a>
          </Typography>
        </div>
        <IconButton
          className="flex-shrink-0 pointer-events-none"
          ripple={false}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </IconButton>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2">
        <Typography className="font-normal !text-gray-700">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;

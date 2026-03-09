import { ProjectDetail } from "@/src/data/project";
import DefaultDetail from "./default-detail";
import HrSystemDetail from "./hr-system";
import IotFeederDetail from "./iot-feeder";
import ComproDetail from "./compro";
import CustomerDetail from "./customer-loyalty";
import FishingGameDetail from "./3d-game";
import EClassroomDetail from "./e-classroom";
import RoomBookingDetail from "./room-booking";
import GarbagePaymentDetail from "./garbage-payment";

type ProjectDetailRendererProps = {
  project: ProjectDetail;
};

export default function ProjectDetailRenderer({
  project,
}: ProjectDetailRendererProps) {
  switch (project.customType) {
    case "hr-system":
      return <HrSystemDetail project={project} />;
    case "company-profile":
      return <ComproDetail project={project} />;
    case "customer-loyalty":
      return <CustomerDetail project={project} />;
    case "iot-feeder":
      return <IotFeederDetail project={project} />;
    case "3d-game":
      return <FishingGameDetail project={project} />;
    case "e-classroom":
      return <EClassroomDetail project={project} />;
    case "room-booking":
      return <RoomBookingDetail project={project} />;
    case "garbage-management":
      return <GarbagePaymentDetail project={project} />;
    default:
      return <DefaultDetail project={project} />;
  }
}

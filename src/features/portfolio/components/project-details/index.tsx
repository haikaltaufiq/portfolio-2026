import { ProjectDetail } from "@/src/data/project";
import DefaultDetail from "./default-detail";
import HrSystemDetail from "./hr-system";
import IotFeederDetail from "./iot-feeder";
import ComproDetail from "./compro";
import CustomerDetail from "./customer-loyalty";

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
    case "enterprise-pos":
      return <IotFeederDetail project={project} />;
    default:
      return <DefaultDetail project={project} />;
  }
}

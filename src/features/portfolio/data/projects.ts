import { Project } from "../type";

export const projects: Project[] = [
  {
    id: "portfolio-1",
    slug: "iot-feeder",
    title: "Fish Feeder",
    video: "/assets/fish-feeder/showcase.mp4",
    description:
      "An integrated IoT solution designed to automate and optimize aquaculture management. This mobile application allows users to schedule precision feeding, monitor real-time water conditions, and manage overall fish health remotely.",
    tags: ["Laravel", "Flutter", "MySQL"],
  },
  {
    id: "portfolio-2",
    slug: "3d-game",
    title: "Fishing Game",
    image: "/assets/fishing-game/home-screen.png",
    description:
      "A simulation game developed using Unity that interfaces with a custom-built Arduino controller. The project focuses on synchronizing physical hardware inputs with a 3D environment.",
    tags: ["Unity", "Arduino", "Blender"],
  },
  {
    id: "portfolio-3",
    slug: "customer-loyalty",
    title: "customer loyalty",
    image: "/assets/loyalty/dashboard.png",
    description:
      "A web-based platform designed to manage customer data through a dynamic ranking system. It features automated tier progression to reward loyal customers based on their engagement and transaction history.",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
  },
];

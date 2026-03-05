import { ProjectDetail } from "@/src/data/project";

type IotFeederDetailProps = {
  project: ProjectDetail;
};

const SENSOR_CONFIG = [
  { key: "Motor", value: "Stepper timed release" },
  { key: "Stock Sensor", value: "Ultrasonic level checker" },
  { key: "Transport", value: "MQTT event stream" },
  { key: "Monitor", value: "Web dashboard telemetry" },
];

export default function IotFeederDetail({ project }: IotFeederDetailProps) {
  return (
    <div className="space-y-8 border-t border-main-text/10 pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SENSOR_CONFIG.map((sensor) => (
          <div key={sensor.key} className="border border-main-text/15 p-4">
            <p className="text-[10px] uppercase font-black tracking-[0.2em] text-[#F25623]">
              {sensor.key}
            </p>
            <p className="text-sm opacity-80 mt-2">{sensor.value}</p>
          </div>
        ))}
      </div>

      <div className="border border-main-text/15 p-6 space-y-4">
        <h3 className="text-sm uppercase font-black tracking-[0.3em] text-[#F25623]">
          Device Runtime Checklist
        </h3>
        <ul className="space-y-2 text-sm opacity-80">
          <li>- check feed schedule sync</li>
          <li>- validate stock threshold alert</li>
          <li>- verify offline fallback mode</li>
          <li>- publish state to dashboard every cycle</li>
        </ul>
      </div>

      <div className="space-y-4">
        {project.content.map((paragraph, index) => (
          <p
            key={`${project.slug}-iot-copy-${index}`}
            className="text-base leading-relaxed opacity-75"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

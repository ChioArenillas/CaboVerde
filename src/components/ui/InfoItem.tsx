import { ReactNode } from "react";

interface InfoItemProps {
  title: string;
  desc: ReactNode;
}

export function InfoItem({ title, desc }: InfoItemProps) {
  return (
    <div className="space-y-1">
      <h4 className="text-base font-bold text-gray-900">
        {title}
      </h4>

      <div className="text-base text-gray-700 leading-relaxed">
        {desc}
      </div>
    </div>
  );
}
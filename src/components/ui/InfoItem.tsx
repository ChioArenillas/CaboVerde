
interface InfoItemProps {
  title: string;
  desc: string;
}

export function InfoItem({ title, desc }: InfoItemProps) {
  return (
    <div className="mb-4 last:mb-0">
      <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

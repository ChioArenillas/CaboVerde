
interface MoodItemProps {
  icon: string;
  title: string;
  desc: string;
}

export function MoodItem({ icon, title, desc }: MoodItemProps) {
  return (
    <div className="bg-sky-50 rounded-xl p-4 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-bold text-sky-800">{title}</h4>
      <p className="text-sm text-sky-600 mt-1">{desc}</p>
    </div>
  );
}
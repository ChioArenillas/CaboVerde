type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-lg font-bold mb-4">{title}</h3>

      <div className="text-base text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
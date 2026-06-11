interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}



interface CheckItemProps {
  text: string;
}

export function CheckItem({ text }: CheckItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-gray-700">{text}</span>
    </li>
  );
}
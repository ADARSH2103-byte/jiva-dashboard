export default function SummaryCard({
  title,
  value,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h1 className="text-3xl font-bold text-gray-800 mt-3">
        {value}
      </h1>

    </div>
  );
}
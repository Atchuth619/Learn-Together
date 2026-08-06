import { formatDate } from "../utils/formatDate";

const EntryCard = ({ entry }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4">
      <p className="text-xs text-gray-400">
        {formatDate(entry.date)}
      </p>

      {entry.username && (
        <p className="text-sm text-blue-600 mt-1">Added by: {entry.username}</p>
      )}

      <h2 className="font-bold text-lg mt-2">
        👤 {entry.famousPerson?.name}
      </h2>
      <p className="text-sm text-gray-600">
        {entry.famousPerson?.notes}
      </p>

      <h3 className="mt-2 font-semibold">📰 Tech News</h3>
      {entry.techNews?.map((news, i) => (
        <p key={i} className="text-sm">
          • {news.title}
        </p>
      ))}

      <h3 className="mt-2 font-semibold">💰 Investments</h3>
      {entry.investments?.map((inv, i) => (
        <p key={i} className="text-sm">
          • {inv.title}
        </p>
      ))}
    </div>
  );
};

export default EntryCard;
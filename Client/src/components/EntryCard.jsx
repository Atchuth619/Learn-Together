import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteEntry } from "../api/entryApi";
import { formatDate } from "../utils/formatDate";

const EntryCard = ({ entry, onDelete }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Delete this entry?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteEntry(entry._id);
      onDelete?.(entry._id);
      await Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Entry deleted successfully!",
        confirmButtonColor: "#3b82f6",
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not delete entry. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="mb-4 rounded-xl bg-white p-4 shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <p className="text-xs text-gray-400">{formatDate(entry.date)}</p>

          {entry.username && (
            <p className="mt-1 text-sm text-blue-600">Added by: {entry.username}</p>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-gray-200 px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            ⋯
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-28 rounded-md border border-gray-200 bg-white shadow-lg">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  navigate(`/edit/${entry._id}`);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  handleDelete();
                }}
                className="block w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <h2 className="mt-2 text-lg font-bold">👤 {entry.famousPerson?.name}</h2>
      <p className="text-sm text-gray-600">{entry.famousPerson?.notes}</p>

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
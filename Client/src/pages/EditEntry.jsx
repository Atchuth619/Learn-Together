import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getEntries, updateEntry } from "../api/entryApi";
import Navbar from "../components/Navbar";

const EditEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    username: "",
    famousPerson: { name: "", notes: "" },
    techNews: [{ title: "", notes: "" }],
    investments: [{ title: "", notes: "" }],
  });

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await getEntries();
        const entry = res.data.find((item) => item._id === id);
        if (entry) {
          setForm(entry);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchEntry();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEntry(id, form);
      await Swal.fire({
        icon: "success",
        title: "Entry updated",
        text: "Entry updated successfully!",
        confirmButtonColor: "#3b82f6",
      });
      navigate("/");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not update entry. Please try again.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="space-y-3 p-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Person</label>
          <select
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          >
            <option value="">Select person</option>
            <option value="Atchuth">Atchuth</option>
            <option value="Bheeshma">Bheeshma</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Famous Person</label>
          <input
            placeholder="Famous Person"
            className="w-full rounded border p-2"
            value={form.famousPerson?.name || ""}
            onChange={(e) =>
              setForm({
                ...form,
                famousPerson: { ...form.famousPerson, name: e.target.value },
              })
            }
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Notes</label>
          <textarea
            placeholder="Notes"
            className="w-full rounded border p-2"
            value={form.famousPerson?.notes || ""}
            onChange={(e) =>
              setForm({
                ...form,
                famousPerson: { ...form.famousPerson, notes: e.target.value },
              })
            }
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Tech News</label>
          <input
            placeholder="Tech News"
            className="w-full rounded border p-2"
            value={form.techNews?.[0]?.title || ""}
            onChange={(e) =>
              setForm({
                ...form,
                techNews: [{ ...form.techNews[0], title: e.target.value }],
              })
            }
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Tech News Notes</label>
          <textarea
            placeholder="Tech News Notes"
            className="w-full rounded border p-2"
            value={form.techNews?.[0]?.notes || ""}
            onChange={(e) =>
              setForm({
                ...form,
                techNews: [{ ...form.techNews[0], notes: e.target.value }],
              })
            }
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Investment</label>
          <input
            placeholder="Investment"
            className="w-full rounded border p-2"
            value={form.investments?.[0]?.title || ""}
            onChange={(e) =>
              setForm({
                ...form,
                investments: [{ ...form.investments[0], title: e.target.value }],
              })
            }
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Investment Notes</label>
          <textarea
            placeholder="Investment Notes"
            className="w-full rounded border p-2"
            value={form.investments?.[0]?.notes || ""}
            onChange={(e) =>
              setForm({
                ...form,
                investments: [{ ...form.investments[0], notes: e.target.value }],
              })
            }
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 rounded bg-gray-500 p-2 text-white"
          >
            Back
          </button>
          <button className="flex-1 rounded bg-blue-500 p-2 text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEntry;

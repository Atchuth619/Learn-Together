import { useState } from "react";
import { createEntry } from "../api/entryApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const getTodayDate = () => new Date().toISOString().split("T")[0];

const AddEntry = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: getTodayDate(),
    username: "",
    famousPerson: { name: "", notes: "" },
    techNews: [{ title: "", notes: "" }],
    investments: [{ title: "", notes: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEntry(form);
      navigate("/", {
        state: { successMessage: "Entry created successfully!" },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="p-4 space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Person <span className="text-red-500">*</span>
          </label>
          <select
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select person</option>
            <option value="Atchuth">Atchuth</option>
            <option value="Bheeshma">Bheeshma</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Famous Person <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Famous Person"
            className="w-full border p-2 rounded"
            value={form.famousPerson.name}
            onChange={(e) =>
              setForm({
                ...form,
                famousPerson: {
                  ...form.famousPerson,
                  name: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            placeholder="Notes"
            className="w-full border p-2 rounded"
            value={form.famousPerson.notes}
            onChange={(e) =>
              setForm({
                ...form,
                famousPerson: {
                  ...form.famousPerson,
                  notes: e.target.value,
                },
              })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tech News <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Tech News"
            className="w-full border p-2 rounded"
            value={form.techNews[0].title}
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
          <label className="block text-sm font-medium mb-1">Tech News Notes</label>
          <textarea
            placeholder="Tech News Notes"
            className="w-full border p-2 rounded"
            value={form.techNews[0].notes}
            onChange={(e) =>
              setForm({
                ...form,
                techNews: [{ ...form.techNews[0], notes: e.target.value }],
              })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Investment
          </label>
          <input
            placeholder="Investment"
            className="w-full border p-2 rounded"
            value={form.investments[0].title}
            onChange={(e) =>
              setForm({
                ...form,
                investments: [{ ...form.investments[0], title: e.target.value }],
              })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Investment Notes</label>
          <textarea
            placeholder="Investment Notes"
            className="w-full border p-2 rounded"
            value={form.investments[0].notes}
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
            className="bg-gray-500 text-white flex-1 p-2 rounded"
          >
            Back
          </button>
          <button className="bg-blue-500 text-white flex-1 p-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEntry;
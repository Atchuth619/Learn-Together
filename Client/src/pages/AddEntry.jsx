import { useState } from "react";
import { createEntry } from "../api/entryApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const AddEntry = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    famousPerson: { name: "", notes: "" },
    techNews: [{ title: "", notes: "" }],
    investments: [{ title: "", notes: "" }],
  });

  const handleChange = (e) => {
    setForm({ ...form, date: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEntry(form);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="p-4 space-y-3">
        <input
          type="date"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          placeholder="Famous Person"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              famousPerson: {
                ...form.famousPerson,
                name: e.target.value,
              },
            })
          }
        />

        <textarea
          placeholder="Notes"
          className="w-full border p-2 rounded"
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

        <input
          placeholder="Tech News"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              techNews: [{ title: e.target.value }],
            })
          }
        />

        <input
          placeholder="Investment"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              investments: [{ title: e.target.value }],
            })
          }
        />

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
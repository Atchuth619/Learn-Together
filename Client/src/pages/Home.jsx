import { useEffect, useState } from "react";
import { getEntries } from "../api/entryApi";
import EntryCard from "../components/EntryCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await getEntries();
      setEntries(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      <div className="p-4">
        {loading ? (
          <Loader />
        ) : entries.length === 0 ? (
          <p className="text-center text-gray-500">
            No entries yet
          </p>
        ) : (
          entries.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getEntries } from "../api/entryApi";
import EntryCard from "../components/EntryCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const Home = () => {
  const location = useLocation();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(
    location.state?.successMessage || ""
  );

  useEffect(() => {
    fetchEntries();
  }, []);

  useEffect(() => {
    if (location.state?.successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [location.state?.successMessage]);

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

      {successMessage && (
        <div className="fixed left-1/2 top-4 z-50 max-w-sm -translate-x-1/2 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-lg">✓</span>
            <span>{successMessage}</span>
          </div>
        </div>
      )}

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
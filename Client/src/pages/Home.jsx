import { useEffect, useState } from "react";
import { getEntries } from "../api/entryApi";
import EntryCard from "../components/EntryCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const months = [
  { value: "", label: "All months" },
  { value: "1", label: "Jan" },
  { value: "2", label: "Feb" },
  { value: "3", label: "Mar" },
  { value: "4", label: "Apr" },
  { value: "5", label: "May" },
  { value: "6", label: "Jun" },
  { value: "7", label: "Jul" },
  { value: "8", label: "Aug" },
  { value: "9", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntries({ year: selectedYear, month: selectedMonth });
  }, [selectedYear, selectedMonth]);

  const handleDeleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry._id !== id));
  };

  const fetchEntries = async ({ year, month }) => {
    setLoading(true);

    try {
      const params = {};
      if (year) params.year = year;
      if (month) params.month = month;

      const res = await getEntries(params);
      setEntries(res.data);

      if (!year && !month) {
        const availableYears = Array.from(
          new Set(res.data.map((entry) => new Date(entry.date).getFullYear()))
        ).sort((a, b) => b - a);
        setYears(availableYears);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredEntries = entries.filter((entry) => {
    const date = new Date(entry.date);
    const matchesYear = selectedYear ? date.getFullYear() === Number(selectedYear) : true;
    const matchesMonth = selectedMonth ? date.getMonth() + 1 === Number(selectedMonth) : true;
    return matchesYear && matchesMonth;
  });

  const clearFilters = () => {
    setSelectedYear("");
    setSelectedMonth("");
  };

  return (
    <div>
      <Navbar />

      <div className="p-4">
        <div className="mb-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-900">Entries</h3>
            <button
              type="button"
              onClick={() => setFilterOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle filters"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v.69a2.25 2.25 0 01-.66 1.59l-5.1 5.1V17.4a2.25 2.25 0 01-1.35 2.05l-2.4 1.2A2.25 2.25 0 019 18.6v-6.76L3.66 7.54A2.25 2.25 0 013 5.94V5.25z" />
              </svg>
            </button>
          </div>

          {filterOpen && (
            <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="year-filter">Year</label>
                  <select
                    id="year-filter"
                    value={selectedYear}
                    onChange={(e) => {
                      setSelectedYear(e.target.value);
                      setSelectedMonth("");
                    }}
                    className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-700"
                  >
                    <option value="">All years</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="sr-only" htmlFor="month-filter">Month</label>
                  <select
                    id="month-filter"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    disabled={!selectedYear}
                    className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={clearFilters}
                disabled={!selectedYear && !selectedMonth}
                className="inline-flex h-9 items-center justify-center rounded border border-slate-300 bg-white px-3 text-sm text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Clear
              </button>
            </div>
          )}

          <div className="mt-4 text-sm text-slate-600">
            {selectedYear || selectedMonth ? (
              <span>
                Showing {filteredEntries.length} filtered {filteredEntries.length === 1 ? "entry" : "entries"}.
              </span>
            ) : (
              <span>Showing all entries.</span>
            )}
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : filteredEntries.length === 0 ? (
          <p className="text-center text-gray-500">No entries found.</p>
        ) : (
          filteredEntries.map((entry) => (
            <EntryCard key={entry._id} entry={entry} onDelete={handleDeleteEntry} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
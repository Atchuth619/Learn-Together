import Swal from "sweetalert2";

const getCssVar = (name, fallback = "") => {
  if (typeof window === "undefined") return fallback;
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name) || fallback
  ).trim();
};

export const showSuccess = (title, text = "") =>
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonColor: getCssVar("--primary", "#0B3D91"),
  });

export const showError = (title, text = "") =>
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonColor: getCssVar("--danger", "#ef4444"),
  });

export const showConfirmDelete = async () =>
  Swal.fire({
    title: "Delete this entry?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: getCssVar("--danger", "#ef4444"),
    cancelButtonColor: getCssVar("--muted", "#6b7280"),
    confirmButtonText: "Yes, delete it",
  });

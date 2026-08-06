import Swal from "sweetalert2";

export const showSuccess = (title, text = "") =>
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonColor: "#3b82f6",
  });

export const showError = (title, text = "") =>
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonColor: "#ef4444",
  });

export const showConfirmDelete = async () =>
  Swal.fire({
    title: "Delete this entry?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, delete it",
  });

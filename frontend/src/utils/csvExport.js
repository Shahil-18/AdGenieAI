export const exportUsersCSV = (users = []) => {
  const rows = [
    ["Name", "Email", "Plan", "Joined"],
    ...users.map((user) => [
      user.name,
      user.email,
      user.plan,
      new Date(user.createdAt).toLocaleDateString(),
    ]),
  ];

  const csv = rows.map((row) => row.join(",")).join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "adgenie-users.csv";
  a.click();

  URL.revokeObjectURL(url);
};
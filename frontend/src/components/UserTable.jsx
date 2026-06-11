function UserTable({ users = [] }) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden">
      <div className="grid grid-cols-[1fr_1.5fr_120px_160px] bg-[#f9fafb] px-6 py-4 text-sm font-black text-[#6b7280]">
        <p>Name</p>
        <p>Email</p>
        <p>Plan</p>
        <p>Joined</p>
      </div>

      {users.map((user) => (
        <div
          key={user._id}
          className="grid grid-cols-[1fr_1.5fr_120px_160px] px-6 py-4 border-t border-[#f1f1f1]"
        >
          <p className="font-bold text-[#111827]">{user.name}</p>
          <p className="text-[#6b7280]">{user.email}</p>
          <p className="capitalize font-bold">{user.plan}</p>
          <p className="text-[#6b7280]">
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserTable;
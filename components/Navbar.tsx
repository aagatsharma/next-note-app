import Link from "next/link";
function Navbar() {
  return (
    <div className="flex items-center justify-between bg-blue-300  p-6">
      <Link href="/">Note-App</Link>
      <h1 className="font-bold text-lg">Welcome to the note page</h1>
      <div className="space-x-7">
        <Link href="/">Home</Link>
        <Link href="/notes">Notes</Link>
      </div>
    </div>
  );
}

export default Navbar;

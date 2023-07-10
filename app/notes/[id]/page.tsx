import Note from "@/components/Note";
import getNotes from "@/hooks/getNotes";
import Link from "next/link";

export default async function NoteIdPage({ params }: any) {
  const note = await getNotes(params.id, { next: { revalidate: 10 } });
  return (
    <div className="m-10 space-y-7">
      <Link href="/notes" className=" inline-block">
        <h1 className="font-bold text-xl">Notes</h1>
      </Link>
      <Note note={note} />
    </div>
  );
}

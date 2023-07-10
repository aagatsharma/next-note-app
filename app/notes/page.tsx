import CreateNote from "@/components/CreateNote";
import Note from "@/components/Note";
import getNotes from "@/hooks/getNotes";

export default async function NotesPage() {
  const getnotes = await getNotes("", { cache: "no-store" });
  const notes = getnotes?.items as any[];
  return (
    <div className="p-10">
      <CreateNote />
      <h1 className="font-bold text-2xl pt-10">Notes</h1>
      <div className="pt-10 flex gap-12 flex-wrap">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

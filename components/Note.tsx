import Link from "next/link";

export default function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  return (
    <div className="">
      <Link href={`/notes/${id}`} className="">
        <div className=" p-6 space-y-5 w-72 overflow-hidden bg-yellow-100 ">
          <h1 className="font-bold text-center">{title}</h1>
          <h5 className="">{content}</h5>
          <p>{created}</p>
        </div>
      </Link>
    </div>
  );
}

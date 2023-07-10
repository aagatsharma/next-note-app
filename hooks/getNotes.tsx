export default async function getNotes(id: string, route: object) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${id}`,
    route
  );
  const data = await res.json();
  return data;
}

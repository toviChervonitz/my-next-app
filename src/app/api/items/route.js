let items = [
  { id: 101, name: "מחשב", price: 3200 },
  { id: 102, name: "טלפון", price: 1200 },
];

export async function GET() {
  return Response.json(items);
}

export async function POST(req) {
  const body = await req.json();
  const { name, price } = body;

  const newItem = {
    id: Date.now(),
    name,
    price,
  };

  items.push(newItem);
  return Response.json({ msg: "נוסף בהצלחה", item: newItem });
}

export async function PUT(req) {
  const body = await req.json();
  const { id, name, price } = body;

  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return Response.json({ msg: "לא נמצא פריט לעדכון" }, { status: 404 });
  }

  items[index] = { ...items[index], name, price };
  return Response.json({ msg: "עודכן בהצלחה", item: items[index] });
}

export async function DELETE(req) {
  const body = await req.json();
  const { id } = body;

  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return Response.json({ msg: "לא נמצא פריט למחיקה" }, { status: 404 });
  }

  const deleted = items.splice(index, 1);
  return Response.json({ msg: "נמחק בהצלחה", item: deleted[0] });
}

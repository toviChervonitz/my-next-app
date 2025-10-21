let users = [
    { id: 1, name: "דנה", email: "dana@gmail.com", password: "1234" },
    { id: 2, name: "רועי", email: "roi@gmail.com", password: "abcd" },
];

export async function GET() {
    return Response.json(users);
}

export async function POST(req) {
    const body = await req.json();
    const { name, email, password } = body;

    const exists = users.find((u) => u.email === email);
    if (exists) {
        return Response.json({ msg: "משתמש כבר קיים" }, { status: 400 });
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
    };

    users.push(newUser);
    return Response.json({ msg: "נרשם בהצלחה", user: newUser });
}

export async function PUT(req) {
    const body = await req.json();
    const { email, password } = body;

    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
        return Response.json({ msg: "פרטים שגויים" }, { status: 401 });
    }

    return Response.json({ msg: "התחברת בהצלחה", user });
}

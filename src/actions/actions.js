export async function SendMessage(formdata) {
    const message = await formdata.get("message");
    const email = await formdata.get("email");
    const name = await formdata.get("name");

    return new Response(message, email, name);
}
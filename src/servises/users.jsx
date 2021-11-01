export async function getUsers() {
    const users = await fetch('https://watchlater.cloud.technokratos.com/get/array')
        .then((response) => response.json());
    return users;
}

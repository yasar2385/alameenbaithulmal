export async function loginUser(credentials) {
    // In a real app, the credentials would be checked against a
    // database and potentially a session token set in a cookie
    return new Promise((resolve) => {
        setTimeout(() => {
            // credentials.email === 'jane@doe.com' && credentials.password === 'next-intl'
            resolve();
        }, 1000);
    });
}
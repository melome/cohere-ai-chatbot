 
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const chat = async (message, id = "") => {
    const response = await fetch(`${baseUrl}/api/chat/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data;
}

export { chat }
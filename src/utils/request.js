import axios from "axios"

export const fetchRequest = async ({ url, method = "GET", body = {} }) => {
    if (method === "GET") {
        return await getRequest(url);
    }
    if (method === "POST") {
        return await postRequest(url, body);
    }
    if (method === "PUT") {
        return await updateRequest(url, body);
    }
    if (method === "DELETE") {
        return await deleteRequest(url);
    }

}

export const getRequest = async (url) => {
    const { data } = await axios.get(url);
    return data;
}

export const postRequest = async (url, body) => {
    const { data } = await axios.post(url, body);
    return data;
}

export const updateRequest = async (url, body) => {
    const { data } = await axios.put(url, body);
    return data;
}

export const deleteRequest = async (url) => {
    const { data } = await axios.delete(url);
    return data;
}
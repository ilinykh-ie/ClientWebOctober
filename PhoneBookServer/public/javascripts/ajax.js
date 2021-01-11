export function get(url, data) {
    return $.get(url, data);
}

export function post(url, data) {
    return $.post({
        url: url,
        contentType: "application/json",
        data: JSON.stringify(data)
    });
}
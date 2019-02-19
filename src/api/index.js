export const request = function (url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res =>
            res.text()
        ).then(response =>
            resolve(JSON.parse(response))
        );
    });
}
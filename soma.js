exports.handler = async (event) => {
    var n1 = Number(event.key1);
    var n2 = Number(event.key2);
    var soma = n1 + n2;

    const response = {
        statusCode: 200,
        body: JSON.stringify(`${soma}`)
    };
    return response;
};

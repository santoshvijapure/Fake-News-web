exports.response = (statusCode, method, message, data) => {
    return {
        statusCode: statusCode,
        method: method,
        message: message,
        data: data
    }
}
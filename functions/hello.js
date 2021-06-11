//domain/.netlifly/functions/hello
exports.handler = async function(event,context)
{
    return {
        statusCode:200,
        body :json.stringify({message: "Hello World"})
    }
}
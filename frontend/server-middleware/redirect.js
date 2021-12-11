export default function ({ strapiBaseUri }) {
    return function (req, res, next) {
        const { url } = req;
        if (url.includes('/uploads/')) {
            res.writeHead(301, { Location: `${strapiBaseUri}${url}` })
            res.end()
        }

        // res is the Node.js http response object

        // next is a function to call to invoke the next middleware
        // Don't forget to call next at the end if your middleware is not an endpoint!
        next()
    }
}


module.exports = {

    nonExistentFunction: () => {
        try {
            nonExistentFunction()
        } catch (err) {
            rollbar.error("api/try is an endpoint with a non-existent function")
        }
    }
}
function viewPage(limit, page) {
    return limit * (page - 1)
}

module.exports = { viewPage }
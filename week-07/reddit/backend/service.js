exports.postService = (body, OkPacket) => {
    let timestamp = Math.round(new Date().getTime() / 1000)
    let newPost = {
        "id": OkPacket.insertId,
        "title": body.title,
        "url": body.url,
        "timestamp": timestamp,
        "score": 0
    }
    return newPost
}
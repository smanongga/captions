module.exports = {
  getImages,
  getUsers,
  getUserByName,
  getCaptionsById,
  getImageById,
  postNewCaption,
  removeCaption,
  addUser,
  getUser,
  getImagesByUser
}

function getImages (conn) {
  return conn('images')
   .select()
   .orderByRaw('id DESC')
}

function getUsers (connection) {
  return connection('users').select()
}

function getUserByName (username, connection) {
  return connection('users')
    .select()
    .where('username', username)
}

function addUser (user, connection) {
  return connection('users')
    .insert(user)
}

function getUser (userId, connection) {
  return connection('users')
    .select()
    .where('id', userId)
}

function getCaptionsById (id, conn) {
  return conn('captions')
  .select('id', 'image_id as imageId', 'caption_text as captionText')
  .where('image_id', id)
}

function getImageById (id, conn) {
  return conn('images')
  .select()
  .where('id', id)
}

function postNewCaption (text, imageId, conn) {
  return conn('captions')
  .insert({
    image_id: imageId,
    caption_text: text
  })
}

function removeCaption (captionId, conn) {
  return conn('captions')
  .where('id', captionId)
  .del()
}

function getImagesByUser (userId, connection) {
  return getImages(connection)
    .where('user_id', userId)
}

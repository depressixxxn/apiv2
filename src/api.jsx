export const getAlbums = () =>
  fetch('https://jsonplaceholder.typicode.com/albums').then((r) => r.json())

export const getUser = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((r) =>
    r.json()
  )

export const getUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((r) => r.json())

export const getPhotos = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then((r) =>
    r.json()
  )

export const getAlbum = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then((r) =>
    r.json()
  )

export const getUsersAlbums = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`).then((r) =>
    r.json()
  )

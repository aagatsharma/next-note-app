migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8d0hro00x6oavnm")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8d0hro00x6oavnm")

  collection.name = "posts"

  return dao.saveCollection(collection)
})

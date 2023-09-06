function API(mainModel, {linkedModel, junctionModel = undefined}){

  this.getAll = function(req, res){
    mainModel.findAll({
      model: linkedModel,
      through: junctionModel
    })
    .then(tags => res.json(tags))
    .catch(error => console.error(error))
  }

  this.getId = function(req, res){
    const id = req.params.id
    // find a single tag by its `id`
    mainModel.findOne({
      model: linkedModel,
      through: junctionModel,
      where: {
        id: id
      }
    })
    .then(tags => res.json(tags))
    .catch(error => {console.error(error); res.json(error);})
  }

  this.create = function(req, res){
    // create a new tag
    mainModel.create(req.body)
    .then(data => res.json(data.dataValues))
    .catch(error => {console.error(error); res.json(error);})
  }

  this.update = function(req, res){
    const id = req.params.id
    // update a tag's name by its `id` value
    mainModel.update(
      req.body,
      {
        where: {
          id: id
        }
      }
    )
    .then(() => res.json({message: `Updated ${id}`}))
    .catch(error => {console.error(error); res.json(error);})
  }

  this.delete = function(req, res){
    const id = req.params.id
    // delete on tag by its `id` value
    mainModel.destroy({
      where: {
        id: id
      }
    })
    .then(() => res.json({message: `Deleted ${id}`}))
    .catch(error => {console.error(error); res.json(error);})
  }
}

module.exports = API
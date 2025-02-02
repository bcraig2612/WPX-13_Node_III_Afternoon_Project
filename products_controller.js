module.exports = {
    create: ( req, res, next ) => {
        console.log('post endpoint hit');
        const dbInstance = req.app.get( 'db' );
        const { name, description, price, image_url } = req.body;
        dbInstance.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status( 500 ).send({errorMessage: "Something went horribly wrong. We will find the solution shortly!"});
                console.log( err );
            });
    },
    getOne: ( req, res, next ) => {
        console.log('getOne endpoint hit');
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.read_product( id )
          .then( product => res.status(200).send( product ))
          .catch( err => {
            res.status(500).send({errorMessage: "Something went horribly wrong. We will find the solution shortly!!"});
            console.log(err)
          } );
      },
    
      getAll: ( req, res, next ) => {
        console.log('getAll endpoint hit');
        const dbInstance = req.app.get('db');
        dbInstance.read_products()
          .then( products => res.status(200).send( products ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Something went horribly wrong. We will find the solution shortly!!"});
            console.log(err)
          } );
      },
    
      update: ( req, res, next ) => {
        console.log('put endpoint hit');
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        dbInstance.update_product([params.id, query.desc])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Something went horribly wrong. We will find the solution shortly!!"});
            console.log(err)
          } );
      },
    
      delete: ( req, res, next ) => {
        console.log('delete endpoint hit');
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.delete_product(id)
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Something went horribly wrong. We will find the solution shortly!!"});
            console.log(err)
          } );
      }
    };
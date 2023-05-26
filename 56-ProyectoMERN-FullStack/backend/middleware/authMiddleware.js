import  jwt  from "jsonwebtoken";

const checkAuth = ( req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            
        } catch (error) {
   
        }
    } 

    const error = new Error('Token no Valido o Inexistente');
    res.status(403).json({ msg: error.message });
    next();
};

export default checkAuth;
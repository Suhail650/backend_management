const { constant } = require('../utils/constant')

const errorHandler = (err,req,res) => {

    
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({ tittle:"validation failed", message: err.message, stackTrace: err.stack})
            break;
        
        case constant.NOT_FOUND:
            res.json({ tittle:"not found", message: err.message, stackTrace: err.stack})
            break;

        case constant.UNAUTHORIZED:
            res.json({ tittle:"unAuthorized", message: err.message, stackTrace: err.stack})
            break;

        case constant.FORBIDDEN:
            res.json({ tittle:"forbidden", message: err.message, stackTrace: err.stack})
            break;
        
        case constant.SERVER_ERROR:
            res.json({ tittle:"Internal server error", message: err.message, stackTrace: err.stack})
            break;

        default:
            console.warn('\x1b[92m%s\x1b[0m','Everything is going fine, no errors encountered');
            break;
    }
};

module.exports = errorHandler;
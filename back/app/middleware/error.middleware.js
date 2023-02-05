export const notFound = (req,res,next) =>{
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
   
    next(error)
}


//в err мы получили от "throw new Error"
export const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    

    console.log('from middleware')
    res.status(statusCode)
    res.json({
        message:err.message,
        stack:err.stack
    })
/*   next() */
}
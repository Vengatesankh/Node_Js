//1.define a simple routing

export const mainPage = (req,res)=>{
    res.send("This is Main Page")
}
export const aboutPage = (req,res)=>{
    res.send("This is About Page")
}
export const contactPage = (req,res)=>{
    res.send("This is Contact Page")
}

//2.Dynamic Routing
export const dynamicRoute = (req,res)=>{
    const userName = req.params.username;
    res.send(`Welcome ${userName}`)
}

//3.Search with query
export const searchWithQuery = (req,res)=>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`)
}
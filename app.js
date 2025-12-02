function getQueryParams(query){
    if(!Object.keys(query).length){
        return 
    }

    let search  = ''

    for(const key in query){
        search += `${key}=${query[key]}`
    }

    return search
}
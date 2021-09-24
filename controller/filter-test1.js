class APIFeaturestest1{
    constructor(query,queryStiring){
        this.query = query;
        this.queryStiring = queryStiring
    }
    filter(){
        const test1query = {...this.queryStiring}
        const excludedfield = ['page','sort','limit','field']
        excludedfield.map(ele=>delete test1query[ele])
        let queryStr = JSON.stringify(test1query)
        queryStr=  queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`)
        this.query=this.query.find(JSON.parse(queryStr))
        return this ;
    }
    sort(){
        if(this.queryStiring.sort){ 
            const sortby = this.queryStiring.sort.split(',').join(' ')
             this.query= this.query.sort(sortby) 
        }else{
            this.query= this.query.sort('-date') 
        }
        return this
    }
    limitfield(){
        if(this.queryStiring.fields){
                const fields = this.queryStiring.fields.split(',').join(' ')
                this.query=this.query.select(fields) 
            }else{ 
                this.query=this.query.select('-__v') 
            }
            return this
    }
    paginate(){
        const page = this.queryStiring.page * 1 || 1;
        const limit = this.queryStiring.limit * 1 || 100;
        const skip = (page - 1) * limit
        this.query=this.query.skip(skip).limit(limit) // 1-3 in page 1 ,4-6 in page 2
        

       
        return this;
    }
}
module.exports = APIFeaturestest1
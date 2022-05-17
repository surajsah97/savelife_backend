const Record = require("../model/Record")

module.exports={
    recordCreate:async(req,res)=>{
        const {caseNumber,owner,count1,count2,count3,date,project}=req.body
        try{
            console.log({date});
            const status=req.body.status?req.body.status:"inactive"
           console.log(caseNumber);
            if(caseNumber){
                let check=await Record.findOne({caseNumber:caseNumber})
                console.log({check});
                if(!check){
                    let createRec=await Record.create({caseNumber,caseOwner:owner,dbCount1:count1,dbCount2:count2,dbCount3:count3,variable:date,project:project,status:status})
                    console.log({createRec});
                    if(createRec){
                        res.json({
                            statusCode:200,
                            status:"SUCCESS",
                            data:createRec
                        })
                    }
                }
                else{
                    res.json({
                        statusCode:400,
                        status:"ERROR"
                    })
                }
            }
            else{
                res.json({
                    statusCode:400,
                    status:"ERROR"
                })
            }

        }
        catch(err){
            console.log({err});
            res.json({
                statusCode:401,
                status:"ERROR"
            })
        }

    },
    getRecords:async(req,res)=>{
        console.log(req.body);
        try{
            const data=await Record.find()
            console.log({data});
            res.json({
                statusCode:200,
                status:"SUCCESS",
                data:data
            })

        }
        catch(err){
            res,json({
                statusCode:401,
                status:"ERROR"
            })
        }
    },
    findRecords:async(req,res)=>{
        console.log(req.body);
        try{
            const data=await Record.findOne({id:req.body.id})
            console.log({data});
            res.json({
                statusCode:200,
                status:"SUCCESS",
                data:data
            })

        }
        catch(err){
            res,json({
                statusCode:400,
                status:"ERROR"
            })
        }
    },
    recordUpdate:async(req,res)=>{
        console.log(req.body.status,"=================================>");
        const {caseNumber,owner,count1,count2,count3,date,project,status}=req.body
        try{
            const caseUpdate=await Record.updateOne({id:req.body.id},{caseNumber,caseOwner:owner,dbCount1:count1,dbCount2:count2,dbCount3:count3,variable:date,project:project,status:status,status})
            console.log({recordUpdate});
            if(caseUpdate){
                res.json({
                    statusCode:200,
                    status:"SUCCESS",
                    data:caseUpdate
                })

            }

        }
        catch(err){
            res.json({
                statusCode:400,
                status:"ERROR"
            })
        }
    },
    deleteCase:async(req,res)=>{
        console.log(req.body);
        try{
            const delCase=await Record.deleteOne({id:req.body.id})
            console.log({delCase});
            if(delCase){
                res.json({
                    statusCode:200,
                    status:"SUCCESS",
                    data:delCase
                })
            }
        }
        catch(err){
            res.json({
                statusCode:400,
                status:"ERROR"
            })
        }
    },
    caseSearch:async(req,res)=>{
        console.log(req.bod,"============================");
        try{
            let search=await Record.find({caseNumber:{contains:req.body.Query}})
            if(search.length>0){
                res.json({
                    statusCode:200,
                    status:"SUCCESS",
                    data:search
                })
            }
        }
        catch(err){

        }
    }

}
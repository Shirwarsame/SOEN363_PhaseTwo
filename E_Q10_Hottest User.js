use SOEN363_part2;
db.getCollection("yelp_academic_dataset_user").aggregate(
    [ 
        { 
            "$sort" : { 
                "compliment_hot" : -1
            }
        }, 
        { 
            "$limit" : 1.0
        },
        {
            "$project" : {
                "name" : true,
                 "compliment_hot" : true
             }
        }
    ], 
    { 
        "allowDiskUse" : false
    }
);
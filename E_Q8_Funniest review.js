use SOEN363_part2;
db.getCollection("yelp_academic_dataset_review").aggregate(
    [ 
        { 
            "$sort" : { 
                "funny" : -1.0
            }
        }, 
        { 
            "$limit" : 1.0
        },
        {
               "$project" : {
                   "funny" : true,
                   "text" : true
               }
        }
    ], 
    { 
        "allowDiskUse" : false
    }
);

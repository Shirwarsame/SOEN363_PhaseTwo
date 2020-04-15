use SOEN363_part2;
db.getCollection("yelp_academic_dataset_review").aggregate(
    [
        { 
            "$match" : { 
                "text" : /.*flabbergasted.*/i
            }
        }
    ], 
    { 
        "allowDiskUse" : false
    }
);

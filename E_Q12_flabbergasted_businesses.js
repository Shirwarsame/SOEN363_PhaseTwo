use SOEN363_part2;
db.getCollection("yelp_academic_dataset_business").aggregate(
    [
        { 
            "$lookup" : { 
                "from" : "yelp_academic_dataset_review_flabbergasted", 
                "localField" : "business_id", 
                "foreignField" : "business_id", 
                "as" : "flabber"
            }
        }
    ], 
    { 
        "allowDiskUse" : false
    }
);

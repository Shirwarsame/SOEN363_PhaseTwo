use SOEN363_part2;
db.getCollection("yelp_academic_dataset_business").find(
    { 
        "latitude" : { 
            "$gt" : NumberLong(26)
        }, 
        "longitude" : { 
            "$lt" : NumberLong(-75)
        }
    }
).sort(
    { 
        "review_count" : NumberInt(-1)
    }
).limit(1);

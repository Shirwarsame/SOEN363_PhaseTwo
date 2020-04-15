use SOEN363_part2;
db.getCollection("yelp_academic_dataset_business").find(
    { 
        "name" : "McDonald's", 
        "review_count" : { 
            "$gte" : NumberInt(50)
        }
    }, 
    { 
        "name" : 1.0, 
        "stars" : 1.0, 
        "review_count" : 1.0, 
        "city" : 1.0
    }
).sort(
    { 
        "stars" : -1.0
    }
).limit(1);

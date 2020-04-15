use SOEN363_part2;
db.getCollection("yelp_academic_dataset_business").find(
    { 
        "state" : "QC", 
        "categories" : /.*sushi.*/i, 
        "review_count" : { 
            "$gte" : NumberInt(100)
        }
    }, 
    { 
        "name" : 1.0, 
        "city" : 1.0, 
        "stars" : 1.0
    }
).sort(
    { 
        "stars" : -1.0
    }
);

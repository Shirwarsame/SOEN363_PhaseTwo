use SOEN363_part2;
db.getCollection("yelp_academic_dataset_business").find(
    { 
        "state" : "QC", 
        "categories" : /.*Restaurants.*/i, 
        "stars" : { 
            "$lte" : 2.0
        }, 
        "review_count" : { 
            "$gte" : 50.0
        }
    }, 
    { 
        "name" : 1.0, 
        "stars" : 1.0, 
        "review_count" : 1.0, 
        "city" : 1.0
    }
);

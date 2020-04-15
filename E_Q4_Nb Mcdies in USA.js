use SOEN363_part2;
db.getCollection("yelp_academic_dataset_business").find(
    { 
        "$and" : [
            { 
                "longitude" : { 
                    "$gt" : -125.0
                }
            }, 
            { 
                "longitude" : { 
                    "$lte" : -65.0
                }
            }, 
            { 
                "latitude" : { 
                    "$gt" : 23.0
                }
            }, 
            { 
                "latitude" : { 
                    "$lt" : 49.0
                }
            }, 
            { 
                "name" : "McDonald's"
            }
        ]
    }
);

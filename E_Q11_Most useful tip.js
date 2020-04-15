use SOEN363_part2;
db.getCollection("yelp_academic_dataset_tip").find(
    { 
        "date" : { 
            "$gte" : "2010-01-01 00:00:00"
        }
    }, 
    { 
        "text" : 1.0, 
        "date" : 1.0, 
        "compliment_count" : 1.0
    }
).sort(
    { 
        "compliment_count" : -1.0
    }
).limit(1);

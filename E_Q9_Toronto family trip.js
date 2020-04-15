use SOEN363_part2;
db.getCollection("yelp_academic_dataset_business").find(
    { 
        "categories" : /.*Hotel.*/i, 
        "attributes.DogsAllowed" : "True", 
        "city" : "Toronto", 
        "attributes.GoodForKids" : "True", 
        "is_open" : NumberInt(1)
    }, 
    { 
        "business_id" : 0.0, 
        "latitude" : 0.0, 
        "longitude" : 0.0, 
        "is_open" : 0.0, 
        "_id" : 0.0
    }
).sort(
    { 
        "stars" : -1.0
    }
);

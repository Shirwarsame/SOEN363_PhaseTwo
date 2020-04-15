use SOEN363_part2;
db.getCollection("yelp_academic_dataset_user").aggregate(
    [
        { 
            "$project" : { 
                "_id" : NumberInt(0), 
                "yelp_academic_dataset_user" : "$$ROOT"
            }
        }, 
        { 
            "$lookup" : { 
                "localField" : "yelp_academic_dataset_user.user_id", 
                "from" : "yelp_academic_dataset_review", 
                "foreignField" : "user_id", 
                "as" : "yelp_academic_dataset_review"
            }
        }, 
        { 
            "$unwind" : { 
                "path" : "$yelp_academic_dataset_review", 
                "preserveNullAndEmptyArrays" : false
            }
        }, 
        { 
            "$sort" : { 
                "yelp_academic_dataset_review.date" : NumberInt(1)
            }
        }, 
        { 
            "$project" : { 
                "yelp_academic_dataset_user.name" : "$yelp_academic_dataset_user.name", 
                "yelp_academic_dataset_review.text" : "$yelp_academic_dataset_review.text", 
                "yelp_academic_dataset_review.stars" : "$yelp_academic_dataset_review.stars", 
                "_id" : NumberInt(0)
            }
        }, 
        { 
            "$limit" : NumberInt(1)
        }
    ], 
    { 
        "allowDiskUse" : true
    }
);


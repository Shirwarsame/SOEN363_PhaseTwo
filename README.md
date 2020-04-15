# SOEN363_PhaseTwo

Link to the dataset that must be downloaded:
https://www.kaggle.com/yelp-dataset/yelp-dataset#yelp_academic_dataset_business.js

This project uses MongoDB and requires the installation of both Mongo and Studio 3T

Content: This dataset is a subset of Yelp's businesses, reviews, and user data. This subset takes a look at different metropolitan areas in North America.
- 5,200,000 user reviews
- Information on 174,000 businesses
-The data spans 11 metropolitan areas

Size: 10 GB

Collections:
- yelp_academic_dataset_business.json
- yelp_academic_dataset_checkin.json
- yelp_academic_dataset_review.json
- yelp_academic_dataset_tip.json
- yelp_academic_dataset_user.json

You will have to run these steps everytime you want to use your MongoDB database and
connect to it through studio 3T. Here are the steps to create the database:
- Click on “Database” in the top menu -> click on “Add Database”
- Choose a name for your database
- We got the following result

Once again, we used the Studio3T interface to load the datasets into our database. Here is how
we did it:
- Right-click on the name of your created database, then click on import collections
- Click on the “+”
- Select all collections from the dataset
- Click on “execute”
- The collections should have loaded into your database

To run the code simply insert the queries into the IntelliShell from Studio 3T

This linux script performs 3 queries in ElasticSearch.

Each query returns a single value.

If a value is returned by at least 1 query then you can draw 2 conclusions:
 1. ElasticSearch is online
 2. New data is successfully ingested.


The script

 1. dinamically updates to perform:
  a. pattern match of the current index definition
  b. automatic search for the latest index

 2. prints the status code of the curl http request
  a. if it's 200 then everything is ok.
  b. if it's not 200, then there is a problem.
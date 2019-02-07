All Things Movies/Movie Reviews
============================


API Used
--------
In order to get all review articles and images, the New York Times Movie Reviews API is used. [Signup for an API key here](https://developer.nytimes.com/).

Frameworks Used
---------------
For the frontend, React is used. Project setup is initially set up using `npx create-react-app`.

TODO
----
- Make movie item heigh adapt to image size and implement `More info` button when the overview text is too long
- Add link to each movie title for movie under `In Theatres` and `Most Popular`
- Add IMDB rating to each movie item
- Implement `News` 
- Make responsive
- Handle errors, instead of the web browser throwing errors like can't iterate over undefined.
- Handle data not found
- API key not valid, return json: `{"fault":{"faultstring":"Invalid ApiKey","detail":{"errorcode":"oauth.v2.InvalidApiKey"}}}`, for NY times reviews API.
- Add font awesome (?), depends on the design change

Done
----
- Refactor so that `In Theatres` and `Most Popular` reuse the same component 
- Handle return data that has null multimedia values in `Search`

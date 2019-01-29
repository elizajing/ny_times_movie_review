New York Times Movie Reviews
============================


API Used
--------
In order to get all review articles and images, the New York Times Movie Reviews API is used. [Signup for an API key here](https://developer.nytimes.com/).

Frameworks Used
---------------
For the frontend, React is used. Project setup is initially set up using `npx create-react-app`.

TODO
----
Handle errors, instead of the web browser throwing errors like can't iterate over undefined.
- Handle return data that has null multimedia values in `Search` -> done
- Add font awesome
- Not found
- API key not valid, return json: `{"fault":{"faultstring":"Invalid ApiKey","detail":{"errorcode":"oauth.v2.InvalidApiKey"}}}`

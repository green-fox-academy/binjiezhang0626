-- SQL Movie-Rating Query Exercises --
-- q1 --
SELECT title FROM Movie
WHERE director = "Steven Spielberg";
-- q2 --
SELECT DISTINCT Movie.year from Rating, Movie
WHERE Movie.mID = Rating.mID AND stars >= 4
ORDER BY Movie.year ASC;
-- q3 --
SELECT DISTINCT Movie.title FROM Movie,Rating
WHERE Movie.mID NOT IN (SELECT DISTINCT mID FROM rating);
-- q4 --
SELECT DISTINCT Reviewer.name FROM Reviewer, Rating
WHERE Reviewer.rID = Rating.rID AND Rating.ratingDate is NULL;
-- q5 --
SELECT
  DISTINCT Reviewer.name AS REVIEWER_NAME, 
  Movie.title AS MOVIE_TITLE, 
  Rating.stars AS STARS,
  Rating.ratingDate AS DATE
FROM Movie, Reviewer, Rating
WHERE
  Rating.rID = Reviewer.rID AND Rating.mID = Movie.mID
ORDER BY
  Reviewer.name,
  Movie.title,
  Rating.stars;

-- SQL Movie-Rating Query Exercises Extras --
-- q1 --
SELECT DISTINCT Reviewer.name FROM Movie,Reviewer,Rating
WHERE Movie.title = "Gone with the Wind"
      AND Movie.mID = Rating.mID
      And Rating.rID = Reviewer.rID;
-- q2 --
SELECT
  Reviewer.name,
  Movie.title,
  Rating.stars
FROM Movie,Reviewer,Rating
WHERE Movie.mID = Rating.mID
  AND Rating.rID = Reviewer.rID
  AND Movie.director = Reviewer.name;
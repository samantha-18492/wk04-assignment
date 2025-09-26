CREATE TABLE book_reviews (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT,
  review TEXT,
  rating INT,
  CHECK (rating BETWEEN 1 AND 5)
)

--changed name of "review" column to "comment" to avoid future confusion. i did this in the table editor view

INSERT INTO book_reviews (username, comment, rating) VALUES ('Mia', 'Loved this book, it really made me think about my own choices.', 5),
('Oliver', 'Such a cozy read, I didn’t want to put it down.', 4),
('Sophie', 'Kinda sad at first but it ends on such a hopeful note.', 5),
('Ethan', 'Cool idea with all the different lives, really enjoyed it.', 4),
('Lily', 'It dragged a bit in places but I liked the message.', 3),
('Jacob', 'One of those books that stays with you after you finish.', 5),
('Amelia', 'Made me cry but in a good way!', 5),
('Noah', 'Honestly, I couldn’t get into it at all.', 1),
('Isabella', 'Felt like a warm hug in book form.', 5),
('Lucas', 'Interesting idea but kind of slow for me.', 2)
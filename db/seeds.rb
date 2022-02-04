# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
Video.destroy_all
User.destroy_all
Comment.destroy_all
Like.destroy_all

user1 = User.create!({username: 'demo', password:'password'})
user2 = User.create!({username: 'thiagom', password:'password'})
user3 = User.create!({username: 'masteryoda', password:'password'})
user4 = User.create!({username: 'dumbledore', password:'password'})
user5 = User.create!({username: 'einstein', password:'password'})
user6 = User.create!({username: 'mastersplinter', password:'password'})
user7 = User.create!({username: 'hermione', password:'password'})
user8= User.create!({username: 'bettyboop', password:'password'})

# Videos
vid2 = Video.new(title: "Typing 247WPM!!! ", description: "Learn how to type super fast!!", user_id: user1.id)
file2 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/typing.mp4")
vid2.uploaded_video.attach(io: file2, filename: "type.mp4")
pic2 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/type_sp_tumb.png")
vid2.thumbnail.attach(io: pic2, filename: "typethumb.png")
vid2.save

vid3 = Video.new(title: "Learn Algorithms and data structures now!", description: "Fastest way to learn algorithms and data structures!", user_id: user2.id)
file3 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/alg.mp4")
vid3.uploaded_video.attach(io: file3, filename: "alg.mp4")
pic3 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/alg_thumb.png")
vid3.thumbnail.attach(io: pic3, filename: "algthumb.png")
vid3.save

vid4 = Video.new(title: "Cooking like a master cheff!!", description: "Make an amazing five star dinner!", user_id: user4.id)
file4 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/master.mp4")
vid4.uploaded_video.attach(io: file4, filename: "cheff.mp4")
pic4 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/cheff_thumb.png")
vid4.thumbnail.attach(io: pic4, filename: "cheffthumb.png")
vid4.save

vid5 = Video.new(title: "Learn how to become a champion!", description: "The hidden technics that made me gold medal at olympics ", user_id: user1.id)
file5 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/swim.mp4")
vid5.uploaded_video.attach(io: file5, filename: "swim.mp4")
pic5 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/swming_thumb.png")
vid5.thumbnail.attach(io: pic5, filename: "swimthumb.png")
vid5.save

vid6 = Video.new(title: "The secret steps of a professional dancer!", description: "Kill to kill on a dance floor", user_id: user1.id)
file6 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/dace.mp4")
vid6.uploaded_video.attach(io: file6, filename: "dance.mp4")
pic6 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/dance.png")
vid6.thumbnail.attach(io: pic6, filename: "dancehumb.png")
vid6.save



vid7 = Video.new(title: "A complete walk through the garden master bonsai", description: "A rare moment that you can see a garden master in action!", user_id: user2.id)
file7 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/garden.mp4")
vid7.uploaded_video.attach(io: file7, filename: "garden.mp4")
pic7 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/garden.png")
vid7.thumbnail.attach(io: pic7, filename: "gardenthumb.png")
vid7.save

vid8 = Video.new(title: "Get muscle fast and become a bodybuilder!", description: " Complete fitness program to become a bodybuilder!", user_id: user1.id)
file8 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/gym.mp4")
vid8.uploaded_video.attach(io: file8, filename: "gym.mp4")
pic8 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/gym.png")
vid8.thumbnail.attach(io: pic8, filename: "gymthumb.png")
vid8.save


vid9 = Video.new(title: "CSS advanced pro survival kit", description: "The CSS crash course tha will take you to the next level!", user_id: user3.id)
file9 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/css.mp4")
vid9.uploaded_video.attach(io: file9, filename: "css.mp4")
pic9 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/css.png")
vid9.thumbnail.attach(io: pic9, filename: "cssthumb.png")
vid9.save

vid10 = Video.new(title: "Learn How to Play Like a Pro", description: "Hey guys, I came across an apprenticeship offer from Dropbox last week and got so excited I wrote a song for my application. Thought I'd share with you all to get your feedback!", user_id: user1.id)
file10 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/IMG_3057.mp4")
vid10.uploaded_video.attach(io: file10, filename: "guitar.mp4")
pic10 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/Screen+Shot+2022-01-21+at+6.47.36+PM.png")
vid10.thumbnail.attach(io: pic10, filename: "guitarthumb.png")
vid10.save

# Comments
com1 = Comment.create!(body: "Thanks for sharing your secrets!", user_id: user4.id, video_id: vid2.id)
com2 = Comment.create!(body: "Wow, you are killing!!", user_id: user4.id, video_id: vid2.id)
Comment.create!(body: "omg, how you did that?", user_id: user4.id, video_id: vid2.id)
Comment.create!(body: "That's what I'm talking about...", user_id: user7.id, video_id: vid2.id)
Comment.create!(body: "I can't stop watching you!", user_id: user8.id, video_id: vid3.id)
Comment.create!(body: "Can't wait to learn it!", user_id: user5.id, video_id: vid3.id)
Comment.create!(body: "Check em out!", user_id: user2.id, video_id: vid4.id)
Comment.create!(body: "HAHAHAHAHAHA ", user_id: user4.id, video_id: vid4.id)
com3 = Comment.create!(body: "No way!!!! lol.", user_id: user4.id, video_id: vid5.id)
Comment.create!(body: "Hahaha I agree", user_id: user5.id, video_id: vid5.id)
Comment.create!(body: "Is this a real video?!", user_id: user5.id, video_id: vid6.id)
Comment.create!(body: "LOLLLL", user_id: user2.id, video_id: vid6.id)
Comment.create!(body: "I wish I have known that before graduating...", user_id: user4.id, video_id: vid7.id)
Comment.create!(body: "That was so good", user_id: user2.id, video_id: vid7.id)
Comment.create!(body: "Level Master Yoda", user_id: user3.id, video_id: vid7.id)
Comment.create!(body: "Hands down, he's a master!", user_id: user5.id, video_id: vid6.id)
Comment.create!(body: "Somehow, I end up here every single day.", user_id: user6.id, video_id: vid6.id)
Comment.create!(body: "Learning a lot with this guy, thanks.", user_id: user7.id, video_id: vid7.id)
Comment.create!(body: "I was laughing!! LOL.", user_id: user8.id, video_id: vid7.id)
Comment.create!(body: "I invited everyone to come and watch this!!", user_id: user7.id, video_id: vid7.id)

#Likes
# com3.likes << Like.new(liker_id: 1, kind: "like")
# com3.likes << Like.new(liker_id: 2, kind: "dislike")
# vid1.likes << Like.new(liker_id: 1, kind: "like")
# vid2.likes << Like.new(liker_id: 1, kind: "like")
# vid3.likes << Like.new(liker_id: 1, kind: "like")
# vid4.likes << Like.new(liker_id: 1, kind: "like")
# vid5.likes << Like.new(liker_id: 1, kind: "like")
# vid6.likes << Like.new(liker_id: 1, kind: "like")
# vid7.likes << Like.new(liker_id: 1, kind: "like")
# vid1.likes << Like.new(liker_id: 2, kind: "like")
# vid2.likes << Like.new(liker_id: 2, kind: "like")
# vid3.likes << Like.new(liker_id: 2, kind: "like")
# vid4.likes << Like.new(liker_id: 2, kind: "like")
# vid5.likes << Like.new(liker_id: 2, kind: "like")
# vid8.likes << Like.new(liker_id: 2, kind: "like")
# vid7.likes << Like.new(liker_id: 2, kind: "like")
# vid1.likes << Like.new(liker_id: 3, kind: "like")
# vid2.likes << Like.new(liker_id: 3, kind: "like")
# vid3.likes << Like.new(liker_id: 3, kind: "like")
# vid8.likes << Like.new(liker_id: 3, kind: "like")
# vid5.likes << Like.new(liker_id: 3, kind: "like")
# vid6.likes << Like.new(liker_id: 3, kind: "like")
# vid7.likes << Like.new(liker_id: 3, kind: "like")
# vid1.likes << Like.new(liker_id: 4, kind: "like")
# vid2.likes << Like.new(liker_id: 4, kind: "like")
# vid3.likes << Like.new(liker_id: 4, kind: "like")
# vid8.likes << Like.new(liker_id: 4, kind: "like")
# vid5.likes << Like.new(liker_id: 4, kind: "like")
# vid6.likes << Like.new(liker_id: 4, kind: "like")
# vid7.likes << Like.new(liker_id: 4, kind: "like")
# vid1.likes << Like.new(liker_id: 5, kind: "like")
# vid8.likes << Like.new(liker_id: 5, kind: "like")
# vid3.likes << Like.new(liker_id: 5, kind: "like")
# vid4.likes << Like.new(liker_id: 5, kind: "like")
# vid5.likes << Like.new(liker_id: 5, kind: "like")
# vid6.likes << Like.new(liker_id: 5, kind: "like")
# vid7.likes << Like.new(liker_id: 5, kind: "like")
# vid8.likes << Like.new(liker_id: 1, kind: "dislike")
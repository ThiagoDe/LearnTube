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

user1 = User.create!({username: 'yuhuan', password:'password'})
user2 = User.create!({username: 'thiagom', password:'password'})
user3 = User.create!({username: 'thiagom2', password:'password'})
user4 = User.create!({username: 'thiagom3', password:'password'})
# Videos
vid2 = Video.new(title: "Typing 247WPM!!!", description: "Learn how to type super fast!!", user_id: user1.id)
file2 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/typing.mp4")
vid2.uploaded_video.attach(io: file2, filename: "type.mp4")
pic2 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/type_sp_tumb.png")
vid2.thumbnail.attach(io: pic2, filename: "typethumb.png")
vid2.save

vid3 = Video.new(title: "Learn Algorithms", description: "Fastest way to learn algorithms and data structures!", user_id: user2.id)
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





vid7 = Video.new(title: "Learn How to Play Like a Pro", description: "Hey guys, I came across an apprenticeship offer from Dropbox last week and got so excited I wrote a song for my application. Thought I'd share with you all to get your feedback!", user_id: user1.id)
file7 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/IMG_3057.mp4")
vid7.uploaded_video.attach(io: file7, filename: "guitar.mp4")
pic7 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/Screen+Shot+2022-01-21+at+6.47.36+PM.png")
vid7.thumbnail.attach(io: pic7, filename: "guitarthumb.png")
vid7.save
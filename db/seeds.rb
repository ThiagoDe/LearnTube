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
# Videos
vid2 = Video.new(title: "Learn How to Play Like a Pro", description: "Hey guys, I came across an apprenticeship offer from Dropbox last week and got so excited I wrote a song for my application. Thought I'd share with you all to get your feedback!", user_id: user1.id)
file2 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/IMG_3057.mp4")
vid2.uploaded_video.attach(io: file2, filename: "guitar.mp4")
pic2 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/Screen+Shot+2022-01-21+at+6.47.36+PM.png")
vid2.thumbnail.attach(io: pic2, filename: "guitarthumb.png")
vid2.save

vid3 = Video.new(title: "Learn Algorithms", description: "Fastest way to learn algorithms and data structures!", user_id: user2.id)
file3 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/alg.mp4")
vid3.uploaded_video.attach(io: file3, filename: "alg.mp4")
pic3 = open("https://learn-tube-seeds.s3.us-west-1.amazonaws.com/thumb_alg.png")
vid3.thumbnail.attach(io: pic3, filename: "algthumb.png")
vid3.save
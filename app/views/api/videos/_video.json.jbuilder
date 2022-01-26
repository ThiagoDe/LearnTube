json.extract! video, :id, :title, :description, :user_id, :views, :created_at

json.user video.user
json.createdDate video.created_at.strftime("%b %d, %Y")
json.videoUrl url_for(video.uploaded_video)

if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
else
    json.thumbnail "none"
end
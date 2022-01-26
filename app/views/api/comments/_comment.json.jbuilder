json.extract! comment, :id, :body, :video_id, :created_at, :user_id

json.user comment.user
json.video comment.video
json.createdDate comment.created_at.strftime("%b %d, %Y")
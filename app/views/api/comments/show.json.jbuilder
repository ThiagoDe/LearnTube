if !!@comment
    json.partial! "api/comments/comment", comment: @comment
end
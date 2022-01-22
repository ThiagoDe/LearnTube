class Like < ApplicationRecord
    validates :num_likes, :video_id, :user_id, presence: true

    belongs_to :user
    belongs_to :video
end

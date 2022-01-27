class Video < ApplicationRecord
    validates :title, :views, presence: true

    belongs_to :user

    has_many :comments
    has_many :likes
    # db ----
    has_one_attached :uploaded_video
    has_one_attached :thumbnail
end

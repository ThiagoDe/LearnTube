class Video < ApplicationRecord
    validates :title, :views, presence: true

    belongs_to :user

    has_many :comments
    has_many :likes
end

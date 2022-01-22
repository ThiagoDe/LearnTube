class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :num_likes, null: false
      t.integer :user_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end
    add_index :likes, [:video_id, :user_id], unique: true # a video can only have on like per user
  end
end

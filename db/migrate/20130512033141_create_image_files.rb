class CreateImageFiles < ActiveRecord::Migration
  def change
    create_table :image_files do |t|
      t.string :path
      t.integer :gif_id

      t.timestamps
    end
  end
end

class RemoveUrlFromGifs < ActiveRecord::Migration
  def change
    remove_column(:gifs, :url, :string)
  end
end

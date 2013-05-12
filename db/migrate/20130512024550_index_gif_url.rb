class IndexGifUrl < ActiveRecord::Migration
  def change
    add_index("Gifs", :url)
  end
end

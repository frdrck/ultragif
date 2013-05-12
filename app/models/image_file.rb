class ImageFile < ActiveRecord::Base
  attr_accessible :gif_id, :path
  belongs_to :gif
  def self.new_from_upload(file)
    binding.pry
    image = ImageFile.new
    directory = "app/assets/images/uploads/"
    path = File.join(directory, SecureRandom.hex(5)+File.extname(file.original_filename.downcase))
    File.open(path, "wb") { |f| f.write(file.tempfile.read) }
    image.path = path
    return image
  end
end

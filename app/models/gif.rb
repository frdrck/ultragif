class Gif < ActiveRecord::Base

  def self.new_from_base_64(base_64_data)
    binding.pry
    gif = Gif.new
    directory = "app/assets/images/gifs/"
    path = File.join(directory, SecureRandom.hex(5)+".gif")
    File.open(path, "wb") { |f| f.write(Base64.decode64(base_64_data)) }
    gif.path = path
    return gif
  end

end

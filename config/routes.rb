Ultragif::Application.routes.draw do
  resources :image_files


  resources :gifs, except: [:edit, :destroy]
end
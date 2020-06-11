Rails.application.routes.draw do
  resources :categories
  resources :events
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify' 
  get '/categories/:category_id/events/:event_id', to: 'events#event_to_category'
end

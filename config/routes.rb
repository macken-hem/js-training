Rails.application.routes.draw do
  # resources :drops, only: [:index, :create]
  root 'main#index'
  get '/drops' => 'drop#index'
  post '/drops' => 'drop#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

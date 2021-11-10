Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home
  root :to => redirect('/home')
  get 'status', to: 'session#status'
  post 'exists', to: 'session#exists'
  # get 'profile', to: 'profile#show'
  resources :profile
  resources :team
  resources :team
end

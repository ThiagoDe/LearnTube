Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
#namespacep prefix url path
    namespace :api, defaults: { format: :json } do 
    resources :users
    resources :videos do
      resources :comments
    end
    resources :likes
    resource :session, only: [:create, :destroy]
  end
end

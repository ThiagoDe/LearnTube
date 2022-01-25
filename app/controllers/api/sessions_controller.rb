class Api::SessionsController < ApplicationController
    before_action :require_signed_in!, only: [:destroy]


    def create
        @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
        )

        if @user
            sign_in!(@user)
            render "api/users/show"
        else
            flash.now[:errors] = ['Invalid username or password']
            render :new
        end
    end

    def destroy
        if current_user
            sign_out!
            render json: { message: 'Logout successful'}
        else
            render json: { error: "You must Login first."}, status: 404
        end
    end   
end

class Api::SessionsController < ApplicationController
    # before_action :require_signed_in!, only: [:destroy]


    def create
        @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
        )

        if @user.nil?
            # debugger 
            if params[:user][:password].empty? && params[:user][:username].empty?
                # debugger
                render json: ["Username and Password cannot be empty"], status: 401
            elsif params[:user][:username].empty?
                render json: ["Username can't be empty"], status: 401
            elsif params[:user][:password].empty?
                render json: ["Password can't be empty"], status: 401
            else
                render json: ["Wrong credentials!"], status: 401
            end 
        else 
            sign_in!(@user)
            render "api/users/show"
       
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

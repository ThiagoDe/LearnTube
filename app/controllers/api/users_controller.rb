class Api::UsersController < ApplicationController
    before_action :require_signed_in!, only: [:edit, :update, :destroy, :index, :show]
    #not sure if is need it, also how deal with it on the front

    def index
        @users = User.all
        render json: @users 
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            sign_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update_attributes(user_params)
            render :show
        elsif !@user
            render json: ['Could not locate user'], status: 400
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if (@user)
            render :show
        else
            render json: ['not a valid user'], status:422
        end
    end

    def destroy
        @user = User.find_by(id: params[:id])
        if @user
            @user.destroy
            render :show
        else
            render ['Could not find user']
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end

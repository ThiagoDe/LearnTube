class Api::VideosController < ApplicationController
    before_action :require_signed_in!, only: [:create, :update, :destroy]#maybe update in the future?

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find_by(id: params[:id])
        # debugger
        if @video
            render :show
        else
            render json: ["video not found"], status: 422
        end
    end

    def create
        if params[:video][:uploaded_video].empty?
            render json: ["Please attach a video"], status: 422
            return nil
        end

        @video = Video.new(video_params)
        @video.user_id = current_user.id

        if @video.save
            render :show
        else
            render json: @video.errors.full_message, status: 422
        end
    end

    def destroy
        @video = Video.find(params[:id]) #or current_user.videos.find(params[:id])

        if @video && @video.user_id == current_user.id
            @video.destroy
            render json: ["Video successfully deleted"]
        else
            render json: ["You can't delete this video, invalid credentials."], status: 403 #forbidden
        end
    end

    #maybe need to add number of views and a search methos


    private 

    def video_params
        params.require(:video).permit(:title, :description, :views, :user_id, :thumbnail)
    end
end

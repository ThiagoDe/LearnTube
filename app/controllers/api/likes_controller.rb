class Api::LikesController < ApplicationController

    def index
        #should I select just the likes that matches video_id params?
        @likes = Like.all
        render :index 
    end

    def create

        @like = Like.new(like_params)
        @like.user_id = current_user.id
        @like.video_id = params[:video_id]

        if @like.save
            render :show
        else
            render json: @like.errors.full_message, status: 422
        end
    end    

    #not sure how to implement update and destroy

    def update ##
        # like = Like.find_by(id: params[:id]);
        # if like.update(like_params)
        #     @likes = Like.all
        #     if (params[:like][:video_id])
        #         @likes = @likes.where(video_id: params[:like][:video_id])
        #     end
        #     render "/api/likes/index"
        # else
        #     render json: like.errors.full_messages, status: 422 
        # end
    end

    def destroy
        # like = Like.find_by(id: params[:id]);
        # if like.destroy
        #     @likes = Like.all
        #     if (params[:like][:video_id])
        #         @likes = @likes.where(video_id: params[:like][:video_id])
        #     end
        #     render :index
        # else
        #     render json: like.errors.full_messages, status: 422 
        # end
    end
    
    private

    def like_params
        params.require(:like).permit(:user_id, :video_id, :num_likes)
    end   
end

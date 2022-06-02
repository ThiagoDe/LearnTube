# README

<p align="center">
    <img width="300" style="text-align: center;" alt="learn_hat_logo" src="https://user-images.githubusercontent.com/89544506/161329079-899bb581-f0e4-400f-b4eb-82306b01692a.png">
</p>

LearnTube is an online video sharing and social media platform that provides content, tutorials, courses, and material for learning lovers!

# Technologies:

* Ruby on Rails
* React/Redux
* PostgreSQL
* JavaScript / AJAX / JBuilder
* HTML5 / CSS


![My First Board](https://user-images.githubusercontent.com/89544506/169633131-68c84704-2285-4d10-a098-72332061207c.jpg)


# Features

* ## User account creation and login

![ezgif com-gif-maker](https://user-images.githubusercontent.com/89544506/161333065-8259a9ff-ae1b-4d02-915d-2a787d4fa07d.gif)

Creating new users and making sure that all the credentials are validated before submitting them to the database.
Handling errors and maintaining great UX

```rb
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
```

* ## Search Bar

![search_gif](https://user-images.githubusercontent.com/89544506/161334653-6f7343d6-72c5-4e66-bfc9-74146b8905ac.gif)

Having a dynamic search bar can be a challenge when the user tries to find the content using substring and key works. This filter function not only finds the perfect match but also finds queries in the description, title, or even users' suggestions and channels regardless of lower case or down case letters.

```js
    filterVideo(){
        let filteredVideos;
        if (this.props.match.params.searchQuery.length >= 1) {
            filteredVideos = this.props.videos.filter(video => {
                return video.title.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.description.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.user.username.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase())
            })
        }
        this.setState({ videos: filteredVideos })
    }
```

* ## Like, dislike and comment videos 

![comments](https://user-images.githubusercontent.com/89544506/161344486-80f966fb-2151-49ad-9a26-18dfe39c9975.gif)

When the users are logged in they are allowed to like or dislike videos and also submit comments that through models associations are dispatched and stored in the same database tables schema, creating a relational between video, user, and comment.

```js
    //thunk action creators
    export const deleteComment = (comment) => dispatch => {
        return  APIUtil.deleteComment(comment)
             .then( comment => dispatch(removeComment(comment.id)))
    }

    export const createComment = comment => dispatch => {
      return APIUtil.createComment(comment)
        .then( comment => dispatch(receivedComment(comment)))
    }

    export const fetchComments = videoId => dispatch => (
       APIUtil.fetchComments(videoId)
            .then(comments => dispatch(receiveAllComments(comments)))
    )
```


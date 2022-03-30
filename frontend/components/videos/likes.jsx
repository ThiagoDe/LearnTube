import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

class Likes extends React.Component {
    
    constructor(props){
        super(props) 
    //   console.log(props, 'props from like')
    this.state = {
          likeCount: null,
          dislikeCount: null,
          likable: true,
          dislikable: true
        };
        
    this.likeHandler = this.likeHandler.bind(this);
    this.dislikeHandler = this.dislikeHandler.bind(this);
    }
    componentDidMount() {
        
        this.setState({likeCount: this.originalLikes(), dislikeCount: this.originalDislikes()})
    }

    originalLikes(){
        const like =  Math.floor((Math.random() * 400) + 547)
        return like
    }
    
    originalDislikes(){
        const dislikes =  Math.floor((Math.random() * 20) + 5)
        return dislikes
     }

    likeHandler() {
        // console.log(this.state, 'state likes')
        if (!this.props.user) return null
        if (this.state.likable && this.state.dislikable) {
            this.setState(state => ({
                likeCount: state.likeCount + 1,
                likable: !state.likable,
                dislikable: true
            }));
        } else if (this.state.likable && !this.state.dislikable) {
            this.setState(state => ({
                likeCount: state.likeCount + 1,
                dislikeCount: state.dislikeCount - 1,
                likable: !state.likable,
                dislikable: true
            }));
        }
  }

    dislikeHandler() {
        if (!this.props.user) return null
        if (this.state.dislikable && !this.state.likable) {
    
            this.setState(state => ({
                likeCount: state.likeCount - 1,
                dislikeCount: state.dislikeCount + 1,
                dislikable: !state.dislikable,
                likable: true
            }));
        } else if (this.state.dislikable && this.state.likable){
            this.setState(state => ({
                dislikeCount: state.dislikeCount + 1,
                dislikable: !state.dislikable,
                likable: true
            }));
        }
      }
    
    
    
    render() {
            // console.log(this.props)
            
            return(
                <div className="likes">
                    {/* <span> */}
                        <button onClick={this.likeHandler}>
                            <FontAwesomeIcon icon={faThumbsUp} className="thumbs__up"/>
                        </button>
                        {this.state.likeCount}

                        <button onClick={this.dislikeHandler}>
                            <FontAwesomeIcon icon={faThumbsDown} className="thumbs__down"/>
                        </button>
                        {this.state.dislikeCount}
                    {/* </span> */}
                </div>
            )
        }
    
    }
export default Likes 
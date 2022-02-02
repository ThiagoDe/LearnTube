import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";


// const likes = likeCount
// const dislikes = dislikeCount

class Likes extends React.Component {
    
    constructor(props){
        super(props) 
      

    this.state = {
          likeCount: null,
          dislikeCount: null,
         
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
    // if (this.state.likeCount === this.originalLikes()) {
      this.setState(state => ({
        likeCount: state.likeCount + 1,
        // dislikeCount: dislikes
      }));
    // }
  }

    dislikeHandler() {
        // if (this.state.dislikeCount === this.originalDislikes()) {
        this.setState(state => ({
            dislikeCount: state.dislikeCount + 1,
            // likeCount: likes
        }));
        // }
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
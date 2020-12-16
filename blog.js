import React, { Component } from 'react'

class BlogBlock extends Component{
    render(){
        const mainBodyStyle = {
            float: "none",
            margin: "auto"
        }
        return(
            <div>
                <div className="intro-div col-12">
                    <h1>Welcome to the Department of Computer Engineering</h1>
                    <p>Learn the basics of computer engineering as you explore our blog.</p>
                </div>
                <div style={mainBodyStyle} className="main-body-div col-lg-10 col-md-10 col-sm-10 col-xs-12">    
                    <h2>The value of "Two Small Coins"</h2>
                    <p>
                        Choose an appropriate topic. Then make an outline of what 
                        you wish to say. You might also prepare a short message that explains 
                        the purpose of your call in case you get an answering machine.
                    </p>

                    <h2>How to do it</h2>
                    <ul>
                        <li>
                            <h3>Prepare</h3>
                            <p>
                                Choose an appropriate topic. Then make an outline of what 
                                you wish to say. You might also prepare a short message that explains 
                                the purpose of your call in case you get an answering machine.
                            </p>
                        </li>
                        <li>
                            <h3>Relax</h3>
                            <p>
                                Talk naturally. Smile and gesture as if the person could see 
                                you. Avoid unnecessary pauses. It is helpful to work along
                                with others. If the householder asks a question, repeat it out
                                loud so that your partner can help you find the answer.
                            </p>
                        </li>
                        <li>
                            <h3>Lay the groundwork for a return visit</h3>
                            <p>
                                If the person shows interest, you could leave a question to answer
                                on the next phone call. You might also offer to e-mail, personally
                                deliver, or send a specific piece of literature. Or you could offer
                                to text or e-mail one of our videos or articles. When appropriate,
                                tell the person about our Online Bible Study Lessons or another item
                                on our website.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BlogBlock
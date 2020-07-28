import React from 'react';
import { Link } from 'react-router-dom';


class HomeForm extends React.Component {

    render() {
        return (
            <div id="home">
            <br/>
                <p>Welcome to home page!</p>
                <br/>
                    <Link to="/quest">
                        <button id="interviewBtn" type="button">Start interview</button>
                    </Link>
            </div>
        )
    }

}


export default HomeForm;

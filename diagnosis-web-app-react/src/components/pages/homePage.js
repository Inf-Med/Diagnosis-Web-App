import React from 'react';
import HomeForm from './Forms/homeForm';


class HomePage extends React.Component {

    render() {
        return (
            <div id="content">
                <div id="wrapper">
                    <HomeForm/>
                </div>
            </div>
        )
    }
}


export default HomePage;

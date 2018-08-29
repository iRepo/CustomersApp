import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("Handle On Click");
        this.props.history.push('/customers');
    };

    render() {
        return (
            <div>
                <AppFrame body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomersActions>
                            <button onClick={this.handleOnClick}>Listado de clientes</button>
                        </CustomersActions>
                    </div>
                } header='Home'/>
            </div>
        );
    }
}

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);
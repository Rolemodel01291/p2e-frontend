import React from 'react';

// import Dropdown from './Dropdown1';

import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../../styles/Games.css';

const Orderbar = () => {
    const history = useHistory();
    const [isNew, setIsNew] = React.useState(false);
    

    React.useEffect(() => {
        if (isNew) history.push('/new-blockchaingames');

        // if (!isNew) history.push('/blockchaingames');
    }, [history, isNew]);
    return (
        <div className="orderbar" style={{ marginBottom: '1rem', visibility: 'visible' }}>

            <div div className="order-new" >
                <div className="inner-order-new">
                    <span className="order-new-new">New</span>
                    <label className="switch">
                        <input type="checkbox" aria-label="NewEntries" name="newList" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Orderbar);

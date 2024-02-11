import {useState} from 'react';
import AllContacts from './AllContacts';
import { UsContacts } from './UsContacts';

const Problem2 = () => {
    
    const [allContactmodal, setAllContactModal] = useState(false);
    const [usContactmodal, setUsContactModal] = useState(false);

    const toggleAllContactModal = () => setAllContactModal(!allContactmodal);
    const toggleUsContactModal = () => setUsContactModal(!usContactmodal);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={toggleAllContactModal} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={toggleUsContactModal} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                <AllContacts modal={allContactmodal} toggle={toggleAllContactModal}/>
                <UsContacts modal={usContactmodal} toggle={toggleUsContactModal}/>
            </div>
        </div>
    );
};

export default Problem2;
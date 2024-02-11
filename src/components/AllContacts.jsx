import axios from 'axios';
import {useEffect, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Input, Label } from 'reactstrap';

const AllContacts = ({ modal, toggle , toggleUs}) => {
    const [contacts, setContacts] = useState([])
    const [loading,setLoading] = useState(false)
    
    const [search,setSearch] = useState('')

    const getContact = (search)=>{
        setLoading(true)
        axios.get('https://contact.mediusware.com/api/contacts/', {
            params: {page:1, page_size: 10, search}
        } )
            .then(res => {
                setLoading(false)
                setContacts(res.data?.results)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }
    useEffect(() => {
        getContact('')
    }, [])

    const getSearch = (value)=>{
        getContact(value)
        setSearch(value)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>All Contacts</ModalHeader>
            <ModalBody>
                <div>
                    <Label>Contatct</Label>
                    <Input type='text' value={search} onChange={(e)=>getSearch(e.target.value)}/>
                    {loading ? <h4>Loading.....</h4> : ""}
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Phone</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map(c=>(
                                <tr key={c.phone}>
                                    <td>
                                        {c.id}
                                    </td>
                                    <td>
                                        {c.phone}
                                    </td>
                                    <td>
                                        {c?.country?.name}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={
                    ()=>{
                        toggle();
                        toggleUs();
                    }
                }>
                    Us Contacts
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default AllContacts
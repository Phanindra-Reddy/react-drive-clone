import React,{useState} from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons';
import {database} from '../../firebase';
import {useAuth} from '../authentication/AuthContext';
import {ROOT_FOLDER} from '../hooks/useFolder';

export default function FolderBtn({currentFolder}) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('');
    const {currentUser} = useAuth();

    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentFolder == null) return

        const path = [...currentFolder.path]
        if(currentFolder !== ROOT_FOLDER){
            path.push({name: currentFolder.name, id:currentFolder.id})
        }
        // Create a Folder Name to Database

        database.folders.add({
            name:name,
            parentId: currentFolder.id,
            userId:currentUser.uid,
            path: path,
            createdAt:database.getCurrentTimeStamp(),
        })        
        setName("");
        closeModal();
    }
    return (
        <>
        <Button onClick={openModal} variant="outline-success" size="sm">
            <FontAwesomeIcon icon={faFolderPlus}/>
        </Button>
        <Modal show={open} onHide={closeModal}>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Folder Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="success">
                        Add Folder
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
}

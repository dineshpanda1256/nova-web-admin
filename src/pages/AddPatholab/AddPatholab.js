import React from 'react'
import Button from 'react-bootstrap/Button';
import AddPatholabModal from '../../components/AddPatholabModal/AddPatholabModal';



export default function AddPatholab() {

    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
 <Button variant="primary" onClick={() => setModalShow(true)}>
        AddPatholab
      </Button>

      <AddPatholabModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  )
}

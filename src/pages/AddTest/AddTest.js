import React from 'react'
import Button from 'react-bootstrap/Button';
import AddTestModal from '../../components/AddTestModal/AddTestModal';


export default function AddTest() {

    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
 <Button variant="primary" onClick={() => setModalShow(true)}>
      AddTest
      </Button>

      <AddTestModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  )
}

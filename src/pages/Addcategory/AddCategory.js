import React from 'react'
import Button from 'react-bootstrap/Button';
import AddCategoryModal from '../../components/AddCategoryModal/AddCategoryModal';



export default function AddCategory() {

    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
 <Button variant="primary" onClick={() => setModalShow(true)}>
        AddCategory
      </Button>

      <AddCategoryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  )
}

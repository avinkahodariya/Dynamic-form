import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopModel = (props) => {
  const {
    className,data
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () =>{ setModal(!modal);props.close(false)}

  useEffect(()=>{
    setModal(props.open)
  },[props.open])

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
        <ModalBody>
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. */}

          {

           Object.keys(props.   data).map((val)=>{
            if(props.selected.includes(val)){
                return (<div>
                  <b>  {val}</b>:&nbsp;{data[val]}
                </div>)
            }
           })


          }
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopModel;
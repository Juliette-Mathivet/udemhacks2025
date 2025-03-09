import Accordion from 'react-bootstrap/Accordion';
import {User} from '../classes/User.js' 
import { useLocation } from 'react-router-dom';
import './listemeds.css'
import mockUser from '../mockUser.json';

function BasicExample() {
  const location = useLocation();
  //const {user}: {user: User} = location.state || {};
    return (
      <>
        <h1 className='title'>Bonjour, {mockUser.name}</h1>
        <Accordion defaultActiveKey="0">
          {mockUser.prescriptionList.map((med, index) => ( // changer liste par celle qui aura été  générée par Félix.
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>{med.medicineName}</Accordion.Header>
              <Accordion.Body>
                {med.description}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
      );
    }
    
    export default BasicExample;


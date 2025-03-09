import Accordion from 'react-bootstrap/Accordion';
import './pills_api/schemas/schemas.js'
import data from './loginPage.js'

function BasicExample(currentUser) {
    return (
        
        <Accordion defaultActiveKey="0">
          {prescriptionList.map((i) => ( // changer liste par celle qui aura été  générée par Félix.
            <Accordion.Item eventKey={String(i)} key={i}>
              <Accordion.Header>Accordion Item #{i}</Accordion.Header>
              <Accordion.Body>
                Contenu de l'item {i}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      );
    }
    
    export default BasicExample;


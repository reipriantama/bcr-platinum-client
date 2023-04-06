import React from 'react'
import { Accordion } from 'react-bootstrap'

function FaqAccordion({AccBody, AccHeader}) {
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="1">
      <Accordion.Header>{AccHeader}</Accordion.Header>
      <Accordion.Body>
        {AccBody}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default FaqAccordion
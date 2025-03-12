import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Calendar Events</strong>
          </CCardHeader>
          <CCardBody>
              <CAccordion activeItemKey={1}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Event: Weekly Sprint Planning</CAccordionHeader>
                  <CAccordionBody>
                    Organize and attend the weekly sprint planning meeting to prioritize tasks, 
                    assign them to team members, and ensure alignment with project deadlines.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Event: Code Review Session</CAccordionHeader>
                  <CAccordionBody>
                    Conduct a code review session <strong>before Wednesday</strong> to assess the quality of the new features, 
                    ensure code adherence to standards, and provide constructive feedback to developers.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Event: Client Demo Presentation</CAccordionHeader>
                  <CAccordionBody>
                    Prepare and present a demo to the client, showcasing the latest updates on the project 
                    and gathering feedback for improvements or new feature requests.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion

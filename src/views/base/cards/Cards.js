import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
} from '@coreui/react'

import Avatar from 'src/assets/images/placeholder.jpg'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Contacts</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src={Avatar} />
                  <CCardBody>
                    <CCardTitle>John Doe</CCardTitle>
                    <CCardText>Software Engineer at TechCorp</CCardText>
                    <CButton color="primary" href="#">
                      Go to personal page
                    </CButton>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards

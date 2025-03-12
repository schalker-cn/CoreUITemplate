import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CProgress, CProgressBar, CRow } from '@coreui/react'

const Progress = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Project Progress</strong>
          </CCardHeader>
          <CCardBody>
            <CProgress className="mb-3">
              <CProgressBar value={28}>development of NoteTaker</CProgressBar>
            </CProgress>
            <CProgress className="mb-3">
              <CProgressBar value={68}>weekly meeting preparation</CProgressBar>
            </CProgress>
            <CProgress className="mb-3">
              <CProgressBar value={15}>frontend test of CodeFlow</CProgressBar>
            </CProgress>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Progress

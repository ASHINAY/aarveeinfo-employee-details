import React from 'react';

const EmployeeExperienceReport = () => {
  return (
    <div className="pdf-container" id="pdfdata"
      style={{ padding: '15px', fontFamily: 'Times New Roman,Times,serif' }}>

      <div style={{ marginBottom: '10px' }}>&nbsp;</div>
      <table width="100%">
        <tbody>
          <tr>
            <td colSpan="6">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="6">
              <h2 style={{ fontSize: '26px' }}>
                Aarvee Associates Architects Engineers &amp; Consultants Pvt Ltd
              </h2>
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              Ravula Residency Srinagar Colony Main Road Hyderabad Telangana India
            </td>
          </tr>
          <tr>
            <td colSpan="6">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="6">
              <h3>Employee Experience Report</h3>
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              <hr />
            </td>
          </tr>
          <tr>
            <td width="20%">Employee Code :</td>
            <td width="80%" colSpan="5">
              7776
            </td>
          </tr>
          <tr>
            <td>Employee Name :</td>
            <td>Amit Nayak</td>
          </tr>
          <tr>
            <td> Company Designation :</td>
            <td>Assistant Manager</td>
          </tr>
          <tr>
            <td>Project Designation:</td>
            <td>Assistant Resident Engineer</td>
          </tr>
          <tr>
            <td>Service Period:</td>
            <td>17. Aug.2020 To 19. Sep.2021</td>
          </tr>
          <tr>
            <td>Date of Relieving :</td>
            <td>19. Sep.2021</td>
          </tr>
          <tr>
            <td> Certificate Date:</td>
            <td>21. Jan.2022</td>
          </tr>
          <tr>
            <td>Certifying Authority:</td>
            <td>B. Venkateshwar Reddy</td>
          </tr>
          <tr>
            <td colSpan="6">
              <hr />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeExperienceReport;
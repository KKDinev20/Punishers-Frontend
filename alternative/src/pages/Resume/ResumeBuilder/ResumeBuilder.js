import React, { useState } from 'react';
import './style.css';
import { html2pdf } from 'html2pdf.js';

function ResumeBuilder() {
  const [nameFeild, setNameFeild] = useState('');
  const [eduFeild, setEduFeild] = useState('');
  // ... Define other state variables for other form fields

  const [aqFeilds, setAqFeilds] = useState(['']);
  const [weFeilds, setWeFeilds] = useState(['']);
  const [aFeilds, setAFeilds] = useState(['']);
  const [pFeilds, setPFeilds] = useState(['']);

  function addNewAQ() {
    setAqFeilds([...aqFeilds, '']);
  }

  function addNewWE() {
    setWeFeilds([...weFeilds, '']);
  }

  function Awardsfun() {
    setAFeilds([...aFeilds, '']);
  }

  function AddProject() {
    setPFeilds([...pFeilds, '']);
  }
  // Generate Resume
  function GenerateResume() {
    //    console.log('generate');
    let nameFeild = document.getElementById('nameFeild').value;
    let eduFeild = document.getElementById('eduFeild').value;
    let contactFeild = document.getElementById('contactFeild').value;
    let emailFeild = document.getElementById('emailFeild').value;
    let dobFeild = document.getElementById('dobFeild').value;
    let addressFeild = document.getElementById('addressFeild').value;
    let interestFeild = document.getElementById('interestFeild').value;
    let gitFeild = document.getElementById('gitFeild').value;
    let linkedinFeild = document.getElementById('linkedinFeild').value;
    let fbFeild = document.getElementById('fbFeild').value;
    let instaFeild = document.getElementById('instaFeild').value;
    let twitterFeild = document.getElementById('twitterFeild').value;

    let eqFeild = document.getElementsByClassName('eqFeild');
    let weFeild = document.getElementsByClassName('weFeild');
    let aFeild = document.getElementsByClassName('aFeild');
    let pFeild = document.getElementsByClassName('pFeild');

    let comFeild = document.getElementById('comFeild').value;
    let softFeild = document.getElementById('softFeild').value;
    let addFeild = document.getElementById('addFeild').value;
    let langFeild = document.getElementById('langFeild').value;


    // Take All id's from Resume-Template
    document.getElementById('nameT').innerHTML = nameFeild;
    document.getElementById('BioT').innerHTML = eduFeild;
    document.getElementById('contactT').innerHTML = contactFeild;
    document.getElementById('emailT').innerHTML = emailFeild;
    document.getElementById('dobT').innerHTML = dobFeild;
    document.getElementById('addressT').innerHTML = addressFeild;
    document.getElementById('gitT').innerHTML = `<a href="${gitFeild}" target="_blank"><img src="icons/github.svg" alt=""></a>`;
    document.getElementById('linkT').innerHTML = `<a href="${linkedinFeild}" target="_blank" ><img src="icons/linkedin.svg" alt=""></a>`;
    document.getElementById('instaT').innerHTML = `<a href="${instaFeild}" target="_blank" ><img src="icons/instagram.svg" alt=""></a>`;
    document.getElementById('fbT').innerHTML = `<a href="${fbFeild}" target="_blank"><img src="icons/facebook.svg" alt=""></a>`;
    document.getElementById('twitterT').innerHTML = `<a href="${twitterFeild}" target="_blank" ><img src="icons/twitter.svg" alt=""></a>`;
    document.getElementById('aiT').innerHTML = interestFeild;

    //Class -> Academic
    let str = "";
    for (let e of eqFeild) {
        str = str + ` <li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str;

    //Work exper
    let por = "";
    for (let e of weFeild) {
        por = por + `<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = por;

    //award
    let a = "";
    for (let e of aFeild) {
        a = a + `<li>${e.value}</li>`;
    }
    document.getElementById('awT').innerHTML = a;

    //Projects
    let pro = "";
    for (let e of pFeild) {
        pro = pro + `<li>${e.value}</li>`;
    }
    document.getElementById('projectT').innerHTML = pro;

    //Skills
    document.getElementById('clT').innerHTML = comFeild;
    document.getElementById('spT').innerHTML = softFeild;
    document.getElementById('acT').innerHTML = addFeild;
    document.getElementById('lkT').innerHTML = langFeild;

    // Setting Up Profile photo
    let file = document.getElementById('picFeild').files[0];
    // console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        // console.log(reader.result);
        document.getElementById('mypic').src = reader.result;
    }


    document.getElementById('Resume-form').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('Resume-template').style.display = 'block';

}

// Print Resume
// function printResume() {
//     window.print();
// }

function printResume() {
    document.getElementById('printT').style.display = 'none';
    const element = document.body;
    const options = {
      margin: 0,
      filename: 'your_filename.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  }

  return (
   <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Resume Builder</title>
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
    rel="stylesheet"
  />
  {/* link bootstrap */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      /* Your CSS code goes here */\n        }\n        .page-break {\n          page-break-after: always;\n        }\n      }\n    '
    }}
  />
  {/* Resume Form  */}
  <div className="container" id="Resume-form">
    <div className="row my-2">
      <div className="col-md-6">
        {/* first col */}
        <h3>Personal Information</h3>
        <div className="form-group">
          <label htmlFor="nameFeild">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="nameFeild"
            placeholder="Enter here"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="eduFeild">Your Current Education</label>
          <input
            type="text"
            className="form-control"
            id="eduFeild"
            placeholder="Enter here"
          />
        </div>
        {/* Contact Number */}
        <div className="form-group mt-2">
          <label htmlFor="contactFeild">Your Contact</label>
          <input
            type="tel"
            className="form-control"
            id="contactFeild"
            placeholder="Enter here"
          />
        </div>
        {/* Email ID */}
        <div className="form-group mt-2">
          <label htmlFor="emailFeild">Your Email ID</label>
          <input
            type="email"
            className="form-control"
            id="emailFeild"
            placeholder="Enter here"
          />
        </div>
        {/* Date of Birth */}
        <div className="form-group mt-2">
          <label htmlFor="doblFeild">Your DOB</label>
          <input
            type="date"
            className="form-control"
            id="dobFeild"
            placeholder="Enter here"
          />
        </div>
        {/* Profile picture  */}
        <div className="form-group mt-2">
          <label htmlFor="picFeild">Select Your Profile Photo</label>
          <input type="file" className="form-control" id="picFeild" />
        </div>
        {/* Address */}
        <div className="form-group mt-2">
          <label htmlFor="addressFeild"> Your Address</label>
          <textarea
            type="text"
            className="form-control"
            id="addressFeild"
            placeholder="Enter here"
            defaultValue={""}
          />
        </div>
        {/* Area of Interest */}
        <div className="form-group mt-2">
          <label htmlFor="interestFeild">Area of Interest</label>
          <textarea
            type="text"
            className="form-control"
            id="interestFeild"
            placeholder="Enter here"
            defaultValue={""}
          />
        </div>
        {/* Important Links */}
        <p className="text-secondary my-3">Important Links</p>
        <div className="form-group">
          <label htmlFor="gitFeild">GitHub Link</label>
          <input
            type="text"
            className="form-control"
            id="gitFeild"
            placeholder="Enter here"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="linkdinFeild">Linkdin Profile Link</label>
          <input
            type="text"
            className="form-control"
            id="linkedinFeild"
            placeholder="Enter here"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="fbFeild">Facebook Link</label>
          <input
            type="text"
            className="form-control"
            id="fbFeild"
            placeholder="Enter here"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="instaFeild">Instagram Link</label>
          <input
            type="text"
            className="form-control"
            id="instaFeild"
            placeholder="Enter here"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="twitterFeild">Twitter Account Link</label>
          <input
            type="text"
            className="form-control"
            id="twitterFeild"
            placeholder="Enter here"
          />
        </div>
      </div>
      <div className="col-md-6">
        {/* second col */}
        <h3>Professional Information</h3>
        {/* Academic Qualifications */}
        <div className="form-group mt-2" id="AddAQ">
          <label htmlFor="">Academic Qualifications</label>
          <textarea
            type="text"
            className="form-control eqFeild"
            placeholder="Enter here"
            defaultValue={""}
          />
          {/* New Text Area*/}
          <div className="container text-center mt-2" id="aqAddbtn">
            <button onclick="addNewAQ()" className="btn btn-primary btn-sm">
              Add+
            </button>
          </div>
        </div>
        {/* Work Experience / Positions of Responsibility & Extra Curriculars */}
        <div className="form-group mt-2" id="we">
          <label htmlFor="">Work Experience</label>
          <textarea
            type="text"
            className="form-control weFeild"
            placeholder="Enter here"
            defaultValue={""}
          />
          {/* New Text Area*/}
          <div className="container text-center mt-2" id="weAddbtn">
            <button onclick="addNewWE()" className="btn btn-primary btn-sm">
              Add+
            </button>
          </div>
        </div>
        {/* Awards / Scholarships / Academic Achievements */}
        <div className="form-group mt-2" id="Awards">
          <label htmlFor="">
            Awards / Scholarships / Academic Achievements
          </label>
          <textarea
            type="text"
            className="form-control aFeild"
            placeholder="Enter here"
            defaultValue={""}
          />
          {/* New Text Area*/}
          <div className="container text-center mt-2" id="Addbtn">
            <button onclick="Awardsfun()" className="btn btn-primary btn-sm">
              Add+
            </button>
          </div>
        </div>
        {/* Projects */}
        <div className="form-group mt-2" id="pro">
          <label htmlFor="">Projects</label>
          <textarea
            type="text"
            className="form-control pFeild"
            placeholder="Enter here"
            defaultValue={""}
          />
          {/* New Text Area*/}
          <div className="container text-center mt-2" id="pAddbtn">
            <button onclick="AddProject()" className="btn btn-primary btn-sm">
              Add+
            </button>
          </div>
        </div>
        {/* Skills */}
        <h5 className="text-secondary my-3 pt-2">Skills</h5>
        {/* Computer languages */}
        <div className="form-group">
          <label htmlFor="comFeild">Computer Languages</label>
          <textarea
            type="text"
            className="form-control"
            id="comFeild"
            placeholder="e.g. C++ , HTML, CSS"
            defaultValue={""}
          />
        </div>
        {/* Software Packages */}
        <div className="form-group mt-2">
          <label htmlFor="softFeild">Software Packages</label>
          <textarea
            type="text"
            className="form-control"
            id="softFeild"
            placeholder="e.g. Figma, AutoCAD, MS Office"
            defaultValue={""}
          />
        </div>
        {/* Additional Courses */}
        <div className="form-group mt-2">
          <label htmlFor="addFeild">Additional Courses</label>
          <textarea
            type="text"
            className="form-control"
            id="addFeild"
            placeholder="Enter here"
            defaultValue={""}
          />
        </div>
        {/* Languages Known */}
        <div className="form-group mt-2">
          <label htmlFor="langFeild">Languages Known</label>
          <input
            type="text"
            className="form-control"
            id="langFeild"
            placeholder="Enter here"
          />
        </div>
      </div>
    </div>
    <div className="contaner text-center mt-3">
      <button
        onclick="GenerateResume()"
        className="btn btn-dark btn-lg"
        id="Generate"
      >
        Generate Resume
      </button>
    </div>
  </div>
  {/* Resume Template */}
  <div className="container fluid" id="Resume-template">
    <div className="row">
      <div className="col-md-4 text-center py-3 background">
        {/* first col */}
        <img
          src="https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg"
          className="img-fluid myimg my-3"
          alt="error"
          id="mypic"
        />
        <div className="container py-1">
          <p id="nameT">Saurabh Kushwaha</p>
          <p id="BioT">IITR 24</p>
          <p id="contactT">+923875499234</p>
          <p id="emailT">saurabh@gmail.com</p>
          <p id="dobT">D.O.B. : 25 oct 2001</p>
          <p id="addressT">188, Paswara Mahoba UP - 210427</p>
          <hr />
          <p>Important Links</p>
          <div className="d-flex justify-content-around">
            <div id="gitT">
              <a href="http://" target="_blank">
                <img src="icons/github.svg" alt="" />
              </a>
            </div>
            <div id="linkT">
              <a href="http://" target="_blank">
                <img src="icons/linkedin.svg" alt="" />
              </a>
            </div>
            <div id="instaT">
              <a href="http://" target="_blank">
                <img src="icons/instagram.svg" alt="" />
              </a>
            </div>
            <div id="fbT">
              <a href="http://" target="_blank">
                <img src="icons/facebook.svg" alt="" />
              </a>
            </div>
            <div id="twitterT">
              <a href="http://" target="_blank">
                <img src="icons/twitter.svg" alt="" />
              </a>
            </div>
          </div>
          <hr />
          <div className="container">
            <h5>Area of Interest</h5>
            <p id="aiT">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              cupiditate.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        {/* second col */}
        {/* Academic Qualification */}
        <div className="card mt-2">
          <div className="card-header background">
            <h5>Academic Qualification</h5>
          </div>
          <div className="card-body">
            <ul id="aqT">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
            </ul>
          </div>
        </div>
        {/* work Experience */}
        <div className="card mt-3">
          <div className="card-header background">
            <h5>Work Experience</h5>
          </div>
          <div className="card-body">
            <ul id="weT">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
            </ul>
          </div>
        </div>
        {/* Awards / Scholarships / Academic Achievements */}
        <div className="card mt-3">
          <div className="card-header background">
            <h5>Awards / Scholarships / Academic Achievements</h5>
          </div>
          <div className="card-body">
            <ul id="awT">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
            </ul>
          </div>
        </div>
        {/* Projects */}
        <div className="card mt-3">
          <div className="card-header background">
            <h5>Projects</h5>
          </div>
          <div className="card-body">
            <ul id="projectT">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus, consequuntur.
              </li>
            </ul>
          </div>
        </div>
        {/* Skills */}
        <div className="card mt-3">
          <div className="card-header background">
            <h5>Skills</h5>
          </div>
          <div className="card-body">
            <ul>
              <li>
                <strong>Computer Languages : </strong>
                <span id="clT">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
              <li>
                <strong>Software Packages : </strong>
                <span id="spT">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
              <li>
                <strong>Additional Courses :</strong>
                <span id="acT">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
              <li>
                <strong>Languages Known : </strong>
                <span id="lkT">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-4 text-center">
      <button onclick="printResume()" className="btn btn-dark btn-lg" id="printT">
        Print Resume
      </button>
    </div>
  </div>
</>


  );
}

export default ResumeBuilder;

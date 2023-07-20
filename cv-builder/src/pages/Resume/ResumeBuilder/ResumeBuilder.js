import React from 'react';

function ResumeBuilder() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resume Builder</title>
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  {/* fontawesome css */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossOrigin="anonymous"
  />
  {/* Styles */}
  <link rel="stylesheet" href="style.css" />
  <div className="form-container">
  <div className="jumbotron">
    <div className="row form-row">
      <div className="col-md-8 col-sm-12 col-xs-12">
        <form className="detail-form" action="resume.html" method="post">
          <h2
            className="display-4"
            style={{ textAlign: "center", fontWeight: 400 }}
          >
            Resume Details
          </h2>
          <hr className="my-4" />
          {/* =============== basic details ============= */}
          {/* Name */}
          <h2 className="form-subhead">Basic Details</h2>
          <div className="row form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="fname"
                name="fname"
                placeholder="First name"
                required=""
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="lname"
                name="lname"
                placeholder="Last name"
                required=""
              />
            </div>
          </div>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="preferably City Only"
                required=""
              />
            </div>
          </div>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="e.g. username@gmail.com"
              />
            </div>
            <div className="col">
              <label htmlFor="inputContact">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                placeholder="7505xxxxxx"
              />
            </div>
          </div>
          <hr className="my-4" />
          <br />
          {/* =============== Objective ============= */}
          <h2 className="form-subhead">Career Objective</h2>
          <div className="form-group form-row">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <hr className="my-4" />
          <br />
          {/* =============== Educational details ============= */}
          <h2 className="form-subhead">Educational Qualifications</h2>
          <p style={{ color: "#ff6600" }}>
            * * Enter your last two Qualifications
          </p>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                className="form-control"
                id="course"
                name="course"
                placeholder="Course Name e.g. B.A. / B.Sc. / B.Tech"
                required=""
              />
            </div>
            <div className="col">
              <label htmlFor="discipline">Discipline</label>
              <input
                type="text"
                className="form-control"
                id="discipline"
                name="discipline"
                placeholder="Discipline/Area of Specialization"
                required=""
              />
            </div>
          </div>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="university">University / College Name</label>
              <input
                type="text"
                className="form-control"
                id="univ"
                name="univ"
                placeholder="College / University Name"
                required=""
              />
            </div>
          </div>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="yearOfCompletion">Year of Completion</label>
              <input
                type="text"
                className="form-control"
                id="year"
                name="year"
                placeholder="Year of Completion"
              />
            </div>
            <div className="col">
              <label htmlFor="grade">Percentage / Grade</label>
              <input
                type="text"
                className="form-control"
                id="grade"
                name="grade"
                placeholder="Percentage / Grade (CGPA/YGPA)"
              />
            </div>
          </div>
          <p />
          {/* Secondary Education */}
          <p style={{ color: "#ff6600" }}>
            * * Enter Additional Information * *{" "}
          </p>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                className="form-control"
                id="course2"
                name="course2"
                placeholder="Course Name e.g. B.A. / B.Sc. / B.Tech"
                required=""
              />
            </div>
            <div className="col">
              <label htmlFor="discipline">Discipline</label>
              <input
                type="text"
                className="form-control"
                id="discipline2"
                name="discipline2"
                placeholder="Discipline/Area of Specialization"
                required=""
              />
            </div>
          </div>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="university">University / College Name</label>
              <input
                type="text"
                className="form-control"
                id="univ2"
                name="univ2"
                placeholder="College / University Name"
                required=""
              />
            </div>
          </div>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="yearOfCompletion">Year of Completion</label>
              <input
                type="text"
                className="form-control"
                id="year2"
                name="year2"
                placeholder="Year of Completion"
              />
            </div>
            <div className="col">
              <label htmlFor="grade">Percentage / Grade</label>
              <input
                type="text"
                className="form-control"
                id="grade2"
                name="grade2"
                placeholder="Percentage / Grade (CGPA/YGPA)"
              />
            </div>
          </div>
          <hr className="my-4" />
          <br />
          {/* =============== Achievements and Skills ============= */}
          <h2 className="form-subhead">Achievements and Skills</h2>
          <p style={{ color: "#ff6600" }}>
            Enter your 2 Greatest Achievements that you're proud of
          </p>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="achieve1">Achievement #1</label>
              <input
                type="text"
                className="form-control"
                id="achieve1"
                name="achieve1"
                placeholder="e.g. Lead a team of 200 people in some event and got recognised"
                required=""
              />
            </div>
          </div>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="achieve2">Achievement #2</label>
              <input
                type="text"
                className="form-control"
                id="achieve2"
                name="achieve2"
                placeholder="e.g. Got Best Innovator Award for building a Solution for (Problem Name)"
                required=""
              />
            </div>
          </div>
          <p style={{ color: "#ff6600" }}>
            Enter your top 3 skills that you've got good command on
          </p>
          <div className="row form-row">
            <div className="col">
              <label htmlFor="Skill1">Skill #1</label>
              <input
                type="text"
                className="form-control"
                id="Skill1"
                name="Skill1"
                placeholder="e.g. Photoshop"
                required=""
              />
            </div>
            <div className="col">
              <label htmlFor="Skill2">Skill #2</label>
              <input
                type="text"
                className="form-control"
                id="Skill2"
                name="Skill2"
                placeholder="e.g. Server Architecture"
                required=""
              />
            </div>
            <div className="col">
              <label htmlFor="Skill3">Skill #3</label>
              <input
                type="text"
                className="form-control"
                id="Skill3"
                name="Skill3"
                placeholder="e.g. Team Management"
                required=""
              />
            </div>
          </div>
          <hr className="my-4" />
          <div className="row form-row">
            <button type="submit" className="btn btn-success btn-lg">
              Create Resume
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</>

  );
}

export default ResumeBuilder;

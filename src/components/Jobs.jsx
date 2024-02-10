import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Jobs({ editMode }) {
  const [jobs, setJobs] = useState([]);

  function addJob() {
    const id = uuid();
    const newJob = {
      title: 'Senior Worker',
      employer: 'Contoso',
      years: '2010-2015',
      id: id,
    };
    setJobs([...jobs, newJob]);
  }

  function removeJob(jobID) {
    const updatedJobs = jobs.filter((job) => job.id !== jobID);
    setJobs(updatedJobs);
  }

  function updateJob(jobID, field, value) {
    const updatedJobs = jobs.map((job) => {
      if (job.id !== jobID) return job;
      return { ...job, [field]: value };
    });
    setJobs(updatedJobs);
  }

  const jobList = jobs.map((job) => {
    return (
      <div className="job" key={job.id}>
        <label htmlFor="title">Job Title</label>
        {editMode ? (
          <input
            id="job-title"
            name="title"
            value={job.title}
            onInput={(e) => updateJob(job.id, 'title', e.target.value)}
          />
        ) : (
          <p>{job.title}</p>
        )}
        <label htmlFor="employer">Employer</label>
        {editMode ? (
          <input
            id="employer"
            name="employer"
            value={job.employer}
            onInput={(e) => updateJob(job.id, 'employer', e.target.value)}
          />
        ) : (
          <p>{job.employer}</p>
        )}
        <label htmlFor="years">Years Worked</label>
        {editMode ? (
          <input
            id="years"
            name="years"
            value={job.years}
            onInput={(e) => updateJob(job.id, 'major', e.target.value)}
          />
        ) : (
          <p>{job.years}</p>
        )}
        {editMode ? (
          <button type="button" onClick={() => removeJob(job.id)}>
            Remove
          </button>
        ) : null}
      </div>
    );
  });

  return (
    <div className="work-experience">
      <h1>Work Experience</h1>
      {jobList}
      {editMode ? (
        <button type="button" onClick={addJob}>
          Add
        </button>
      ) : null}
    </div>
  );
}

import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import "tailwindcss/tailwind.css";
import moment from 'moment';

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
const jobsites = ["Commercial", "Residential", "Office"];
const commercialJobs = ["425652-20", "412321-20", "423242-20"];
const residentialJobs = ["00000-00", "00000-00", "00000-00"];
const officeJobs = ["Meeting", "Appointment", "Training"];
const residentialemployees = ["Select Employee", "Declan Barber", "Isaac Barber", "Paige Baxter", "Brian McCaskey", "Josh Loose", "Cassandra Givler", "Billy Helm, III", "Bill Helm Jr.", "William Henry", "John Hensel", "Chris Hess", "Emily Hess", "Travis Heuer", "Nicholas Hildebrand", "Jason Harman", "Maxwell Pelton", "Katherine Moran", "Mel Miller", "Heather Mitterer", "Keith Meckley", "Eddie Medina", "Brook Sanchez", "Richard Portman", "Truman Sappey", "Ashley Simmers", "Jen Smith", "Matt Steffy", "Brian Stevens", "Josh Stover", "Kenny Surita", "Emily Welsh"];
const officeemployees = ["Select Employee", "Peter Barber", "Dylan Ehlert", "Moire Brandt", "Dennis Bakay", "Adam Buckius", "Tony Kirchner", "Katie Knudson", "Beth McCaskey", "Jose Medina", "Maria De Jesus", "Alex DeJesus", "Richard Forte", "Heather Mitterer", "Joe Mugavero", "Erin Young", "Kim Zern"];
const employees = ["Select Employee", "Miguel A. Amaro Miranda", "Orlando Arce", "Mikey Barriento", "Brian Chambers", "Brian Chambers Sr.", "Bronson Cole", "Kenneth Coles", "Harry Cooke", "Bob Czarnecki", "Jose Marti", "Christopher Mastronardi", "John Nogel", "Jose Nogueras", "Norberto Perez", "David Pool", "Deanne Pressler", "Yvette Ramos", "Edgardo Rivera", "Ilio Rivera", "Carlos Rodriguez", "Juan Francisco Rosado Garcia", "Victor Salazar Dongo", "Roberto Santiago-Acosta", "Reuben Sullivan", "Cody Tallarico", "Ismael Vázquez"];

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  const [selectedEmployee, setSelectedEmployee] = useState(
    selectedEvent
      ? employees.find((emp) => emp === selectedEvent.employee)
      : "Select An Employee"
  );
  const [selectedJobSite, setSelectedJobSite] = useState(
    selectedEvent
      ? jobsites.find((jobsite) => jobsite === selectedEvent.jobSite)
      : "Select"
  );
  const [selectedJob, setSelectedJob] = useState(
    selectedEvent
      ? commercialJobs.concat(residentialJobs).find((job) => job === selectedEvent.job)
      : "Select"
  );

  useEffect(() => {
    setTitle(`${selectedJob} - ${selectedEmployee}`);
  }, [selectedEmployee, selectedJobSite, selectedJob]);

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title: title,
      description,
      label: selectedLabel,
      employee: selectedEmployee,
      jobSite: selectedJobSite,
      job: selectedJob,
      day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
    };
	

if (daySelected.isBefore(moment(), 'day')) {
  const confirmed = window.confirm("Warning: You are scheduling an event on a day that has passed, confirm this schedule?");
  if (confirmed) {
    dispatchCalEvent({ type: "push", payload: calendarEvent });
  }
} else {
  dispatchCalEvent({ type: "push", payload: calendarEvent });
}


    setShowEventModal(false);
  }
  return (
  
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
	{/* ContinueFromHere1 */} 
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
  <span
    onClick={() => {
      const confirmed = window.confirm("Are you sure you want to delete this event? This could result in short staffing.");
      if (confirmed) {
        dispatchCalEvent({
          type: "delete",
          payload: selectedEvent,
        });
        setShowEventModal(false);
      }
    }}
    className="material-icons-outlined text-gray-400 cursor-pointer"
  >
    delete
  </span>
)}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
		<div></div>
        <div className="p-3">
		
					<div className="flex gap-x-11">
  <span className="material-icons-outlined text-gray-400">
    work
  </span>
  <select
    value={selectedJobSite}
    onChange={(e) => setSelectedJobSite(e.target.value)}
	style={{minWidth: '225px', maxWidth: '225px'}}
  >
	<option>Select Work Type</option>
	{jobsites.map((jobsite, i) => (
      <option key={i}>{jobsite}</option>
    ))}
  </select>
</div>
			<div className="flex gap-x-11">
  <span className="material-icons-outlined text-gray-400">
    group
  </span>
  <select
    value={selectedEmployee}
    onChange={(e) => setSelectedEmployee(e.target.value)}
	style={{minWidth: '225px', maxWidth: '225px'}}
  >
	{selectedJobSite === 'Select' ? 
		<option>Select an Employee</option> : 
		selectedJobSite === 'Residential' ? 
		residentialemployees.map((emp, i) => (
      <option key={i}>{emp}</option>
    )) : 
		selectedJobSite === 'Office' ? 
		officeemployees.map((emp, i) => (
      <option key={i}>{emp}</option>
    )) : 
		employees.map((emp, i) => (
      <option key={i}>{emp}</option>
    ))
	}
  </select>
</div>

			<div className="flex gap-x-11">
  <span className="material-icons-outlined text-gray-400">
    construction
  </span>
  <select
    value={selectedJob}
    onChange={(e) => setSelectedJob(e.target.value)}
	style={{minWidth: '225px', maxWidth: '225px'}}
  >
	<option>Select Task</option>
	{selectedJobSite === 'Commercial' && 
		commercialJobs.map((job, i) => (
			<option key={i}>{job}</option>
		))
	}{selectedJobSite === 'Residential' && 
		residentialJobs.map((job, i) => (
			<option key={i}>{job}</option>
		))
			}{selectedJobSite === 'Office' && 
		officeJobs.map((job, i) => (
			<option key={i}>{job}</option>
		))
	}
  </select>
</div>

          <div className="grid grid-cols-1/5 items-end gap-y-7">
		  
   <div className="hidden">
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="title"
              placeholder="Add a Title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
			    onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  }}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
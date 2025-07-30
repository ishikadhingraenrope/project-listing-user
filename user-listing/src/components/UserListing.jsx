import { FaEye, FaDownload } from "react-icons/fa";
import { useState } from "react";
const applicants = [
  {
    id: 1,
    title: "Business Analyst",
    domain: "Europe",
    name: "Chetan",
    contact: "9591602192",
    email: "cmwali59@gmail.com",
    exp: 8,
    location: "Hubli",
    source: "Other",
    date: "January 9, 2025",
  
  },
  {
    id: 2,
    title: "Business Analyst",
    domain: "Europe",
    name: "Vinodhi",
    contact: "9597318951",
    email: "vinov335@gmail.com",
    exp: 2,
    location: "Coimbatore",
    source: "Indeed",
    date: "January 27, 2025",
  
  },
  {
    id: 3,
    title: "Backend Developer",
    domain: "Unknown",
    name: "JAI MAI",
    contact: "9354835386",
    email: "jaimain1234@gmail.com",
    exp: 1,
    location: "Delhi",
    source: "Indeed",
    date: "January 30, 2025",
  
  },
  {
    id: 4,
    title: "NodeJS Developer",
    domain: "Unknown",
    name: "Piyush",
    contact: "9834227489",
    email: "piyushvsuryavanshi@gmail.com",
    exp: 0,
    location: "Nagpur",
    source: "Other",
    date: "May 13, 2025",
  
  },
  {
    id: 5,
    title: "NodeJS Developer",
    domain: "Unknown",
    name: "Sakshi",
    contact: "6378451932",
    email: "sakshibhayal@gmail.com",
    exp: 0,
    location: "Jodhpur",
    source: "LinkedIn",
    date: "May 13, 2025",
  
  },
  {
    id: 6,
    title: "NodeJS Developer",
    domain: "Unknown",
    name: "Soumik",
    contact: "8319761065",
    email: "mallicksoumik@gmail.com",
    exp: 1,
    location: "Gwalior",
    source: "Other",
    date: "May 13, 2025",
  
  },
  {
    id: 7,
    title: "NodeJS Developer",
    domain: "Unknown",
    name: "Srijan",
    contact: "8509532414",
    email: "srijankarka2000@gmail.com",
    exp: 0,
    location: "Kolkata",
    source: "LinkedIn",
    date: "May 13, 2025",
  
  },
  {
    id: 8,
    title: "NodeJS Developer",
    domain: "Unknown",
    name: "Hritik",
    contact: "9149003472",
    email: "hritikbhtanagya@gmail.com",
    exp: 0,
    location: "Noida",
    source: "LinkedIn",
    date: "May 13, 2025",
  
  },
  {
    id: 9,
    title: "NodeJS Developer",
    domain: "Unknown",
    name: "Gaurav",
    contact: "7817038680",
    email: "chaudhary85.gaurav@gmail.com",
    exp: 0,
    location: "Baghpat",
    source: "Other",
    date: "May 13, 2025",
  
  },
  {
    id: 10,
    title: "NodeJS Developer",
    domain: "Unknown",
    name: "Mukesh",
    contact: "7488781126",
    email: "pandeymukesh9911@gmail.com",
    exp: 0,
    location: "Bhubaneswar",
    source: "Other",
    date: "May 13, 2025",
    
  },
];



function UserListing(){
  const [filters, SetFilter] = useState({  exp: "",
    location: "",
    date: "",
    source: "",})
    const filteredApplicants = applicants.filter((app) => {
  const matchExp = filters.exp === "" || String(app.exp) === filters.exp;
  const matchLoc = filters.location === "" || app.location === filters.location;
  const matchSource = filters.source === "" || app.source === filters.source;

  const appDate = new Date(app.date).toISOString().split("T")[0];
  const matchDate = filters.date === "" || filters.date === appDate;

  return matchExp && matchLoc && matchSource && matchDate;
});

    return(
      <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Job Applications</h2>
      <div className="overflow-x-auto rounded-lg border w-full">
       <div className="flex flex-wrap gap-4 mb-4">
  <select
    className="border px-3 py-1 rounded"
    value={filters.exp}
    onChange={(e) => SetFilter({ ...filters, exp: e.target.value })}
  >
    <option value="">All Exp</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="8">8</option>
  </select>

  <select
    className="border px-3 py-1 rounded"
    value={filters.location}
    onChange={(e) => SetFilter({ ...filters, location: e.target.value })}
  >
    <option value="">All Locations</option>
    <option value="Delhi">Delhi</option>
    <option value="Jodhpur">Jodhpur</option>
    <option value="Coimbatore">Coimbatore</option>
    <option value="Bhubaneswar">Bhubaneswar	</option>
    <option value="Baghpat	">Baghpat	</option>
    <option value="Noida">Noida</option>
    <option value="Kolkata">Kolkata</option>
    <option value="Gwalior	">Gwalior	</option>
    <option value="Nagpur">Nagpur</option>
    <option value="Hubli">Hubli</option>
    {/* Add other locations */}
  </select>

  <select
    className="border px-3 py-1 rounded"
    value={filters.source}
    onChange={(e) =>  SetFilter({ ...filters, source: e.target.value })}
  >
    <option value="">All Sources</option>
    <option value="LinkedIn">LinkedIn</option>
    <option value="Indeed">Indeed</option>
    <option value="Other">Other</option>
  </select>

  <input
    type="date"
    className="border px-3 py-1 rounded"
    value={filters.date}
    onChange={(e) => SetFilter({ ...filters, date: e.target.value })}
  />
</div>

        <table className="min-w-[1100px] w-full text-sm text-left text-gray-800">
          <thead className="bg-gray-100 text-xs font-semibold uppercase">
            <tr>
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">ID</th>
              <th className="p-3">Job Title</th>
              <th className="p-3">Domain</th>
              <th className="p-3">Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Email</th>
              <th className="p-3">Work Exp</th>
              <th className="p-3">Location</th>
              <th className="p-3">Source</th>
              <th className="p-3">Applied Date</th>
              <th className="p-3">Resume</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
        <tbody>
  {filteredApplicants.map((app) => (
    <tr key={app.id} className="border-t hover:bg-gray-50">
      <td className="p-3"><input type="checkbox" /></td>
      <td className="p-3">{app.id}</td>
      <td className="p-3">{app.title}</td>
      <td className="p-3">{app.domain}</td>
      <td className="p-3">{app.name}</td>
      <td className="p-3">{app.contact}</td>
      <td className="p-3 truncate max-w-[150px]">{app.email}</td>
      <td className="p-3">{app.exp}</td>
      <td className="p-3">{app.location}</td>
      <td className="p-3">{app.source}</td>
      <td className="p-3">{app.date}</td>

      {/* ✅ Resume Column with icons */}
      <td className="p-3 mt-5 whitespace-nowrap flex items-center gap-3 text-blue-600">
        <FaEye className="cursor-pointer hover:text-blue-800" title="View Resume" />
        <FaDownload className="cursor-pointer hover:text-blue-800" title="Download Resume" />
      </td>

      {/* ✅ Action Column with buttons */}
      <td className="p-3 whitespace-nowrap">
        <button className="text-sm px-3 py-1 m-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">Accept</button>
        <button className="text-sm px-3 py-1  border border-red-500 text-red-500 rounded hover:bg-red-50">Reject</button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
    )
}
export default UserListing;
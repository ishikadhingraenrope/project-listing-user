import { FaEye, FaDownload } from "react-icons/fa";

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
    status: "New",
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
    status: "New",
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
    status: "New",
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
    status: "New",
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
    status: "New",
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
    status: "New",
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
    status: "New",
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
    status: "New",
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
    status: "New",
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
    status: "New",
  },
];



function UserListing(){
    return(
      <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Job Applications</h2>
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm text-left text-gray-800">
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
              <th className="p-3">Status</th>
              <th className="p-3">Resume</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((app) => (
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
                <td className="p-3 text-orange-500">{app.status}</td>
              
                <td className="p-3 flex gap-2">
                  <button className="text-sm px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">Accept</button>
                  <button className="text-sm px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-50">Reject</button>
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
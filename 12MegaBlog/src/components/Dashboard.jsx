import { useEffect, useState } from "react";
import authService from "../appwrite/auto";
import { PencilIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import service from "../appwrite/config";

export default function Dashboard() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("Not Set");
  const [email, setEmail] = useState("Not Set");
  const [phone, setPhone] = useState("Not Set");
  const [userID, setUserId] = useState(null);

  const authStatus = useSelector((state) => state.auth.status);
  const profilePhoto1=localStorage.getItem("profilePhoto");
  // console.log("profile status",authStatus)
  


  //coments me
  //getting all loging user 
  useEffect(()=>{
    service.getPosts().then((data)=>{
      console.log("all users",data)
      data.documents.forEach((e)=>{
        // console.log("user id",e.userId)
      })
    })

    service.getProfilePhotos().then((data)=>{
      // console.log("all profile data",data)
      data.documents.forEach((e)=>{
        // console.log("user profile photot id",e.$id)
      })
    })
  },[]);

  


  // Fetch User Data
  useEffect(() => {
    const fetchUserData = async () => {
      if (authStatus) {
        try {
          const userData = await authService.getCurrentUser();
          if (userData) {
            // console.log(userData);
            setName(userData.name || "Not Set");
            setEmail(userData.email || "Not Set");
            setPhone(userData.phone || "Not Set");
            setUserId(userData.$id);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [authStatus]); // Runs when authStatus changes

  

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-gray-300 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <img  loading="lazy"
              src={
                profilePhoto1
                  ? service.getPhotoPreview(profilePhoto1)
                  : "https://th.bing.com/th/id/OIP.jbCYAqEY6zA0FPtmAYFKawHaEQ?w=4014&h=2309&rs=1&pid=ImgDetMain"
              }
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow">
              <Link to={"/edit"}>
              <PencilIcon className="w-4 h-4" />

              </Link>
            </button>
          </div>
          <div className="mt-6 w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <div className="p-2 bg-gray-200 rounded-md">{name}</div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <div className="p-2 bg-gray-200 rounded-md">{phone}</div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email ID</label>
              <div className="p-2 bg-gray-200 rounded-md">{email}</div>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <div className="p-2 bg-gray-200 rounded-md flex justify-between items-center">
                <span>{"********"}</span>
                <button className="p-1">
                  <Link to={"/forgotPassword"}>
                    <PencilIcon className="w-5 h-5" />
                  </Link>
                </button>
              </div>
            </div>
            <button className="w-1/3 bg-blue-600 text-white rounded-md p-2">
              Edit
            </button>
            <Link to={`/forgotPassword`}>
              <button className="bg-blue-600 p-1 rounded-2xl w-1/2 ml-2">
                Forgot Password
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />

    </div>
  );
}

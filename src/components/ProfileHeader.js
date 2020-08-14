import React, { Component } from "react";

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto">
          <div
            style={{ backgroundImage: "url('5.jpg')" }}
            className="h-64 bg-cover flex items-end justify-center relative"
          >
            <div className="relative">
              <img src="profile.jpg" alt="" className="profile-img" />
              <a href="#" className="edit-profile-photo ">
                <i class="fas fa-camera"></i>
              </a>
            </div>
            <a href="#" className="edit-cover-photo ">
              <i class="fas fa-camera"></i> Edit Cover Photo
            </a>
          </div>
          <div className="text-center mt-5 text-white">
            <h2 className=" text-3xl font-bold">R Kar BM</h2>
            <p className=" text-gray-500">
              Truth can only be found in one place: the code.
            </p>
            <a href="#" className="text-blue-500 font-bold">
              Update
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;

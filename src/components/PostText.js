import React, { Component } from "react";

class PostText extends Component {
  render() {
    return (
      <div className="card mt-2 text-white">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              src="profile.jpg"
              alt=""
              className=" w-12 h-12 object-cover rounded-full"
            />
            <div className="ml-1">
              <h4 className="font-bold">R Kar BM</h4>
              <p className="text-xs text-gray-500">12 August at 22:31</p>
            </div>
          </div>
          <a href="#" className="btn-round">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </div>
        <div className="border-b border-gray-700 pb-4 mt-2">
          <p>
            တစ်ခါတစ်လေ အိမ်မက်ကို အိမ်မက်လို့ပဲ သဘောထားတာပဲကောင်းပါတယ် .
            အိမ်မက်က အိမ်မက်ထဲမှာသာ သာယာပြီး အပြင်မှာလုပ်ရင်
            ပေါက်ကရတွေဖြစ်တာပါပဲ ... အိမ်မက်=စိတ်ကူး=အနာဂတ်ရည်မှန်းချက်
          </p>
          <a href="#" className="text-gray-500 text-sm inline-block mt-4">
            <i class="fas fa-thumbs-up text-blue-500 mr-2"></i>Alin Yaung, Wah
            Wah and 6 others
          </a>
        </div>
        <div className="border-b border-gray-700 pb-1 grid grid-cols-3 mt-1">
          <a href="#" className="btn-secondary">
            <i class="far fa-thumbs-up mr-2 "></i>Like
          </a>
          <a href="#" className="btn-secondary">
            <i class="far fa-comment mr-2 "></i>Comment
          </a>
          <a href="#" className="btn-secondary">
            <i class="fas fa-share mr-2 "></i>Share
          </a>
        </div>
        <div className=" mt-2 flex">
          <img
            src="profile.jpg"
            alt=""
            className="w-10 h-10 object-cover rounded-full mr-2"
          ></img>
          <input
            type="text"
            className="flex-1 bg-input px-3 rounded-full outline-none"
            placeholder="Write a comment"
          />
        </div>
      </div>
    );
  }
}

export default PostText;

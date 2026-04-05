import React from 'react'
import Card  from  './components/Card'
const App = () => {
const jobs = [
  {
    brandLogo: "https://i.pinimg.com/originals/ca/0e/d4/ca0ed45336e863c7e96c16906e4f2102.jpg",
    company: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior",
    pay: "$45/hr",
    location: "Mumbai, India",
    bg: "linear-gradient(135deg, #E3FDF5, #FFE6FA)"
  },
  {
    brandLogo: "https://images.stockcake.com/public/7/5/4/7545665d-8752-4f0c-b730-b18a491c56ed_large/ethereal-anime-girl-stockcake.jpg",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$50/hr",
    location: "Bangalore, India",
    bg: "linear-gradient(135deg, #43E97B, #38F9D7)"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/e6/84/53/e684533c3fb24699baa6fd6ac7c7a1b5.jpg",
    company: "Amazon",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$60/hr",
    location: "Hyderabad, India",
    bg: "linear-gradient(135deg, #DF89B5, #BFD9FE)"
  },
  {
    brandLogo: "https://images.stockcake.com/public/4/c/7/4c7b13fd-1440-4e12-82c3-48e79d15bc85_large/blue-haired-anime-boy-stockcake.jpg",
    company: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Part-time",
    tag2: "Senior",
    pay: "$70/hr",
    location: "Delhi, India",
    bg: "linear-gradient(135deg, #FFC3A0, #FFAFBD)"
  },
  {
    brandLogo: "https://cdn.aienhancer.ai/se/aienhancer/assets/photo-to-anime-converter/images/example-preview/anime.webp?v=2&x-oss-process=image/resize,w_2400,image/crop,w_2400,h_1600,g_center,image/resize,w_1200",
    company: "Netflix",
    datePosted: "1 day ago",
    post: "UI Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$65/hr",
    location: "Remote",
    bg: "linear-gradient(135deg, #D5DEE7, #E2E7ED)"
  },
  {
    brandLogo: "https://wallpapers.com/images/featured/anime-boy-pictures-ikoa2ot553mv58hf.jpg",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior",
    pay: "$48/hr",
    location: "Noida, India",
    bg: "linear-gradient(135deg, #9EFBD3, #57E9F2, #45D4FB)"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/b4/96/17/b49617c17fb9a292769c35176408fa68.jpg",
    company: "Adobe",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$55/hr",
    location: "Pune, India",
    bg: "linear-gradient(135deg, #F7971E, #FFD200)"
  },
  {
    brandLogo: "https://t4.ftcdn.net/jpg/15/48/18/39/360_F_1548183937_jWOofFoyYRvMSHKgKHoimEiAiryibRhb.jpg",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$52/hr",
    location: "Bangalore, India",
    bg: "linear-gradient(135deg, #0C3483, #6B8CCE)"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/021/698/431/small/anime-girl-avatar-free-photo.jpg",
    company: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part-time",
    tag2: "Junior",
    pay: "$40/hr",
    location: "Remote",
    bg: "linear-gradient(135deg, #93A5CF, #E4EFE9)"
  },
  {
    brandLogo: "https://images.stockcake.com/public/0/e/d/0ed4747b-3da4-4f9f-a803-8dd89b745631_large/sunset-anime-view-stockcake.jpg",
    company: "Tesla",
    datePosted: "1 week ago",
    post: "Software Developer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$75/hr",
    location: "USA",
    bg: "linear-gradient(135deg, #92FE9D, #00C9FF)"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(elem){
         return <Card company={elem.company} location={elem.location}   datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} logo={elem.brandLogo}/>
      })}
    </div>
  )
}

export default App
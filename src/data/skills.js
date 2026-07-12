import {
  FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt,
  FaChalkboardTeacher, FaUsers, FaLightbulb, FaClock, FaComments,
} from 'react-icons/fa'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { BsFileEarmarkSpreadsheet, BsMicrosoft, BsRouter } from 'react-icons/bs'
import { MdOutlineDesignServices } from 'react-icons/md'

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'REST API', icon: TbApi },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Responsive Design', icon: MdOutlineDesignServices },
    ],
  },
  {
    title: 'Other Skills',
    items: [
      { name: 'Tally Accounting Software', icon: BsFileEarmarkSpreadsheet },
      { name: 'MS Office', icon: BsMicrosoft },
      { name: 'Basic Computer Networking', icon: BsRouter },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Communication', icon: FaComments },
      { name: 'Leadership', icon: FaChalkboardTeacher },
      { name: 'Team Management', icon: FaUsers },
      { name: 'Fast Learner', icon: FaLightbulb },
      { name: 'Problem Solving', icon: FaLightbulb },
      { name: 'Time Management', icon: FaClock },
    ],
  },
]

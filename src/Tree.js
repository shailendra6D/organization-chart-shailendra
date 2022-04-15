import AashishPic from "./assets/Aashishm.jpg";
import ArchanaSharmaPic from "./assets/Archana.jpg";
import AnshulPersonnel from "./assets/ANSHUL.jpg";
import AbhimanyuPersonnel from "./assets/ABHIMANYU.jpg";
import AsifPic from "./assets/aasif.jpg";
import AbhishekPersonnel from "./assets/ABHISHEK.jpg";
import AmitPersonnel from "./assets/AMIT.jpg";
import aadityaPic from "./assets/Aaditya.jpeg";
import AmanPic from "./assets/Aman.jpeg";
import ApoorvaPic from "./assets/Apoorva.jpg";
import AkankshaPic from "./assets/akanksha.jpeg";

import BalramPic from "./assets/Balram.jpg";
import BhuvneshPic from "./assets/Bhuvnesh.jpg";

import ChurchillPic from "./assets/Churchill.jpg";

import DikshaPic from "./assets/Disha.png";
import DimplePic from "./assets/Dimple.jpg";
import DivyaMPic from "./assets/Divya.JPG";

import VinayPersonnel from "./assets/VinayD.jpg";
import JyotsnaPersonnel from "./assets/JyotsnaD.jpg";
import GopalPersonnel from "./assets/Gopal.jpg";
import KaynatPersonnel from "./assets/KAYNAT.jpg";

import RatneshPic from "./assets/Ratnesh.jpg";
import RajnishPic from "./assets/RAJNISH.jpg";
import PrathakPic from "./assets/Prathak2021.jpg";
import HimanshuPic from "./assets/Himanshu.jpg";
import ShivaniPathakPic from "./assets/ShivaniP.jpg";
import PrashantPic from "./assets/Prashant.jpeg";
import ShirishPic from "./assets/Shirish.jpg";
import PrathvirajPic from "./assets/Prathviraj.jpeg";
import KewalPic from "./assets/Kewal.jpg";
import MohsinPic from "./assets/Mohsin.jpg";
import DivyaDPic from "./assets/DivyaD.jpg";
import WasimPic from "./assets/Wasim.jpg";
import FarhaPic from "./assets/Farha.jpg";
import TulsiPic from "./assets/Tulsi.jpg";
import ImranPic from "./assets/Imran.jpg";
import NupurPic from "./assets/Nupur.jpg";
import NitikaPic from "./assets/NITIKA.jpg";
import MiliPic from "./assets/Mili.jpg";
import KausarPic from "./assets/Kausar.jpg";
import DharamendraPic from "./assets/Dharm.jpg";
import ShadabPic from "./assets/Shadab.jpg";

import SakshiPersonnel from "./assets/SakshiD.jpg";
import MonicaPersonnel from "./assets/MONICA.jpg";
import SureshPersonnel from "./assets/SURESH.jpg";
import RajendraPersonnel from "./assets/RAJENDRA.jpg";
import PrafullPersonnel from "./assets/PRAFULL.jpg";
import KrishnapalPersonnel from "./assets/KRISHNAPAL.jpg";
import ManishPersonnel from "./assets/MANISH.jpg";

import MayankPersonnel from "./assets/MAYANK.jpg";
import PoojalPersonnel from "./assets/POOJAL.jpg";
import VinodPersonnel from "./assets/VINOD.jpg";
import YashwantPersonnel from "./assets/YASHWANT.jpg";
import ShabnamPersonnel from "./assets/Shabnam.jpeg";
import ManishPic from "./assets/MANISHCHOUBEY.png";
import JasmeetPic from "./assets/Jasmeet.jpg";
import SohelPic from "./assets/Sohel.JPEG";
import GautamPic from "./assets/Gautam.jpg";
import AbhilashaPic from "./assets/Abhilasha.jpg";
import ShailendraPic from "./assets/Shailendra.jpg";
import VibhorPic from "./assets/vibhor.jpeg";
import KratiB from "./assets/KratiB.jpeg";
import NikhilV from "./assets/NikhilV.jpg";
import NikleshV from "./assets/NikleshV.jpg";
import AyushS from "./assets/AyushS.jpg";

export const Vinay = {
  id: 1,
  person: {
    id: 1,
    avatar: VinayPersonnel,
    department: "",
    name: "Vinay Deshmukh",
    title: "CEO",
    totalReports: 3,
  },
  hasChild: true,
  hasParent: false,
  children: [],
};

export const VinaysTeam = [
  {
    id: 11,
    person: {
      id: 11,
      avatar: JyotsnaPersonnel,
      department: "",
      name: "Jyotsna Deshmukh",
      title: "CFO",
      totalReports: 3,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 12,
    person: {
      id: 12,
      avatar: VibhorPic,
      department: "",
      name: "Vibhor Mungee",
      title: "CTO",
      totalReports: 6,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 13,
    person: {
      id: 13,
      avatar: AkankshaPic,
      department: "",
      name: "Akanksha Saxena",
      title: "COO",
      totalReports: 6,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
];

export const JyotsnasTeam = [
  {
    id: 111,
    person: {
      id: 111,
      avatar: GopalPersonnel,
      department: "",
      name: "Gopal Khandelwal",
      title: "Head of Accounts",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 112,
    person: {
      id: 112,
      avatar: KaynatPersonnel,
      department: "",
      name: "Kaynat Nasir",
      title: "Digital Marketing Head",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
  },
  {
    id: 113,
    person: {
      id: 113,
      avatar: GautamPic,
      department: "",
      name: "Gautam Tungare",
      title: "Human Resource Head",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
  },
];

export const KaynatsTeam = [
  {
    id: 1124,
    person: {
      id: 1124,
      avatar: ShadabPic,
      department: "",
      name: "Shadab Khan",
      title: "Team Lead - SEO Expert",
      totalReports: 2,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 11213,
        person: {
          id: 11213,
          avatar: BhuvneshPic,
          department: "",
          name: "Bhuvnesh Mali",
          title: "SEO Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 11212,
        person: {
          id: 11212,
          avatar: WasimPic,
          department: "",
          name: "Wasim Khan",
          title: "SEO Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 1125,
    person: {
      id: 1125,
      avatar: NitikaPic,
      department: "",
      name: "Nitika Lunia",
      title: "Team Lead - SEO Expert",
      totalReports: 3,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 11251,
        person: {
          id: 11251,
          avatar: MiliPic,
          department: "",
          name: "Mili Jain",
          title: "SEO Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 11252,
        person: {
          id: 11252,
          avatar: DikshaPic,
          department: "",
          name: "Disha Parwani",
          title: "SEO Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 11253,
        person: {
          id: 11253,
          avatar: NikleshV,
          department: "",
          name: "Niklesh Verma",
          title: "Trainee SEO",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
];

export const VibhorsTeam = [
  {
    id: 121,
    person: {
      id: 121,
      avatar: SakshiPersonnel,
      department: "",
      name: "Sakshi Dua",
      title: "Android Lead/Frontend developer",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1212,
        person: {
          id: 24,
          avatar: DimplePic,
          department: "",
          name: "Dimple Badera",
          title: "Android Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 1213,
        person: {
          id: 1213,
          avatar: KratiB,
          department: "",
          name: "Krati Birthare",
          title: "Android Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 122,
    person: {
      id: 122,
      avatar:
      SureshPersonnel,
      department: "",
      name: "Suresh Patidar",
      title: "iOS Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: false,
    children: [
      {
        id: 1221,
        person: {
          id: 1221,
          avatar: SureshPersonnel,
          department: "",
          name: "Suresh Patidar",
          title: "iOS Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 1231,
    person: {
      id: 1231,
      avatar:
        HimanshuPic,
      department: "",
      name: "Himanshu Pawar",
      title: "Sr. Full-stack Developer",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 12311,
        person: {
          id: 12311,
          avatar: AmanPic,
          department: "",
          name: "Aman Kanojia",
          title: "Jr. Full-stack Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 12312,
        person: {
          id: 12312,
          avatar: ShailendraPic,
          department: "",
          name: "Shailendra Kewat",
          title: "Jr. Full-stack Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 123,
    person: {
      id: 123,
      avatar: AsifPic,
      department: "",
      name: "Asif Qureshi",
      title: "Full-stack Lead",
      totalReports: 5,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 125,
    person: {
      id: 125,
      avatar:
        ChurchillPic,
      department: "",
      name: "Churchill Gupta",
      title: "Quality Analyst",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1252,
        person: {
          id: 1252,
          avatar: AbhilashaPic,
          department: "",
          name: "Abhilasha Chourey",
          title: "Quality Analyst",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 124,
    person: {
      id: 124,
      avatar: RajnishPic,
      department: "",
      name: "Rajnish Malakar",
      title: "System Admin Lead",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1241,
        person: {
          id: 1241,
          avatar: RajendraPersonnel,
          department: "",
          name: "Rajendra Patel",
          title: "System Admin",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 1242,
    person: {
      id: 1242,
      avatar: AyushS,
      department: "",
      name: "Ayush Sharma",
      title: "Cloud Engineer Trainee",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
];

export const AmitsTeam = [
  {
    id: 1312,
    person: {
      id: 1312,
      avatar: KrishnapalPersonnel,
      department: "",
      name: "Krishnapal Dhakad",
      title: "Tech lead",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
   // children: [],
  },
  {
    id: 1313,
    person: {
      id: 1313,
      avatar: ManishPersonnel,
      department: "",
      name: "Manish Yadav",
      title: "Sr. PHP Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1314,
    person: {
      id: 1314,
      avatar: AbhimanyuPersonnel,
      department: "",
      name: "Abhimanyu Soni",
      title: "Sr. Designer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1315,
    person: {
      id: 1315,
      avatar: FarhaPic,
      department: "",
      name: "Farha Khan",
      title: "PHP Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1316,
    person: {
      id: 1316,
      avatar: PrafullPersonnel,
      department: "",
      name: "Prafull Patidar",
      title: "PHP Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1317,
    person: {
      id: 1317,
      avatar: AnshulPersonnel,
      department: "",
      name: "Anshul Bhawasar",
      title: "PHP Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 132,
    person: {
      id: 132,
      avatar: MayankPersonnel,
      department: "",
      name: "Mayank Sharma",
      title: "Quality Analyst Lead",
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1321,
        person: {
          id: 1321,
          avatar: PoojalPersonnel,
          department: "",
          name: "Poojal Joshi",
          title: "Sr. Quality Analyst",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 1322,
        person: {
          id: 1322,
          avatar: VinodPersonnel,
          department: "",
          name: "Vinod Noneria",
          title: "Sr. Quality Analyst",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 1323,
        person: {
          id: 1323,
          avatar: ShirishPic,
          department: "",
          name: "Shirish Gupta",
          title: "Quality Analyst",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 1324,
        person: {
          id: 1324,
          avatar: ManishPic,
          department: "",
          name: "Manish Choubey",
          title: "Quality Analyst",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
];
export const AkankshasTeam = [
  {
    id: 131,
    person: {
      id: 131,
      avatar: AmitPersonnel,
      department: "",
      name: "Amit Bokde",
      title: "Solutions Architect",
      totalReports: 7,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 133,
    person: {
      id: 133,
      avatar: ShivaniPathakPic,
      department: "",
      name: "Shivani Pathak",
      title: "Business Development Head",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1331,
        person: {
          id: 1331,
          avatar: TulsiPic,
          department: "",
          name: "Tulsi Bhujel",
          title: "Sr. Business Development Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 1332,
        person: {
          id: 1332,
          avatar: JasmeetPic,
          department: "",
          name: "Jasmeet Kaur",
          title: "Business Development Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 134,
    person: {
      id: 134,
      avatar: AbhishekPersonnel,
      department: "",
      name: "Abhishek Shukla",
      title: "Sr. Project Manager",
      totalReports: 6,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 137,
    person: {
      id: 137,
      avatar: PrathakPic,
      department: "",
      name: "Prathak Godawat",
      title: "Tech lead",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1372,
        person: {
          id: 1372,
          avatar: NupurPic,
          department: "",
          name: "Nupur Gupta",
          title: "PHP Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 135,
    person: {
      id: 135,
      avatar: PrashantPic,
      department: "",
      name: "Prashant Shrivastava",
      title: "Business Analyst",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 136,
    person: {
      id: 136,
      avatar: ShabnamPersonnel,
      department: "",
      name: "Shabnam Khan",
      title: "Sr. Business Analyst",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1361,
        person: {
          id: 1361,
          avatar: ApoorvaPic,
          department: "",
          name: "Apoorva Batra",
          title: "Business Analyst Intern",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
];

export const AbhisheksTeam = [
  {
    id: 1341,
    person: {
      id: 1341,
      avatar: KausarPic,
      department: "",
      name: "Kausar Ali",
      title: "Design Lead",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 13411,
        person: {
          id: 13411,
          avatar: PrathvirajPic,
          department: "",
          name: "Prathviraj Sendhav",
          title: "Web Designer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      }
    ],
  },
  {
    id: 1342,
    person: {
      id: 1342,
      avatar: MohsinPic,
      department: "",
      name: "Mohsin Abbasi",
      title: "Sr. Designer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1343,
    person: {
      id: 1343,
      avatar: DharamendraPic,
      department: "",
      name: "Dharamendra Parmar",
      title: "Design Lead",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 13431,
        person: {
          id: 13431,
          avatar: ImranPic,
          department: "",
          name: "Imran",
          title: "Web Designer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 13432,
        person: {
          id: 13432,
          avatar: SohelPic,
          department: "",
          name: "Sohel Ansari",
          title: "Web Designer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 13441,
    person: {
      id: 13441,
      avatar: DivyaDPic,
      department: "",
      name: "Divya Doshi",
      title: "Web Developer",
      totalReports: 2,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 13442,
        person: {
          id: 13442,
          avatar: YashwantPersonnel,
          department: "",
          name: "Yashwant Raghuvanshi",
          title: "Web Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 1344,
        person: {
          id: 1344,
          avatar: AashishPic,
          department: "",
          name: "Aashish Meena",
          title: "Wordpress Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 13443,
    person: {
      id: 13443,
      avatar: KewalPic,
      department: "",
      name: "Kewal Sharma",
      title: "Web Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 13444,
    person: {
      id: 13444,
      avatar: DivyaMPic,
      department: "",
      name: "Divya Malviya",
      title: "Quality Analyst",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
];

export const AnkitsTeam = [
  {
    id: 1235,
    person: {
      id: 1235,
      avatar: MonicaPersonnel,
      department: "",
      name: "Monica Patel",
      title: "Sr. Android Developer/Frontend developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1232,
    person: {
      id: 1232,
      avatar: aadityaPic,
      department: "",
      name: "Aaditya Gupta",
      title: "Sr. Full-stack Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    //children: [],
  },
  {
    id: 1233,
    person: {
      id: 1233,
      avatar: ArchanaSharmaPic,
      department: "",
      name: "Archana Sharma",
      title: "Full-stack Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 12323,
    person: {
      id: 12323,
      avatar:
        RatneshPic,
      department: "",
      name: "Ratnesh Jaiswal",
      title: "Full-stack Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 12324,
    person: {
      id: 12324,
      avatar:
        BalramPic,
      department: "",
      name: "Balram Patidar",
      title: "Full-stack Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 12325,
    person: {
      id: 12325,
      avatar: NikhilV,
      department: "",
      name: "Nikhil Vyas",
      title: "Frontend Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
];

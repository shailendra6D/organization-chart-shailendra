import AnshulPersonnel from "./assets/ANSHUL.jpg";
import AsifPic from "./assets/aasif.jpg";
import AbhishekPersonnel from "./assets/ABHISHEK.jpg";
import VatsalBhatt from "./assets/Vatsal-Bhatt.jpg";
import AmitPersonnel from "./assets/AMIT.jpg";
import AmanPic from "./assets/Aman.jpeg";
import AkankshaPic from "./assets/akanksha.jpeg";
import PardeepRanaPic from "./assets/PardeepRana.png";
import BalramPic from "./assets/Balram.jpg";
import KuldeepRathorePic from "./assets/KuldeepRathore.jpg";
import BhuvneshPic from "./assets/Bhuvnesh.jpg";
import ShivaliMalviyaPic from "./assets/ShivaliMalviya.jpg";
import ShaliniLashkari from "./assets/ShaliniLashkari.jpg";

import DikshaPic from "./assets/Disha.png";
import DivyaMPic from "./assets/Divya.JPG";
import AbdulAlimPic from "./assets/AbdulAlim.jpg";

import VinayPersonnel from "./assets/VinayD.jpg";
import JyotsnaPersonnel from "./assets/JyotsnaD.jpg";
import GopalPersonnel from "./assets/Gopal.jpg";
import KaynatPersonnel from "./assets/KAYNAT.jpg";
import RatneshPic from "./assets/Ratnesh.jpg";
import RajnishPic from "./assets/RAJNISH.jpg";
import KewalPic from "./assets/Kewal.jpg";
import MohsinPic from "./assets/Mohsin.jpg";
import DivyaDPic from "./assets/DivyaD.jpg";
import ImranPic from "./assets/Imran.jpg";
import NitikaPic from "./assets/NITIKA.jpg";
import KausarPic from "./assets/Kausar.jpg";
import DharamendraPic from "./assets/Dharm.jpg";
import ShadabPic from "./assets/Shadab.jpg";

import SakshiPersonnel from "./assets/SakshiD.jpg";
import MonicaPersonnel from "./assets/MONICA.jpg";
import RajendraPersonnel from "./assets/RAJENDRA.jpg";
import PrafullPersonnel from "./assets/PRAFULL.jpg";
import KrishnapalPersonnel from "./assets/KRISHNAPAL.jpg";
import ManishPersonnel from "./assets/MANISH.jpg";

import PoojalPersonnel from "./assets/POOJAL.jpg";
import VinodPersonnel from "./assets/VINOD.jpg";
import ShabnamPersonnel from "./assets/Shabnam.jpeg";
import SadhanaOjha from "./assets/Sadhana-Ojha.jpg";
import GautamPic from "./assets/Gautam.jpg";
import AbhilashaPic from "./assets/Abhilasha.jpg";
import AtulKumarMishraPic from "./assets/Atul-Kumar-Mishra.jpg";
import ShailendraPic from "./assets/Shailendra.jpg";
import VibhorPic from "./assets/vibhor.jpeg";
import NikleshV from "./assets/NikleshV.jpg";
import AyushS from "./assets/AyushS.jpg";
import AdarshDubeyPic from "./assets/adarshDubey.jpg";
import ApporvaBatraPic from "./assets/apporvaBatra.jpg";
import GathaVermaPic from "./assets/gathaVerma.jpg";
import MahimaSoniPic from "./assets/mahimaSoni.jpg";
import PriyalMakwanaPic from "./assets/priyalMakwana.jpeg";
import ParminderKaurPic from "./assets/parminderKaur.png";
import AashifaSheikhPic from "./assets/aashifaSheikh.jpeg";

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
      totalReports: 4,
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
      totalReports: 4,
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
      totalReports: 4,
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
        id: 11214,
        person: {
          id: 11214,
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
        id: 11215,
        person: {
          id: 11215,
          avatar: NikleshV,
          department: "",
          name: "Niklesh Verma",
          title: "SEO Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 11216,
        person: {
          id: 11216,
          avatar: ShaliniLashkari,
          department: "",
          name: "Shalini Lashkari",
          title: "Content Writer",
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
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },

  {
    id: 1127,
    person: {
      id: 1127,
      avatar: PardeepRanaPic,
      department: "",
      name: "Pardeep Rana",
      title: "PPC / Shopping Campaign Marketing Executive",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1128,
    person: {
      id: 1128,
      avatar: ParminderKaurPic,
      department: "",
      name: "Parminder Kaur",
      title: "Sr. SEO Specialist",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
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
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 123,
    person: {
      id: 123,
      avatar: AsifPic,
      department: "",
      name: "Asif Qureshi",
      title: "Full-stack Lead",
      totalReports: 6,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 125,
    person: {
      id: 125,
      avatar: AbhilashaPic,
      department: "",
      name: "Abhilasha Chourey",
      title: "Quality Analyst",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1251,
        person: {
          id: 1251,
          avatar: AtulKumarMishraPic,
          department: "",
          name: "Atul Kumar Mishra ",
          title: "Quality Analyst",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 1252,
        person: {
          id: 1253,
          avatar: AdarshDubeyPic,
          department: "",
          name: "Adarsh Dubey",
          title: "QA Engineer",
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
      totalReports: 6,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 134,
    person: {
      id: 134,
      avatar: AbhishekPersonnel,
      department: "",
      name: "Abhishek Shukla",
      title: "Sr. Project Manager",
      totalReports: 7,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 136,
    person: {
      id: 136,
      avatar: ShabnamPersonnel,
      department: "",
      name: "Shabnam Khan",
      title: "Sr. Business Analyst",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1361,
        person: {
          id: 1361,
          avatar: SadhanaOjha,
          department: "",
          name: "Sadhana Ojha",
          title: "Junior BDE",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 1362,
        person: {
          id: 1362,
          avatar: ApporvaBatraPic,
          department: "",
          name: "Apoorva Batra",
          title: "Assistant Business Analyst cum Project Co-Ordinator",
          totalReports: 1,
        },
        hasChild: false,
        hasParent: true,
        children: [
          {
            id: 13621,
            person: {
              id: 13621,
              avatar: GathaVermaPic,
              department: "",
              name: "Gatha Verma",
              title: "Social Media Marketing & Design Intern",
              totalReports: 0,
            },
            hasChild: false,
            hasParent: true,
            // children: [],
          },
        ],
      },
    ],
  },
  {
    id: 137,
    person: {
      id: 137,
      avatar: VatsalBhatt,
      department: "",
      name: "Vatsal Bhatt",
      title: "Sr. BDE",
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
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
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
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
          avatar: AashifaSheikhPic,
          department: "",
          name: "Aashifa Sheikh",
          title: "Sr. Wordpress Designer",
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
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
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
      totalReports: 1,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 134041,
        person: {
          id: 134041,
          avatar: ShivaliMalviyaPic,
          department: "",
          name: "Shivali Malviya",
          title: "Jr. Quality Analyst",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 13445,
    person: {
      id: 13445,
      avatar: AbdulAlimPic,
      department: "",
      name: "Abdul Alim",
      title: "Wordpress Developer",
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
    id: 12323,
    person: {
      id: 12323,
      avatar: RatneshPic,
      department: "",
      name: "Ratnesh Jaiswal",
      title: "Full-stack Developer",
      totalReports: 1,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 123231,
        person: {
          id: 123231,
          avatar: PriyalMakwanaPic,
          department: "",
          name: "Priyal Makwana",
          title: "Full Stack Intern",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 12324,
    person: {
      id: 12324,
      avatar: BalramPic,
      department: "",
      name: "Balram Patidar",
      title: "Full-stack Developer",
      totalReports: 1,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 123241,
        person: {
          id: 123241,
          avatar: MahimaSoniPic,
          department: "",
          name: "Mahima Soni",
          title: "Jr. Full Stack Engineer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
  {
    id: 12325,
    person: {
      id: 12325,
      avatar: KuldeepRathorePic,
      department: "",
      name: "Kuldeep Rathore",
      title: "Jr. React Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
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
];

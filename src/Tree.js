import VinayPersonnel from "./assets/VINAY.jpg";
import JyotsnaPersonnel from "./assets/JYOTSNA.jpg";
import GopalPersonnel from "./assets/Gopal.jpg";
import KaynatPersonnel from "./assets/KAYNAT.jpg";
import NitikaPersonnel from "./assets/NITIKA.jpg";
import ArchanaPersonnel from "./assets/avatar-personnel.svg";
import SakshiPersonnel from "./assets/SAKSHI.jpg";
import MonicaPersonnel from "./assets/MONICA.jpg";
import SureshPersonnel from "./assets/SURESH.jpg";
import AnkitPersonnel from "./assets/ANKIT.jpg";
import RajendraPersonnel from "./assets/RAJENDRA.jpg";
import PankajPersonnel from "./assets/PANKAJ.jpg";
import PrafullPersonnel from "./assets/PRAFULL.jpg";
import KrishnapalPersonnel from "./assets/KRISHNAPAL.jpg";
import ManishPersonnel from "./assets/MANISH.jpg";
import AnshulPersonnel from "./assets/ANSHUL.jpg";
import AbhimanyuPersonnel from "./assets/ABHIMANYU.jpg";
import AmitPersonnel from "./assets/AMIT.jpg";
import MayankPersonnel from "./assets/MAYANK.jpg";
import PoojalPersonnel from "./assets/POOJAL.jpg";
import VinodPersonnel from "./assets/VINOD.jpg";
import AbhishekPersonnel from "./assets/ABHISHEK.jpg";
import BhupendraPersonnel from "./assets/avatar-personnel.svg";
import ImranPersonnel from "./assets/avatar-personnel.svg";
import RahulPersonnel from "./assets/avatar-personnel.svg";
import YashwantPersonnel from "./assets/YASHWANT.jpg";
import ShadabPersonnel from "./assets/avatar-personnel.svg";
import GarimaPersonnel from "./assets/GARIMA.jpg";
import VikalpPersonnel from "./assets/avatar-personnel.svg";
import ArchanaSharmaPersonnel from "./assets/avatar-personnel.svg";
import AvatarPersonnel from "./assets/avatar-personnel.svg";

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
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 12,
    person: {
      id: 12,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3eEyT07sUoRuWNaH8Eo9AHrQ7FnZCWXLIQDHjv80anRsXbfZU3dTfJPY-Ee5SVE5OkGSvhZvEzEqRBt7zHD56YilPLMShbuA9NXSi6oCUvhvegsf5F2D92Lu3HYt-aEQen-qhmnegfkbs75wBY3D7J_7g=w1054-h1592-no?authuser=0",
      department: "",
      name: "Vibhor Mungee",
      title: "CTO",
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 13,
    person: {
      id: 13,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3frzkjprcFMp90hZrv7dc617jZluMrM7VEY_VxXnwG8wP5sq4Hv7iAoeMWEla-4dd7iGwS9UcAQIytAYp6T_O81qHPfcIktLZdCXySzP524f14aWY7l1tb8ADv9lNIdfAnQTbmg8KJQ8XVneU8sSGRV=w585-h740-no?authuser=0",
      department: "",
      name: "Akanksha Saxena",
      title: "COO",
      totalReports: 5,
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
];

export const KaynatsTeam = [
  {
    id: 1123,
    person: {
      id: 1123,
      avatar: ArchanaPersonnel,
      department: "",
      name: "Archana Kumari",
      title: "Content Writer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1121,
    person: {
      id: 1121,
      avatar: NitikaPersonnel,
      department: "",
      name: "Nitika Lunia",
      title: "Team Lead - SEO Expert",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 1124,
    person: {
      id: 1124,
      avatar: AvatarPersonnel,
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
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3dO1YLkz5C-Bj6j6qtyjHmd924t0aW4SKwJD0GOn-C8LY_FGtgZ7EJDoCr0WZx-KdcJus-M2IZ3NogO5RSQcslq0fCpCQDzn3QBRP4IsaDXEZviDM1l53bhrwkX5bMplRw5WejR1mOT9jFtsRxxqmQ=w1194-h1592-no?authuser=0",
          department: "",
          name: "Anas Ahemad",
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
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3fPv7G1sTtPaD5awcLTTnzqPn8eVXRW8vY32pqQMx2QbMQ_elgpHAfyVd5LTOMTLWhMshjoRuTPQhm-2jE-HN5V_1zKERn_Mr_XSCsQrRdGlnSeSfqE_07hypgecy5RqEmxDvpPjThF6KLYGOLx2M0=w960-h1280-no?authuser=0",
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
      avatar: AvatarPersonnel,
      department: "",
      name: "Vaibhav Jain",
      title: "PPC Expert",
      totalReports: 1,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 1122,
        person: {
          id: 1122,
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3cyhpMaCY6BMDC7IvyRGaSX4bPI4QFycf43WvBoeE2XupS1-gsPFXicHbaMSJKUwDlWv0qjbgvX-UDoaxDqfUbYEXX_Cew6DSsyFLJsc75oUvDMK-Xq4YME3jBrUXF4Xuqpsb7k6LBuKdUpbm2T8EE=w948-h943-no?authuser=0",
          department: "",
          name: "Anima Tripathi",
          title: "PPC Executive",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
    ],
  },
];

export const NitikasTeam = [
  {
    id: 11214,
    person: {
      id: 11214,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3dbhE4kotKPU0FKcsJ6VEnqgEFHBmYIO88je2hMn7pzkkX1xhD-AXjDegETCfyZiBnHGIID4YPHFEqLs2Z0wNhP9e3-C5wj_CXWw063Y-Y697mMVEwjWS_SRbfKF541NmUubCbTZnt-h0DqJEdK6VXv=w740-h812-no?authuser=0",
      department: "",
      name: "Isha Choudhary",
      title: "SEO Executive",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 11211,
    person: {
      id: 11211,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3eLCDWqVdgxJUqgCgpGfR--KLWlRDFH7l3LALkbZE6zeKfq6g-kDT2JVlqGsrpu7O1vgJHzV0B18kCzMGrfsT9DxAdJg7QrMPMiShQMitqA13QiGKNw5GUZQJKAnQ1KJf8iITI7yvhc832Rh3ermNNl=w1088-h1592-no?authuser=0",
      department: "",
      name: "Bhuvnesh Mali",
      title: "SEO Executive",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
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
      title: "Android Lead",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 1211,
        person: {
          id: 1211,
          avatar: MonicaPersonnel,
          department: "",
          name: "Monica Patel",
          title: "Sr. Android Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 1212,
        person: {
          id: 24,
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3eTsxALKW0gB3wN2DnGeen7gGLAnRM4iIWL1ZmhEXloOD6iB_h8FY5vPZaV3JyDI7QLpnF09N2qvKubcop7qqLhEyWG42TcEUxrvXSnDaib_n0PtLtHc7MftSnn_arLEQy8rP2vS54888yjdda5dgg=w958-h1280-no?authuser=0",
          department: "",
          name: "Dimple Badera",
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
        "https://lh3.googleusercontent.com/pw/ACtC-3fflaFG3Y_F4z-plYSMx7ph2Ojks46jKAg-Ui5zveQ_mGi5llvdG1o0L0dq8DMQsD4RLY83uyzcWwh_H6dgRE39nUd5xUx0d5TUM6IET6xqwgLCp2_7b6B3PQxeAUsDd9h1sqo_IPlPzzuwNdaX1kY=s640-no?authuser=0",
      department: "",
      name: "Hemraj Jhariya",
      title: "iOS Lead",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
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
    id: 123,
    person: {
      id: 123,
      avatar: AnkitPersonnel,
      department: "",
      name: "Ankit Bajaj",
      title: "Full Stack Lead",
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 124,
    person: {
      id: 124,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3dpY-dKQZrSYjKebHV9tRTPdF5c-xFdD3OVsLa-BLfkr2j-ZAspIc9VpABDrnk-hQtY_9lYyTFYvUUTRn4UjGWBARUVuzOQ31rFOjFPmVAER_JsIirDhIhCMkvCSsLQLLnGkpDo3x4zwKT_viiVc-yJ=w1280-h960-no?authuser=0",
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
];

export const AmitsTeam = [
  {
    id: 1311,
    person: {
      id: 1311,
      avatar: PankajPersonnel,
      department: "",
      name: "Pankaj Sharma",
      title: "Tech lead",
      totalReports: 3,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 13111,
        person: {
          id: 13111,
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3eLtgR1XBePXLjTdt2_jr1y49gGW10_rDGPPQuRrkIagWmla8hqkvmHmjOYWzawMyoPfv-ACzI8ipZwOEoVglDyjpai6tnuygNRNXjX06QE3gyhbzuDyeAFP9l6DB07Zc7omVmglqDwg4WJsIcN2Ok=w648-h1146-no?authuser=0",
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
        id: 13112,
        person: {
          id: 13112,
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
        id: 13131,
        person: {
          id: 13131,
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
    ],
  },
  {
    id: 1312,
    person: {
      id: 1312,
      avatar: KrishnapalPersonnel,
      department: "",
      name: "Krishnapal Dhakad",
      title: "Tech lead",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 13121,
        person: {
          id: 13121,
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
    ],
  },
  {
    id: 1313,
    person: {
      id: 1313,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3cX5xT7BhqxyFIZlOQg78sZVLbtRWhltK7-IHRy43ntM3RlYUgKvy0lm5QjVMcN67oTommyeM2X2NyqwNtL-gWdWusCGU7qmbC8MEZOscZD8fXXKrjL2BDdioJXryTH3zDzsGEkdtgxsE_RqGlj7po=w1218-h1592-no?authuser=0",
      department: "",
      name: "Prathak Godawat",
      title: "Tech lead",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 13132,
        person: {
          id: 13132,
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3e8MNcb0j7fZ426xWOLCRKDFPvXvO2xb-5wvW-3CrA4KmRoBT3rHtKDtODuKbcvh8PMNhLpiIQuexAobfjLcuJTyCuh5oEJx0_IFQbZiR9bIkORsxCabHp0Xwi4NHlFD9tafm3vmF8k4qcsdwcctLI=w1726-h1592-no?authuser=0",
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
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3dfiS9Z1UPfyD1Kor5dQMsgODPxCkOOAMkNM3qCWcPTvmnPEPD57iyQJpBUxZ2vNA2xrg7rfmsBp_qJ9qjVvXESlcpyk4DzPfx_3CtlRaeEwtlGlczgghMu0-lv8PuSLXBSN53ixeFm_ccrVdDMjf6j=w494-h748-no?authuser=0",
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
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3fK4kuywO7A8dE-zuGberLDEP54UYQnmyhomwvdd3sHSEGPib5A7G0Hma7BmCrUIU2Dsrz2qL1_s4vmEdsUSTIDA4T_KFYxw4nT9WRdX_CqxuJqVBMrNv3PyCKU2CtPEPK9gRdSIkkAn1J282BxnPs=w1026-h1592-no?authuser=0",
          department: "",
          name: "Shilpa Tiwari",
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
      totalReports: 5,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 133,
    person: {
      id: 133,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3d9bbQf6KVffWXoNvJnPtE0JqWkM3Z50O0iYVKM6yLsB29TuoAh5B_R3_aoqhVF8DPvQXFzJ3-HhHxNVqxCA8MJ6ZBjGxTNMfHpN7YxC7qJqpTW6Nib7nofQa15Emtw2dGraJLwHNojSsyLRzFVwEs=w571-h1016-no?authuser=0",
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
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3erjk_wEES3tiUOGKky6s1er2g3gUsAYeCa0p8H2fv-4N_jw99FY_QMaV_1mp8b4fRo7rnljFgbsAUnFvoLlVcAUfOvrOJAGljC4kEnPRN4YakUdMYG2K1lv_n68OVznXwMEB1Fhejn7jKo9scHIJp5=w736-h1592-no?authuser=0",
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
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3fqDhCkdqtH3Iem3rYr0QDihqVH1ry2yO9h7zdsKzfpzCF7vpCCT0EQqgaD9uP2PCveYwmqlUaDxOhW_iFJPCjpf30qLy_02Z9WLDEbslf50Re2HMtSDO6-EL-n_mAV5BVmLwh0eWlubW1EVv_zkGI=w295-h411-no?authuser=0",
          department: "",
          name: "Pallavi Bajpayee",
          title: "Sr. Business Development Executive",
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
    id: 135,
    person: {
      id: 135,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3ch3-3XCM-BcKGmXXQ1ozaSkzbIvLX2W9SgTr58uZINwxwNM3SBPTUvWenjfUxkpN_P5Mn-QQh3WQUuxiijjv4zQuZyf3RibLYdXDmSMB0zW8IPecAwGvqENDhqlSMlJI4c07dQFaDwobpexqA0dHI=s1280-no?authuser=0",
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
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3ch3-3XCM-BcKGmXXQ1ozaSkzbIvLX2W9SgTr58uZINwxwNM3SBPTUvWenjfUxkpN_P5Mn-QQh3WQUuxiijjv4zQuZyf3RibLYdXDmSMB0zW8IPecAwGvqENDhqlSMlJI4c07dQFaDwobpexqA0dHI=s1280-no?authuser=0",
      department: "",
      name: "Ashutosh Giri",
      title: "Sr. Business Analyst",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
];

export const AbhisheksTeam = [
  {
    id: 1341,
    person: {
      id: 1341,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3dyVYj_GYMe4IZcG-S_RDkkx8FLizvqxCRdtlxKnyKqIKTSx1AtTgNzM5CNyWUmw8pmdXSRfBwHEm0huq-h-FrNbfHYB7EEJ9PWYIPQeaNkLDX-07esxbU5dW9o5ILQQgAR_pxpLp3qYGO2oxeJU-xp=w768-h1024-no?authuser=0",
      department: "",
      name: "Kausar Ali",
      title: "Design Lead",
      totalReports: 2,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 13411,
        person: {
          id: 13411,
          avatar: BhupendraPersonnel,
          department: "",
          name: "Bhupendra",
          title: "UI/UX Designer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
      {
        id: 13412,
        person: {
          id: 13412,
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3fsCpmG28y01WKdUcCdEsZoEIzQifsJ6B34QVQ_vwFl7WYYuC9w6AKzmvJwTqA9WHmav_kM5-j8FJjcy2vyqG5ZRKnT4qx4R8-ed36tBcrwxGF568IS7hp_cp7zXIMv60qh152A0FeljByMe4mMbdk=w1274-h1592-no?authuser=0",
          department: "",
          name: "Prithviraj",
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
    id: 1342,
    person: {
      id: 1342,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3fA9T20xTYAvGileB83uIcVgL_DGmEgwvXad5YRFu6DidwwGRsXvWSabTS6DW-jej6S_31d-Pp86BdNhsVRF9ksVvcYpshMJTPVpAeEQiCXx2vGulp8JmoHof55FDEbZrvTECpLFh-7g4tP7kkC8EvM=w540-h779-no?authuser=0",
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
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3f22FqhK0WrwQNPAdvZje5lsTc0BtyTePySx4I2X3kjDCUNLM-Q8K3xOTeiOy2KRMH7KIggPkfHM-Q_YGGH4Mc4GFILtvzhWwE9Rct3qXKkqAcg_b2_slvvTytWwUPW1RzI4UFCWSEyNc2AFZYU-eSK=w828-h1592-no?authuser=0",
      department: "",
      name: "Dharamendra Parmar",
      title: "Design Lead",
      totalReports: 1,
    },
    hasChild: true,
    hasParent: true,
    children: [
      {
        id: 13431,
        person: {
          id: 13431,
          avatar: ImranPersonnel,
          department: "",
          name: "Imran",
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
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3egimxZW0j04x68yrtGyTGf5bFMd6IHsiRjAzUUKy6TH1UkvSz1V0x0hsrcihmrESK_O4WqdnTTrVwsDQVPbPWrZ7ZhmFhXiRLNIKu4kyg9rLsrpbO8TeXt4qP4lxncMHj5uYszP5ok614O8IQMFVeg=w1069-h1520-no?authuser=0",
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
          name: "Yashwant",
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
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3coN4w7IdWZhhyZkJskvdyZUcokO-2Ka4mnCn82ec2IiFbAuqjUqkuz5dlElKRp2rCFyZXQlnOWS9y2G6mjGuvDtBeKEmKkvh3iV4TmRl5C1oW180-E8MlhY7P6yYcGWXhhzJkpmlbNYMFBaULVN0Ki=w726-h1592-no?authuser=0",
          department: "",
          name: "Roshan",
          title: "Web Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        children: [],
      },
    ],
  },
  {
    id: 1344,
    person: {
      id: 1344,
      avatar: RahulPersonnel,
      department: "",
      name: "Rahul Patidar",
      title: "Wordpress Development Lead",
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 13444,
    person: {
      id: 13444,
      avatar: ShadabPersonnel,
      department: "",
      name: "Shadab Khan",
      title: "Sr. Web Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
];

export const AnkitsTeam = [
  {
    id: 1231,
    person: {
      id: 1231,
      avatar: GarimaPersonnel,
      department: "",
      name: "Garima Sharma",
      title: "Full-stack Developer",
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
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3f1KdYAdZ4rqgS16yJPGxp06jwljyB7qyBkOuEy2P7cWuV309N1dIXot5hLDFtU8xTJ-wbJl5Tji89eyiQdPvwSYMGpa3MUSYD_r4IQZbRTir-cnJK7Ixoapj_pspA_5ytP_BT4n66d5PjqcBiSCxnD=w1280-h958-no?authuser=0",
      department: "",
      name: "Nitin Dhote",
      title: "Sr. Full-stack Developer",
      totalReports: 3,
    },
    hasChild: false,
    hasParent: true,
    children: [
      {
        id: 12321,
        person: {
          id: 12321,
          avatar:
            "https://lh3.googleusercontent.com/pw/ACtC-3eteeXgFL8wtmP5zm6BGI4I-sJUWQfwwAvtfO0obIst5D7Yw0c-Kkxnw-hubKN-GJHRFJSD9dVPMVNirjBZtnxA8S4RLq01zKLKXGcjJcbsDPQHDjNnwPPA61KUM63Q31-2pjM4rtOaPxeR6wJDu3Aq=w1431-h1440-no?authuser=0",
          department: "",
          name: "Himanshu Pawar",
          title: "Full-stack Developer",
          totalReports: 0,
        },
        hasChild: false,
        hasParent: true,
        // children: [],
      },
      {
        id: 12322,
        person: {
          id: 12322,
          avatar: VikalpPersonnel,
          department: "",
          name: "Vikalp Acharya",
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
            "https://lh3.googleusercontent.com/pw/ACtC-3d5_RTseGpr7VMAIzUUiyTWJFy2O6s8YGtrSGdx8Pc6KE_mNeL75SHx2TYBWTTSziT07bBfYBV_Sz6V055EeY5QNxnR6qv6nLPsElb5QtPiNACJ7UVaykAZgLRlJe1m-5WctdHRwdMjyq5uzl1JzZE=w896-h1592-no?authuser=0",
          department: "",
          name: "Ratnesh Jaiswal",
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
    id: 125,
    person: {
      id: 125,
      avatar:
        "https://lh3.googleusercontent.com/pw/ACtC-3enNYDKFhc6CfcUV0Wi_O8bOuzfMfp-LchQT1aU9t-FkwHlFEZFoTOopARUIWbo4cmrqcaRuPIJbvgRGmPhjIWKvB9NoViW__6h0BK4TYawtA5AsUYOrVlcd9m1Tk62KS6BVY_65y75WULkPDmNXQ0=w586-h1017-no?authuser=0",
      department: "",
      name: "Churchill Gupta",
      title: "Quality Analyst",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
  {
    id: 1233,
    person: {
      id: 1233,
      avatar: ArchanaSharmaPersonnel,
      department: "",
      name: "Archana Sharma",
      title: "Full-stack Developer",
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    // children: [],
  },
];

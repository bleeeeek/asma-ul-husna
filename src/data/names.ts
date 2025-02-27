interface Name {
  number: number;
  arabic: string;
  transliteration: string;
  english: string;
  reference: {
    arabic: string;
    english: string;
    citation: string;
  };
  meaning: {
    arabic: string;
    english: string;
  };
  isLiked?: boolean; // Add this optional property
}


export const names: Name[] = [
  {
    number: 1,
    arabic: "الله",
    transliteration: "Allah",
    english: "God",
    reference: {
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      english: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
      citation: "1:1"
    },
    meaning: {
      arabic: "الاسم الأعظم، الذي يدل على الذات الإلهية المعبودة.",
      english: "The Greatest Name, which indicates the Divine Essence that is worshipped."
    }
  },
  {
    number: 2,
    arabic: "الأحَد",
    transliteration: "Al-Ahad",
    english: "The One/Unique",
    reference: {
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      english: "Say, \"He is Allah, [who is] One\"",
      citation: "[112:1]"
    },
    meaning: {
      arabic: "الفريد في ذاته وصفاته، الواحد الأحد.",
      english: "The Unique in His Essence and Attributes, the One and Only."
    }
  },
  {
    number: 3,
    arabic: "الأعْلَى",
    transliteration: "Al-A'laa",
    english: "The Most Exalted/ High",
    reference: {
      arabic: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
      english: "Exalt the name of your Lord, the Most High",
      citation: "[87:1]"
    },
    meaning: {
      arabic: "العليّ في ذاته وصفاته، المتعالي عن كل نقص.",
      english: "The Most High in His Essence and Attributes, transcendent above all imperfection."
    }
  },
  {
    number: 4,
    arabic: "الأكْرَم",
    transliteration: "Al-Akram",
    english: "The Most Generous",
    reference: {
      arabic: "… اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
      english: "Recite, and your Lord is the most Generous",
      citation: "[96:3]"
    },
    meaning: {
      arabic: "الذي لا يوازي كرمه كرم، ولا يعادله في كرمه كريم.",
      english: "He whose generosity is unmatched, and whose generosity is unmatched."
    }
  },
  {
    number: 5,
    arabic: "الإله",
    transliteration: "Al-Ilaah",
    english: "The One Who Alone Deserves to be Worshiped",
    reference: {
      arabic: "… وَإِلَـهُكُمْ إِلَهٌ وَاحِدٌ",
      english: "“And your god is one God…",
      citation: "[2:163]"
    },
    meaning: {
      arabic: "المعبود بحق، المستحق للعبادة.",
      english: "The Deity, the One who truly deserves to be worshipped."
    }
  },
  {
    number: 6,
    arabic: "الأوَّل",
    transliteration: "Al-Awwal",
    english: "The First",
    reference: {
      arabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
      english: "“He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.”",
      citation: "[57:3]"
    },
    meaning: {
      arabic: "الأزليّ الذي ليس قبله شيء.",
      english: "The First, the Eternal, who has no beginning."
    }
  },
  {
    number: 7,
    arabic: "الآخِر",
    transliteration: "Al-Aakhir",
    english: "The Last",
    reference: {
      arabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
      english: "“He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.”",
      citation: "[57:3]"
    },
    meaning: {
      arabic: "الباقي بعد فناء كل شيء.",
      english: "The Last, the Everlasting, who remains after all else has perished."
    }
  },
  {
    number: 8,
    arabic: "الظاهِر",
    transliteration: "Az-Zaahir",
    english: "The Most High",
    reference: {
      arabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
      english: "“He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.”",
      citation: "[57:3]"
    },
    meaning: {
      arabic: "الذي علا على كل شيء.",
      english: "The Manifest, the One who is above all things."
    }
  },
  {
    number: 9,
    arabic: "البَاطِن",
    transliteration: "Al-Baatin",
    english: "The Most Near",
    reference: {
      arabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
      english: "“He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.”",
      citation: "[57:3]"
    },
    meaning: {
      arabic: "الذي يعلم السرّ وأخفى.",
      english: "The Hidden, the One who knows the secrets and what is most concealed."
    }
  },
  {
    number: 10,
    arabic: "البارِئ",
    transliteration: "Al-Baari",
    english: "The Originator",
    reference: {
      arabic: "…هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
      english: "“He is Allah , the Creator, the Inventor (originator), the Fashioner…",
      citation: "[59:24]"
    },
    meaning: {
      arabic: "الخالق المبدع من غير مثال سابق.",
      english: "The Originator, the Creator who brings into being without any prior example."
    }
  },
  {
    number: 11,
    arabic: "البَرّ",
    transliteration: "Al-Barr",
    english: "The Most Kind",
    reference: {
      arabic: "إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ…",
      english: "“Indeed, it is He who is the Beneficent (Most Kind), the Merciful.”",
      citation: "[52:28]"
    },
    meaning: {
      arabic: "الذي لا يزال برّه وإحسانه على خلقه.",
      english: "The Source of All Goodness, whose kindness and benevolence are continuous upon His creation."
    }
  },
  {
    number: 12,
    arabic: "البَصِير",
    transliteration: "Al-Baseer",
    english: "The All Seeing",
    reference: {
      arabic: "إِنَّهُ هُوَ السَّمِيعُ البَصِيرُ…",
      english: "“Indeed, He is the Hearing, the Seeing.”",
      citation: "[17:1]"
    },
    meaning: {
      arabic: "الذي لا يخفى عليه شيء في الأرض ولا في السماء.",
      english: "The All-Seeing, from whom nothing in the earth or the heavens is hidden."
    }
  },
  {
    number: 13,
    arabic: "التَّوَّاب",
    transliteration: "At-Tawwaab",
    english: "The One Who Accepts the repentance",
    reference: {
      arabic: "إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ…",
      english: "“Indeed, it is He who is the Accepting of repentance, the Merciful.”",
      citation: "[2:37]"
    },
    meaning: {
      arabic: "الذي يقبل توبة عباده ويعفو عنهم.",
      english: "The Accepter of Repentance, the One who guides to repentance and accepts it."
    }
  },
  {
    number: 14,
    arabic: "الجَبَّار",
    transliteration: "Al-Jabbaar",
    english: "The Compeller",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer (dominant), the Exalted in Might, the Compeller, the Superior…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "الذي قهر كل شيء بجبروته.",
      english: "The Compeller, the One whose might compels all things to submit."
    }
  },
  {
    number: 15,
    arabic: "الحافِظ",
    transliteration: "Al-Haafiz",
    english: "The Protector",
    reference: {
      arabic: "فَاللّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ …",
      english: "“But Allah is the best guardian…",
      citation: "[12:64]"
    },
    meaning: {
      arabic: "الحافظ لخلقه، الذي يحفظ السماوات والأرض.",
      english: "The Protector, the Guardian of His creation, who preserves the heavens and the earth."
    }
  },
  {
    number: 16,
    arabic: "الحَسِيب",
    transliteration: "Al-Haseeb",
    english: "The Sufficient/ Ever-Reckoner",
    reference: {
      arabic: "إِنَّ اللّهَ كَانَ عَلَى كُلِّ شَيْءٍ حَسِيبًا …",
      english: "“Indeed, Allah is ever, over all things, an Accountant (Ever-Reckoner).”",
      citation: "[4:86]"
    },
    meaning: {
      arabic: "الكافي لعباده، الذي يحفظ أعمالهم ويجازيهم عليها.",
      english: "The Reckoner, the Sufficient One for His servants, who records their deeds and recompenses them accordingly."
    }
  },
  {
    number: 17,
    arabic: "الحَفِيظ",
    transliteration: "Al-Hafeez",
    english: "The Preserver",
    reference: {
      arabic: "وَرَبُّكَ عَلَى كُلِّ شَيْءٍ حَفِيظٌ",
      english: "“And your Lord, over all things, is Guardian (Preserver).”",
      citation: "[34:21]"
    },
    meaning: {
      arabic: "الحافظ لعباده من كل سوء.",
      english: "The Preserver, the One who protects His servants from all evil."
    }
  },
  {
    number: 18,
    arabic: "الحَفِيُّ",
    transliteration: "Al-Hafee",
    english: "The Benevolent/ Ever-Hospitable",
    reference: {
      arabic: "إِنَّهُ كَانَ بِي حَفِيًّا",
      english: "“Indeed, He is ever gracious to me (Ever-Hospitable).”",
      citation: "[19:47]"
    },
    meaning: {
      arabic: "اللطيف بعباده، الذي يغيثهم ويرحمهم.",
      english: "The Benevolent, the Gentle One with His servants, who aids and has mercy upon them."
    }
  },
  {
    number: 19,
    arabic: "الحقّ",
    transliteration: "Al-Haqq",
    english: "The Truth",
    reference: {
      arabic: "أَنَّ اللّهَ هُوَ الْحَقُّ الْمُبِينُ",
      english: "it is Allah who is the perfect in justice.",
      citation: "[24:25]"
    },
    meaning: {
      arabic: "الذي لا يسع أحد إنكاره، بل يجب إثباته والاعتراف به، لتظاهر الأدلة على وجوده سبحانه",
      english: "Which no one can deny, but rather it must be proven and acknowledged, because the evidence of His existence, glory be to Him, is evident.",
     
    }
  },
  {
    number: 20,
    arabic: "المُبِين",
    transliteration: "Al-Mubeen",
    english: "The Evident",
    reference: {
      arabic: "أَنَّ اللّهَ هُوَ الْحَقُّ الْمُبِينُ",
      english: "it is Allah who is the perfect in justice.",
      citation: "[24:25]"
    },
    meaning: {
      arabic: "الواضح الدلالة على وحدانيته.",
      english: "The Manifest, the One whose Oneness is evident."
    }
  },
  {
    number: 21,
    arabic: "الحَكِيم",
    transliteration: "Al-Hakeem",
    english: "The All-Wise",
    reference: {
      arabic: "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
      english: "“And He is the subjugator over His servants. And He is the Wise, the Acquainted .”",
      citation: "[6:18]"
    },
    meaning: {
      arabic: "الحكيم في خلقه وأمره.",
      english: "The Wise, the One whose decrees and actions are perfect in wisdom."
    }
  },
  {
    number: 22,
    arabic: "الحَلِيم",
    transliteration: "Al-Haleem",
    english: "The Forbearing",
    reference: {
      arabic: "إِنَّ اللّهَ غَفُورٌ حَلِيمٌ",
      english: "“Indeed, Allah is Forgiving and Forbearing.”",
      citation: "[3:155]"
    },
    meaning: {
      arabic: "الذي لا يعاجل بالعقوبة، بل يؤخرها ليتوب عباده.",
      english: "The Forbearing, the One who does not hasten to punish, but gives time for repentance."
    }
  },
  {
    number: 23,
    arabic: "الحَمِيد",
    transliteration: "Al-Hameed",
    english: "The Praiseworthy",
    reference: {
      arabic: "فَإِنَّ اللّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
      english: "“indeed, Allah is the Free of need, the Praiseworthy.”",
      citation: "[57:24]"
    },
    meaning: {
      arabic: "المحمود في جميع أفعاله.",
      english: "The Praiseworthy, the One who is praised for all His actions."
    }
  },
  {
    number: 24,
    arabic: "الحَيّ",
    transliteration: "Al-Hayy",
    english: "The Ever Living",
    reference: {
      arabic: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ",
      english: "“Allah – there is no deity except Him, the Ever-Living, the Sustainer of existence…”",
      citation: "[2:255]"
    },
    meaning: {
      arabic: "الحيّ الذي لا يموت.",
      english: "The Ever-Living, the One who has life without end."
    }
  },
  {
    number: 25,
    arabic: "القَيُّوم",
    transliteration: "Al-Qayyoom",
    english: "The Self Sustaining",
    reference: {
      arabic: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ",
      english: "“Allah – there is no deity except Him, the Ever-Living, the Sustainer of existence…”",
      citation: "[2:255]"
    },
    meaning: {
      arabic: "القائم بنفسه، القائم بأمور خلقه.",
      english: "The Self-Subsisting, the One who sustains Himself and all creation."
    }
  },
  {
    number: 26,
    arabic: "الخَبِير",
    transliteration: "Al-Khabeer",
    english: "The Fully Aware",
    reference: {
      arabic: "إِنَّ اللّهَ لَطِيفٌ خَبِيرٌ…",
      english: "“Indeed, Allah is Subtle and Acquainted.”",
      citation: "[22:63]"
    },
    meaning: {
      arabic: "العليم بكل شيء.",
      english: "The All-Aware, the One who knows all things."
    }
  },
  {
    number: 27,
    arabic: "الخَالِق",
    transliteration: "Al-Khaaliq",
    english: "The Creator of Everything",
    reference: {
      arabic: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
      english: "“He is Allah , the Creator, the Inventor, the Fashioner…",
      citation: "[59:24]"
    },
    meaning: {
      arabic: "الخالق من العدم.",
      english: "The Creator, the One who brings all things into existence from nothing."
    }
  },
  {
    number: 28,
    arabic: "الخَلاّق",
    transliteration: "Al-Khallaaq",
    english: "The Creator Who Creates Again & Again",
    reference: {
      arabic: "إِنَّ رَبَّكَ هُوَ الْخَلاَّقُ الْعَلِيمُ",
      english: "“Indeed, your Lord – He is the Knowing Creator.”",
      citation: "[15:86]"
    },
    meaning: {
      arabic: "الذي خلق فأحسن الخلق.",
      english: "The Creator, the One who creates and perfects His creation."
    }
  },
  {
    number: 29,
    arabic: "الرَّؤُوف",
    transliteration: "Ar-Ra'oof",
    english: "The Compassionate",
    reference: {
      arabic: "وَأَنَّ اللّه رَؤُوفٌ رَّحِيمٌ…",
      english: "“and because Allah is Kind and Merciful.”",
      citation: "[24:20]"
    },
    meaning: {
      arabic: "الرحيم بعباده.",
      english: "The Compassionate, the One who shows mercy to His servants."
    }
  },
  {
    number: 30,
    arabic: "الرَّحْمَٰنِ",
    transliteration: "Ar-Rahmaan",
    english: "The Extremely Merciful",
    reference: {
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      english: "“In the name of Allah , the Entirely Merciful, the Especially Merciful.”",
      citation: "[1:1]"
    },
    meaning: {
      arabic: "ذو الرحمة الواسعة.",
      english: "The Most Gracious, the One who possesses vast mercy."
    }
  },
  {
    number: 31,
    arabic: "الرَّحِيم",
    transliteration: "Ar-Raheem",
    english: "The Bestower of Mercy",
    reference: {
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      english: "“In the name of Allah , the Entirely Merciful, the Especially Merciful.”",
      citation: "[1:1]"
    },
    meaning: {
      arabic: "الذي وسعت رحمته كل شيء.",
      english: "The Most Merciful, whose mercy encompasses all things."
    }
  },
  {
    number: 32,
    arabic: "الرَّزَّاق",
    transliteration: "Ar-Razzaaq",
    english: "The Great Provider",
    reference: {
      arabic: "إِنَّ اللّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
      english: "“Indeed, it is Allah who is the Provider, the firm possessor of strength.”",
      citation: "[51:58]"
    },
    meaning: {
      arabic: "الذي يرزق جميع خلقه.",
      english: "The Provider, the One who provides sustenance for all creation."
    }
  },
  {
    number: 33,
    arabic: "الرَّقِيب",
    transliteration: "Ar-Raqeeb",
    english: "The Watchful",
    reference: {
      arabic: "فَلَمَّا تَوَفَّيْتَنِي كُنتَ أَنتَ الرَّقِيبَ",
      english: "“but when You took me up, You were the Observer over them…",
      citation: "[5:117]"
    },
    meaning: {
      arabic: "الحافظ الذي لا يغفل عن شيء.",
      english: "The Watchful, the One who observes all things and never neglects anything."
    }
  },
  {
    number: 34,
    arabic: "السّلام",
    transliteration: "As-Salaam",
    english: "The Flawless One",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "السلام الذي سلم من كل عيب ونقص.",
      english: "The Source of Peace, the One who is free from all imperfections."
    }
  },
  {
    number: 35,
    arabic: "السَّمِيع",
    transliteration: "'As-Samee",
    english: "The All Hearing",
    reference: {
      arabic: "إِنَّهُ هُوَ السَّمِيعُ البَصِيرُ…",
      english: "“Indeed, He is the Hearing, the Seeing.”",
      citation: "[17:1]"
    },
    meaning: {
      arabic: "الذي يسمع كل شيء.",
      english: "The All-Hearing, the One who hears all things."
    }
  },
  {
    number: 36,
    arabic:"الشَّاكِر",
    transliteration: "Ash-Shaakir",
    english: "The Grateful",
    reference: {
      arabic: "فَإِنَّ اللّهَ شَاكِرٌ عَلِيمٌ",
      english: "“then indeed, Allah is appreciative (Grateful) and Knowing.”",
      citation: "[2:158]"
    },
    meaning: {
      arabic: "الذي يجازي على القليل بالكثير.",
      english: "The Appreciative, the One who rewards greatly for even small deeds."
    }
  },
  {
    number: 37,
    arabic: "الشَّكُور",
    transliteration: "Ash-Shakoor",
    english: "The Appreciative",
    reference: {
      arabic: "إِنَّهُ غَفُورٌ شَكُورٌ",
      english: "“Indeed, He is Forgiving and Appreciative.”",
      citation: "[35:30]"
    },
    meaning: {
      arabic: "الذي يثيب على الشكر",
      english: "The Most Appreciative, the One who rewards those who are grateful."
    }
  },
  {
    number: 38,
    arabic: "الشَّهِيد",
    transliteration: "Ash-Shaheed",
    english: "The Witness",
    reference: {
      arabic: "وَأَنتَ عَلَى كُلِّ شَيْءٍ شَهِيدٌ",
      english: "“and You are, over all things, Witness.”",
      citation: "[5:117]"
    },
    meaning: {
      arabic: "الذي يشهد كل شيء.",
      english: "The Witness, the One who witnesses all things."
    }
  },
  {
    number: 39,
    arabic: "الصَّمَد",
    transliteration: "As-Samad",
    english: "The Perfect Lord & Master Upon Whom All of the Creation Depends",
    reference: {
      arabic: "اللَّهُ الصَّمَدُ",
      english: "“Allah , the Eternal Refuge.”",
      citation: "[112:2]"
    },
    meaning: {
      arabic: "الذي يصمد إليه الخلق في حوائجهم.",
      english: "The Eternal, the One to whom all creation turns in their needs."
    }
  },
  {
    number: 40,
    arabic: "العَالِم",
    transliteration: "Al-'Aalim",
    english: "The All Knower",
    reference: {
      arabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْعَزِيزُ الْحَكِيمُ",
      english: "“Knower of the unseen and the witnessed, the Exalted in Might, the Wise.”",
      citation: "[64:18]"
    },
    meaning: {
      arabic: "العالم بكل شيء.",
      english: "The All-Knowing, the One who knows all things."
    }
  },
  {
    number: 41,
    arabic: "العَزِيز",
    transliteration: "Al-'Azeez",
    english: "The Almighty",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "الغالب الذي لا يُغلب.",
      english: "The Almighty, the One who is invincible and cannot be overcome."
    }
  },
  {
    number: 42,
    arabic: "العَظِيم",
    transliteration: "Al-'Azeem",
    english: "The Great",
    reference: {
      arabic: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      english: "“And He is the Most High, the Most Great.”",
      citation: "[2:255]"
    },
    meaning: {
      arabic: "العظيم الذي يعظمه كل شيء.",
      english: "The Magnificent, the One who is truly Great and deserves veneration."
    }
  },
  {
    number: 43,
    arabic: "العَفُوّ",
    transliteration: "Al-'Afuww",
    english: "The One Who Pardons Again & Again",
    reference: {
      arabic: "فَإِنَّ اللّهَ كَانَ عَفُوًّا قَدِيرًا…",
      english: "“indeed, Allah is ever Pardoning and Competent.”",
      citation: "[4:149]"
    },
    meaning: {
      arabic: "الذي يعفو عن الذنوب.",
      english: "The Pardoner, the One who forgives sins."
    }
  },
  {
    number: 44,
    arabic: "العَلِيم",
    transliteration: "Al-'Aleem",
    english: "The All Knowing",
    reference: {
      arabic: "إِنَّ رَبَّكَ هُوَ الْخَلاَّقُ الْعَلِيمُ",
      english: "“Indeed, your Lord - He is the Knowing Creator.”",
      citation: "[15:86]"
    },
    meaning: {
      arabic: "العليم بكل شيء.",
      english: "The All-Knowing, the One who has knowledge of all things."
    }
  },
  {
    number: 45,
    arabic: "العَلِيّ",
    transliteration: "Al-'Aliyy",
    english: "The Sublime",
    reference: {
      arabic: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      english: "“And He is the Most High (Sublime), the Most Great.”",
      citation: "[2:255]"
    },
    meaning: {
      arabic: "العليّ فوق كل شيء.",
      english: "The Most High, the One who is exalted above all things."
    }
  },
  {
    number: 46,
    arabic: "الغَفَّار",
    transliteration: "Al-Ghaffaar",
    english: "The Oft-Forgiving",
    reference: {
      arabic: "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزِيزُ الْغَفَّارُ",
      english: "“the Exalted in Might, the Perpetual Forgiver.”",
      citation: "[38:66]"
    },
    meaning: {
      arabic: "الذي يغفر الذنوب كثيراً.",
      english: "The Oft-Forgiving, the One who forgives sins abundantly."
    }
  },
  {
    number: 47,
    arabic: "الغَفُور",
    transliteration: "Al-Ghafoor",
    english: "The One Who Forgives Extensively",
    reference: {
      arabic: "إِنَّ اللّهَ غَفُورٌ حَلِيمٌ",
      english: "“Indeed, Allah is Forgiving and Forbearing.”",
      citation: "[3:155]"
    },
    meaning: {
      arabic: "الذي يستر الذنوب.",
      english: "The Forgiving, the One who conceals sins."
    }
  },
  {
    number: 48,
    arabic: "الغَنِيّ",
    transliteration: "Al-Ghaniyy",
    english: "The Self Sufficient",
    reference: {
      arabic: "فَإِنَّ اللّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
      english: "“indeed, Allah is the Free of need (Self Sufficient), the Praiseworthy.”",
      citation: "[57:24]"
    },
    meaning: {
      arabic: "الغنيّ عن كل شيء.",
      english: "The Self-Sufficient, the One who is free of all needs."
    }
  },
  {
    number: 49,
    arabic: "الفَتَّاح",
    transliteration: "Al-Fattaah",
    english: "The Opener/Arbiter",
    reference: {
      arabic: "وَهُوَ الْفَتَّاحُ الْعَلِيمُ",
      english: "“And He is the Knowing Judge (Arbiter).”",
      citation: "[34:26]"
    },
    meaning: {
      arabic: "الذي يفتح أبواب الخير لعباده.",
      english: "The Opener, the One who opens the doors of goodness for His servants."
    }
  },
    {
    number: 50,
    arabic: "القَادِر",
    transliteration: "Al-Qaadir",
    english: "The Fully Able One",
    reference: {
      arabic: "لْ هُوَ الْقَادِرُ عَلَى أَن يَبْعَثَ عَلَيْكُمْ عَذَابًا مِّن فَوْقِكُمْ أَوْ مِن تَحْتِ أَرْجُلِكُمْ",
      english: "\"Say, \"He is the Able to send upon you affliction from above you or from beneath your feet…",
      citation: "[6:65]"
    },
    meaning: {
      arabic: "القادر على كل شيء.",
      english: "The All-Powerful, the One who is capable of all things."
    }
  },
  {
    number: 51,
    arabic: "القَاهِر",
    transliteration: "Al-Qaahir",
    english: "The Subduer/Subjugator",
    reference: {
      arabic: "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
      english: "“And He is the subjugator over His servants. And He is the Wise, the Acquainted .”",
      citation: "[6:18]"
    },
    meaning: {
      arabic: "الذي قهر كل شيء.",
      english: "The Subduer, the One who has dominion over all things."
    }
  },
  {
    number: 52,
    arabic: "القُدُّوس",
    transliteration: "Al-Quddoos",
    english: "The Pure & Perfect",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "المنزه عن كل نقص.",
      english: "The Most Holy, the One who is pure and free from all imperfections."
    }
  },
  {
    number: 53,
    arabic: "القَدِير",
    transliteration: "Al-Qadeer",
    english: "The All Powerful",
    reference: {
      arabic: "فَإِنَّ اللّهَ كَانَ عَفُوًّا قَدِيرًا",
      english: "“indeed, Allah is ever Pardoning and Competent (All-Powerful).”",
      citation: "[4:149]"
    },
    meaning: {
      arabic: "القادر على كل شيء.",
      english: "The All-Powerful, the One who has power over all things."
    }
  },
  {
    number: 54,
    arabic: "القَرِيب",
    transliteration: "Al-Qareeb",
    english: "The Ever Near",
    reference: {
      arabic: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ…",
      english: "“Indeed, my Lord is near and responsive.”",
      citation: "[11:61]"
    },
    meaning: {
      arabic: "القريب من عباده.",
      english: "The Near, the One who is close to His servants."
    }
  },
  {
    number: 55,
    arabic: "القَوِيّ",
    transliteration: "Al-Qawiyy",
    english: "The Strong",
    reference: {
      arabic: "إِنَّ رَبَّكَ هُوَ الْقَوِيُّ الْعَزِيزُ…",
      english: "“Indeed, it is your Lord who is the Powerful, the Exalted in Might.”",
      citation: "[11:66]"
    },
    meaning: {
      arabic: "القويّ الذي لا يغلبه شيء.",
      english: "The Strong, the One who is perfect in strength and cannot be overcome."
    }
  },
  {
    number: 56,
    arabic: "القَهَّار",
    transliteration: "Al-Qahhaar",
    english: "The Subjugator",
    reference: {
      arabic: "هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ",
      english: "“He is Allah , the One, the Prevailing.”",
      citation: "[39:4]"
    },
    meaning: {
      arabic: "الذي قهر كل شيء بقدرته.",
      english: "The Subduer, the One who overpowers all things with His might."
    }
  },
  {
    number: 57,
    arabic: "الكَبِير",
    transliteration: "Al-Kabeer",
    english: "The Magnificent/Grand",
    reference: {
      arabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
      english: "“Knower of the unseen and the witnessed, the Grand, the Exalted (supreme).”",
      citation: "[13:9]"
    },
    meaning: {
      arabic: "الكبير المتعال.",
      english: "The Great, the One who is magnificent and exalted."
    }
  },
  {
    number: 58,
    arabic: "الكَرِيم",
    transliteration: "Al-Kareem",
    english: "The Most Noble & Generous",
    reference: {
      arabic: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
      english: "“O mankind, what has deceived you concerning your Lord, the Generous,",
      citation: "[82:6]"
    },
    meaning: {
      arabic: "الجواد الكريم.",
      english: "The Generous, the One who is noble and bountiful."
    }
  },
  {
    number: 59,
    arabic: "اللَّطِيف",
    transliteration: "Al-Lateef",
    english: "The Subtle & Kind",
    reference: {
      arabic: "إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ…",
      english: "“Indeed, Allah is Subtle and Acquainted.”",
      citation: "[22:63]"
    },
    meaning: {
      arabic: "اللطيف بعباده.",
      english: "The Subtle, the One who is kind and gentle with His servants."
    }
  },
  {
    number: 60,
    arabic: "المُؤمِن",
    transliteration: "Al-Mu'min",
    english: "The Trustworthy Granter of Security",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer (dominant), the Exalted in Might, the Compeller, the Superior…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "الذي يؤمن عباده من الخوف.",
      english: "The Giver of Faith, the One who grants security and removes fear from His servants."
    }
  },
  {
    number: 61,
    arabic: "المُتَعَالِي",
    transliteration: "Al-Muta'aalee",
    english: "The Supreme",
    reference: {
      arabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
      english: "“Knower of the unseen and the witnessed, the Grand, the Exalted (supreme).”",
      citation: "[13:9]"
    },
    meaning: {
      arabic: "المتعالي عن كل نقص.",
      english: "The Most Exalted, the One who is transcendent above all imperfections."
    }
  },
  {
    number: 62,
    arabic: "المُتَكَبِّر",
    transliteration: "Al-Mutakabbir",
    english: "The Justly & Rightfully Proud",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior (justly proud)…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "المتكبر المتعالي.",
      english: "The Majestic, the One who is supremely exalted."
    }
  },
  {
    number: 63,
    arabic: "المَتِين",
    transliteration: "Al-Mateen",
    english: "The Firm One",
    reference: {
      arabic: "إِنَّ اللّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
      english: "“Indeed, it is Allah who is the Provider, the firm possessor of strength.”",
      citation: "[51:58]"
    },
    meaning: {
      arabic: "القويّ المتين.",
      english: "The Firm, the One who is strong and steadfast."
    }
  },
  {
    number: 64,
    arabic: "المُجِيب",
    transliteration: "Al-Mujeeb",
    english: "The Responsive",
    reference: {
      arabic: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ…",
      english: "“Indeed, my Lord is near and responsive.”",
      citation: "[11:61]"
    },
    meaning: {
      arabic: "الذي يجيب دعاء الداعين.",
      english: "The Responsive, the One who answers the prayers of those who call upon Him."
    }
  },
  {
    number: 65,
    arabic: "المَجِيد",
    transliteration: "Al-Majeed",
    english: "The Glorious",
    reference: {
      arabic: "ذُو الْعَرْشِ الْمَجِيدُ",
      english: "“Honorable (glorious) Owner of the Throne",
      citation: "[85:15]"
    },
    meaning: {
      arabic: "ذو المجد والعظمة.",
      english: "The Glorious, the One who possesses glory and majesty."
    }
  },
  {
    number: 66,
    arabic: "المُحِيط",
    transliteration: "Al-Muheet",
    english: "The All Encompassing",
    reference: {
      arabic: "إِنَّهُ بِكُلِّ شَيْءٍ مُّحِيطٌ",
      english: "“Unquestionably He is, of all things, encompassing.”",
      citation: "[41:54]"
    },
    meaning: {
      arabic: "الذي أحاط بكل شيء علماً.",
      english: "The Encompassing, the One whose knowledge encompasses all things."
    }
  },
  {
    number: 67,
    arabic: "المُصَوِّر",
    transliteration: "Al-Musawwir",
    english: "The Bestower of Forms",
    reference: {
      arabic: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
      english: "“He is Allah , the Creator, the Inventor, the Fashioner (bestower of forms)…",
      citation: "[59:24]"
    },
    meaning: {
      arabic: "الذي صوّر خلقه فأحسن تصويرهم.",
      english: "The Fashioner, the One who forms and perfects His creation."
    }
  },
  {
    number: 68,
    arabic: "المُقْتَدِر",
    transliteration: "Al-Muqtadir",
    english: "The Omnipotent",
    reference: {
      arabic: "وَكَانَ اللّهُ عَلَى كُلِّ شَيْءٍ مُّقْتَدِرً",
      english: "“And Allah is ever, over all things, Perfect in Ability (Omnipotent).”",
      citation: "[18:45]"
    },
    meaning: {
      arabic: "القادر على كل شيء.",
      english: "The Powerful, the One who is capable of all things."
    }
  },
  {
    number: 69,
    arabic: "المُقِيت",
    transliteration: "Al-Muqeet",
    english: "The All Powerful Maintainer",
    reference: {
      arabic: "",
      english: "“And ever is Allah , over all things, a Keeper (Supreme Nourisher/overseer).”",
      citation: "[4:85]"
    },
    meaning: {
      arabic: "الذي يقوت خلقه.",
      english: "The Sustainer, the One who provides sustenance for His creation."
    }
  },
  {
    number: 70,
    arabic: "المَلِك",
    transliteration: "Al-Malik",
    english: "The King",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "مالك الملك.",
      english: "The King, the Sovereign, the Possessor of all dominion."
    }
  },
  {
    number: 71,
    arabic: "المَلِيك",
    transliteration: "Al-Maleek",
    english: "The Supreme Sovereign",
    reference: {
      arabic: "فِي مَقْعَدِ صِدْقٍ عِندَ مَلِيكٍ مُّقْتَدِرٍ",
      english: "“In a seat of honor near a Sovereign, Perfect in Ability.”",
      citation: "[54:55]"
    },
    meaning: {
      arabic: "الذي له الملك.",
      english: "The Sovereign, the One to whom all sovereignty belongs."
    }
  },
  {
    number: 72,
    arabic: "المَولَى",
    transliteration: "Al-Mawlaa",
    english: "The Master",
    reference: {
      arabic: "أَنَّ اللّهَ مَوْلاَكُمْ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ",
      english: "“Excellent is the protector (patron/master), and Excellent is the helper.”",
      citation: "[8:40]"
    },
    meaning: {
      arabic: "الوليّ النصير.",
      english: "The Protecting Friend, the Ally and Helper."
    }
  },
  {
    number: 73,
    arabic: "المُهَيْمِن",
    transliteration: "Al-Muhaymin",
    english: "The Dominant One",
    reference: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
      english: "“He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer (dominant), the Exalted in Might, the Compeller, the Superior…",
      citation: "[59:23]"
    },
    meaning: {
      arabic: "الرقيب على كل شيء.",
      english: "The Guardian, the Overseer of all things."
    }
  },
  {
    number: 74,
    arabic: "النَّصِير",
    transliteration: "An-Naseer",
    english: "The Helper",
    reference: {
      arabic: "أَنَّ اللّهَ مَوْلاَكُمْ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ",
      english: "“Excellent is the protector, and Excellent is the helper.”",
      citation: "[8:40]"
    },
    meaning: {
      arabic: "الناصر لعباده.",
      english: "The Helper, the One who aids and supports His servants."
    }
  },
  {
    number: 75,
    arabic: "الوَاحِد",
    transliteration: "Al-Waahid",
    english: "The One & Only",
    reference: {
      arabic: "هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ",
      english: "“He is Allah , the One, the Prevailing.”",
      citation: "[39:4]"
    },
    meaning: {
      arabic: "الفرد الصمد.",
      english: "The One, the Unique, the Only One."
    }
  },
  {
    number: 76,
    arabic: "الوَارِث",
    transliteration: "Al-Waarith",
    english: "The Inheritor",
    reference: {
      arabic: "وَإنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ الْوَارِثُونَ",
      english: "“And indeed, it is We who give life and cause death, and We are the Inheritor.”",
      citation: "[15:23]"
    },
    meaning: {
      arabic: "وارث كل شيء.",
      english: "The Inheritor, the One who inherits all things."
    }
  },
  {
    number: 77,
    arabic: "الوَاسِع",
    transliteration: "Al-Waasi'",
    english: "The Vast One",
    reference: {
      arabic: "إِنَّ اللّهَ وَاسِعٌ عَلِيمٌ…",
      english: "“Indeed, Allah is all-Encompassing (all-prevading) and Knowing.”",
      citation: "[2:115]"
    },
    meaning: {
      arabic: "الواسع الذي يسع خلقه كلهم بالكافية والإفضال والجود والتدبير ، فالله هو الغني الذي وسع رزقه جميع خلقه ، فلا تجد أحداً إلا هو يأكل من رزقه ، ولا يقدر أن يأكل من غير ما رزقه ، ووسعت رحمته كل شيء وغناه كل فقر ، وهو الكثير العطاء الذي يسع لما يُسأل ، وهو المحيط بكل شيء كما في قوله تعالى",
      english: "The Vast Who encompasses all of His creation with sufficiency, favor, generosity, and management. God is the Rich One whose provision has encompassed all of His creation. You will not find anyone except Him eating from His provision, nor is he able to eat from other than what He has provided him. His mercy encompasses everything and His wealth is all-encompassing. He is the Generous Giver who encompasses what is asked for, and He encompasses everything as in the Almighty’s saying:"
    }
  },
  {
    number: 78,
    arabic: "الوَدُود",
    transliteration: "Al-Wadood",
    english: "The Loving",
    reference: {
      arabic: "إِنَّ رَبِّي رَحِيمٌ وَدُودٌ…",
      english: "“my Lord is Merciful and Affectionate (loving).”",
      citation: "[11:90]"
    },
    meaning: {
      arabic: "الذي يحبّ عباده ويحبونه.",
      english: "The Loving, the One who loves His servants and is loved by them."
    }
  },
  {
    number: 79,
    arabic: "الوَكِيل",
    transliteration: "Al-Wakeel",
    english: "The Trustee",
    reference: {
      arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ وَكِيلٌ…",
      english: "“and He is, over all things, Disposer of affairs (Trustee).”",
      citation: "[39:62]"
    },
    meaning: {
      arabic: "الوكيل الذي يُوكّل إليه الأمور.",
      english: "The Trustee, the One who is entrusted with all affairs."
    }
  },
  {
    number: 80,
    arabic: "الوَلِيّ",
    transliteration: "Al-Waliyy",
    english: "The Guardian",
    reference: {
      arabic: "…هُوَ الْوَلِيُّ وَهُوَ يُحْيِي المَوْتَى…",
      english: "“He is the Protector (Guardian), and He gives life to the dead…",
      citation: "[42:9]"
    },
    meaning: {
      arabic: "الوليّ لعباده المؤمنين.",
      english: "The Protecting Friend, the Guardian of the believers."
    }
  },
  {
    number: 81,
    arabic: "الوَهَّاب",
    transliteration: "Al-Wahhaab",
    english: "The Bestower",
    reference: {
      arabic: "إِنَّكَ أَنتَ الْوَهَّابُ",
      english: "“Indeed, You are the Bestower…",
      citation: "[3:8]"
    },
    meaning: {
      arabic: "الذي وهب كل شيء.",
      english: "The Bestower, the One who bestows all gifts and blessings."
    }
  },
  {
    number: 82,
    arabic: "الجَمِيل",
    transliteration: "Al-Jameel",
    english: "The Beautiful",
    reference: {
      arabic: "… إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ …",
      english: "“Allah is Beautiful (graceful), He loves beauty (grace)…",
      citation: "[Muslim 91]"
    },
    meaning: {
      arabic: "الذي له الجمال المطلق.",
      english: "The Beautiful, the One who possesses absolute beauty."
    }
  },
  {
    number: 83,
    arabic: "الجَوَاد",
    transliteration: "Al-Jawaad",
    english: "The Munificent",
    reference: {
      arabic: "…ذَلِكَ بِأَنِّي جَوَادٌ مَاجِدٌ…",
      english: "“That is because I am the Most Generous, Majestic…",
      citation: "[Ibn Majah]"
    },
    meaning: {
      arabic: "الجواد الكريم.",
      english: "The Generous, the One who is bountiful and giving."
    }
  },
  {
    number: 84,
    arabic: "الحَكَم",
    transliteration: "Al-Hakam",
    english: "The Judge",
    reference: {
      arabic: "… إِنَّ اللّهَ هُوَ الْحَكَمُ وَإِلَيْهِ الْحُكْمُ",
      english: "“Allah is Al-Hakam (the Judge) and judgment is His…",
      citation: "[Nasa'i 5387]"
    },
    meaning: {
      arabic: "الحاكم العدل.",
      english: "The Judge, the Ruler, the Just One."
    }
  },
  {
    number: 85,
    arabic: "الحَيِّي",
    transliteration: "Al-Hayyiyy",
    english: "The Modest",
    reference: {
      arabic: "…إِنَّ رَبَّكُمْ تَبَارَكَ وَتَعَالَى حَيِيٌّ كَرِيمٌ",
      english: "“Your Lord is munificent and generous…",
      citation: "[Abi Dawud 1488]"
    },
    meaning: {
      arabic: "الحيّ الذي لا يموت.",
      english: "The Ever-Living, the One who possesses eternal life."
    }
  },
  {
    number: 86,
    arabic: "الرَّبّ",
    transliteration: "Ar-Rabb",
    english: "The Lord and Nurturer",
    reference: {
      arabic: "أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الآخِرِ",
      english: "“The closest that the Lord is to a worshipper is during the last part of the night…",
      citation: "[Tirmidhi 3579]"
    },
    meaning: {
      arabic: "الربّ المالك.",
      english: "The Lord, the Master, the Sustainer."
    }
  },
  {
    number: 87,
    arabic: "الرَّفِيق",
    transliteration: "Ar-Rafeeq",
    english: "The Gentle",
    reference: {
      arabic: "إِنَّ اللّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ",
      english: "“Allah is kind (gentle and lenient) and likes that one should be kind (gentle and lenient) in all matters…",
      citation: "[Bukhari 6927]"
    },
    meaning: {
      arabic: "اللطيف بعباده.",
      english: "The Companion, the One who is kind and gentle with His servants."
    }
  },
  {
    number: 88,
    arabic: "السُّبُّوح",
    transliteration: "As-Subbooh",
    english: "The Perfect",
    reference: {
      arabic: "سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلاَئِكَةِ وَالرُّوحِ",
      english: "“All Glorious (perfect), All Holy, Lord of the Angels and the Spirit.”",
      citation: "[Muslim 487]"
    },
    meaning: {
      arabic: "المنزه عن كل نقص.",
      english: "The Most Glorified, the One who is free from all imperfections."
    }
  },
  {
    number: 89,
    arabic: "السَّيِّد",
    transliteration: "As-Sayyid",
    english: "The Lord & Master",
    reference: {
      arabic: "السَّيِّدُ اللَّهُ تَبَارَكَ وَتَعَالَى",
      english: "“The lord is Allah, the Blessed and Exalted…",
      citation: "[Abu Dawud 4806]"
    },
    meaning: {
      arabic: "السيد المطاع.",
      english: "The Master, the One who is obeyed."
    }
  },
  {
    number: 90,
    arabic: "الشَّافِي",
    transliteration: "Ash-Shaafee",
    english: "The Healer",
    reference: {
      arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ، اشْفِهِ وَأَنْتَ الشَّافِي",
      english: "“O Allah, the Lord of the people! Remove the trouble and heal the patient, for You are the Healer…",
      citation: "[Bukhari 5743]"
    },
    meaning: {
      arabic: "الذي يشفي المرضى.",
      english: "The Healer, the One who cures the sick."
    }
  },
  {
    number: 91,
    arabic: "الطَّيِّب",
    transliteration: "At-Tayyib",
    english: "The Pure One",
    reference: {
      arabic: "إِنَّ اللّهَ طَيِّبٌ لاَ يَقْبَلُ إِلاَّ طَيِّبًا",
      english: "“Allah is Good (Pure) and He therefore, accepts only that which is good (pure)…",
      citation: "[Muslim 1015]"
    },
    meaning: {
      arabic: "الطيب المطهر.",
      english: "The Pure, the Good, the One who purifies."
    }
  },
  {
    number: 92,
    arabic: "القابِض",
    transliteration: "Al-Qaabid",
    english: "The Withholder",
    reference: {
      arabic: "إِنَّ اللّهَ هُوَ الْمُسَعِّرُ الْقَابِضُ الْبَاسِطُ الرَّزَّاقُ",
      english: "“Indeed Allah is Al-Musa'ir (One who regulates the prices), Al-Qabid (the withholder – the one who seizes), Al-Basit (the expander – the one who grants increase), Ar-Razzaq (the ever providing)…",
      citation: "[Tirmidhi 1314]"
    },
    meaning: {
      arabic: "الذي يقبض الأرواح.",
      english: "The Withholder, the One who takes away life."
    }
  },
  {
    number: 93,
    arabic: "البَاسِط",
    transliteration: "Al-Baasit",
    english: "The Expander",
    reference: {
      arabic: "إِنَّ اللّهَ هُوَ الْمُسَعِّرُ الْقَابِضُ الْبَاسِطُ الرَّزَّاقُ",
      english: "“Indeed Allah is Al-Musa'ir (One who regulates the prices), Al-Qabid (the withholder – the one who seizes), Al-Basit (the expander – the one who grants increase), Ar-Razzaq (the ever providing)…",
      citation: "[Tirmidhi 1314]"
    },
    meaning: {
      arabic: "الذي يبسط الرزق لعباده.",
      english: "The Expander, the One who extends provision to His servants."
    }
  },
  {
    number: 94,
    arabic: "المُقَدِّم",
    transliteration: "Al-Muqaddim",
    english: "The One Who Gives Precedence",
    reference: {
      arabic: "أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ",
      english: "“You are the One who make (some people) forward (The One Who Gives Precedence) And (some) backward (The Delayer)…",
      citation: "[Bukhari 1120]"
    },
    meaning: {
      arabic: "الذي يقدم من يشاء.",
      english: "The Expediter, the One who brings forward whomever He wills."
    }
  },
  {
    number: 95,
    arabic: "المُؤَخِّر",
    transliteration: "Al-Mu'akhkhir",
    english: "The Delayer",
    reference: {
      arabic: "أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ",
      english: "“You are the One who make (some people) forward (The One Who Gives Precedence) And (some) backward (The Delayer)…",
      citation: "[Bukhari 1120]"
    },
    meaning: {
      arabic: "الذي يؤخر من يشاء.",
      english: "The Delayer, the One who postpones whomever He wills."
    }
  },
  {
    number: 96,
    arabic: "المُحْسِن",
    transliteration: "Al-Muhsin",
    english: "The Benevolent",
    reference: {
      arabic: "in the hadith of Shadad ibn Au's in al-Mujam al-Kabir (7:257) it is narrated that the prophet (pbuh) said 'God is Mohsin so you too bring Husn in your deeds … ' Al-Albani considers the hadith to be authentic in his Sahih al-Jami (1824)",
      english: "A number of the well-known scholars of the past including Ibn Taymiyah (in majmu'a al-fatawa 1:379) and ibn Qayyim (in madarij al-salikin, 1:418) have referred to Mohsin as a name of God.",
      citation: ""
    },
    meaning: {
      arabic: "الذي يحسن إلى خلقه.",
      english: "The Doer of Good, the One who shows kindness to His creation."
    }
  },
  {
    number: 97,
    arabic: "المُعْطِي",
    transliteration: "Al-Mu'tee",
    english: "The Giver",
    reference: {
      arabic: "…وَاللَّهُ الْمُعْطِي وَأَنَا الْقَاسِمُ…",
      english: "“Allah is Al-Mu'tee (the Giver) and I am Al-Qasim (i.e. the distributor)…",
      citation: "[Bukhari 3116]"
    },
    meaning: {
      arabic: "الذي يعطي بلا منّ.",
      english: "The Giver, the One who gives without expecting anything in return."
    }
  },
  {
    number: 98,
    arabic: "المَنَّان",
    transliteration: "Al-Mannaan",
    english: "The Benefactor",
    reference: {
      arabic: "…لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ الْمَنَّانُ…",
      english: "“none has the right to be worshiped but You alone, and You have no partner or associate, the Bestower (benefactor)…",
      citation: "[Ibn Majah 3858]"
    },
    meaning: {
      arabic: "الذي يمنّ على عباده بالنعم.",
      english: "The Bestower of Blessings, the One who blesses His servants with favors."
    }
  },
  {
    number: 99,
    arabic: "الوِتْر",
    transliteration: "Al-Witr",
    english: "The One",
    reference: {
      arabic: "… وَهْوَ وَتْرٌ يُحِبُّ الْوَتْرَ…",
      english: "“Allah is witr (one) and loves 'the witr'",
      citation: "[Bukhari 6410]"
    },
    meaning: {
      arabic: "الفرد الواحد.",
      english: "The One, the Unique, the Single."
    }
  }
];
export function getLikedNames(): number[] {
  const likedNames = localStorage.getItem('likedNames');
  return likedNames ? JSON.parse(likedNames) : [];
}

export function toggleNameLike(nameNumber: number): void {
  const likedNames = getLikedNames();
  const index = likedNames.indexOf(nameNumber);
  
  if (index === -1) {
    likedNames.push(nameNumber);
  } else {
    likedNames.splice(index, 1);
  }
  
  localStorage.setItem('likedNames', JSON.stringify(likedNames));
}

export function isNameLiked(nameNumber: number): boolean {
  const likedNames = getLikedNames();
  return likedNames.includes(nameNumber);
}

export function paginateNames(page: number, pageSize: number): Name[] {
  const startIndex = (page - 1) * pageSize;
  const likedNames = getLikedNames();
  
  // Return names with their liked status
  return names.slice(startIndex, startIndex + pageSize).map(name => ({
    ...name,
    isLiked: likedNames.includes(name.number)
  }));
}

// Optional: Add a function to get all names with their liked status
export function getAllNames(): Name[] {
  const likedNames = getLikedNames();
  return names.map(name => ({
    ...name,
    isLiked: likedNames.includes(name.number)
  }));
}
interface Name {
  number: number;
  arabic: string;
  transliteration: string;
  english: string;
  root: string;
  referenceArabic: string;
  referenceEnglish: string;
}

export interface NameWithMeaning {
  number: number;
  arabic: string;
  transliteration: string;
  english: string;
  root: string;
  meaningArabic: string;
  meaningEnglish: string;
  referenceArabic: string;
  referenceEnglish: string;
}

export const names: NameWithMeaning[] = [
  {
    number: 1,
    arabic: "الله",
    transliteration: "Allah",
    english: "God",
    root: "أ ل ه",
    meaningArabic: "الاسم الأعظم، الذي يدل على الذات الإلهية المعبودة.",
    meaningEnglish: "The Greatest Name, which indicates the Divine Essence that is worshipped.",
    referenceArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    referenceEnglish: "In the name of Allah, the Entirely Merciful, the Especially Merciful. [1:1]"
  },
  {
    number: 2,
    arabic: "الأحد",
    transliteration: "Al-Ahad",
    english: "The One/Unique",
    root: "أ ح د",
    meaningArabic: "الفريد في ذاته وصفاته، الواحد الأحد.",
    meaningEnglish: "The Unique in His Essence and Attributes, the One and Only.",
    referenceArabic: "اللَّهُ الصَّمَدُ",
    referenceEnglish: "Say, \"He is Allah, One\" [112:1]"
  },
  {
    number: 3,
    arabic: "الأعلى",
    transliteration: "Al-A'laa",
    english: "The Most Exalted/ High",
    root: "ع ل و",
    meaningArabic: "العليّ في ذاته وصفاته، المتعالي عن كل نقص.",
    meaningEnglish: "The Most High in His Essence and Attributes, transcendent above all imperfection.",
    referenceArabic: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
    referenceEnglish: "Exalt the name of your Lord, the Most High [87:1]"
  },
  {
    number: 4,
    arabic: "الأكرم",
    transliteration: "Al-Akram",
    english: "The Most Generous",
    root: "ك ر م",
    meaningArabic: "",
    meaningEnglish: "The Most Generous One",
    referenceArabic: "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
    referenceEnglish: "Recite, and your Lord is the most Generous [96:3]"
  },
  {
    number: 5,
    arabic: "الإله",
    transliteration: "Al-Ilaah",
    english: "The One Who Alone Deserves to be Worshiped",
    root: "أ ل ه",
    meaningArabic: "المعبود بحق، المستحق للعبادة.",
    meaningEnglish: "The Deity, the One who truly deserves to be worshipped.",
    referenceArabic: "وَإِلَـهُكُمْ إِلَهٌ وَاحِدٌ",
    referenceEnglish: "And your god is one God... [2:163]"
  },
  {
    number: 6,
    arabic: "الأول",
    transliteration: "Al-Awwal",
    english: "The First",
    root: "أ و ل",
    meaningArabic: "الأزليّ الذي ليس قبله شيء.",
    meaningEnglish: "The First, the Eternal, who has no beginning.",
    referenceArabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    referenceEnglish: "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing. [57:3]"
  },
  {
    number: 7,
    arabic: "الآخر",
    transliteration: "Al-Aakhir",
    english: "The Last",
    root: "أ خ ر",
    meaningArabic: "الباقي بعد فناء كل شيء.",
    meaningEnglish: "The Last, the Everlasting, who remains after all else has perished.",
    referenceArabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    referenceEnglish: "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing. [57:3]"
  },
  {
    number: 8,
    arabic: "الظاهر",
    transliteration: "Az-Zaahir",
    english: "The Most High",
    root: "ظ ه ر",
    meaningArabic: "الذي علا على كل شيء.",
    meaningEnglish: "The Manifest, the One who is above all things.",
    referenceArabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    referenceEnglish: "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing. [57:3]"
  },
  {
    number: 9,
    arabic: "الباطن",
    transliteration: "Al-Baatin",
    english: "The Most Near",
    root: "ب ط ن",
    meaningArabic: "الذي يعلم السرّ وأخفى.",
    meaningEnglish: "The Hidden, the One who knows the secrets and what is most concealed.",
    referenceArabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
    referenceEnglish: "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing. [57:3]"
  },
  {
    number: 10,
    arabic: "البارئ",
    transliteration: "Al-Baari",
    english: "The Originator",
    root: "ب ر أ",
    meaningArabic: "الخالق المبدع من غير مثال سابق.",
    meaningEnglish: "The Originator, the Creator who brings into being without any prior example.",
    referenceArabic: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
    referenceEnglish: "He is Allah, the Creator, the Inventor (originator), the Fashioner... [59:24]"
  },
  {
    number: 11,
    arabic: "البر",
    transliteration: "Al-Barr",
    english: "The Most Kind",
    root: "ب ر ر",
    meaningArabic: "الذي لا يزال برّه وإحسانه على خلقه.",
    meaningEnglish: "The Source of All Goodness, whose kindness and benevolence are continuous upon His creation.",
    referenceArabic: "إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ",
    referenceEnglish: "Indeed, it is He who is the Beneficent (Most Kind), the Merciful. [52:28]"
  },
  {
    number: 12,
    arabic: "البصير",
    transliteration: "Al-Baseer",
    english: "The All Seeing",
    root: "ب ص ر",
    meaningArabic: "الذي لا يخفى عليه شيء في الأرض ولا في السماء.",
    meaningEnglish: "The All-Seeing, from whom nothing in the earth or the heavens is hidden.",
    referenceArabic: "إِنَّهُ هُوَ السَّمِيعُ البَصِيرُ",
    referenceEnglish: "Indeed, He is the Hearing, the Seeing. [17:1]"
  },
  {
    number: 13,
    arabic: "التواب",
    transliteration: "At-Tawwaab",
    english: "The One Who Accepts the repentance",
    root: "ت و ب",
    meaningArabic: "الذي يقبل توبة عباده ويعفو عنهم.",
    meaningEnglish: "The Accepter of Repentance, the One who guides to repentance and accepts it.",
    referenceArabic: "إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ",
    referenceEnglish: "Indeed, it is He who is the Accepting of repentance, the Merciful. [2:37]"
  },
  {
    number: 14,
    arabic: "الجبار",
    transliteration: "Al-Jabbaar",
    english: "The Compeller",
    root: "ج ب ر",
    meaningArabic: "الذي قهر كل شيء بجبروته.",
    meaningEnglish: "The Compeller, the One whose might compels all things to submit.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer (dominant), the Exalted in Might, the Compeller, the Superior... [59:23]"
  },
  {
    number: 15,
    arabic: "الحافظ",
    transliteration: "Al-Haafiz",
    english: "The Protector",
    root: "ح ف ظ",
    meaningArabic: "الحافظ لخلقه، الذي يحفظ السماوات والأرض.",
    meaningEnglish: "The Protector, the Guardian of His creation, who preserves the heavens and the earth.",
    referenceArabic: "فَاللّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
    referenceEnglish: "But Allah is the best guardian... [12:64]"
  },
  {
    number: 16,
    arabic: "الحسيب",
    transliteration: "Al-Haseeb",
    english: "The Sufficient/ Ever-Reckoner",
    root: "ح س ب",
    meaningArabic: "الكافي لعباده، الذي يحفظ أعمالهم ويجازيهم عليها.",
    meaningEnglish: "The Reckoner, the Sufficient One for His servants, who records their deeds and recompenses them accordingly.",
    referenceArabic: "إِنَّ اللّهَ كَانَ عَلَى كُلِّ شَيْءٍ حَسِيبًا",
    referenceEnglish: "Indeed, Allah is ever, over all things, an Accountant (Ever-Reckoner). [4:86]"
  },
  {
    number: 17,
    arabic: "الحفيظ",
    transliteration: "Al-Hafeez",
    english: "The Preserver",
    root: "ح ف ظ",
    meaningArabic: "الحافظ لعباده من كل سوء.",
    meaningEnglish: "The Preserver, the One who protects His servants from all evil.",
    referenceArabic: "وَرَبُّكَ عَلَى كُلِّ شَيْءٍ حَفِيظٌ",
    referenceEnglish: "And your Lord, over all things, is Guardian (Preserver). [34:21]"
  },
  {
    number: 18,
    arabic: "الحفيّ",
    transliteration: "Al-Hafee",
    english: "The Benevolent/ Ever-Hospitable",
    root: "ح ف و",
    meaningArabic: "اللطيف بعباده، الذي يغيثهم ويرحمهم.",
    meaningEnglish: "The Benevolent, the Gentle One with His servants, who aids and has mercy upon them.",
    referenceArabic: "إِنَّهُ كَانَ بِي حَفِيًّا",
    referenceEnglish: "Indeed, He is ever gracious to me (Ever-Hospitable). [19:47]"
  },
  {
    number: 19,
    arabic: "الحق",
    transliteration: "Al-Haqq",
    english: "The Truth",
    root: "ح ق ق",
    meaningArabic: "الثابت الوجود، الذي لا شكّ في وجوده.",
    meaningEnglish: "The Truth, the One whose existence is certain and absolute.",
    referenceArabic: "أَنَّ اللّهَ هُوَ الْحَقُّ الْمُبِينُ",
    referenceEnglish: "it is Allah who is the perfect in justice. [24:25]"
  },
  {
    number: 20,
    arabic: "المبين",
    transliteration: "Al-Mubeen",
    english: "The Evident",
    root: "ب ي ن",
    meaningArabic: "الواضح الدلالة على وحدانيته.",
    meaningEnglish: "The Manifest, the One whose Oneness is evident.",
    referenceArabic: "أَنَّ اللّهَ هُوَ الْحَقُّ الْمُبِينُ",
    referenceEnglish: "it is Allah who is the perfect in justice. [24:25]"
  },
  {
    number: 21,
    arabic: "الحكيم",
    transliteration: "Al-Hakeem",
    english: "The All-Wise",
    root: "ح ك م",
    meaningArabic: "الحكيم في خلقه وأمره.",
    meaningEnglish: "The Wise, the One whose decrees and actions are perfect in wisdom.",
    referenceArabic: "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
    referenceEnglish: "And He is the subjugator over His servants. And He is the Wise, the Acquainted. [6:18]"
  },
  {
    number: 22,
    arabic: "الحليم",
    transliteration: "Al-Haleem",
    english: "The Forbearing",
    root: "ح ل م",
    meaningArabic: "الذي لا يعاجل بالعقوبة، بل يؤخرها ليتوب عباده.",
    meaningEnglish: "The Forbearing, the One who does not hasten to punish, but gives time for repentance.",
    referenceArabic: "إِنَّ اللّهَ غَفُورٌ حَلِيمٌ",
    referenceEnglish: "Indeed, Allah is Forgiving and Forbearing. [3:155]"
  },
  {
    number: 23,
    arabic: "الحميد",
    transliteration: "Al-Hameed",
    english: "The Praiseworthy",
    root: "ح م د",
    meaningArabic: "المحمود في جميع أفعاله.",
    meaningEnglish: "The Praiseworthy, the One who is praised for all His actions.",
    referenceArabic: "فَإِنَّ اللّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
    referenceEnglish: "indeed, Allah is the Free of need, the Praiseworthy. [57:24]"
  },
  {
    number: 24,
    arabic: "الحي",
    transliteration: "Al-Hayy",
    english: "The Ever Living",
    root: "ح ي ي",
    meaningArabic: "الحيّ الذي لا يموت.",
    meaningEnglish: "The Ever-Living, the One who has life without end.",
    referenceArabic: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ",
    referenceEnglish: "Allah – there is no deity except Him, the Ever-Living, the Sustainer of existence... [2:255]"
  },
  {
    number: 25,
    arabic: "القيوم",
    transliteration: "Al-Qayyoom",
    english: "The Self Sustaining",
    root: "ق و م",
    meaningArabic: "القائم بنفسه، القائم بأمور خلقه.",
    meaningEnglish: "The Self-Subsisting, the One who sustains Himself and all creation.",
    referenceArabic: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ",
    referenceEnglish: "Allah – there is no deity except Him, the Ever-Living, the Sustainer of existence... [2:255]"
  },
  {
    number: 26,
    arabic: "الخبير",
    transliteration: "Al-Khabeer",
    english: "The Fully Aware",
    root: "خ ب ر",
    meaningArabic: "العليم بكل شيء.",
    meaningEnglish: "The All-Aware, the One who knows all things.",
    referenceArabic: "إِنَّ اللّهَ لَطِيفٌ خَبِيرٌ",
    referenceEnglish: "Indeed, Allah is Subtle and Acquainted. [22:63]"
  },
  {
    number: 27,
    arabic: "الخالق",
    transliteration: "Al-Khaaliq",
    english: "The Creator of Everything",
    root: "خ ل ق",
    meaningArabic: "الخالق من العدم.",
    meaningEnglish: "The Creator, the One who brings all things into existence from nothing.",
    referenceArabic: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
    referenceEnglish: "He is Allah, the Creator, the Inventor, the Fashioner... [59:24]"
  },
  {
    number: 28,
    arabic: "الخلاق",
    transliteration: "Al-Khallaaq",
    english: "The Creator Who Creates Again & Again",
    root: "خ ل ق",
    meaningArabic: "الذي خلق فأحسن الخلق.",
    meaningEnglish: "The Creator, the One who creates and perfects His creation.",
    referenceArabic: "إِنَّ رَبَّكَ هُوَ الْخَلاَّقُ الْعَلِيمُ",
    referenceEnglish: "Indeed, your Lord – He is the Knowing Creator. [15:86]"
  },
  {
    number: 29,
    arabic: "الرؤوف",
    transliteration: "Ar-Ra'oof",
    english: "The Compassionate",
    root: "ر أ ف",
    meaningArabic: "الرحيم بعباده.",
    meaningEnglish: "The Compassionate, the One who shows mercy to His servants.",
    referenceArabic: "وَأَنَّ اللّه رَؤُوفٌ رَّحِيمٌ",
    referenceEnglish: "and because Allah is Kind and Merciful. [24:20]"
  },
  {
    number: 30,
    arabic: "الرحمن",
    transliteration: "Ar-Rahmaan",
    english: "The Extremely Merciful",
    root: "ر ح م",
    meaningArabic: "ذو الرحمة الواسعة.",
    meaningEnglish: "The Most Gracious, the One who possesses vast mercy.",
    referenceArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    referenceEnglish: "In the name of Allah, the Entirely Merciful, the Especially Merciful. [1:1]"
  },
  {
    number: 31,
    arabic: "الرحيم",
    transliteration: "Ar-Raheem",
    english: "The Bestower of Mercy",
    root: "ر ح م",
    meaningArabic: "الذي وسعت رحمته كل شيء.",
    meaningEnglish: "The Most Merciful, whose mercy encompasses all things.",
    referenceArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    referenceEnglish: "In the name of Allah, the Entirely Merciful, the Especially Merciful. [1:1]"
  },
  {
    number: 32,
    arabic: "الرزاق",
    transliteration: "Ar-Razzaaq",
    english: "The Great Provider",
    root: "ر ز ق",
    meaningArabic: "الذي يرزق جميع خلقه.",
    meaningEnglish: "The Provider, the One who provides sustenance for all creation.",
    referenceArabic: "إِنَّ اللّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
    referenceEnglish: "Indeed, it is Allah who is the Provider, the firm possessor of strength. [51:58]"
  },
  {
    number: 33,
    arabic: "الرقيب",
    transliteration: "Ar-Raqeeb",
    english: "The Watchful",
    root: "ر ق ب",
    meaningArabic: "الحافظ الذي لا يغفل عن شيء.",
    meaningEnglish: "The Watchful, the One who observes all things and never neglects anything.",
    referenceArabic: "فَلَمَّا تَوَفَّيْتَنِي كُنتَ أَنتَ الرَّقِيبَ",
    referenceEnglish: "but when You took me up, You were the Observer over them... [5:117]"
  },
  {
    number: 34,
    arabic: "السلام",
    transliteration: "As-Salaam",
    english: "The Flawless One",
    root: "س ل م",
    meaningArabic: "السلام الذي سلم من كل عيب ونقص.",
    meaningEnglish: "The Source of Peace, the One who is free from all imperfections.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior... [59:23]"
  },
  {
    number: 35,
    arabic: "السميع",
    transliteration: "'As-Samee",
    english: "The All Hearing",
    root: "س م ع",
    meaningArabic: "الذي يسمع كل شيء.",
    meaningEnglish: "The All-Hearing, the One who hears all things.",
    referenceArabic: "إِنَّهُ هُوَ السَّمِيعُ البَصِيرُ",
    referenceEnglish: "Indeed, He is the Hearing, the Seeing. [17:1]"
  },
  {
    number: 36,
    arabic: "الشاكر",
    transliteration: "Ash-Shaakir",
    english: "The Grateful",
    root: "ش ك ر",
    meaningArabic: "الذي يجازي على القليل بالكثير.",
    meaningEnglish: "The Appreciative, the One who rewards greatly for even small deeds.",
    referenceArabic: "فَإِنَّ اللّهَ شَاكِرٌ عَلِيمٌ",
    referenceEnglish: "then indeed, Allah is appreciative (Grateful) and Knowing. [2:158]"
  },
  {
    number: 37,
    arabic: "الشكور",
    transliteration: "Ash-Shakoor",
    english: "The Appreciative",
    root: "ش ك ر",
    meaningArabic: "الذي يثيبه على الشكر.",
    meaningEnglish: "The Most Appreciative, the One who rewards those who are grateful.",
    referenceArabic: "إِنَّهُ غَفُورٌ شَكُورٌ",
    referenceEnglish: "Indeed, He is Forgiving and Appreciative. [35:30]"
  },
  {
    number: 38,
    arabic: "الشهيد",
    transliteration: "Ash-Shaheed",
    english: "The Witness",
    root: "ش ه د",
    meaningArabic: "الذي يشهد كل شيء.",
    meaningEnglish: "The Witness, the One who witnesses all things.",
    referenceArabic: "وَأَنتَ عَلَى كُلِّ شَيْءٍ شَهِيدٌ",
    referenceEnglish: "and You are, over all things, Witness. [5:117]"
  },
  {
    number: 39,
    arabic: "الصمد",
    transliteration: "As-Samad",
    english: "The Perfect Lord & Master Upon Whom All of the Creation Depends",
    root: "ص م د",
    meaningArabic: "الذي يصمد إليه الخلق في حوائجهم.",
    meaningEnglish: "The Eternal, the One to whom all creation turns in their needs.",
    referenceArabic: "اللَّهُ الصَّمَدُ",
    referenceEnglish: "Allah, the Eternal Refuge. [112:2]"
  },
  {
    number: 40,
    arabic: "العالم",
    transliteration: "Al-'Aalim",
    english: "The All Knower",
    root: "ع ل م",
    meaningArabic: "العالم بكل شيء.",
    meaningEnglish: "The All-Knowing, the One who knows all things.",
    referenceArabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْعَزِيزُ الْحَكِيمُ",
    referenceEnglish: "Knower of the unseen and the witnessed, the Exalted in Might, the Wise. [64:18]"
  },
  {
    number: 41,
    arabic: "العزيز",
    transliteration: "(Al-'Azeez)",
    english: "The Almighty",
    root: "ع ز ز",
    meaningArabic: "الغالب الذي لا يُغلب.",
    meaningEnglish: "The Almighty, the One who is invincible and cannot be overcome.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior... [59:23]"
  },
  {
    number: 42,
    arabic: "العظيم",
    transliteration: "(Al-'Azeem)",
    english: "The Magnificent",
    root: "ع ظ م",
    meaningArabic: "العظيم الذي يعظمه كل شيء.",
    meaningEnglish: "The Magnificent, the One who is truly Great and deserves veneration.",
    referenceArabic: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    referenceEnglish: "And He is the Most High, the Most Great. [2:255]"
  },
  {
    number: 43,
    arabic: "العفو",
    transliteration: "(Al-'Afuww)",
    english: "The One Who Pardons Again & Again",
    root: "ع ف و",
    meaningArabic: "الذي يعفو عن الذنوب.",
    meaningEnglish: "The Pardoner, the One who forgives sins.",
    referenceArabic: "فَإِنَّ اللّهَ كَانَ عَفُوًّا قَدِيرًا",
    referenceEnglish: "indeed, Allah is ever Pardoning and Competent. [4:149]"
  },
  {
    number: 44,
    arabic: "العليم",
    transliteration: "(Al-'Aleem)",
    english: "The All Knowing",
    root: "ع ل م",
    meaningArabic: "العليم بكل شيء.",
    meaningEnglish: "The All-Knowing, the One who has knowledge of all things.",
    referenceArabic: "إِنَّ رَبَّكَ هُوَ الْخَلاَّقُ الْعَلِيمُ",
    referenceEnglish: "Indeed, your Lord - He is the Knowing Creator. [15:86]"
  },
  {
    number: 45,
    arabic: "العلي",
    transliteration: "Al-'Aliyy",
    english: "The Sublime",
    root: "ع ل و",
    meaningArabic: "العليّ فوق كل شيء.",
    meaningEnglish: "The Most High, the One who is exalted above all things.",
    referenceArabic: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    referenceEnglish: "And He is the Most High (Sublime), the Most Great. [2:255]"
  },
  {
    number: 46,
    arabic: "الغفار",
    transliteration: "Al-Ghaffaar",
    english: "The Oft-Forgiving",
    root: "غ ف ر",
    meaningArabic: "الذي يغفر الذنوب كثيراً.",
    meaningEnglish: "The Oft-Forgiving, the One who forgives sins abundantly.",
    referenceArabic: "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزِيزُ الْغَفَّارُ",
    referenceEnglish: "the Exalted in Might, the Perpetual Forgiver. [38:66]"
  },
  {
    number: 47,
    arabic: "الغفور",
    transliteration: "Al-Ghafoor",
    english: "The One Who Forgives Extensively",
    root: "غ ف ر",
    meaningArabic: "الذي يستر الذنوب.",
    meaningEnglish: "The Forgiving, the One who conceals sins.",
    referenceArabic: "إِنَّ اللّهَ غَفُورٌ حَلِيمٌ",
    referenceEnglish: "Indeed, Allah is Forgiving and Forbearing. [3:155]"
  },
  {
    number: 48,
    arabic: "الغني",
    transliteration: "Al-Ghaniyy",
    english: "The Self-Sufficient",
    root: "غ ن ي",
    meaningArabic: "الغني عن كل شيء.",
    meaningEnglish: "The Self-Sufficient, the One who is free of all needs.",
    referenceArabic: "فَإِنَّ اللّهَ هُوَ الْغَنِيُّ الْحَمِيدُ",
    referenceEnglish: "Indeed, Allah is the Free of need, the Praiseworthy. [57:24]"
  },
  {
    number: 49,
    arabic: "الفتاح",
    transliteration: "Al-Fattaah",
    english: "The Opener",
    root: "ف ت ح",
    meaningArabic: "الذي يفتح أبواب الرحمة والرزق لعباده.",
    meaningEnglish: "The Opener, who opens the gates of mercy and sustenance for His servants.",
    referenceArabic: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
    referenceEnglish: "Our Lord, decide between us and our people in truth, and You are the best of those who give decision. [7:89]"
  },
  {
    number: 50,
    arabic: "القابض",
    transliteration: "Al-Qaabid",
    english: "The Withholder",
    root: "ق ب ض",
    meaningArabic: "الذي يقبض الأرواح.",
    meaningEnglish: "The Withholder, the One who takes away life.",
    referenceArabic: "إِنَّ اللّهَ هُوَ الْمُسَعِّرُ الْقَابِضُ الْبَاسِطُ الرَّزَّاقُ",
    referenceEnglish: "Indeed Allah is Al-Musa'ir (One who regulates the prices), Al-Qabid (the withholder – the one who seizes), Al-Basit (the expander – the one who grants increase), Ar-Razzaq (the ever providing)... [Tirmidhi 1314]"
  },
  {
    number: 51,
    arabic: "القدوس",
    transliteration: "Al-Quddoos",
    english: "The Most Holy",
    root: "ق د س",
    meaningArabic: "المنزه عن كل نقص.",
    meaningEnglish: "The Most Holy, the One who is pure and free from all imperfections.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection... [59:23]"
  },
  {
    number: 52,
    arabic: "القدير",
    transliteration: "Al-Qadeer",
    english: "The All Powerful",
    root: "ق د ر",
    meaningArabic: "القادر على كل شيء.",
    meaningEnglish: "The All-Powerful, the One who has power over all things.",
    referenceArabic: "فَإِنَّ اللّهَ كَانَ عَفُوًّا قَدِيرًا",
    referenceEnglish: "indeed, Allah is ever Pardoning and Competent (All-Powerful). [4:149]"
  },
  {
    number: 53,
    arabic: "القريب",
    transliteration: "Al-Qareeb",
    english: "The Near",
    root: "ق ر ب",
    meaningArabic: "القريب من عباده.",
    meaningEnglish: "The Near, the One who is close to His servants.",
    referenceArabic: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ",
    referenceEnglish: "Indeed, my Lord is near and responsive. [11:61]"
  },
  {
    number: 54,
    arabic: "القوي",
    transliteration: "Al-Qawiyy",
    english: "The Strong",
    root: "ق و ي",
    meaningArabic: "القويّ الذي لا يغلبه شيء.",
    meaningEnglish: "The Strong, the One who is perfect in strength and cannot be overcome.",
    referenceArabic: "إِنَّ رَبَّكَ هُوَ الْقَوِيُّ الْعَزِيزُ",
    referenceEnglish: "Indeed, it is your Lord who is the Powerful, the Exalted in Might. [11:66]"
  },
  {
    number: 55,
    arabic: "القهار",
    transliteration: "Al-Qahhaar",
    english: "The Subduer",
    root: "ق ه ر",
    meaningArabic: "الذي قهر كل شيء بقدرته.",
    meaningEnglish: "The Subduer, the One who overpowers all things with His might.",
    referenceArabic: "هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ",
    referenceEnglish: "He is Allah, the One, the Prevailing. [39:4]"
  },
  {
    number: 56,
    arabic: "الكبير",
    transliteration: "Al-Kabeer",
    english: "The Great",
    root: "ك ب ر",
    meaningArabic: "الكبير المتعال.",
    meaningEnglish: "The Great, the One who is magnificent and exalted.",
    referenceArabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
    referenceEnglish: "Knower of the unseen and the witnessed, the Grand, the Exalted (supreme). [13:9]"
  },
  {
    number: 57,
    arabic: "الكريم",
    transliteration: "Al-Kareem",
    english: "The Most Noble & Generous",
    root: "ك ر م",
    meaningArabic: "الجواد الكريم.",
    meaningEnglish: "The Generous, the One who is noble and bountiful.",
    referenceArabic: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
    referenceEnglish: "O mankind, what has deceived you concerning your Lord, the Generous, [82:6]"
  },
  {
    number: 58,
    arabic: "اللطيف",
    transliteration: "Al-Lateef",
    english: "The Subtle & Kind",
    root: "ل ط ف",
    meaningArabic: "اللطيف بعباده.",
    meaningEnglish: "The Subtle, the One who is kind and gentle with His servants.",
    referenceArabic: "إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ",
    referenceEnglish: "Indeed, Allah is Subtle and Acquainted. [22:63]"
  },
  {
    number: 59,
    arabic: "المؤمن",
    transliteration: "Al-Mu'min",
    english: "The Trustworthy Granter of Security",
    root: "أ م ن",
    meaningArabic: "الذي يؤمن عباده من الخوف.",
    meaningEnglish: "The Giver of Faith, the One who grants security and removes fear from His servants.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer (dominant), the Exalted in Might, the Compeller, the Superior... [59:23]"
  },
  {
    number: 60,
    arabic: "المتعالي",
    transliteration: "Al-Muta'aalee",
    english: "The Supreme",
    root: "ع ل و",
    meaningArabic: "المتعالي عن كل نقص.",
    meaningEnglish: "The Most Exalted, the One who is transcendent above all imperfections.",
    referenceArabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
    referenceEnglish: "Knower of the unseen and the witnessed, the Grand, the Exalted (supreme). [13:9]"
  },
  {
    number: 61,
    arabic: "المتكبر",
    transliteration: "Al-Mutakabbir",
    english: "The Justly & Rightfully Proud",
    root: "ك ب ر",
    meaningArabic: "المتكبر المتعالي.",
    meaningEnglish: "The Justly & Rightfully Proud, the One who is supremely exalted.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior (justly proud)... [59:23]"
  },
  {
    number: 62,
    arabic: "المتين",
    transliteration: "Al-Mateen",
    english: "The Firm One",
    root: "م ت ن",
    meaningArabic: "القويّ المتين.",
    meaningEnglish: "The Firm, the One who is strong and steadfast.",
    referenceArabic: "إِنَّ اللّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
    referenceEnglish: "Indeed, it is Allah who is the Provider, the firm possessor of strength. [51:58]"
  },
  {
    number: 63,
    arabic: "المجيب",
    transliteration: "Al-Mujeeb",
    english: "The Responsive",
    root: "ج و ب",
    meaningArabic: "الذي يجيب دعاء الداعين.",
    meaningEnglish: "The Responsive, the One who answers the prayers of those who call upon Him.",
    referenceArabic: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ",
    referenceEnglish: "Indeed, my Lord is near and responsive. [11:61]"
  },
  {
    number: 64,
    arabic: "المجيد",
    transliteration: "Al-Majeed",
    english: "The Glorious",
    root: "م ج د",
    meaningArabic: "ذو المجد والعظمة.",
    meaningEnglish: "The Glorious, the One who possesses glory and majesty.",
    referenceArabic: "ذُو الْعَرْشِ الْمَجِيدُ",
    referenceEnglish: "Honorable (glorious) Owner of the Throne [85:15]"
  },
  {
    number: 65,
    arabic: "المحيط",
    transliteration: "Al-Muheet",
    english: "The All Encompassing",
    root: "ح و ط",
    meaningArabic: "الذي أحاط بكل شيء علماً.",
    meaningEnglish: "The Encompassing, the One whose knowledge encompasses all things.",
    referenceArabic: "إِنَّهُ بِكُلِّ شَيْءٍ مُّحِيطٌ",
    referenceEnglish: "Unquestionably He is, of all things, encompassing. [41:54]"
  },
  {
    number: 66,
    arabic: "المصور",
    transliteration: "Al-Musawwir",
    english: "The Bestower of Forms",
    root: "ص و ر",
    meaningArabic: "الذي صوّر خلقه فأحسن تصويرهم.",
    meaningEnglish: "The Fashioner, the One who forms and perfects His creation.",
    referenceArabic: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
    referenceEnglish: "He is Allah, the Creator, the Inventor, the Fashioner (bestower of forms)... [59:24]"
  },
  {
    number: 67,
    arabic: "المقتدر",
    transliteration: "Al-Muqtadir",
    english: "The Omnipotent",
    root: "ق د ر",
    meaningArabic: "القادر على كل شيء.",
    meaningEnglish: "The Powerful, the One who is capable of all things.",
    referenceArabic: "وَكَانَ اللّهُ عَلَى كُلِّ شَيْءٍ مُّقْتَدِرً",
    referenceEnglish: "And Allah is ever, over all things, Perfect in Ability (Omnipotent). [18:45]"
  },
  {
    number: 68,
    arabic: "المقيت",
    transliteration: "Al-Muqeet",
    english: "The All Powerful Maintainer",
    root: "ق و ت",
    meaningArabic: "الذي يقوت خلقه.",
    meaningEnglish: "The Sustainer, the One who provides sustenance for His creation.",
    referenceArabic: "وَكَانَ اللّهُ عَلَى كُلِّ شَيْءٍ مُّقِيتًا",
    referenceEnglish: "And ever is Allah, over all things, a Keeper (Supreme Nourisher/overseer). [4:85]"
  },
  {
    number: 69,
    arabic: "الملك",
    transliteration: "Al-Malik",
    english: "The King",
    root: "م ل ك",
    meaningArabic: "مالك الملك.",
    meaningEnglish: "The King, the Sovereign, the Possessor of all dominion.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection... [59:23]"
  },
  {
    number: 70,
    arabic: "المليك",
    transliteration: "Al-Maleek",
    english: "The Supreme Sovereign",
    root: "م ل ك",
    meaningArabic: "الذي له الملك.",
    meaningEnglish: "The Sovereign, the One to whom all sovereignty belongs.",
    referenceArabic: "فِي مَقْعَدِ صِدْقٍ عِندَ مَلِيكٍ مُّقْتَدِرٍ",
    referenceEnglish: "In a seat of honor near a Sovereign, Perfect in Ability. [54:55]"
  },
  {
    number: 71,
    arabic: "المولى",
    transliteration: "Al-Mawlaa",
    english: "The Master",
    root: "و ل ي",
    meaningArabic: "الوليّ النصير.",
    meaningEnglish: "The Protecting Friend, the Ally and Helper.",
    referenceArabic: "أَنَّ اللّهَ مَوْلاَكُمْ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ",
    referenceEnglish: "Excellent is the protector (patron/master), and Excellent is the helper. [8:40]"
  },
  {
    number: 72,
    arabic: "المهيمن",
    transliteration: "Al-Muhaymin",
    english: "The Dominant One",
    root: "ه ي م ن",
    meaningArabic: "الرقيب على كل شيء.",
    meaningEnglish: "The Guardian, the Overseer of all things.",
    referenceArabic: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ",
    referenceEnglish: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer (dominant)... [59:23]"
  },
  {
    number: 73,
    arabic: "النصير",
    transliteration: "An-Naseer",
    english: "The Helper",
    root: "ن ص ر",
    meaningArabic: "الناصر لعباده.",
    meaningEnglish: "The Helper, the One who aids and supports His servants.",
    referenceArabic: "أَنَّ اللّهَ مَوْلاَكُمْ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ",
    referenceEnglish: "Excellent is the protector, and Excellent is the helper. [8:40]"
  },
  {
    number: 74,
    arabic: "الواحد",
    transliteration: "Al-Waahid",
    english: "The One",
    root: "و ح د",
    meaningArabic: "الفرد الصمد.",
    meaningEnglish: "The One, the Unique, the Only One.",
    referenceArabic: "هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ",
    referenceEnglish: "He is Allah, the One, the Prevailing. [39:4]"
  },
  {
    number: 75,
    arabic: "الوارث",
    transliteration: "Al-Waarith",
    english: "The Inheritor",
    root: "و ر ث",
    meaningArabic: "وارث كل شيء.",
    meaningEnglish: "The Inheritor, the One who inherits all things.",
    referenceArabic: "وَإنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ الْوَارِثُونَ",
    referenceEnglish: "And indeed, it is We who give life and cause death, and We are the Inheritor. [15:23]"
  },
  {
    number: 76,
    arabic: "الواسع",
    transliteration: "Al-Waasi'",
    english: "The Vast One",
    root: "و س ع",
    meaningArabic: "الواسع المغفرة.",
    meaningEnglish: "The All-Encompassing, the One whose forgiveness is vast.",
    referenceArabic: "إِنَّ اللّهَ وَاسِعٌ عَلِيمٌ",
    referenceEnglish: "Indeed, Allah is all-Encompassing (all-prevading) and Knowing. [2:115]"
  },
  {
    number: 77,
    arabic: "الودود",
    transliteration: "Al-Wadood",
    english: "The Loving",
    root: "و د د",
    meaningArabic: "الذي يحبّ عباده ويحبونه.",
    meaningEnglish: "The Loving, the One who loves His servants and is loved by them.",
    referenceArabic: "إِنَّ رَبِّي رَحِيمٌ وَدُودٌ",
    referenceEnglish: "my Lord is Merciful and Affectionate (loving). [11:90]"
  },
  {
    number: 78,
    arabic: "الوكيل",
    transliteration: "Al-Wakeel",
    english: "The Trustee",
    root: "و ك ل",
    meaningArabic: "الوكيل الذي يُوكّل إليه الأمور.",
    meaningEnglish: "The Trustee, the One who is entrusted with all affairs.",
    referenceArabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ وَكِيلٌ",
    referenceEnglish: "and He is, over all things, Disposer of affairs (Trustee). [39:62]"
  },
  {
    number: 79,
    arabic: "الولي",
    transliteration: "Al-Waliyy",
    english: "The Guardian",
    root: "و ل ي",
    meaningArabic: "الوليّ لعباده المؤمنين.",
    meaningEnglish: "The Protecting Friend, the Guardian of the believers.",
    referenceArabic: "هُوَ الْوَلِيُّ وَهُوَ يُحْيِي المَوْتَى",
    referenceEnglish: "He is the Protector (Guardian), and He gives life to the dead... [42:9]"
  },
  {
    number: 80,
    arabic: "الوهاب",
    transliteration: "Al-Wahhaab",
    english: "The Bestower",
    root: "و ه ب",
    meaningArabic: "الذي وهب كل شيء.",
    meaningEnglish: "The Bestower, the One who bestows all gifts and blessings.",
    referenceArabic: "إِنَّكَ أَنتَ الْوَهَّابُ",
    referenceEnglish: "Indeed, You are the Bestower... [3:8]"
  },
  {
    number: 81,
    arabic: "الجميل",
    transliteration: "Al-Jameel",
    english: "The Beautiful",
    root: "ج م ل",
    meaningArabic: "الذي له الجمال المطلق.",
    meaningEnglish: "The Beautiful, the One who possesses absolute beauty.",
    referenceArabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    referenceEnglish: "Allah is Beautiful (graceful), He loves beauty (grace)... [Muslim 91]"
  },
  {
    number: 82,
    arabic: "الجواد",
    transliteration: "Al-Jawaad",
    english: "The Munificent",
    root: "ج و د",
    meaningArabic: "الجواد الكريم.",
    meaningEnglish: "The Generous, the One who is bountiful and giving.",
    referenceArabic: "ذَلِكَ بِأَنِّي جَوَادٌ مَاجِدٌ",
    referenceEnglish: "That is because I am the Most Generous, Majestic... [Ibn Majah]"
  },
  {
    number: 83,
    arabic: "الحكم",
    transliteration: "Al-Hakam",
    english: "The Judge",
    root: "ح ك م",
    meaningArabic: "الحاكم العدل.",
    meaningEnglish: "The Judge, the Ruler, the Just One.",
    referenceArabic: "إِنَّ اللّهَ هُوَ الْحَكَمُ وَإِلَيْهِ الْحُكْمُ",
    referenceEnglish: "Allah is Al-Hakam (the Judge) and judgment is His... [Nasa'i 5387]"
  },
  {
    number: 84,
    arabic: "الحيي",
    transliteration: "Al-Hayyiyy",
    english: "The Modest",
    root: "ح ي ي",
    meaningArabic: "الحيّ الذي لا يموت.",
    meaningEnglish: "The Ever-Living, the One who possesses eternal life.",
    referenceArabic: "إِنَّ رَبَّكُمْ تَبَارَكَ وَتَعَالَى حَيِيٌّ كَرِيمٌ",
    referenceEnglish: "Your Lord is munificent and generous... [Abi Dawud 1488]"
  },
  {
    number: 85,
    arabic: "الرب",
    transliteration: "Ar-Rabb",
    english: "The Lord and Nurturer",
    root: "ر ب ب",
    meaningArabic: "الربّ المالك.",
    meaningEnglish: "The Lord, the Master, the Sustainer.",
    referenceArabic: "أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الآخِرِ",
    referenceEnglish: "The closest that the Lord is to a worshipper is during the last part of the night... [Tirmidhi 3579]"
  },
  {
    number: 86,
    arabic: "الرفيق",
    transliteration: "Ar-Rafeeq",
    english: "The Gentle",
    root: "ر ف ق",
    meaningArabic: "اللطيف بعباده.",
    meaningEnglish: "The Companion, the One who is kind and gentle with His servants.",
    referenceArabic: "إِنَّ اللّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ",
    referenceEnglish: "Allah is kind (gentle and lenient) and likes that one should be kind (gentle and lenient) in all matters... [Bukhari 6927]"
  },
  {
    number: 87,
    arabic: "السبوح",
    transliteration: "As-Subbooh",
    english: "The Perfect",
    root: "س ب ح",
    meaningArabic: "المنزه عن كل نقص.",
    meaningEnglish: "The Most Glorified, the One who is free from all imperfections.",
    referenceArabic: "سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلاَئِكَةِ وَالرُّوحِ",
    referenceEnglish: "All Glorious (perfect), All Holy, Lord of the Angels and the Spirit. [Muslim 487]"
  },
  {
    number: 88,
    arabic: "السيد",
    transliteration: "As-Sayyid",
    english: "The Lord & Master",
    root: "س ي د",
    meaningArabic: "السيد المطاع.",
    meaningEnglish: "The Master, the One who is obeyed.",
    referenceArabic: "السَّيِّدُ اللَّهُ تَبَارَكَ وَتَعَالَى",
    referenceEnglish: "The lord is Allah, the Blessed and Exalted... [Abu Dawud 4806]"
  },
  {
    number: 89,
    arabic: "الشافي",
    transliteration: "Ash-Shaafee",
    english: "The Healer",
    root: "ش ف ي",
    meaningArabic: "الذي يشفي المرضى.",
    meaningEnglish: "The Healer, the One who cures the sick.",
    referenceArabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ، اشْفِهِ وَأَنْتَ الشَّافِي",
    referenceEnglish: "O Allah, the Lord of the people! Remove the trouble and heal the patient, for You are the Healer... [Bukhari 5743]"
  },
  {
    number: 90,
    arabic: "الطيب",
    transliteration: "At-Tayyib",
    english: "The Pure",
    root: "ط ي ب",
    meaningArabic: "الطيب المطهر.",
    meaningEnglish: "The Pure, the Good, the One who purifies.",
    referenceArabic: "إِنَّ اللَّهَ طَيِّبٌ لاَ يَقْبَلُ إِلاَّ طَيِّبًا",
    referenceEnglish: "Allah is Good (Pure) and He therefore, accepts only that which is good (pure)... [Muslim 1015]"
  },
  {
    number: 91,
    arabic: "الباسط",
    transliteration: "Al-Baasit",
    english: "The Expander",
    root: "ب س ط",
    meaningArabic: "الذي يبسط الرزق لعباده.",
    meaningEnglish: "The Expander, the One who extends provision to His servants.",
    referenceArabic: "إِنَّ اللّهَ هُوَ الْمُسَعِّرُ الْقَابِضُ الْبَاسِطُ الرَّزَّاقُ",
    referenceEnglish: "Indeed Allah is Al-Musa'ir (One who regulates the prices), Al-Qabid (the withholder – the one who seizes), Al-Basit (the expander – the one who grants increase), Ar-Razzaq (the ever providing)... [Tirmidhi 1314]"
  },
  {
    number: 92,
    arabic: "المقدم",
    transliteration: "Al-Muqaddim",
    english: "The One Who Gives Precedence",
    root: "ق د م",
    meaningArabic: "الذي يقدم من يشاء.",
    meaningEnglish: "The Expediter, the One who brings forward whomever He wills.",
    referenceArabic: "أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ",
    referenceEnglish: "You are the One who make (some people) forward (The One Who Gives Precedence) And (some) backward (The Delayer)... [Bukhari 1120]"
  },
  {
    number: 93,
    arabic: "المؤخر",
    transliteration: "Al-Mu'akhkhir",
    english: "The Delayer",
    root: "أ خ ر",
    meaningArabic: "الذي يؤخر من يشاء.",
    meaningEnglish: "The Delayer, the One who postpones whomever He wills.",
    referenceArabic: "أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ",
    referenceEnglish: "You are the One who make (some people) forward (The One Who Gives Precedence) And (some) backward (The Delayer)... [Bukhari 1120]"
  },
  {
    number: 94,
    arabic: "المحسن",
    transliteration: "Al-Muhsin",
    english: "The Doer of Good",
    root: "ح س ن",
    meaningArabic: "الذي يحسن إلى خلقه.",
    meaningEnglish: "The Doer of Good, the One who shows kindness to His creation.",
    referenceArabic: "in the hadith of Shadad ibn Au's in al-Mujam al-Kabir (7:257) it is narrated that the prophet (pbuh) said 'God is Mohsin so you too bring Husn in your deeds … '. Al-Albani considers the hadith to be authentic in his Sahih al-Jami (1824)",
    referenceEnglish: "A number of the well-known scholars of the past including Ibn Taymiyah (in majmu'a al-fatawa 1:379) and ibn Qayyim (in madarij al-salikin, 1:418) have referred to Mohsin as a name of God."
  },
  {
    number: 95,
    arabic: "المعطي",
    transliteration: "Al-Mu'tee",
    english: "The Giver",
    root: "ع ط و",
    meaningArabic: "الذي يعطي بلا منّ.",
    meaningEnglish: "The Giver, the One who gives without expecting anything in return.",
    referenceArabic: "وَاللَّهُ الْمُعْطِي وَأَنَا الْقَاسِمُ",
    referenceEnglish: "Allah is Al-Mu'tee (the Giver) and I am Al-Qasim (i.e. the distributor)... [Bukhari 3116]"
  },
  {
    number: 96,
    arabic: "المنان",
    transliteration: "Al-Mannaan",
    english: "The Benefactor",
    root: "م ن ن",
    meaningArabic: "الذي يمنّ على عباده بالنعم.",
    meaningEnglish: "The Bestower of Blessings, the One who blesses His servants with favors.",
    referenceArabic: "لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ الْمَنَّانُ",
    referenceEnglish: "none has the right to be worshiped but You alone, and You have no partner or associate, the Bestower (benefactor)... [Ibn Majah 3858]"
  },
  {
    number: 97,
    arabic: "الوتر",
    transliteration: "Al-Witr",
    english: "The One",
    root: "و ت ر",
    meaningArabic: "الفرد الواحد.",
    meaningEnglish: "The One, the Unique, the Single.",
    referenceArabic: "وَهْوَ وَتْرٌ يُحِبُّ الْوَتْرَ",
    referenceEnglish: "Allah is witr (one) and loves 'the witr'... [Bukhari 6410]"
  },
  {
    number: 98,
    arabic: "الباسط",
    transliteration: "Al-Baasit",
    english: "The Expander",
    root: "ب س ط",
    meaningArabic: "الذي يبسط الرزق لعباده.",
    meaningEnglish: "The Expander, the One who extends provision to His servants.",
    referenceArabic: "إِنَّ اللّهَ هُوَ الْمُسَعِّرُ الْقَابِضُ الْبَاسِطُ الرَّزَّاقُ",
    referenceEnglish: "Indeed Allah is Al-Musa'ir (One who regulates the prices), Al-Qabid (the withholder – the one who seizes), Al-Basit (the expander – the one who grants increase), Ar-Razzaq (the ever providing)... [Tirmidhi 1314]"
  },
  {
    number: 99,
    arabic: "المقدم",
    transliteration: "Al-Muqaddim",
    english: "The One Who Gives Precedence",
    root: "ق د م",
    meaningArabic: "الذي يقدم من يشاء.",
    meaningEnglish: "The Expediter, the One who brings forward whomever He wills.",
    referenceArabic: "أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ",
    referenceEnglish: "You are the One who make (some people) forward (The One Who Gives Precedence) And (some) backward (The Delayer)... [Bukhari 1120]"
  }
];
export function paginateNames(page: number, pageSize: number): NameWithMeaning[] {
  const startIndex = (page - 1) * pageSize;
  return names.slice(startIndex, startIndex + pageSize);
} 

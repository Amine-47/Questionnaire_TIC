const surveyJSON = {
 "locale": "fr",
 "title": {
  "default": "Questionnaire",
  "ar": "إستبيان"
 },
 "logoPosition": "right",
 "pages": [
  {
   "name": "Page 1",
   "elements": [
    {
     "type": "boolean",
     "name": "question1",
     "title": {
      "fr": "Êtes-vous un homme ou une femme ?",
      "default": "Are you male or female ?",
      "ar": "هل أنت رجل أم امرأة ؟"
     },
     "isRequired": true,
     "labelTrue": {
      "fr": "Femme",
      "default": "Female",
      "ar": "امرأة"
     },
     "labelFalse": {
      "fr": "Homme",
      "default": "Male",
      "ar": "رجل"
     },
     "showTitle": true
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "visibleIf": "{question1} notempty",
     "title": {
      "fr": "Quel âge avez-vous ?",
      "default": "How old are you ?",
      "ar": "كم عمرك ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "Moins de 25 ans",
        "default": "Under 25 years old",
        "ar": "أقل من 25 سنة"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "Entre 25 et 45 ans",
        "default": "Between 25 and 45 years old",
        "ar": "ما بين 25 و 45 سنة"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "Plus de 45 ans",
        "default": "Over 45 years old",
        "ar": "أكثر من 45 سنة"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "visibleIf": "{question2} notempty",
     "title": {
      "fr": "Depuis combien d'années enseignez-vous ?",
      "default": "How many years have you been teaching ?",
      "ar": "منذ متى وأنت تدرس ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "Entre 1 et 5 ans",
        "default": "From 1 to 5 years",
        "ar": "من سنة إلى خمس سنوات"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "Entre 5 et 15 ans",
        "default": "From 5 to 15 years",
        "ar": "من 5 إلى 15 سنة"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "Plus de 15 ans",
        "default": "More than 15 years",
        "ar": "أكثر من 15 سنة"
       }
      }
     ]
    },
    {
     "type": "boolean",
     "name": "question4",
     "visibleIf": "{question3} notempty",
     "title": {
      "fr": "Êtes-vous titulaire d'une licence en enseignement des mathématiques (LEM) ?",
      "default": "Do you have a bachelor's degree in mathematics education (LEM) ?",
      "ar": "هل أنت حاصل على إجازة في تدريس الرياضيات ؟"
     },
     "isRequired": true,
     "showTitle": true
    },
    {
     "type": "boolean",
     "name": "question5",
     "visibleIf": "{question4} notempty",
     "title": {
      "fr": "Avez-vous déjà suivi une formation en pédagogie de l'enseignement ou en didactique des mathématiques ?",
      "default": "Have you ever received training in teaching pedagogy or mathematics didactics ?",
      "ar": "هل سبق لك الاستفادة من أي تكوين في بيداغوجيا التدريس أو في ديداكتيك الرياضيات ؟"
     },
     "isRequired": true,
     "showTitle": true
    },
    {
     "type": "dropdown",
     "name": "question6",
     "visibleIf": "{question5} notempty",
     "title": {
      "fr": "A quelle Académie régionale de l'éducation et de la formation professionnelle (AREF) appartenez-vous ?",
      "ar": "إلى أي من الأكاديميات الجهوية للتربية و التكوين التالية تتبع ؟",
      "default": "To which of the following Regional Academies of Education and Training do you belong ?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "Béni Mellal-Khénifra",
       "text": {
        "ar": "أكاديمية جهة بني ملال خنيفرة"
       }
      },
      {
       "value": "Casablanca-Settat",
       "text": {
        "ar": "أكاديمية جهة الدار البيضاء سطات"
       }
      },
      {
       "value": "Dakhla-Oued Ed-Dahab",
       "text": {
        "ar": "أكاديمية جهة الداخلة واد الذهب"
       }
      },
      {
       "value": "de L’oriental",
       "text": {
        "ar": "أكاديمية جهة الشرق"
       }
      },
      {
       "value": "Drâa Tafilalt",
       "text": {
        "ar": "أكاديمية درعة تافيلالت"
       }
      },
      {
       "value": "Fès-Meknès",
       "text": {
        "ar": "أكاديمية جهة فاس مكناس"
       }
      },
      {
       "value": "Guelmim-Oued Noun",
       "text": {
        "ar": "أكاديمية جهة كلميم واد نون"
       }
      },
      {
       "value": "Laâyoune-Sakia El Hamra",
       "text": {
        "ar": "أكاديمية العيون الساقية الحمراء"
       }
      },
      {
       "value": "Marrakech-Safi",
       "text": {
        "ar": "أكاديمية جهة مراكش آسفي"
       }
      },
      {
       "value": "Rabat-Salé-Kénitra",
       "text": {
        "ar": "أكاديمية جهة الرباط سلا القنيطرة"
       }
      },
      {
       "value": "Souss-Massa",
       "text": {
        "ar": "أكاديمية جهة سوس ماسة"
       }
      },
      {
       "value": "Tanger - Tetouan - Alhouceima",
       "text": {
        "ar": "أكاديمية جهة طنجة تطوان الحسيمة"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question7",
     "visibleIf": "{question6} notempty",
     "title": {
      "fr": "Dans quel secteur enseignez-vous ?",
      "default": "In which sector do you teach ?",
      "ar": "في أي قطاع تدرس ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "ar": "العام",
        "default": "Public"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "Privé",
        "ar": "الخاص",
        "default": "Private"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "Les deux",
        "ar": "كلاهما",
        "default": "Both"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "visibleIf": "{question7} notempty",
     "title": {
      "fr": "Quelles niveaux enseignez-vous principalement ?",
      "default": "What classes do you most teach ?",
      "ar": "أي من المستوايات التالية تدرس معظم الوقت ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "Tronc Commun",
        "ar": "الجذع المشترك",
        "default": "Common Core"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "1ère année Bac",
        "ar": "السنة الأولى باكالوريا",
        "default": "1st year Bac"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "2ème année Bac",
        "ar": "السنة الثانية باكالوريا",
        "default": "2nd year Bac"
       }
      }
     ]
    }
   ],
   "questionTitleLocation": "top",
   "title": {
    "fr": "Informations Générale",
    "default": "General information",
    "ar": "معلومات عامة"
   },
   "navigationButtonsVisibility": "show"
  },
  {
   "name": "Page 2",
   "elements": [
    {
     "type": "boolean",
     "name": "question9",
     "title": {
      "fr": "Avez-vous une idée de ce que sont les TIC ?",
      "default": "Do you have any idea what ICT stands for ?",
      "ar": "هل لديك أي فكرة عما تمثله تكنولوجيا المعلومات والاتصال ؟"
     },
     "isRequired": true,
     "showTitle": true
    },
    {
     "type": "boolean",
     "name": "question10",
     "visibleIf": "{question9} notempty",
     "title": {
      "fr": "Avez-vous déjà suivi une ou plusieurs formations en TIC ?",
      "ar": "هل سبق لك أن أخذت دورة أو أكثر من دورات تكنولوجيا المعلومات والاتصال ؟",
      "default": "Have you ever taken one or more ICT courses ?"
     },
     "isRequired": true,
     "showTitle": true
    },
    {
     "type": "checkbox",
     "name": "question11",
     "visibleIf": "{question10} = true",
     "title": {
      "fr": "Lesquels des sujets suivants ont été abordés au cours de ces formations ?",
      "default": "Which of the following topics were covered in these trainings ?",
      "ar": "ما المواضيع التي تمت تغطيتها في هذه الدورات التدريبية ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "L'intégration des TIC dans l'enseignement",
        "default": "The integration of ICT in education",
        "ar": "إدماج تكنولوجيا المعلومات والاتصال في التعليم"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "L'utilisation des moteurs de recherche",
        "default": "The use of search engines",
        "ar": "إستخدام محركات البحث"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "L'utilisation de logiciels de bureautique (MS Word, MS Excel, MS PowerPoint,...)",
        "ar": "استخدام البرامج المكتبية",
        "default": "The use of office software (MS Word, MS Excel, MS PowerPoint,...)"
       }
      },
      {
       "value": "item4",
       "text": {
        "fr": "L'utilisation de logiciels de Calcul Formel (Maple, SageMath,...)",
        "default": "The use of formal calculation software (Maple, SageMath,...)",
        "ar": "Maple، SageMath،..."
       }
      },
      {
       "value": "item5",
       "text": {
        "fr": "L'utilisation de logiciels de Calcul Numérique (Matlab, Scilab,...)",
        "default": "The use of Numerical Calculation software (Matlab, Scilab,...)",
        "ar": "Matlab, Scilab,..."
       }
      },
      {
       "value": "item6",
       "text": {
        "fr": "L'utilisation de logiciels de Statistiques (SPSS, SAS,...)",
        "default": "The use of statistical software (SPSS, SAS,...)",
        "ar": "SPSS, SAS,..."
       }
      },
      {
       "value": "item7",
       "text": {
        "fr": "L'utilisation de logiciels de Géométrie Dynamique (Geogebra, Cabri,...)",
        "ar": "Geogebra, Cabri,...",
        "default": "The use of Dynamic Geometry software (Geogebra, Cabri,...)"
       }
      }
     ],
     "hasNone": true
    },
    {
     "type": "rating",
     "name": "question12",
     "visibleIf": "{question10} notempty",
     "title": {
      "fr": "Comment évaluez-vous votre niveau global de maîtrise des TIC en classe ?",
      "default": "How would you rate your overall level of ICT proficiency in the classroom ?",
      "ar": "كيف تقيم مستوى كفاءتك في استخدام تقنيايت المعلومات والاتصال داخل الفصل الدراسي ؟"
     },
     "isRequired": true,
     "minRateDescription": {
      "fr": "Mauvais",
      "default": "Poor",
      "ar": "ضعيف جدا"
     },
     "maxRateDescription": {
      "fr": "Très bien",
      "default": "Very good",
      "ar": "جيد جدا"
     }
    },
    {
     "type": "matrix",
     "name": "question13",
     "visibleIf": "{question12} notempty",
     "title": {
      "fr": "Comment évaluez-vous votre niveau de maîtrise des:",
      "default": "How would you rate your level of proficiency in:",
      "ar": "كيف تقيم مستوى إتقانك لـ:"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Mauvais",
        "default": "Poor",
        "ar": "ضعيف جدا"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Passable",
        "default": "Acceptable",
        "ar": "لا بأس به"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "Bien",
        "ar": "جيد",
        "default": "Good"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Très bien",
        "default": "Very good",
        "ar": "جيد جدا"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Moteurs de Recherche",
        "default": "Search Engines",
        "ar": "محركات البحث"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Logiciels de bureautique",
        "default": "Office softwares",
        "ar": "البرامج المكتبية"
       },
       "visibleIf": "{question13.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "Logiciels de Calcul Numérique",
        "ar": "برمجيات حوسبة رقمية",
        "default": "Numerical computation softwares"
       },
       "visibleIf": "{question13.Row 2} notempty"
      },
      {
       "value": "Row 4",
       "text": {
        "fr": "Logiciels de Géométrie Dynamique",
        "default": "Dynamic Geometry softwares",
        "ar": "برامج الهندسة"
       },
       "visibleIf": "{question13.Row 3} notempty"
      },
      {
       "value": "Row 5",
       "text": {
        "fr": "Logiciels de Calcul Formel",
        "default": "Softwares of Formal Calculation",
        "ar": "برامج الحساب"
       },
       "visibleIf": "{question13.Row 4} notempty"
      },
      {
       "value": "Row 6",
       "text": {
        "fr": "Logiciels de Statistiques",
        "default": "Statistics Softwares",
        "ar": "برامج الإحصاء"
       },
       "visibleIf": "{question13.Row 5} notempty"
      }
     ],
     "isAllRowRequired": true
    },
    {
     "type": "matrix",
     "name": "question14",
     "visibleIf": "{question13.Row 6} notempty",
     "title": {
      "fr": "Comment décrivez-vous les compétences en TIC de :",
      "default": "How would you describe the ICT skills of :",
      "ar": "كيف تصف مهارات تكنولوجيا المعلومات والاتصال لدى:"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Incompétents",
        "default": "Incompetents",
        "ar": "ضعيفة"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Modérément compétents",
        "ar": "متوسطة",
        "default": "Moderately competent"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "Compétents",
        "ar": "متقدمة",
        "default": "Competents"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Vos élèves en classe",
        "default": "Your students in class",
        "ar": "تلاميذك في الفصل"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Vos collegues dans leurs classes",
        "default": "Your co-workers in their classrooms",
        "ar": "زملاؤك في العمل في فصولهم الدراسية"
       },
       "visibleIf": "{question14.Row 1} notempty"
      }
     ],
     "isAllRowRequired": true
    }
   ],
   "title": {
    "fr": "Connaissances en TIC",
    "default": "Knowledge in ICT",
    "ar": "المعارف حول تكنولوجيا المعلومات والاتصال"
   }
  },
  {
   "name": "Page 3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question15",
     "title": {
      "fr": "En termes d'intégration des TIC, comment vous décririez-vous ?",
      "default": "In terms of ICT integration, how would you describe yourself ?",
      "ar": "فيما يتعلق بإدماج تقنيات المعلومات والاتصال، كيف تصف نفسك ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "Réfractaire",
        "default": "Opposing",
        "ar": "معارض"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "Indifférent(e)",
        "ar": "غير مهتم",
        "default": "Indifferent"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "Moyennement intéressé(e)",
        "ar": "مؤيد",
        "default": "Moderately interested"
       }
      },
      {
       "value": "item4",
       "text": {
        "fr": "Passionné(e)",
        "ar": "متحمس",
        "default": "Passionate"
       }
      }
     ]
    },
    {
     "type": "matrix",
     "name": "question16",
     "visibleIf": "{question15} notempty",
     "title": {
      "fr": "Indiquez votre attitude à l'égard des affirmations suivantes :",
      "default": "Indicate your attitude toward the following statements:",
      "ar": "ما موقفك من العبارات التالية:"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Pas du tout d’accord",
        "default": "Totally disagree",
        "ar": "غير متفق تماما"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Pas d’accord",
        "default": "Disagree",
        "ar": "غير متفق"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "D’accord",
        "ar": "متفق",
        "default": "agree"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Tout à fait d’accord",
        "ar": "متفق تماما",
        "default": "Totally agree"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Les TIC accélèrent la préparation des cours",
        "default": "ICT speeds up course preparation",
        "ar": "تحضير الدروس يأخذ وقتا أطول عند استخدام تكنولوجيا المعلومات والاتصال"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Les TIC rendent l'enseignement plus difficile",
        "default": "ICT makes teaching more difficult",
        "ar": "تكنولوجيا المعلومات والاتصال تجعل التدريس أكثر صعوبة"
       },
       "visibleIf": "{question16.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "Les TIC peuvent avoir un impact négatif sur le taux de réussite",
        "default": "ICT can have a negative impact on the success rate",
        "ar": "يمكن أن يكون لتكنولوجيا المعلومات والاتصال أثر سلبي على معدل النجاح"
       },
       "visibleIf": "{question16.Row 2} notempty"
      },
      {
       "value": "Row 4",
       "text": {
        "fr": "Les TIC perturbent l'apprentissage des élèves",
        "default": "ICT disrupts student learning",
        "ar": "تكنولوجيا المعلومات والاتصال تشوش على تعليم الطلاب"
       },
       "visibleIf": "{question16.Row 3} notempty"
      },
      {
       "value": "Row 5",
       "text": {
        "fr": "Les TIC offrent des activités d'apprentissage plus diversifiées",
        "default": "ICT offers more diverse learning activities",
        "ar": "توفر تكنولوجيا المعلومات والاتصال أنشطة تعلم أكثر تنوعا"
       },
       "visibleIf": "{question16.Row 4} notempty"
      },
      {
       "value": "Row 6",
       "text": {
        "fr": "Les TIC rendent la préparation des cours plus difficile",
        "default": "ICT makes course preparation more difficult",
        "ar": "تكنولوجيا المعلومات والإتصال تعقد عملية إعداد الدروس"
       },
       "visibleIf": "{question16.Row 5} notempty"
      },
      {
       "value": "Row 7",
       "text": {
        "fr": "Les TIC permettent aux étudiants d'accéder à de meilleures sources d'information",
        "default": "ICT enables students to access better sources of information",
        "ar": "تمكن تكنولوجيا المعلومات والاتصال الطلاب من الوصول إلى مصادر أفضل للمعلومات"
       },
       "visibleIf": "{question16.Row 6} notempty"
      },
      {
       "value": "Row 8",
       "text": {
        "fr": "Les TIC ont le pouvoir de révolutionner la manière dont le contenu mathématique est enseigné",
        "default": "ICT has the power to revolutionize the way mathematical content is taught",
        "ar": "لتكنولوجيا المعلومات والإتصال القدرة على إحداث ثورة في طريقة تدريس المحتوى الرياضي"
       },
       "visibleIf": "{question16.Row 7} notempty"
      },
      {
       "value": "Row 9",
       "text": {
        "fr": "Vous êtes en mesure de mobiliser les TIC pour développer les capacités de résolution de problèmes de vos élèves",
        "default": "You are able to use ICT to develop your students' problem-solving skills",
        "ar": "لديك القدرة على إستخدام تقنيات المعلومات والاتصال لتطوير مهارات تلامذتك في حل المشاكل"
       },
       "visibleIf": "{question16.Row 8} notempty"
      },
      {
       "value": "Row 10",
       "text": {
        "fr": "Les TIC augmentent la motivation des élèves",
        "default": "ICT increases student motivation",
        "ar": "تكنولوجيا المعلومات والاتصال تزيد من حماس التلاميذ للتعلم"
       },
       "visibleIf": "{question16.Row 9} notempty"
      },
      {
       "value": "Row 11",
       "text": {
        "fr": "Les TIC rendent les élèves plus autonomes dans leur apprentissage",
        "default": "ICT makes students more independent in their learning",
        "ar": "تكنولوجيا المعلومات والاتصال تجعل الطلاب أكثر إستقلالية أثناء تعلمهم"
       },
       "visibleIf": "{question16.Row 10} notempty"
      },
      {
       "value": "Row 12",
       "text": {
        "fr": "Les TIC rendent plus difficile le contrôle de la classe",
        "default": "ICT makes it harder to control the classroom",
        "ar": "تكنولوجيا المعلومات والاتصال تزيد من صعوبة السيطرة على الفصول الدراسية"
       },
       "visibleIf": "{question16.Row 11} notempty"
      },
      {
       "value": "Row 13",
       "text": {
        "fr": "Le nombre d'inconvénients l'emporte sur les avantages",
        "default": "The number of disadvantages outweighs the advantages",
        "ar": "عيوبها تفوق مزاياها"
       },
       "visibleIf": "{question16.Row 12} notempty"
      },
      {
       "value": "Row 14",
       "text": {
        "fr": "Les TIC ne sont pas si importantes dans l'enseignement des mathématiques",
        "default": "ICT is not so important in mathematics education",
        "ar": "تكنولوجيا المعلومات والاتصال ليست مهمة جدا في تعليم الرياضيات"
       },
       "visibleIf": "{question16.Row 13} notempty"
      }
     ],
     "isAllRowRequired": true
    }
   ],
   "title": {
    "fr": "Attitude envers les TIC",
    "default": "Attitude to ICT",
    "ar": "الموقف من تكنولوجيا المعلومات والاتصال"
   }
  },
  {
   "name": "Page 4",
   "elements": [
    {
     "type": "checkbox",
     "name": "question17",
     "title": {
      "fr": "Parmi les équipements suivants, quels sont ceux que votre école a mis à votre disposition ?",
      "default": "Which of the following facilities has your school made available to you ?",
      "ar": "أي من المعدات التالية توفرها المدرسة لك ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "Ordinateur",
        "default": "Computer",
        "ar": "حاسوب"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "Tablette",
        "default": "Tablet",
        "ar": "جهاز لوحي"
       }
      },
      {
       "value": "item3",
       "text": {
        "default": "Smartphone",
        "ar": "هاتف ذكي"
       }
      },
      {
       "value": "item4",
       "text": {
        "fr": "Tableau Blanc Interactif",
        "default": "Interactive Whiteboard",
        "ar": "سبورة تفاعلية"
       }
      },
      {
       "value": "item5",
       "text": {
        "fr": "Matériel Audio",
        "default": "Audio Equipment",
        "ar": "معدات صوتية"
       }
      },
      {
       "value": "item6",
       "text": {
        "fr": "Data Show",
        "default": "Projector",
        "ar": "مسلاط"
       }
      },
      {
       "value": "item7",
       "text": {
        "default": "Camera",
        "ar": "كاميرا"
       }
      },
      {
       "value": "item8",
       "text": {
        "fr": "Imprimante",
        "default": "Printer",
        "ar": "طابعة"
       }
      }
     ],
     "choicesOrder": "asc",
     "hasNone": true
    },
    {
     "type": "checkbox",
     "name": "question18",
     "visibleIf": "{question17} notempty",
     "title": {
      "fr": "Votre école dispose-t-elle :",
      "default": "Does your school have:",
      "ar": "هل تتوفر مدرستك على:"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "Salles Multimédias entièrement équipées",
        "default": "Fully equipped multimedia rooms",
        "ar": "غرف متعددة الوسائط، كاملة التجهيز"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "Salles informatiques fonctionnelles",
        "default": "Functional computer rooms",
        "ar": "غرف بها حواسيب صالحة للاستعمال"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "Électricité",
        "default": "Electricity",
        "ar": "كهرباء"
       }
      },
      {
       "value": "item4",
       "text": {
        "fr": "Connexion Internet",
        "default": "Internet connection",
        "ar": "اتصال إنترنت"
       }
      },
      {
       "value": "item5",
       "text": {
        "fr": "Abonnement de visioconférence (Zoom, Microsoft Teams, Google Meet,...)",
        "default": "Video conferencing subscription (Zoom, Microsoft Teams, Google Meet,...)",
        "ar": "اشتراك مدفوع في برامج الاجتماعات على النترنت (Zoom, Microsoft Teams, Google Meet,...)"
       }
      },
      {
       "value": "item6",
       "text": {
        "fr": "Site web",
        "default": "Website",
        "ar": "موقع إلكتروني"
       }
      },
      {
       "value": "item7",
       "text": {
        "fr": "Plateforme E-Learning",
        "default": "E-Learning platform",
        "ar": "منصة للتعلم الإلكتروني"
       }
      }
     ],
     "choicesOrder": "asc",
     "hasNone": true
    },
    {
     "type": "matrix",
     "name": "question19",
     "visibleIf": "{question18} notempty",
     "title": {
      "fr": "A quel point êtes-vous d'accord ou non avec les affirmations suivantes:",
      "default": "To what extent do you agree or disagree with the following statements:",
      "ar": "إلى أي مدى تتفق أو لا تتفق مع الجمل التالية:"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Pas du tout d’accord",
        "default": "Totally disagree",
        "ar": "غير متفق تماما"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Pas d’accord",
        "default": "Disagree",
        "ar": "غير متفق"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "D’accord",
        "default": "Agree",
        "ar": "متفق"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Tout à fait d’accord",
        "default": "Totally agree",
        "ar": "متفق تماما"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "L'équipement disponible dans l'école n'est pas suffisant",
        "default": "The equipment available in the school is not sufficient",
        "ar": "المعدات المتوفرة في المدرسة غير كافية"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Mon école dispose d'une bonne connexion Internet",
        "default": "My school has a good Internet connection",
        "ar": "مدرستي تتوفر على اتصال جيد بالإنترنت"
       },
       "visibleIf": "{question19.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "L'équipement de mon école est à jour",
        "default": "My school's equipment is up to date",
        "ar": "معدات مدرستي حديثة."
       },
       "visibleIf": "{question19.Row 2} notempty"
      },
      {
       "value": "Row 4",
       "text": {
        "fr": "Mon école me fournit un soutien technique suffisant pour entretenir les outils TIC",
        "default": "My school provides me with sufficient technical support to maintain the ICT tools",
        "ar": "توفر لي المدرسة الدعم التقني الكافي"
       },
       "visibleIf": "{question19.Row 3} notempty"
      }
     ],
     "isAllRowRequired": true
    }
   ],
   "title": {
    "fr": "Disponibilité des équipements TIC",
    "default": "Availability of ICT equipment",
    "ar": "مدى توفر معدات تكنولوجيا المعلومات والاتصال"
   }
  },
  {
   "name": "Page 5",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question20",
     "title": {
      "fr": "Quand avez-vous intégré pour la première fois les TIC dans votre enseignement ?",
      "default": "When did you first integrate ICT into your teaching ?",
      "ar": "متى كانت أول مرة أدمجت فيها تكنولوجيا المعلومات والإتصال أثناء تدريسك ؟"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": {
        "fr": "Avant le COVID-19",
        "ar": "قبل كوفيد-19",
        "default": "Before COVID-19"
       }
      },
      {
       "value": "item2",
       "text": {
        "fr": "Après le COVID-19",
        "default": "After COVID-19",
        "ar": "بعد كوفيد-19"
       }
      },
      {
       "value": "item3",
       "text": {
        "fr": "Je ne les ai jamais intégrés",
        "default": "I have never integrated them",
        "ar": "لم أدمجهم أبدا"
       }
      }
     ]
    },
    {
     "type": "matrix",
     "name": "question21",
     "visibleIf": "{question20} <> 'item3'",
     "title": {
      "fr": "En général, à quelle fréquence utilisez-vous les TIC ?",
      "default": "In general, how often do you use ICT ?",
      "ar": "بشكل عام، كم مرة تستخدم فيها تكنولوجيا المعلومات والاتصال ؟"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Jamais",
        "default": "Never",
        "ar": "أبدا"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Rarement",
        "default": "Rarely",
        "ar": "نادرا"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "Souvent",
        "default": "Often",
        "ar": "عادة"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Toujours",
        "default": "Always",
        "ar": "دائما"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Durant les séances de cours",
        "default": "During course sessions",
        "ar": "خلال حصص الدروس"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Lors de la préparation des leçons",
        "ar": "أثناء الإعداد للحصص",
        "default": "When preparing lessons"
       },
       "visibleIf": "{question21.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "Durant les séances de TD",
        "ar": "خلال حصص التمارين",
        "default": "During the TD sessions"
       },
       "visibleIf": "{question21.Row 2} notempty"
      }
     ],
     "isAllRowRequired": true
    },
    {
     "type": "matrix",
     "name": "question22",
     "visibleIf": "{question20} <> 'item3' and {question21.Row 3} notempty",
     "title": {
      "fr": "Dans le cadre de votre enseignement, à quelle fréquence utilisez-vous les TIC pour:",
      "default": "In your teaching, how often do you use ICT to:",
      "ar": "في إطار تدريسك، ما معدل استخدامك لتكنولوجيا المعلزمات والاتصال"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Jamais",
        "ar": "أبدا",
        "default": "Never"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Rarement",
        "ar": "نادرا",
        "default": "Rarely"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "Souvent",
        "ar": "عادة",
        "default": "Often"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Toujours",
        "ar": "دائما",
        "default": "Always"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Soutenir les discussions et les présentations faites en classe",
        "default": "Support classroom discussions and presentations",
        "ar": "توجيه ودعم المناقشات والعروض التقديمية داخل الفصل"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Communiquer avec les élèves en dehors de la classe",
        "default": "Communicating with students outside the classroom",
        "ar": "التواصل مع التتلاميذ خارج الفصل"
       },
       "visibleIf": "{question22.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "Évaluer les apprentissages des élèves",
        "default": "Evaluating student learning",
        "ar": "تقييم تعلم الطلاب"
       },
       "visibleIf": "{question22.Row 2} notempty"
      },
      {
       "value": "Row 4",
       "text": {
        "fr": "Fournir des feed-backs aux étudiants sur leurs travaux",
        "default": "Provide feedback to students on their work",
        "ar": "تقديم ملاحظات للطلاب حول أعمالهم"
       },
       "visibleIf": "{question22.Row 3} notempty"
      },
      {
       "value": "Row 5",
       "text": {
        "fr": "Présenter les informations directement dans la classe",
        "default": "Present information directly in the classroom",
        "ar": "تقديم المعلومات بشكل مباشر في الفصل الدراسي"
       },
       "visibleIf": "{question22.Row 4} notempty"
      }
     ],
     "isAllRowRequired": true
    },
    {
     "type": "matrix",
     "name": "question23",
     "visibleIf": "{question20} notempty",
     "title": {
      "fr": "À quelle fréquence utilisez-vous les outils suivants:",
      "default": "How often do you use the following tools ?",
      "ar": "كم مرة تستخدم فيها الأدوات التالية ؟"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Jamais",
        "default": "Never",
        "ar": "أبدا"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Rarement",
        "default": "Rarely",
        "ar": "نادرا"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "Souvent",
        "default": "Often",
        "ar": "عادة"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Toujours",
        "default": "Always",
        "ar": "دائما"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Logiciels de simulation et de modélisation",
        "default": "Simulation and modeling softwares",
        "ar": "برامج المحاكاة والنمذجة"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Logiciel de communication",
        "default": "Communication softwares",
        "ar": "برامج الاتصال"
       },
       "visibleIf": "{question23.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "Logiciel de carte conceptuelle",
        "default": "Concept mapping softwares",
        "ar": "برامج الخطاطات"
       },
       "visibleIf": "{question23.Row 2} notempty"
      },
      {
       "value": "Row 4",
       "text": {
        "fr": "Logiciel de conception graphique ou de dessin",
        "default": "Graphic design or drawing softwares",
        "ar": "برامج التصميم و الرسم"
       },
       "visibleIf": "{question23.Row 3} notempty"
      },
      {
       "value": "Row 5",
       "text": {
        "fr": "Logiciel de travail collaboratif",
        "default": "Collaborative work softwares",
        "ar": "برامج العمل التشاركي"
       },
       "visibleIf": "{question23.Row 4} notempty"
      },
      {
       "value": "Row 6",
       "text": {
        "default": "Learning management systems (Moodle,...)",
        "ar": "أنظمة إدارة التعلم"
       },
       "visibleIf": "{question23.Row 5} notempty"
      },
      {
       "value": "Row 7",
       "text": {
        "fr": "Tableurs",
        "default": "Spreadsheet softwares",
        "ar": "برامج جداول البيانات"
       },
       "visibleIf": "{question23.Row 6} notempty"
      },
      {
       "value": "Row 8",
       "text": {
        "fr": "Logiciels de présentation",
        "default": "Presentation softwares",
        "ar": "برامج العرض"
       },
       "visibleIf": "{question23.Row 7} notempty"
      },
      {
       "value": "Row 9",
       "text": {
        "fr": "Logiciel de traitement de texte",
        "default": "Text processing software",
        "ar": "برامج معالجة النصوص"
       },
       "visibleIf": "{question23.Row 8} notempty"
      }
     ],
     "isAllRowRequired": true
    },
    {
     "type": "matrix",
     "name": "question24",
     "visibleIf": "{question23.Row 9} notempty",
     "title": {
      "fr": "En ce qui concerne votre utilisation des logiciels Maple, Geogebra, Matlab, Cabri...,",
      "default": "Regarding your use of Maple, Geogebra, Matlab, Cabri..,",
      "ar": "بخصوص استخدامك ل Maple، Geogebra، Matlab، Cabri..،"
     },
     "description": {
      "fr": "À quelle fréquence les utilisez-vous pour:",
      "default": "How often do you use them to:",
      "ar": "كم مرة تستخدمها لـ:"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Jamais",
        "ar": "أبدا",
        "default": "Never"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Rarement",
        "ar": "نادرا",
        "default": "Rarely"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "ar": "عادة",
        "default": "Often",
        "fr": "Souvent"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Toujours",
        "ar": "دائما",
        "default": "Always"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Introduire de nouveaux concepts",
        "default": "Introduce new concepts",
        "ar": "تقديم مفاهيم جديدة"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Montrez aux élèves pourquoi ils font des erreurs",
        "default": "Show students why they make mistakes",
        "ar": "تبيان أسباب إرتكاب التلاميذ للأخطاء"
       },
       "visibleIf": "{question24.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "Faciliter les calculs des formules complexes",
        "default": "Facilitate the calculation of complex formulas",
        "ar": "تسهيل حساب الصيغ المعقدة"
       },
       "visibleIf": "{question24.Row 2} notempty"
      },
      {
       "value": "Row 4",
       "text": {
        "fr": "Tracer des graphes",
        "default": "Plotting Graphs",
        "ar": "انشاء رسوم بيانية"
       },
       "visibleIf": "{question24.Row 3} notempty"
      },
      {
       "value": "Row 5",
       "text": {
        "fr": "Faire des visualisations/Animations en 2D/3D",
        "default": "Make 2D/3D visualizations/animations",
        "ar": "انشاء تصاميم ثنائية/ثلاثية الأبعاد"
       },
       "visibleIf": "{question24.Row 4} notempty"
      }
     ],
     "isAllRowRequired": true
    }
   ],
   "title": {
    "fr": "Taux d'utilisation des TIC",
    "default": "ICT usage rate",
    "ar": "معدل إستخدام تقنية المعلومات والاتصال"
   }
  },
  {
   "name": "Page 6",
   "elements": [
    {
     "type": "matrix",
     "name": "question25",
     "title": {
      "fr": "Si un enseignant a intégré les TIC, il est très probable que :",
      "default": "If a teacher has integrated ICT, it is very likely that :",
      "ar": "إذا كان المدرس قد دمج تكنولوجيا المعلومات والاتصال، فمن المرجح جدا أن :"
     },
     "description": {
      "fr": "Selon votre expérience et celle de vos collègues;",
      "default": "Based on your experience and that of your colleagues;",
      "ar": "بناء على خبرتك وتجربة زملائك؛"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "fr": "Pas du tout d’accord",
        "default": "Totally disagree",
        "ar": "غير متفق تماما"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "fr": "Pas d’accord",
        "default": "Disagree",
        "ar": "غير متفق"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "D’accord",
        "default": "Agree",
        "ar": "متفق"
       }
      },
      {
       "value": "Column 4",
       "text": {
        "fr": "Tout à fait d’accord",
        "default": "Totally agree",
        "ar": "متفق تماما"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Il ne fait que suivre les instructions institutionnelles",
        "default": "He only follows the institutional instructions",
        "ar": "هو فقط يتبع التعليمات المؤسسيه"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "C'est son initiative personnelle",
        "default": "It is his personal initiative",
        "ar": "أنها مبادرته الشخصية"
       },
       "visibleIf": "{question25.Row 1} notempty"
      }
     ],
     "isAllRowRequired": true
    },
    {
     "type": "matrix",
     "name": "question26",
     "visibleIf": "{question25.Row 2} notempty",
     "title": {
      "fr": "Lequel des facteurs suivants est le plus susceptible d'empêcher votre intégration des TIC ?",
      "default": "Which of the following factors is most likely to prevent your integration of ICT ?",
      "ar": "من من العوامل التالية مرجح أن تعرقل عملية إدماج تكنواوجيا المعلومات والاتصال ؟"
     },
     "descriptionLocation": "underTitle",
     "isRequired": true,
     "columns": [
      {
       "value": "Column 1",
       "text": {
        "ar": "محال",
        "default": "Improbable"
       }
      },
      {
       "value": "Column 2",
       "text": {
        "ar": "محتمل",
        "default": "Likely",
        "fr": "Probable"
       }
      },
      {
       "value": "Column 3",
       "text": {
        "fr": "Très probable",
        "ar": "مؤكد",
        "default": "Very likely"
       }
      }
     ],
     "rows": [
      {
       "value": "Row 1",
       "text": {
        "fr": "Manque d'intérêt",
        "default": "Lack of interest",
        "ar": "قلة الاهتمام"
       }
      },
      {
       "value": "Row 2",
       "text": {
        "fr": "Matériel manquant",
        "default": "Missing equipment",
        "ar": "معدات مفقودة"
       },
       "visibleIf": "{question26.Row 1} notempty"
      },
      {
       "value": "Row 3",
       "text": {
        "fr": "Manque d'assistance technique",
        "default": "Lack of technical assistance",
        "ar": "نقص المساعدة التقنية"
       },
       "visibleIf": "{question26.Row 2} notempty"
      },
      {
       "value": "Row 4",
       "text": {
        "fr": "Manque de formation",
        "default": "Lack of training",
        "ar": "نقص التدريب"
       },
       "visibleIf": "{question26.Row 3} notempty"
      },
      {
       "value": "Row 5",
       "text": {
        "fr": "Difficultés d'accès aux TIC",
        "default": "Difficulties in accessing ICT",
        "ar": "صعوبات في الولوج لتكنولوجيا المعلومات والاتصال"
       },
       "visibleIf": "{question26.Row 4} notempty"
      },
      {
       "value": "Row 6",
       "text": {
        "fr": "Matériel inadapté",
        "default": "Unsuitable equipment",
        "ar": "معدات غير مناسبة"
       },
       "visibleIf": "{question26.Row 5} notempty"
      },
      {
       "value": "Row 7",
       "text": {
        "fr": "Manque de temps",
        "default": "Lack of time",
        "ar": "ضيق الوقت"
       },
       "visibleIf": "{question26.Row 6} notempty"
      },
      {
       "value": "Row 8",
       "text": {
        "fr": "Absence d'électricité",
        "default": "Lack of electricity",
        "ar": "عدم وجود كهرباء"
       },
       "visibleIf": "{question26.Row 7} notempty"
      },
      {
       "value": "Row 9",
       "text": {
        "fr": "Connexion internet manquante ou instable",
        "default": "Missing or unstable internet connection",
        "ar": "اتصال إنترنت مفقود أو غير مستقر"
       },
       "visibleIf": "{question26.Row 8} notempty"
      }
     ],
     "isAllRowRequired": true
    }
   ],
   "title": {
    "fr": "Facteurs influençant l'intégration des TIC",
    "default": "Factors influencing ICT integration",
    "ar": "العوامل المؤثرة على إدماج تكنولوجيا المعلومات والاتصال"
   }
  }
 ],
 "triggers": [
  {
   "type": "complete",
   "expression": "{question26.Row 9} notempty"
  }
 ],
 "showTitle": false,
 "showPageNumbers": true,
 "showQuestionNumbers": "onPage",
 "questionDescriptionLocation": "underInput",
 "showProgressBar": "bottom",
 "widthMode": "responsive"
};

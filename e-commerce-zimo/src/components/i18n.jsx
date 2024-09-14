import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: { about_us: "About Us" },
      pages: {
        HomePage: {
          hero: {
            limited_time: {
              text: "Limited Time Only For Winter",
              class: "text__14 tracking__2",
            },
            fashion: { text: "Fashion", class: "text__90 tracking__2" },
            look_your_best: {
              text: "Look Your Best On Your Best Day",
              class: "text__14 tracking__2",
            },
            explore_now: { text: "Explore Now", class: "text__14 tracking__2" },
          },
        },
      },
      AboutPage: {
        headerText: "About Us",
        paragraphHeader1: "Welcome to PixelWave Studios",
        paragraph1:
          "At PixelWave Studios, we believe in the transformative power of creativity. Our mission is to craft digital experiences that not only captivate but also connect with audiences on a deeper level. Founded in 2012, PixelWave Studios has grown from a small team of passionate designers and developers into a full-fledged digital agency known for pushing the boundaries of what's possible in the digital realm.",

        paragraphHeader2: "Our Story",
        paragraph2:
          "PixelWave Studios was born out of a shared vision between our founders, Alex Morgan and Jamie Lee. Both seasoned professionals in the tech and creative industries, Alex and Jamie saw an opportunity to blend their skills and passions to create something unique. With Alex's background in cutting-edge technology and Jamie's expertise in design and storytelling, they set out to build a company that prioritizes innovation, quality, and a client-centered approach.",
        paragraph2_5:
          "From our humble beginnings in a small co-working space, we have expanded our footprint globally, working with clients from diverse industries. Our journey has been marked by a relentless pursuit of excellence and a commitment to fostering long-term relationships with our clients.",

        paragraphHeader3: "What We Do",
        paragraph3:
          "At PixelWave Studios, we specialize in a wide range of services tailored to meet the needs of modern businesses. Our expertise includes:",
        listHeader3_1: "Web Development:",
        list3_1:
          "From sleek, responsive websites to robust e-commerce platforms, our development team uses the latest technologies to bring your vision to life.",
        listHeader3_2: "Graphic Design:",
        list3_2:
          "Our designers are artists at heart, creating visually stunning graphics that communicate your brand's message effectively.",
        listHeader3_3: "Digital Marketing:",
        list3_3:
          "We offer comprehensive digital marketing strategies that drive engagement and conversions, including SEO, social media marketing, and pay-per-click advertising.",
        listHeader3_4: "Branding:",
        list3_4:
          "Building a brand is about more than just a logo; it's about creating an identity. Our branding services help you establish a memorable and impactful presence in your industry.",
        listHeader3_5: "Content Creation:",
        list3_5:
          "Engaging content is key to capturing your audience's attention. Our team produces high-quality content that resonates with your target market, from blog posts to video production.",
        paragraphHeader4: "Our Philosophy",
        paragraph4:
          "At the core of PixelWave Studios is a philosophy that blends creativity, innovation, and collaboration. We believe that the best results come from understanding our clients' needs and working closely with them throughout the process. Our team is dedicated to staying ahead of the curve, continuously learning and adapting to the ever-evolving digital landscape.",
        paragraphHeader5: "Meet the Team",
        paragraph5:
          "Our team is our greatest asset. Comprising a diverse group of designers, developers, marketers, and strategists, we bring a wealth of experience and a unique perspective to every project. Each member of our team is passionate about what they do and committed to delivering exceptional results.",

        listHeader5_1: "Alex Morgan, Co-Founder & CEO:",
        list5_1:
          "With a background in software engineering and a keen eye for innovation, Alex leads our team with a focus on strategic growth and technological advancement.",
        listHeader5_2: "Jamie Lee, Co-Founder & Creative Director:",
        list5_2:
          "Jamie's expertise in design and storytelling drives our creative vision, ensuring that every project is infused with originality and artistic flair",
        listHeader5_3: "Sarah Johnson, Lead Developer:",
        list5_3:
          "Sarah's extensive experience in web development ensures that our projects are built on solid foundations, combining functionality with aesthetic appeal.",
        listHeader5_4: "David Kim, Marketing Director:",
        list5_4:
          "With a knack for digital strategy, David crafts marketing campaigns that deliver measurable results and drive business growth.",

        paragraphHeader6: "Why Choose Us?",
        paragraph6:
          "Choosing PixelWave Studios means choosing a partner who is invested in your success. We take pride in our ability to understand your unique challenges and deliver solutions that exceed your expectations. Our commitment to quality, creativity, and customer satisfaction sets us apart from the competition.",
        paragraphHeader7: "Get in Touch",
        paragraph7:
          "We'd love to hear from you! Whether you're looking to start a new project or simply want to learn more about our services, feel free to reach out to us. Let's create something amazing together.",
        paragraphHeader8: "Contact Us:",
        listHeader8_1: "Email:",
        list8_1: "info@dummystudio.com",
        listHeader8_2: "Phone:",
        list8_2: "(123) 456-7890",
        listHeader8_3: "Address:",
        list8_3: "123 Creative Lane, Innovation City, CA 90210",
        paragraph8:
          "Thank you for considering PixelWave Studios. We look forward to the opportunity to work with you and bring your digital dreams to life.",
      },
      ContactPage: {
        headerText: "Contact Us",
        paragraph1:
          "Need to get in touch with us? Either fill out the form with your inquiry or email us at info@dummystudio.com",
        formHeader: "Send Message",
        submitButton: "Submit",
        emailField: "Email",
        firstNameField: "First Name",
        lastNameField: "Last Name",
        messageField: "Message",
        emailError1: "Enter your email",
        emailError2: "Enter a valid email",
        emailError3: "Email is required",
        firstNameError1: "Enter your first name",
        firstNameError2: "First name is required",
        lastNameError1: "Enter your last name",
        lastNameError2: "Last name is required",
        messageError1: "Enter your message",
        messageError2: "Message is required",
        messageSent: "Message sent successfully",
        messageSentError: "Something went wrong!",
      },
    },
    ur: {
      common: {
        about_us: "ہمارے بارے میں",
      },
      pages: {
        HomePage: {
          hero: {
            limited_time: {
              text: "محدود وقت کے لیے صرف موسم سرما کے لیے",
              class: "text__18 tracking__0",
            },
            fashion: { text: "فیشن", class: "text__100 tracking__0" },
            look_your_best: {
              text: "اپنے بہترین دن پر بہترین نظر آئیں",
              class: "text__18 tracking__0",
            },
            explore_now: {
              text: "ابھی دریافت کریں",
              class: "text__18 tracking__0",
            },
          },
        },
      },
      AboutPage: {
        headerText: "ہمارے بارے میں",
        paragraphHeader1: "پکسل ویو اسٹوڈیوز میں خوش آمدید",
        paragraph1:
          "پکسل ویو اسٹوڈیوز میں، ہم تخلیقی صلاحیتوں کی تبدیلی کی طاقت پر یقین رکھتے ہیں۔ ہمارا مشن ڈیجیٹل تجربات تخلیق کرنا ہے جو نہ صرف متاثر کن ہوں بلکہ سامعین کے ساتھ گہرے سطح پر جڑیں۔ 2012 میں قائم ہونے والا، پکسل ویو اسٹوڈیوز ایک چھوٹی ٹیم سے ایک مکمل ڈیجیٹل ایجنسی میں ترقی کر گیا ہے جو ڈیجیٹل دنیا میں ممکنہ حدود کو بڑھانے کے لیے مشہور ہے۔",

        paragraphHeader2: "ہماری کہانی",
        paragraph2:
          "پکسل ویو اسٹوڈیوز ہمارے بانیوں، ایلکس مورگن اور جیمی لی کے درمیان ایک مشترکہ وژن سے پیدا ہوا تھا۔ ٹیک اور تخلیقی صنعتوں میں تجربہ رکھنے والے پیشہ ور افراد کے طور پر، ایلکس اور جیمی نے اپنی مہارتوں اور دلچسپیوں کو ملا کر کچھ منفرد بنانے کا موقع دیکھا۔ جدید ٹیکنالوجی میں ایلکس کے پس منظر اور جیمی کی ڈیزائن اور کہانی کہنے میں مہارت کے ساتھ، انہوں نے ایک ایسی کمپنی بنانے کا عزم کیا جو جدت، معیار اور کلائنٹ پر مبنی نقطہ نظر کو ترجیح دے۔",
        paragraph2_5:
          "ایک چھوٹے کو ورکنگ اسپیس سے شروع ہونے والے، ہم نے اپنی عالمی سطح پر قدم جمایا ہے، مختلف صنعتوں کے کلائنٹس کے ساتھ کام کیا ہے۔ ہمارا سفر مستقل بہترینیت کی تلاش اور ہمارے کلائنٹس کے ساتھ طویل مدتی تعلقات قائم کرنے کے عزم سے نشاندہی کرتا ہے۔",

        paragraphHeader3: "ہم کیا کرتے ہیں",
        paragraph3:
          "پکسل ویو اسٹوڈیوز میں، ہم جدید کاروبار کی ضروریات کو پورا کرنے کے لیے وسیع خدمات کی تخصص رکھتے ہیں۔ ہماری مہارت شامل ہیں:",
        listHeader3_1: "ویب ڈویلپمنٹ:",
        list3_1:
          "سلیک اور رسپانسیو ویب سائٹس سے لے کر مضبوط ای کامرس پلیٹ فارمز تک، ہماری ڈویلپمنٹ ٹیم آپ کے وژن کو زندگی میں لانے کے لیے جدید ترین ٹیکنالوجیز کا استعمال کرتی ہے۔",
        listHeader3_2: "گرافک ڈیزائن:",
        list3_2:
          "ہمارے ڈیزائنر دل کے کالے ہیں، جو آپ کے برانڈ کے پیغام کو موثر طریقے سے پیش کرنے والے دلکش گرافکس تخلیق کرتے ہیں۔",
        listHeader3_3: "ڈیجیٹل مارکیٹنگ:",
        list3_3:
          "ہم مکمل ڈیجیٹل مارکیٹنگ حکمت عملی پیش کرتے ہیں جو اشتراک اور تبدیلی کو بڑھاتی ہے، شامل ہیں سی او او، سوشل میڈیا مارکیٹنگ، اور پی پر کلک اشتہارات۔",
        listHeader3_4: "برانڈنگ:",
        list3_4:
          "ایک برانڈ بنانا صرف ایک لوگو کے بارے میں نہیں ہے؛ یہ ایک شناخت بنانا ہے۔ ہماری برانڈنگ خدمات آپ کو آپ کی صنعت میں یادگار اور اثر انگیز موجودگی قائم کرنے میں مدد کرتی ہیں۔",
        listHeader3_5: "مواد تخلیق:",
        list3_5:
          "مواد ترقیب کی کلید ہے آپ کے حاضرین کی توجہ کو قید کرنے کے لئے۔ ہماری ٹیم بلاگ پوسٹ سے ویڈیو پروڈکشن تک آپ کے ہدف مارکیٹ کے ساتھ ہمیشہ کی طرح بھرپور مواد تیار کرتی ہے۔",
        paragraphHeader4: "ہماری فلسفہ",
        paragraph4:
          "پکسل ویو اسٹوڈیوز کے دل میں خلاقیت، انوویشن، اور تعاون کی فلسفہ ہے۔ ہم مانتے ہیں کہ بہترین نتائج اسی وقت آتے ہیں جب ہم کلائنٹ کی ضروریات کو سمجھتے ہیں اور پروسس کے دوران ان کے ساتھ قریبی طور پر کام کرتے ہیں۔ ہماری ٹیم موازنہ کرنے کے لئے فرض ہے، مسلسل سیکھ رہی ہے، اور ترقی پذیر ہے۔",
        paragraphHeader5: "ٹیم سے ملاقات کریں",
        paragraph5:
          "ہماری ٹیم ہمارا سب سے بڑا اثاثہ ہے۔ ہماری ٹیم مختلف ڈیزائنرز، ڈویلپرز، مارکیٹرز، اور منصوبہ بنانے والے سے مشتمل ہے، ہر پروجیکٹ کے لئے ہم تجربہ اور انوکھی نقطہ نظر لاتے ہیں۔ ہماری ٹیم کے ہر رکن اپنے کام کے بارے میں پرجوش ہے اور ممتاز نتائج فراہم کرنے کے لئے وابستہ ہے۔",
        listHeader5_1: "الیکس مورگن، ساتھی اور سی ای او:",
        list5_1:
          "سافٹ ویئر انجینئرنگ کے تجربے کے ساتھ اور انوویشن کی طرف دلچسپی کے ساتھ، الیکس ہماری ٹیم کو رہنمائی کرتے ہیں جو استراتیجی ترقی اور تکنولوجی کی فروغ دینے پر توجہ دیتے ہیں۔",
        listHeader5_2: "جیمی لی، شریک اور تخلیقی ڈائریکٹر:",
        list5_2:
          "جیمی کی ڈیزائن اور کہانی کہانے میں مہارت ہماری تخلیقی دیکھ کو چلاتی ہے، یہ یقینی بناتے ہوئے کہ ہر پروجیکٹ میں اصلیت اور فنونی فضا شامل ہوتی ہے۔",
        listHeader5_3: "سارہ جانسن، لیڈ ڈویلپر:",
        list5_3:
          "سارہ کی ویب ڈویلپمنٹ میں وسیع تجربہ یقینی بناتا ہے کہ ہمارے پروجیکٹ مضبوط بنائے گئے ہیں، جو کامکاج کو خوبصورتی کے ساتھ ملا کر فعال ہوتی ہے۔",
        listHeader5_4: "ڈیوڈ کم، مارکیٹنگ ڈائریکٹر:",
        list5_4:
          "ڈیوڈ کی ڈیجیٹل استراتیجی کی طرف دلچسپی کی سلیقہ، ڈیوڈ مارکیٹنگ کیمپینز تیار کرتا ہے جو ناپنے والے نتائج فراہم کرتی ہیں اور کاروبار کی نمایاں بڑھوتری کو پیش کرتی ہیں۔",

        paragraphHeader6: "ہمیں کیوں منتخب کریں؟",
        paragraph6:
          "پکسل ویو اسٹوڈیوز کو منتخب کرنا آپ کے کامیابی میں مصروف شریک کو منتخب کرنا ہے۔ ہمیں آپ کی انوکھی چیلنجز کو سمجھنے اور آپ کی توقعات سے زیادہ حل فراہم کرنے پر فخر ہے۔ ہمارا معیار، خلاقیت، اور صارف کی خوشی پر موثرتا ہمیں مختلف بناتا ہے۔",
        paragraphHeader7: "رابطہ کریں",
        paragraph7:
          "ہمیں آپ کی آواز سننے کا خوشی ہوگا! چاہے آپ نیا منصوبہ شروع کرنے کی خواہش رکھتے ہیں یا بس ہماری خدمات کے بارے میں مزید جاننے کا مقصد ہے، ہم سے رابطہ کرنے کا سکون کریں۔ آؤ ایک عجیب چیز مل کر بنائیں۔",
        paragraphHeader8: "ہم سے رابطہ کریں:",
        listHeader8_1: "ای میل:",
        list8_1: "info@dummystudio.com",
        listHeader8_2: "فون:",
        list8_2: "(123) 456-7890",
        listHeader8_3: "پتہ:",
        list8_3: "123 کریئیٹو لین، انوویشن سٹی، CA 90210",
        paragraph8:
          "پکسل ویو اسٹوڈیوز کو مد نظر رکھنے کا شکریہ۔ ہم آپ کے ساتھ کام کرنے اور آپ کے ڈیجیٹل خواب کو زندگی میں لانے کے موقع کا انتظار کر رہے ہیں۔",
      },
      ContactPage: {
        headerText: "ہم سے رابطہ کریں",
        paragraph1:
          "ہم سے رابطہ کرنا چاہتے ہیں؟ تو فارم میں اپنا سوال درج کریں یا ہمیں ای میل کریں info@dummystudio.com پر",
        formHeader: "پیغام بھیجیں",
        submitButton: "جمع کرائیں",
        emailField: "ای میل",
        firstNameField: "پہلا نام",
        lastNameField: "آخری نام",
        messageField: "پیغام",
        emailError1: "اپنا ای میل درج کریں",
        emailError2: "ایک درست ای میل درج کریں",
        emailError3: "ای میل ضروری ہے",
        firstNameError1: "اپنا پہلا نام درج کریں",
        firstNameError2: "پہلا نام ضروری ہے",
        lastNameError1: "اپنا آخری نام درج کریں",
        lastNameError2: "آخری نام ضروری ہے",
        messageError1: "اپنا پیغام درج کریں",
        messageError2: "پیغام ضروری ہے",
        messageSent: "پیغام کامیابی سے بھیجا گیا",
        messageSentError: "کچھ غلط ہو گیا ہے!",
      },
    },
    ar: {
      common: {
        about_us: "معلومات عنا",
      },
      pages: {
        HomePage: {
          hero: {
            limited_time: {
              text: "لفترة محدودة فقط لفصل الشتاء",
              class: "text__19 tracking__0",
            },
            fashion: { text: "موضة", class: "text__100 tracking__0" },
            look_your_best: {
              text: "كن في أفضل مظهر في أفضل أيامك",
              class: "text__19 tracking__0",
            },
            explore_now: {
              text: "استكشاف الآن",
              class: "text__19 tracking__0",
            },
          },
        },
      },
      AboutPage: {
        headerText: "عن شركتنا",
        paragraphHeader1: "مرحبًا بكم في استديو بيكسل ويف",
        paragraph1:
          "في استديو بيكسل ويف، نؤمن بقوة التحول للإبداع. مهمتنا هي صياغة تجارب رقمية لا تجذب الانتباه فقط بل تتصل أيضًا بالجماهير على مستوى أعمق. تأسست في عام 2012، نمت استديوهات بيكسل ويف من فريق صغير من المصممين والمطورين المتحمسين إلى وكالة رقمية متكاملة معروفة بدفع حدود ما هو ممكن في العالم الرقمي.",

        paragraphHeader2: "قصتنا",
        paragraph2:
          "ولدت استديوهات بيكسل ويف من رؤية مشتركة بين مؤسسينا، أليكس مورجان وجيمي لي. كلاهما محترفان مخضرمان في صناعات التكنولوجيا والإبداع، رأوا أليكس وجيمي فرصة لمزج مهاراتهم وشغفهم لإنشاء شيء فريد. بخلفية أليكس في التكنولوجيا المتطورة وخبرة جيمي في التصميم وسرد القصص، انطلقوا لبناء شركة تولي الأولوية للابتكار والجودة والتوجه الموجه نحو العميل.",
        paragraph2_5:
          "من بداياتنا المتواضعة في مساحة عمل مشتركة صغيرة، قمنا بتوسيع نطاق عملنا عالميًا، وعملنا مع عملاء من صناعات متنوعة. كانت رحلتنا مميزة بسعي دؤوب نحو التميز والتزام بتعزيز العلاقات طويلة الأمد مع عملائنا.",
        paragraphHeader3: "ماذا نقدم",
        paragraph3:
          "في استديو بيكسل ويف، نتخصص في مجموعة واسعة من الخدمات المصممة لتلبية احتياجات الشركات الحديثة. تتضمن خبرتنا ما يلي:",

        listHeader3_1: "تطوير الويب:",
        list3_1:
          "من المواقع الويب الأنيقة والمتجاوبة إلى منصات التجارة الإلكترونية القوية، يستخدم فريقنا في التطوير أحدث التقنيات لتحقيق رؤيتك.",

        listHeader3_2: "التصميم الجرافيكي:",
        list3_2:
          "مصممونا فنانون في الأساس، يخلقون رسومات بصرية مذهلة تنقل رسالة علامتك التجارية بفعالية.",

        listHeader3_3: "التسويق الرقمي:",
        list3_3:
          "نقدم استراتيجيات تسويق رقمي شاملة تدفع التفاعل والتحويلات، بما في ذلك البحث عن الكلمات الرئيسية وتسويق وسائل الإعلام الاجتماعية والإعلان بالدفع لكل نقرة.",

        listHeader3_4: "العلامة التجارية:",
        list3_4:
          "بناء العلامة التجارية يتعلق بأكثر من مجرد شعار؛ إنها عن إنشاء هوية. تساعد خدماتنا في العلامة التجارية على إنشاء وجود لا يُنسى وذو تأثير في صناعتك.",

        listHeader3_5: "إنشاء المحتوى:",
        list3_5:
          "المحتوى المشوق هو مفتاح لجذب انتباه جمهورك. ينتج فريقنا محتوى عالي الجودة يتفاعل مع السوق المستهدف، بدءًا من مقالات المدونات وصولًا إلى إنتاج الفيديو.",
        paragraphHeader4: "فلسفتنا",
        paragraph4:
          "في جوهر استديو بيكسل ويف تتمثل فلسفتنا في مزيج من الإبداع والابتكار والتعاون. نعتقد أن أفضل النتائج تأتي من فهم احتياجات عملائنا والعمل الوثيق معهم طوال العملية. فريقنا ملتزم بالبقاء على اطلاع دائم على التطورات، والتعلم المستمر، والتكيف مع المشهد الرقمي المتطور باستمرار.",

        paragraphHeader5: "تعرف على الفريق",
        paragraph5:
          "فريقنا هو أعظم أصولنا. يتكون من مجموعة متنوعة من المصممين والمطورين والمسوقين والمستراتيجيين، حيث نقدم تجربة ثرية من الخبرة والرؤية الفريدة لكل مشروع. كل عضو في فريقنا متحمس لما يقوم به وملتزم بتقديم نتائج استثنائية.",

        listHeader5_1: "أليكس مورغان، المؤسس المشارك والرئيس التنفيذي:",
        list5_1:
          "بخلفية في الهندسة البرمجية وعين حادة للابتكار، يقود أليكس فريقنا بالتركيز على النمو الاستراتيجي والتقدم التكنولوجي.",

        listHeader5_2: "جيمي لي، المؤسس المشارك والمدير الإبداعي:",
        list5_2:
          "خبرة جيمي في التصميم وسرد القصص تدفع رؤيتنا الإبداعية، مضمونًا أن كل مشروع يمتلك لمسة فريدة ومهارة فنية.",

        listHeader5_3: "سارة جونسون، مطورة رئيسية:",
        list5_3:
          "تجربة سارة الواسعة في تطوير الويب تضمن أن مشاريعنا مبنية على أسس قوية، مجمعة بين الوظائفية والجاذبية الجمالية.",

        listHeader5_4: "ديفيد كيم، مدير التسويق:",
        list5_4:
          "بموهبة في الاستراتيجية الرقمية، يبني ديفيد حملات تسويقية تسفر عن نتائج قابلة للقياس وتدفع نمو الأعمال.",
        paragraphHeader6: "لماذا تختارنا؟",
        paragraph6:
          "اختيار استديو بيكسل ويف يعني اختيار شريك مستثمر في نجاحك. نحن نفخر بقدرتنا على فهم تحدياتك الفريدة وتقديم حلول تفوق توقعاتك. التزامنا بالجودة والإبداع ورضا العملاء يجعلنا مميزين عن الآخرين في المنافسة.",

        paragraphHeader7: "تواصل معنا",
        paragraph7:
          "نحن نحب أن نسمع منك! سواء كنت تبحث عن بدء مشروع جديد أو ترغب بمعرفة المزيد عن خدماتنا، فلا تتردد في الاتصال بنا. دعنا نخلق شيئًا مذهلًا معًا.",

        paragraphHeader8: "تواصل معنا:",
        listHeader8_1: "البريد الإلكتروني:",
        list8_1: "info@dummystudio.com",

        listHeader8_2: "الهاتف:",
        list8_2: "(123) 456-7890",

        listHeader8_3: "العنوان:",
        list8_3: "123 شارع الإبداع، مدينة الابتكار، كاليفورنيا 90210",

        paragraph8:
          "شكرًا لاختيارك استديو بيكسل ويف. نتطلع إلى الفرصة للعمل معك وتحقيق أحلامك الرقمية.",
      },
      ContactPage: {
        headerText: "اتصل بنا",
        paragraph1:
          "هل تحتاج إلى التواصل معنا؟ إما ملء النموذج باستفسارك أو أرسل لنا بريدًا إلكترونيًا على info@dummystudio.com",
        formHeader: "إرسال رسالة",
        submitButton: "إرسال",
        emailField: "البريد الإلكتروني",
        firstNameField: "الاسم الأول",
        lastNameField: "الاسم الأخير",
        messageField: "الرسالة",
        emailError1: "أدخل بريدك الإلكتروني",
        emailError2: "أدخل بريدًا إلكترونيًا صالحًا",
        emailError3: "البريد الإلكتروني مطلوب",
        firstNameError1: "أدخل اسمك الأول",
        firstNameError2: "الاسم الأول مطلوب",
        lastNameError1: "أدخل اسمك الأخير",
        lastNameError2: "الاسم الأخير مطلوب",
        messageError1: "أدخل رسالتك",
        messageError2: "الرسالة مطلوبة",
        messageSent: "تم إرسال الرسالة بنجاح",
        messageSentError: "حدث خطأ ما!",
      },
    },
    zh: {
      common: { about_us: "关于我们" },
      pages: {
        HomePage: {
          hero: {
            limited_time: {
              text: "冬季限时优惠",
              class: "text__16 tracking__2",
            },
            fashion: { text: "时尚", class: "text__90 tracking__2" },
            look_your_best: {
              text: "在你最好的日子里展现最佳状态",
              class: "text__16 tracking__2",
            },
            explore_now: { text: "立即探索", class: "text__16 tracking__2" },
          },
        },
      },
      AboutPage: {
        headerText: "关于我们",
        paragraphHeader1: "欢迎来到 PixelWave Studios",
        paragraph1:
          "在 PixelWave Studios, 我们相信创意的变革力量。我们的使命是打造数字体验, 不仅能够吸引观众, 还能够在更深层次上与他们建立联系。成立于2012年, PixelWave Studios 从一支充满激情的设计师和开发者小团队发展成为一家全面的数字代理公司，在数字领域推动了可能性的界限。",

        paragraphHeader2: "我们的故事",
        paragraph2:
          "PixelWave Studios 的诞生源于我们的创始人 Alex Morgan 和 Jamie Lee 共同的愿景。作为科技和创意行业的经验丰富的专业人士, Alex 和 Jamie 看到了将他们的技能和激情融合创造出独特事物的机会。凭借 Alex 在尖端技术方面的背景和 Jamie 在设计和讲故事方面的专业知识，他们着手建立了一家注重创新、质量和以客户为中心的公司。",
        paragraph2_5:
          "从我们在一个小型合作空间的谦逊开端，我们已经在全球范围内扩展了业务，并与来自不同行业的客户合作。我们的旅程以对卓越不懈的追求和与客户建立长期关系的承诺为标志。",

        paragraphHeader3: "我们的业务",
        paragraph3:
          "在 PixelWave Studios, 我们专注于各种服务, 旨在满足现代企业的需求。我们的专业包括：",

        listHeader3_1: "网站开发：",
        list3_1:
          "从时尚、响应式的网站到强大的电子商务平台，我们的开发团队使用最新技术将您的愿景变为现实。",

        listHeader3_2: "平面设计：",
        list3_2:
          "我们的设计师是心灵手巧的艺术家，创作出视觉上令人惊叹的图形，有效传达您品牌的信息。",

        listHeader3_3: "数字营销：",
        list3_3:
          "我们提供全面的数字营销策略, 推动用户参与和转化, 包括搜索引擎优化(SEO)、社交媒体营销和按点击付费广告。",

        listHeader3_4: "品牌塑造：",
        list3_4:
          "打造品牌不仅仅是设计一个标志，更是打造一种身份。我们的品牌服务帮助您在行业中建立一个值得记忆和有影响力的存在。",

        listHeader3_5: "内容创作：",
        list3_5:
          "吸引人的内容是吸引观众注意力的关键。我们的团队制作高质量的内容，与您的目标市场产生共鸣，从博客文章到视频制作等各种形式。",
        paragraphHeader4: "我们的理念",
        paragraph4:
          "PixelWave Studios 的核心理念融合了创造力、创新和合作。我们相信，最佳的结果来自于深刻理解客户的需求，并在整个过程中与他们密切合作。我们的团队致力于走在前沿，不断学习和适应不断变化的数字环境。",

        paragraphHeader5: "团队介绍",
        paragraph5:
          "我们的团队是我们最宝贵的财富。由一群多才多艺的设计师、开发者、营销人员和策略师组成，我们为每个项目带来丰富的经验和独特的视角。我们团队的每个成员都对自己的工作充满热情，并致力于提供卓越的成果。",

        listHeader5_1: "Alex Morgan, 联合创始人兼首席执行官：",
        list5_1:
          "具备软件工程背景和对创新的敏锐眼光, Alex 以战略性增长和技术进步为重点领导我们的团队。",

        listHeader5_2: "Jamie Lee,联合创始人兼创意总监：",
        list5_2:
          "Jamie 在设计和讲故事方面的专业知识推动着我们的创意愿景，确保每个项目都充满独创性和艺术气质。",

        listHeader5_3: "Sarah Johnson, 首席开发人员：",
        list5_3:
          "Sarah 在网站开发方面拥有丰富的经验，确保我们的项目建立在坚实的基础上，兼具功能性和审美吸引力。",

        listHeader5_4: "David Kim, 营销总监：",
        list5_4:
          "凭借对数字战略的嗅觉, David 打造了可衡量成果并推动业务增长的营销活动。",
        paragraphHeader6: "为什么选择我们？",
        paragraph6:
          "选择 PixelWave Studios,意味着选择一个致力于您成功的合作伙伴。我们自豪地拥有理解您独特挑战并提供超出期望的解决方案的能力。我们对质量、创造力和客户满意度的承诺使我们与竞争对手有所区别。",

        paragraphHeader7: "联系我们",
        paragraph7:
          "我们很乐意听到您的消息！无论您是想启动一个新项目还是只想了解更多关于我们的服务，都请随时与我们联系。让我们一起创建一些令人惊奇的事物吧。",

        paragraphHeader8: "联系方式：",
        listHeader8_1: "电子邮件：",
        list8_1: "info@dummystudio.com",
        listHeader8_2: "电话：",
        list8_2: "(123) 456-7890",
        listHeader8_3: "地址：",
        list8_3: "123 Creative Lane, Innovation City, CA 90210",
        paragraph8:
          "感谢您考虑 PixelWave Studios。我们期待着与您合作, 实现您的数字梦想。",
      },
      ContactPage: {
        headerText: "联系我们",
        paragraph1:
          "需要与我们联系吗? 要么填写表格并提出您的查询, 要么发送电子邮件至info@dummystudio.com",
        formHeader: "发送消息",
        submitButton: "提交",
        emailField: "电子邮件",
        firstNameField: "名字",
        lastNameField: "姓",
        messageField: "消息",
        emailError1: "请输入您的电子邮件",
        emailError2: "请输入有效的电子邮件",
        emailError3: "电子邮件是必需的",
        firstNameError1: "请输入您的名字",
        firstNameError2: "名字是必需的",
        lastNameError1: "请输入您的姓",
        lastNameError2: "姓是必需的",
        messageError1: "请输入您的消息",
        messageError2: "消息是必需的",
        messageSent: "消息发送成功",
        messageSentError: "发生了一些错误！",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

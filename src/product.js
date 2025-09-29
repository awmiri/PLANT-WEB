let apartmentPlant = [
    { id: 1, name: 'گیاه طبیعی بابا آدم', price: 852_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlant', performance: 4.5, property: { vaseMt: 'چوبی', sol: 'خاک گلدانی شنی و غنی', wight: 4000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "فلاور گاردن", img: ['/image/apartmant_flower/Frame 11.png', '/image/apartmant_flower/babaadam/15828014.jfif', '/image/apartmant_flower/babaadam/alocasia.jpeg'], cunt: 1 },
    { id: 2, name: 'گیاه طبیعی یوکا', price: 560_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlant', performance: 2.3, property: { vaseMt: 'سرامیک', sol: "خاک گلدانی شنی و غنی", wight: 5000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "گاردن شاپ", img: ['/image/apartmant_flower/Frame 11 (1).png', '/image/apartmant_flower/yoka/yooka (6).jpg'], cunt: 1 },
    { id: 3, name: 'گیاه طبیعی سانسوریا سبز', price: 250_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlant', performance: 1.5, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 1000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "فتون", img: ['/image/apartmant_flower/Frame 11 (2).png', '/image/apartmant_flower/sensoria/se1.jpg', '/image/apartmant_flower/sensoria/se2.jpg'], cunt: 1 },
    { id: 4, name: 'گیاه طبیعی ساکولنت', price: 570_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlant', performance: 3.6, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 3000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "سبزوار شاپ", img: ['/image/apartmant_flower/Frame 11 (3).png', '/image/apartmant_flower/sakolent/Crasola1.jpg '], cunt: 1 }
]
let apartmentPlantTips = [
    { id: 1, name: 'گیاه بونسای', price: 1_000_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlantTip', performance: 4.5, property: { vaseMt: 'چوبی', sol: 'خاک گلدانی شنی و غنی', wight: 4000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "فلاور گاردن", img: ['/image/category-img/cat_1_1.png'], cunt: 1 },
    { id: 2, name: 'گیاه طبیعی سانسوریا ', price: 250_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlantTip', performance: 1.5, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 1000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "فتون", img: ['/image/category-img/cat_1_2.png'], cunt: 1 },
    { id: 3, name: 'گیاه پتوس', price: 560_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlantTip', performance: 2.3, property: { vaseMt: 'سرامیک', sol: "خاک گلدانی شنی و غنی", wight: 5000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "گاردن شاپ", img: ['/image/category-img/cat_1_3.png'], cunt: 1 },
    { id: 4, name: 'گیاه پاچیرا', price: 2_700_000, categoriFn: "گیاهان آپارتمانی", categoriEn: 'apartmentPlantTip', performance: 3.6, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 3000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "سبزوار شاپ", img: ['/image/category-img/cat_1_4.png'], cunt: 1 }
]
let service = [
    { id: 1, title: "چک کردن اسید خاک", content: "با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود", img: "/image/page icon/1.svg" },
    { id: 2, title: "برسی مواد معدنی خاک", content: "یکی از موارد مهم خاک، مقدار مواد معدنی آن است که با دقت برسی میشود", img: "/image/page icon/2.svg" },
    { id: 3, title: "مشاهده بهترین دما", content: "از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود", img: "/image/page icon/3.svg" },
    { id: 4, title: "برسی آسیب های احتمالی", content: "تمامی آسیب های احتمالی برسی میگردد تا از وقوع مشکلات آینده جلوگیری شود", img: "/image/page icon/4.svg" },
    { id: 5, title: "از بین بردن عناصر آلوده خاک", content: "ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات و ... را متوجه شد", img: "/image/page icon/5.svg" },
    { id: 6, title: "برسی ظاهر", content: "ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات و ... را متوجه شد", img: "/image/page icon/6.svg" },
    { id: 7, title: "اندازه گیری EC ", content: "این اندازه گیری نشانی از مقدار کل مواد مغذی موجود برای گیاهان می‌دهد", img: "/image/page icon/7.svg" },
    { id: 8, title: "ارائه مکمل ", content: "برای رشد بهتر گیاهان و رفع آفات از مکمل ها میتوان استفاده کرد", img: "/image/page icon/8.svg" },
]
let decoratePlant = [
    { id: 1, name: 'گیاه طبیعی کراسولا', price: 90_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decoratePlant', performance: 4.5, property: { vaseMt: 'چوبی', sol: 'خاک گلدانی شنی و غنی', wight: 4000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "فلاور گاردن", img: ['/image/decoration-flower/item-1.png'], cunt: 1 },
    { id: 2, name: 'گیاه طبیعی یشم ', price: 15_000_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decoratePlant', performance: 1.5, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 1000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "فتون", img: ['/image/decoration-flower/item-2.png'], cunt: 1 },
    { id: 3, name: 'گیاه طبیعی بونسای پاچیرا', price: 880_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decoratePlant', performance: 2.3, property: { vaseMt: 'سرامیک', sol: "خاک گلدانی شنی و غنی", wight: 5000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "گاردن شاپ", img: ['/image/decoration-flower/item-3.png'], cunt: 1 },
    { id: 4, name: 'گیاه طبیعی کراسولا خرفه', price: 169_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decoratePlant', performance: 3.6, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 3000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "سبزوار شاپ", img: ['/image/decoration-flower/item-4.png'], cunt: 1 }
]
let decorationPlantTips = [
    { id: 1, name: 'گیاه رزماری', price: 1_000_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decorationPlantTips', performance: 4.5, property: { vaseMt: 'چوبی', sol: 'خاک گلدانی شنی و غنی', wight: 4000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "فلاور گاردن", img: ['/image/decoration-category/item-1.png'], cunt: 1 },
    { id: 2, name: 'گیاه آدنیوم ', price: 250_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decorationPlantTips', performance: 1.5, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 1000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "فتون", img: ['/image/decoration-category/item-2.png'], cunt: 1 },
    { id: 3, name: 'گیاه آشیانتوس', price: 560_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decorationPlantTips', performance: 2.3, property: { vaseMt: 'سرامیک', sol: "خاک گلدانی شنی و غنی", wight: 5000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "گاردن شاپ", img: ['/image/decoration-category/item-3.png'], cunt: 1 },
    { id: 4, name: 'گیاه آناناسی', price: 2_700_000, categoriFn: "گیاهان تزئینی", categoriEn: 'decorationPlantTips', performance: 3.6, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 3000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "سبزوار شاپ", img: ['/image/decoration-category/item-4.png'], cunt: 1 }
]
let giftPlanet = [
    { id: 1, name: 'بنت قنسول گلیتال', price: 176_000, categoriFn: "گیاهان کادویی", categoriEn: 'giftPlanet', performance: 4.5, property: { vaseMt: 'چوبی', sol: 'خاک گلدانی شنی و غنی', wight: 4000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "فلاور گاردن", img: ['/image/gift-flower/item-1.png'], cunt: 1 },
    { id: 2, name: 'گیاه طبیعی آنتوریوم ', price: 459_000, categoriFn: "گیاهان کادویی", categoriEn: 'giftPlanet', performance: 1.5, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 1000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "فتون", img: ['/image/gift-flower/item-2.png'], cunt: 1 },
    { id: 3, name: 'گیاه طبیعی بونسای پاچیرا', price: 880_000, categoriFn: "گیاهان کادویی", categoriEn: 'giftPlanet', performance: 2.3, property: { vaseMt: 'سرامیک', sol: "خاک گلدانی شنی و غنی", wight: 5000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "حساس به افتاب" }, sender: "گاردن شاپ", img: ['/image/gift-flower/item-3.png'], cunt: 1 },
    { id: 4, name: 'گیاه طبیعی آنتوریوم', price: 498_000, categoriFn: "گیاهان کادویی", categoriEn: 'giftPlanet', performance: 3.6, property: { vaseMt: 'پلاستیک', sol: 'خاک گلدانی شنی و غنی', wight: 3000, size: '۲۵۰x۲۵۰x۸۰۰', sunLike: "آفتاب دوست" }, sender: "سبزوار شاپ", img: ['/image/gift-flower/item-4.png'], cunt: 1 }
]



















export { apartmentPlant, apartmentPlantTips, service, decoratePlant, decorationPlantTips, giftPlanet } 
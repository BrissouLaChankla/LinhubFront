import Link from "next/link"
import Linkedin from "@/public/logos/LandingPage/Linkedin.svg"
import Github from "@/public/logos/LandingPage/Github.svg"
import Webflow from "@/public/logos/LandingPage/Webflow.svg"
import Hero from "@/public/illustrations/hero.svg"
import LaptopBear from "@/public/illustrations/laptop_bear.svg"
import DashboardScreen from "@/public/illustrations/screenshots/dashboard_example.jpg"
import Image from "next/image"
import { Activity, ArrowRepeat, ArrowRightShort, CheckCircle, Share, ShieldCheck, Stars, Stopwatch } from "react-bootstrap-icons"
import styles from "@/styles/landing.module.scss"
import BasicIllu from "@/public/illustrations/pricing/basic.png"
import StandardIllu from "@/public/illustrations/pricing/standard.png"
import UltimateIllu from "@/public/illustrations/pricing/ultimate.png"
import Pricing from "@/components/Pricing"
import Glow3DImage from "@/components/Glow3DImage"
import Form from "@/components/Form"
import Contact from "@/public/illustrations/contact.svg"

const advantages = [
  {
    icon: <ArrowRepeat className={styles.iconCircle} />,
    title: "Automatisation",
    text: "Nous mettons à jour quotidiennement toutes vos plateformes professionnelles"
  },
  {
    icon: <Stopwatch className={styles.iconCircle} />,
    title: "Gain de temps",
    text: "Plus la peine de maintenir à jour votre portfolio, votre LinkedIn etc..."
  },
  {
    icon: <Share className={styles.iconCircle} />,
    title: "Synchronisation",
    text: "Connectez votre compte LinkedIn à Linhub facilement et laissez la magie opérer"
  },
  {
    icon: <ShieldCheck className={styles.iconCircle} />,
    title: "Protection",
    text: "Vos données personnelles sont sécurisées et vous seul y avait accès"
  },
  {
    icon: <Stars className={styles.iconCircle} />,
    title: "Bien pensé",
    text: "Nos modèles de portfolio, de CV ou même de signatures sont pensés UX/UI"
  },
  {
    icon: <Activity className={styles.iconCircle} />,
    title: "Task Comments",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <Activity className={styles.iconCircle} />,
    title: "Support 24/7",
    text: "L'équipe Linhub se tient à votre disposition pour une quelconque requête."
  },
  {
    icon: <Activity className={styles.iconCircle} />,
    title: "Task Comments",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },

];

const pricings = [
  {
    title: "Basic",
    price: 6,
    bgFilled: false,
    illustration: BasicIllu,
    advantages: [
      {
        isIn: true,
        text: "Création d'une API de vos données"
      },
      {
        isIn: true,
        text: "Générer un site portfolio synchronisé"
      },
      {
        isIn: true,
        text: "Générer un CV PDF avec vos données"
      },
      {
        isIn: false,
        text: "Synchronisation quotidienne avec Linkedin",
        addLinkedIn: true
      },
      {
        isIn: false,
        text: "Génération d'un fichier .readme Github"
      },
      {
        isIn: false,
        text: "Accès à tous les templates Portfolio & CV"
      },
    ]
  },
  {
    title: "Standard",
    price: 12,
    bgFilled: true,
    illustration: StandardIllu,
    advantages: [
      {
        isIn: true,
        text: "Création d'une API de vos données"
      },
      {
        isIn: true,
        text: "Générer un site portfolio synchronisé"
      },
      {
        isIn: true,
        text: "Générer un CV PDF avec vos données"
      },
      {
        isIn: true,
        text: "Synchronisation quotidienne avec Linkedin",
        addLinkedIn: true

      },
      {
        isIn: false,
        text: "Génération d'un fichier .readme Github"
      },
      {
        isIn: false,
        text: "Accès à tous les templates Portfolio & CV"
      },
    ]
  },
  {
    title: "Ultimate",
    price: 18,
    bgFilled: false,
    illustration: UltimateIllu,
    advantages: [
      {
        isIn: true,
        text: "Création d'une API de vos données"
      },
      {
        isIn: true,
        text: "Générer un site portfolio synchronisé"
      },
      {
        isIn: true,
        text: "Générer un CV PDF avec vos données"
      },
      {
        isIn: true,
        text: "Synchronisation quotidienne avec Linkedin",
        addLinkedIn: true
      },
      {
        isIn: true,
        text: "Génération d'un fichier .readme Github"
      },
      {
        isIn: true,
        text: "Accès à tous les templates Portfolio & CV"
      },

    ]
  }
];

const faqs = [
  {
    title: "A qui s'adresse Linhub ?",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance",
    illustration: Hero
  },
  {
    title: "A qui s'adresse Linhub ?",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance",
    illustration: Hero
  },
  {
    title: "A qui s'adresse Linhub ?",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance",
    illustration: Hero
  },
  {
    title: "A qui s'adresse Linhub ?",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance",
    illustration: Hero
  },
]

const advantagesComp = advantages.map((e, i) => (
  <div className="col-md-3" key={i}>
    <div className="text-center my-4">
      {e.icon}
      <h3 className="mt-3">{e.title}</h3>
      <p className="text-muted mt-3 small">{e.text}</p>
    </div>
  </div>
));

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="container vh-100 d-flex flex-column justify-content-center">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h1 className="mb-4">Simplifiez & centralisez votre visibilité en ligne</h1>
            <p>Linhub vous permet de générer une API de vous même qui synchronisera vos informations avec vos réseaux professionnels</p>
            <div className="d-flex align-items-center gap-4 " style={{ transform: "translateY(-20px)", filter: "grayscale(100%)", opacity: "50%" }}>
              <Image src={Linkedin} width={70}></Image>
              <Image src={Github} width={70}></Image>
              <Image src={Webflow} width={70}></Image>
            </div>
            <Link href="/register" className="btn btn-primary">M'inscrire gratuitement</Link>
          </div>
          <div className="col-lg-7">
            <Image src={Hero} width={750} className="img-fluid d-none d-lg-block" />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container">
      <div className="mb-3 mb-lg-5 text-start text-md-center ">
          <h2 className="mb-3">Concentrez-vous sur l'essentiel, on s'occupe du reste.</h2>
          <p className="text-muted">Voici les différents incroyables avantages à utiliser Linhub</p>
        </div>
        <div className="row">
          {advantagesComp}
        </div>
      </div>


      <div className="container m-section">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <Glow3DImage image={DashboardScreen} />
          </div>
          <div className="col-lg-5">
            <div className="ps-lg-5">
              <h2 className="mt-5 mt-lg-0">On fait difficilement plus simple.</h2>
              <div className="py-4">
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle className="text-primary" />
                  <span className="ms-2 text-muted">Créez votre compte Linhub</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle className="text-primary" />
                  <span className="ms-2 text-muted"> Renseignez vos informations</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle className="text-primary" />
                  <span className="ms-2 text-muted"> Liez votre compte LinkedIn facilement</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle className="text-primary" />
                  <span className="ms-2 text-muted"> C'est tout.</span>
                </div>
              </div>
              <Link href="#" className="btn btn-primary btn-sm">En savoir plus <ArrowRightShort className="fs-3" /> </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="container m-section">
      <div className="mb-3 mb-lg-5 text-start text-md-center ">
          <h2 className="mb-3">Des prix transparents</h2>
          <p className="text-muted">On s'est tapé le sale boulot pour que vous n'ayez plus à le faire, maintenant il faut bien qu'on mange</p>
        </div>
        <div className="row gx-4">
          {pricings.map((pricing, i) =>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <Pricing  key={i} {...pricing} />
            </div>
          )}
        </div>
      </div>

      <div className="container m-section-sm">
        <div className="row align-items-center px-lg-5">
          <div className="col-lg-5">
            <h2 className="mb-4">Quel est l'intérêt de Linhub ?</h2>
            <p>Lorsque vous êtes développeur ou que vous travaillez dans le web, il n'a pas 36 options : <strong>vous devez être visible en ligne.</strong></p>
            <p>Pour ça il "suffit" de faire : un profil LinkedIn complet, un compte Github, un site portfolio, un CV, une signature, un compte Malt...</p>
            <p>Admettons que vous soyez un surhomme et que vous avez correctement complété ces différentes plateformes, codé votre portfolio et qu'il n'y a aucune incohérence entre celles-ci.</p>
            <p>Si vous apprenez une nouvelle techno, si vous avez suivi une nouvelle formation, si vous changez de poste ou si vous voulez simplement changer votre de photo de profil : <strong> vous devez mettre à jour vos 6 plateformes.</strong></p>
          </div>
          <div className="col-lg-7 ">
            <Image src={LaptopBear} className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container bg-light rounded-4 p-4 p-md-5">
        <div className="text-center mt-4 mb-5">
          <h2 className="mb-3">Vous avez des questions ?</h2>
          <p className="text-muted m-0">
            Donc vous insinuez que je n'ai pas été suffisamment clair ?! Admettons...
          </p>
          <p className="text-muted">
            Voici quelques questions qu'on a anticipité pour vous. Si c'est toujours pas assez clair contactez nous !
          </p>
        </div>

        <div class="accordion" id="accordionExample">
          {
            faqs.map((e, i) =>
              <div class="accordion-item my-3 border-0 rounded-4" key={i}>
                <h2 class="accordion-header" id={"heading" + i}>
                  <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + i} aria-expanded="false" aria-controls={"collapse" + i}>
                    {e.title}
                  </button>
                </h2>
                <div id={"collapse" + i} class="accordion-collapse collapse " aria-labelledby={"heading" + i} data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div className="row my-4 align-items-center">
                      <div className="col-md-3 text-center text-md-start">
                        <Image src={e.illustration} width={200} className="img-fluid" />
                      </div>
                      <div className="col-md-9">
                        {e.body}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          }

        </div>
      </div>
      <div className="container m-section">
        <div className="mb-3 text-start text-md-center ">
          <h2 className="mb-3">On reste en contact ?</h2>
          <p className="text-muted">Comme promis, si vous avez une question ou des suggestions, on se fera un plaisir de vous répondre au plus vite</p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4 p-md-5 d-none d-md-block">
            <Image src={Contact} className="img-fluid" />
          </div>
          <div className="col-md-8 pt-5 ps-lg-5">
            <Form />
          </div>
        </div>

      </div>

    </>
  )
}

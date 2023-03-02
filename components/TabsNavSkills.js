import LogoSkill from "./logoSkill";
import {
  android,
  reactnative,
  apachecordova,
  dartlang,
  flutter,
  ionic,
  kotlin,
  nativescript,
  xamarin,
  nodejs,
  express,
  nestjs,
  hadoop,
  graphql,
  kafka,
  solr,
  springio,
  nginx,
  rabbitmq,
  openresty,
  angular,
  angularjs,
  babeljs,
  backbonejs,
  bootstrap,
  bulma,
  css3,
  ember,
  GTK,
  gulp,
  html5,
  materialize,
  pug,
  Qt,
  react,
  redux,
  sass,
  svelte,
  tailwindcss,
  vuejs,
  webpack,
  wxwidgets,
  amazonwebservice,
  bash,
  circleci,
  docker,
  googlecloud,
  jenkins,
  kubernetes,
  microsoftazure,
  travisci,
  vagrantup,
  cassandra,
  cockroachdb,
  couchdb,
  elasticsearch,
  hive,
  mariadb,
  mongodb,
  mysql,
  microsoftsqlserver,
  postgresql,
  redis,
  sqlite,
  oracle,
  realm,
  c,
  cplusplus,
  csharp,
  clojure,
  go,
  java,
  javascript,
  objectivec,
  perl,
  php,
  python,
  ruby,
  rust,
  scala,
  swift,
  typescript,
  codeigniter,
  django,
  dotnet,
  electron,
  laravel,
  pocooflask,
  symfony,
  quasar,
  rails,
} from "../utils/images";
import { useState } from "react";

export default function TabsNavSkills() {
  const [currentTab, setCurrentTab] = useState("1");

  const allSkills = [
    {
      name: "React Native",
      url: reactnative,
      categorie: "Mobile",
    },
    {
      name: "Android",
      url: android,
      categorie: "Mobile",
    },
    {
      name: "Apache Cordova",
      url: apachecordova,
      categorie: "Mobile",
    },
    {
      name: "Dart",
      url: dartlang,
      categorie: "Mobile",
    },
    {
      name: "Flutter",
      url: flutter,
      categorie: "Mobile",
    },
    {
      name: "Ionic",
      url: ionic,
      categorie: "Mobile",
    },
    {
      name: "Kotlin",
      url: kotlin,
      categorie: "Mobile",
    },
    {
      name: "NativeScript",
      url: nativescript,
      categorie: "Mobile",
    },
    {
      name: "Xamarin",
      url: xamarin,
      categorie: "Mobile",
    },
    {
      name: "Node.js",
      url: nodejs,
      categorie: "Backend",
    },
    {
      name: "Express",
      url: express,
      categorie: "Backend",
    },
    {
      name: "NestJS",
      url: nestjs,
      categorie: "Backend",
    },
    {
      name: "Hadoop",
      url: hadoop,
      categorie: "Backend",
    },
    {
      name: "GraphQL",
      url: graphql,
      categorie: "Backend",
    },
    {
      name: "Kafka",
      url: kafka,
      categorie: "Backend",
    },
    {
      name: "Solr",
      url: solr,
      categorie: "Backend",
    },
    {
      name: "Spring",
      url: springio,
      categorie: "Backend",
    },
    {
      name: "Nginx",
      url: nginx,
      categorie: "Backend",
    },
    {
      name: "RabbitMQ",
      url: rabbitmq,
      categorie: "Backend",
    },
    {
      name: "OpenResty",
      url: openresty,
      categorie: "Backend",
    },
    {
      name: "Angular",
      url: angular,
      categorie: "Frontend",
    },
    {
      name: "AngularJS",
      url: angularjs,
      categorie: "Frontend",
    },
    {
      name: "Babel",
      url: babeljs,
      categorie: "Frontend",
    },
    {
      name: "Backbone.js",
      url: backbonejs,
      categorie: "Frontend",
    },
    {
      name: "Bootstrap",
      url: bootstrap,
      categorie: "Frontend",
    },
    {
      name: "Bulma",
      url: bulma,
      categorie: "Frontend",
    },
    {
      name: "CSS3",
      url: css3,
      categorie: "Frontend",
    },
    {
      name: "Ember",
      url: ember,
      categorie: "Frontend",
    },
    {
      name: "GTK",
      url: GTK,
      categorie: "Frontend",
    },
    {
      name: "Gulp",
      url: gulp,
      categorie: "Frontend",
    },
    {
      name: "HTML5",
      url: html5,
      categorie: "Frontend",
    },
    {
      name: "Materialize",
      url: materialize,
      categorie: "Frontend",
    },
    {
      name: "Pug",
      url: pug,
      categorie: "Frontend",
    },
    {
      name: "Qt",
      url: Qt,
      categorie: "Frontend",
    },
    {
      name: "React",
      url: react,
      categorie: "Frontend",
    },
    {
      name: "Redux",
      url: redux,
      categorie: "Frontend",
    },
    {
      name: "Sass",
      url: sass,
      categorie: "Frontend",
    },
    {
      name: "Swelte",
      url: svelte,
      categorie: "Frontend",
    },
    {
      name: "Tailwind CSS",
      url: tailwindcss,
      categorie: "Frontend",
    },
    {
      name: "Vue.js",
      url: vuejs,
      categorie: "Frontend",
    },
    {
      name: "Webpack",
      url: webpack,
      categorie: "Frontend",
    },
    {
      name: "WxWidgets",
      url: wxwidgets,
      categorie: "Frontend",
    },
    {
      name: "Amazon Web Services",
      url: amazonwebservice,
      categorie: "DevOps",
    },
    {
      name: "Bash",
      url: bash,
      categorie: "DevOps",
    },
    {
      name: "CircleCI",
      url: circleci,
      categorie: "DevOps",
    },
    {
      name: "Docker",
      url: docker,
      categorie: "DevOps",
    },
    {
      name: "Google Cloud Platform",
      url: googlecloud,
      categorie: "DevOps",
    },
    {
      name: "Jenkins",
      url: jenkins,
      categorie: "DevOps",
    },
    {
      name: "Kubernetes",
      url: kubernetes,
      categorie: "DevOps",
    },
    {
      name: "Microsoft Azure",
      url: microsoftazure,
      categorie: "DevOps",
    },
    {
      name: "Travis CI",
      url: travisci,
      categorie: "DevOps",
    },
    {
      name: "Vagrant",
      url: vagrantup,
      categorie: "DevOps",
    },
    {
      name: "Cassandra",
      url: cassandra,
      categorie: "Database",
    },
    {
      name: "CouchDB",
      url: couchdb,
      categorie: "Database",
    },
    {
      name: "CokcroachDB",
      url: cockroachdb,
      categorie: "Database",
    },
    {
      name: "Elasticsearch",
      url: elasticsearch,
      categorie: "Database",
    },
    {
      name: "Hive",
      url: hive,
      categorie: "Database",
    },
    {
      name: "MariaDB",
      url: mariadb,
      categorie: "Database",
    },
    {
      name: "MongoDB",
      url: mongodb,
      categorie: "Database",
    },
    {
      name: "Microsoft SQL Server",
      url: microsoftsqlserver,
      categorie: "Database",
    },
    {
      name: "MySQL",
      url: mysql,
      categorie: "Database",
    },
    {
      name: "Oracle",
      url: oracle,
      categorie: "Database",
    },
    {
      name: "PostgreSQL",
      url: postgresql,
      categorie: "Database",
    },
    {
      name: "Redis",
      url: redis,
      categorie: "Database",
    },
    {
      name: "SQLite",
      url: sqlite,
      categorie: "Database",
    },
    {
      name: "Realm",
      url: realm,
      categorie: "Database",
    },
    {
      name: "C",
      url: c,
      categorie: "Programming Languages",
    },
    {
      name: "C++",
      url: cplusplus,
      categorie: "Programming Languages",
    },
    {
      name: "C#",
      url: csharp,
      categorie: "Programming Languages",
    },
    {
      name: "Clojure",
      url: clojure,
      categorie: "Programming Languages",
    },
    {
      name: "Go",
      url: go,
      categorie: "Programming Languages",
    },
    {
      name: "Java",
      url: java,
      categorie: "Programming Languages",
    },
    {
      name: "JavaScript",
      url: javascript,
      categorie: "Programming Languages",
    },
    {
      name: "Objective-C",
      url: objectivec,
      categorie: "Programming Languages",
    },
    {
      name: "Perl",
      url: perl,
      categorie: "Programming Languages",
    },
    {
      name: "PHP",
      url: php,
      categorie: "Programming Languages",
    },
    {
      name: "Python",
      url: python,
      categorie: "Programming Languages",
    },
    {
      name: "Ruby",
      url: ruby,
      categorie: "Programming Languages",
    },
    {
      name: "Rust",
      url: rust,
      categorie: "Programming Languages",
    },
    {
      name: "Scala",
      url: scala,
      categorie: "Programming Languages",
    },
    {
      name: "Swift",
      url: swift,
      categorie: "Programming Languages",
    },
    {
      name: "TypeScript",
      url: typescript,
      categorie: "Programming Languages",
    },
    {
      name: "CodeIgniter",
      url: codeigniter,
      categorie: "Framework",
    },
    {
      name: "Django",
      url: django,
      categorie: "Framework",
    },
    {
      name: "DotNet",
      url: dotnet,
      categorie: "Framework",
    },
    {
      name: "Electron",
      url: electron,
      categorie: "Framework",
    },
    {
      name: "Laravel",
      url: laravel,
      categorie: "Framework",
    },
    {
      name: "Pocoo",
      url: pocooflask,
      categorie: "Framework",
    },
    {
      name: "Ruby on Rails",
      url: rails,
      categorie: "Framework",
    },
    {
      name: "Symfony",
      url: symfony,
      categorie: "Framework",
    },
  ];

  const logos = allSkills.map((logo, i) => {
    return (
      <LogoSkill
        key={i}
        url={logo.url}
        name={logo.name}
        categorie={logo.categorie}
      />
    );
  });

  const tabs = [
    {
      id: "1",
      tabTitle: "Programming Languages",
      content: logos,
    },
    {
      id: "2",
      tabTitle: "Frontend",

      content: logos,
    },
    {
      id: "3",
      tabTitle: "Backend",

      content: logos,
    },
    {
      id: "4",
      tabTitle: "DevOps",

      content: logos,
    },
    {
      id: "5",
      tabTitle: "Mobile App",

      content: logos,
    },
    {
      id: "6",
      tabTitle: "Database",
    },
    {
      id: "7",
      tabTitle: "Framework",
    },
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  const tabsOnglets = tabs.map((tab, i) => {
    return (
      <button
        key={i}
        id={tab.id}
        disabled={currentTab === `${tab.id}`}
        onClick={handleTabClick}
      >
        {tab.tabTitle}
      </button>
    );
  });

  const tabContent = tabs.map((tab, i) => {
    return (
      <div key={i}>
        {currentTab === `${tab.id}` && (
          <div>
            <p>{tab.content}</p>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="container">
      <div className="tabs">{tabsOnglets}</div>
      {tabContent}
    </div>
  );
}

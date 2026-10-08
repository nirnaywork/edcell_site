import Image from "next/image";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/motion/Reveal";
import { SectionHeading } from "../../components/ui/SectionHeading";

export const metadata = {
  title: "ED-Cell Team | E-Summit 2026",
  description: "Meet the organizers and heads behind the Entrepreneurship Development Cell at MECS.",
};

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamGroups = [
  {
    title: "Presidents",
    members: [
      { img: "15_1.png", linkedin: "https://www.linkedin.com/in/nirnayl/" },
      { img: "13_1.png", linkedin: "https://www.linkedin.com/in/mohammed-mubashir-ali-92170b279/" }
    ]
  },
  {
    title: "Vice President",
    members: [
      { img: "22.png", linkedin: "https://www.linkedin.com/in/druthi-bourshetty-255937383/" }
    ]
  },
  {
    title: "Secretaries",
    members: [
      { img: "8_1.png", linkedin: "https://www.linkedin.com/in/kushi-tudugani-0375a42b4/" },
      { img: "1_1.png", linkedin: "https://www.linkedin.com/in/gbvaishnavi/" }
    ]
  },
  {
    title: "PR & Social Media Heads",
    members: [
      { img: "10.png", linkedin: "https://www.linkedin.com/in/varala-abhigna-reddy-76172531a/" },
      { img: "25.png", linkedin: "https://www.linkedin.com/in/lekhya-sri-b37155326/" }
    ]
  },
  {
    title: "Operational Heads",
    members: [
      { img: "21.png", linkedin: "https://www.linkedin.com/in/sai-karthikeyan-koduri/" },
      { img: "23.png", linkedin: "https://www.linkedin.com/in/anish-dommeti-184501279/" }
    ]
  },
  {
    title: "Outreach Heads",
    members: [
      { img: "24.png", linkedin: "https://www.linkedin.com/in/vidularaghavendra/" },
      { img: "16.png", linkedin: "https://www.linkedin.com/in/omkulkarnimecs/" },
      { img: "17.png", linkedin: "https://www.linkedin.com/in/pranay-ch-bb7b31332/" }
    ]
  },
  {
    title: "Event Management Heads",
    members: [
      { img: "name_.png", linkedin: "https://www.linkedin.com/in/supratik-peta-442b3537a/" },
      { img: "9_1.png", linkedin: "https://www.linkedin.com/in/varshithsaluvadi/" },
      { img: "18.png", linkedin: "https://www.linkedin.com/in/siddam-tanish-kumar-3536a427a/" }
    ]
  },
  {
    title: "Members",
    members: [
      { img: "2_1.png", linkedin: "https://www.linkedin.com/in/kaushal-sai-3abb921ba/" },
      { img: "3_1.png", linkedin: "https://www.linkedin.com/in/mehar-a-17b842334/" },
      { img: "4_1.png", linkedin: "https://www.linkedin.com/in/harshita-pasala-557096374/" },
      { img: "5_1.png", linkedin: "https://www.linkedin.com/in/ridha-kruthi-9bb565374/" },
      { img: "6_1.png", linkedin: "https://www.linkedin.com/in/sai-surya-gumudavelly/" },
      { img: "7_1.png", linkedin: null },
      { img: "10_1.png", linkedin: "https://www.linkedin.com/in/snithika-reddy-pullugari-489349396/" },
      { img: "12_1.png", linkedin: "https://www.linkedin.com/in/uhitha-reddy-surakanti-7a78a9342/" },
      { img: "14_1.png", linkedin: "https://www.linkedin.com/in/akshara-reddy-56a26535b/" },
      { img: "14.png", linkedin: "https://www.linkedin.com/in/meenakshi-v-962b023b7/" },
      { img: "13.png", linkedin: "https://www.linkedin.com/in/tanish-pujari-4a9b453b2/" },
      { img: "3.png", linkedin: "https://www.linkedin.com/in/varnith-reddy-ragi-b80a58403/" },
      { img: "6.png", linkedin: "https://www.linkedin.com/in/abhinav-reddy-p229/" },
      { img: "2.png", linkedin: "https://www.linkedin.com/in/kasturi-raoot-98a1ba337/" },
      { img: "4.png", linkedin: "https://www.linkedin.com/in/saisuchir/" },
      { img: "5.png", linkedin: "https://www.linkedin.com/in/ravindra-varma-2795873b8/" },
      { img: "12.png", linkedin: "https://www.linkedin.com/in/srivarsha-vemula-497655403/" },
      { img: "7.png", linkedin: "https://www.linkedin.com/in/prabhath-m-598308388/" },
      { img: "8.png", linkedin: "https://www.linkedin.com/in/sharvani-vollem-85538338b/" },
      { img: "9.png", linkedin: "https://www.linkedin.com/in/sushanth-koppisetti-394729397/" },
      { img: "11.png", linkedin: "https://www.linkedin.com/in/v-siddharth-48b70a340/" },
      { img: "19.png", linkedin: null },
      { img: "20.png", linkedin: null }
    ]
  }
];

export default function CoreTeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-wine py-24 md:py-32">
        <div className="absolute inset-0 -z-10 line-field opacity-45" aria-hidden="true" />
        <Container className="flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center">
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold uppercase leading-none tracking-tight text-text">
              ED-Cell Team
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg font-semibold leading-7 text-accent-light">
              Meet the minds and makers behind E-Summit 2026. A dedicated collective of students driving the entrepreneurial spirit at MECS.
            </p>
          </Reveal>
        </Container>
      </section>

      <div className="bg-bg py-16 md:py-24">
        <Container className="flex flex-col gap-24">
          {teamGroups.map((group, groupIdx) => (
            <section key={group.title} className="flex flex-col items-center">
              <Reveal>
                <div className="mb-12 border-b border-accent/30 pb-4 text-center">
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold uppercase tracking-tight text-primary">
                    {group.title}
                  </h2>
                </div>
              </Reveal>
              
              <div 
                className={`grid w-full gap-6 md:gap-8 ${
                  group.members.length === 1 
                    ? "max-w-xs grid-cols-1" 
                    : group.members.length === 2 
                    ? "max-w-2xl grid-cols-1 sm:grid-cols-2" 
                    : group.members.length === 3 
                    ? "max-w-4xl grid-cols-1 sm:grid-cols-3" 
                    : "grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
                }`}
              >
                {group.members.map((member, imgIdx) => {
                  const CardContent = (
                    <Reveal 
                      delay={imgIdx * 0.05} 
                      className={`group relative flex flex-col rounded-2xl border border-border bg-surface p-3 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift hover:border-accent/40 ${member.linkedin ? "cursor-pointer" : ""}`}
                    >
                      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-tint">
                        <Image
                          src={`/assets/Members Images/${member.img}`}
                          alt={`Team Member - ${group.title}`}
                          fill
                          className="object-cover !h-[calc(100%+2px)] transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        {member.linkedin && (
                          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-border/60 bg-surface/80 text-text backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:scale-110">
                            <LinkedinIcon className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                    </Reveal>
                  );

                  return member.linkedin ? (
                    <a key={member.img} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
                      {CardContent}
                    </a>
                  ) : (
                    <div key={member.img}>
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </Container>
      </div>
    </>
  );
}

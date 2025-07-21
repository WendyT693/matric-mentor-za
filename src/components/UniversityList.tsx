import UniversityCard from "./UniversityCard";

const universities = [
  {
    name: "University of Cape Town",
    location: "Cape Town",
    province: "Western Cape",
    type: "Traditional University",
    studentsCount: "29,000",
    establishedYear: 1829,
    rating: 4.8,
    image: "/placeholder-university.jpg",
    popularCourses: ["Medicine", "Engineering", "Commerce", "Law", "Humanities"],
    applicationDeadline: "30 Sept 2024"
  },
  {
    name: "University of the Witwatersrand",
    location: "Johannesburg",
    province: "Gauteng",
    type: "Traditional University",
    studentsCount: "40,000",
    establishedYear: 1922,
    rating: 4.7,
    image: "/placeholder-university.jpg",
    popularCourses: ["Mining Engineering", "Medicine", "Commerce", "Architecture"],
    applicationDeadline: "30 Sept 2024"
  },
  {
    name: "Stellenbosch University",
    location: "Stellenbosch",
    province: "Western Cape",
    type: "Traditional University",
    studentsCount: "32,000",
    establishedYear: 1918,
    rating: 4.6,
    image: "/placeholder-university.jpg",
    popularCourses: ["Agriculture", "Engineering", "Medicine", "Business"],
    applicationDeadline: "30 Sept 2024"
  },
  {
    name: "University of KwaZulu-Natal",
    location: "Durban",
    province: "KwaZulu-Natal",
    type: "Traditional University",
    studentsCount: "47,000",
    establishedYear: 2004,
    rating: 4.4,
    image: "/placeholder-university.jpg",
    popularCourses: ["Medicine", "Engineering", "Law", "Humanities"],
    applicationDeadline: "30 Sept 2024"
  },
  {
    name: "University of Pretoria",
    location: "Pretoria",
    province: "Gauteng",
    type: "Traditional University",
    studentsCount: "53,000",
    establishedYear: 1908,
    rating: 4.5,
    image: "/placeholder-university.jpg",
    popularCourses: ["Veterinary Science", "Engineering", "Medicine", "Business"],
    applicationDeadline: "30 Sept 2024"
  },
  {
    name: "Rhodes University",
    location: "Grahamstown",
    province: "Eastern Cape",
    type: "Traditional University",
    studentsCount: "8,200",
    establishedYear: 1904,
    rating: 4.3,
    image: "/placeholder-university.jpg",
    popularCourses: ["Journalism", "Pharmacy", "Law", "Fine Arts"],
    applicationDeadline: "30 Sept 2024"
  }
];

const UniversityList = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore South African Universities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the best universities that match your academic goals and career aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {universities.map((university, index) => (
            <UniversityCard
              key={index}
              {...university}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Showing 6 of 26 universities
          </p>
          <button className="text-primary hover:text-primary/80 font-medium">
            View All Universities →
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversityList;
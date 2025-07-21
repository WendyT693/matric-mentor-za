import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star, GraduationCap } from "lucide-react";

interface SearchResult {
  id: string;
  type: "university" | "course";
  name: string;
  institution?: string;
  location?: string;
  province?: string;
  duration?: string;
  qualification?: string;
  apsScore?: number;
  subjects?: string[];
  description: string;
  rating?: number;
  studentsCount?: string;
  deadline?: string;
}

interface SearchResultsProps {
  query: string;
  selectedField?: string;
  selectedProvince?: string;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    type: "university",
    name: "University of Cape Town",
    location: "Cape Town",
    province: "Western Cape",
    description: "Leading research university in Africa with world-class facilities and programs.",
    rating: 4.8,
    studentsCount: "29,000",
    deadline: "30 Sept 2024"
  },
  {
    id: "2",
    type: "course",
    name: "Bachelor of Engineering (Mechanical)",
    institution: "University of the Witwatersrand",
    duration: "4 years",
    qualification: "Bachelor's Degree",
    apsScore: 35,
    subjects: ["Mathematics", "Physical Sciences", "English"],
    description: "Comprehensive mechanical engineering program with strong industry connections.",
    deadline: "30 Sept 2024"
  },
  {
    id: "3",
    type: "course",
    name: "Bachelor of Medicine and Surgery (MBChB)",
    institution: "University of Cape Town",
    duration: "6 years",
    qualification: "Professional Degree",
    apsScore: 42,
    subjects: ["Mathematics", "Physical Sciences", "Life Sciences", "English"],
    description: "World-renowned medical program with excellent clinical training facilities.",
    deadline: "30 Sept 2024"
  },
  {
    id: "4",
    type: "university",
    name: "Stellenbosch University",
    location: "Stellenbosch",
    province: "Western Cape",
    description: "Prestigious Afrikaans and English university known for research excellence.",
    rating: 4.6,
    studentsCount: "32,000",
    deadline: "30 Sept 2024"
  },
  {
    id: "5",
    type: "course",
    name: "Bachelor of Commerce (Accounting)",
    institution: "University of the Witwatersrand",
    duration: "3 years",
    qualification: "Bachelor's Degree",
    apsScore: 32,
    subjects: ["Mathematics", "Accounting", "English"],
    description: "Comprehensive business education with CA(SA) pathway integration.",
    deadline: "30 Sept 2024"
  }
];

const SearchResults = ({ query, selectedField, selectedProvince }: SearchResultsProps) => {
  const [showAll, setShowAll] = useState(false);

  // Filter results based on search criteria
  const filteredResults = mockResults.filter(result => {
    const matchesQuery = query === "" || 
      result.name.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      (result.institution && result.institution.toLowerCase().includes(query.toLowerCase()));
    
    const matchesField = !selectedField || selectedField === "all" ||
      (selectedField === "engineering" && result.name.toLowerCase().includes("engineering")) ||
      (selectedField === "medicine" && result.name.toLowerCase().includes("medicine")) ||
      (selectedField === "business" && (result.name.toLowerCase().includes("commerce") || result.name.toLowerCase().includes("business")));
    
    const matchesProvince = !selectedProvince || selectedProvince === "all" ||
      result.province === selectedProvince;

    return matchesQuery && matchesField && matchesProvince;
  });

  const displayResults = showAll ? filteredResults : filteredResults.slice(0, 3);

  if (query === "" && !selectedField && !selectedProvince) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">
          Search Results ({filteredResults.length} found)
        </h3>
        {query && (
          <Badge variant="outline" className="text-sm">
            Searching for: "{query}"
          </Badge>
        )}
      </div>

      {filteredResults.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h4 className="text-lg font-medium mb-2">No results found</h4>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all universities and courses.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {displayResults.map((result) => (
            <Card key={result.id} className="hover:shadow-card-hover transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={result.type === "university" ? "default" : "secondary"}>
                        {result.type === "university" ? "University" : "Course"}
                      </Badge>
                      {result.type === "course" && result.qualification && (
                        <Badge variant="outline" className="text-xs">
                          {result.qualification}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg mb-1">{result.name}</CardTitle>
                    {result.institution && (
                      <p className="text-sm text-muted-foreground">at {result.institution}</p>
                    )}
                  </div>
                  
                  {result.type === "university" && result.rating && (
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-accent mr-1" />
                      <span className="text-sm font-medium">{result.rating}</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{result.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                  {result.location && (
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {result.location}
                    </div>
                  )}
                  
                  {result.duration && (
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {result.duration}
                    </div>
                  )}
                  
                  {result.studentsCount && (
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {result.studentsCount}
                    </div>
                  )}
                  
                  {result.apsScore && (
                    <div className="flex items-center text-muted-foreground">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      APS: {result.apsScore}
                    </div>
                  )}
                </div>

                {result.subjects && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Required Subjects:</p>
                    <div className="flex flex-wrap gap-1">
                      {result.subjects.map((subject, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Deadline: <span className="font-medium text-accent">{result.deadline}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">
                      {result.type === "university" ? "Explore Courses" : "Apply Now"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredResults.length > 3 && (
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowAll(!showAll)}
                className="mt-4"
              >
                {showAll ? "Show Less" : `Show All ${filteredResults.length} Results`}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
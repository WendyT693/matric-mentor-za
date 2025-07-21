import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Star } from "lucide-react";

interface UniversityCardProps {
  name: string;
  location: string;
  province: string;
  type: string;
  studentsCount: string;
  establishedYear: number;
  rating: number;
  image: string;
  popularCourses: string[];
  applicationDeadline: string;
}

const UniversityCard = ({
  name,
  location,
  province,
  type,
  studentsCount,
  establishedYear,
  rating,
  image,
  popularCourses,
  applicationDeadline
}: UniversityCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-card-hover transition-all duration-300 group">
      <div className="relative h-48 bg-gradient-card">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="secondary" className="mb-2">
            {type}
          </Badge>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {location}, {province}
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-accent mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {studentsCount} students
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            Est. {establishedYear}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Popular Courses:</h4>
          <div className="flex flex-wrap gap-1">
            {popularCourses.slice(0, 3).map((course, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {course}
              </Badge>
            ))}
            {popularCourses.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{popularCourses.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="mb-4 p-3 bg-accent/10 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Application Deadline</span>
            <span className="text-sm text-accent font-semibold">{applicationDeadline}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button size="sm" className="flex-1">
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UniversityCard;
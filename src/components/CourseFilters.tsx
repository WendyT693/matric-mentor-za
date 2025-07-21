import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, X } from "lucide-react";

const CourseFilters = () => {
  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filter Courses
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Search */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Course name or keyword" className="pl-10" />
          </div>
        </div>

        {/* Field of Study */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Field of Study</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fields</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="medicine">Medicine & Health</SelectItem>
              <SelectItem value="business">Business & Commerce</SelectItem>
              <SelectItem value="arts">Arts & Humanities</SelectItem>
              <SelectItem value="science">Natural Sciences</SelectItem>
              <SelectItem value="social">Social Sciences</SelectItem>
              <SelectItem value="law">Law</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Duration */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Course Duration</Label>
          <div className="space-y-2">
            {[
              { id: "1-year", label: "1 Year" },
              { id: "2-year", label: "2 Years" },
              { id: "3-year", label: "3 Years" },
              { id: "4-year", label: "4+ Years" }
            ].map((duration) => (
              <div key={duration.id} className="flex items-center space-x-2">
                <Checkbox id={duration.id} />
                <Label htmlFor={duration.id} className="text-sm">{duration.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* APS Score Range */}
        <div>
          <Label className="text-sm font-medium mb-2 block">
            Minimum APS Score: <span className="text-primary">25</span>
          </Label>
          <Slider
            defaultValue={[25]}
            max={42}
            min={18}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>18</span>
            <span>42</span>
          </div>
        </div>

        {/* University Type */}
        <div>
          <Label className="text-sm font-medium mb-2 block">University Type</Label>
          <div className="space-y-2">
            {[
              { id: "university", label: "Traditional University" },
              { id: "university-technology", label: "University of Technology" },
              { id: "comprehensive", label: "Comprehensive University" }
            ].map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox id={type.id} />
                <Label htmlFor={type.id} className="text-sm">{type.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Requirements */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Required Subjects</Label>
          <div className="space-y-2">
            {[
              "Mathematics",
              "Physical Sciences", 
              "Life Sciences",
              "Accounting",
              "English",
              "Afrikaans"
            ].map((subject) => (
              <div key={subject} className="flex items-center space-x-2">
                <Checkbox id={subject} />
                <Label htmlFor={subject} className="text-sm">{subject}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-4 border-t border-border">
          <Button className="w-full">
            Apply Filters
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseFilters;
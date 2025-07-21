import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Search, BookOpen, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect 
            <span className="block text-accent">University Path</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Discover universities and courses that match your matric subjects and career goals. 
            Start your journey to higher education success.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-card-hover animate-slide-up">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Search by University or Course
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="e.g. UCT, Engineering, Medicine"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Field of Study
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
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

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Province
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                    <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                    <SelectItem value="limpopo">Limpopo</SelectItem>
                    <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                    <SelectItem value="north-west">North West</SelectItem>
                    <SelectItem value="northern-cape">Northern Cape</SelectItem>
                    <SelectItem value="free-state">Free State</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
              <Search className="h-5 w-5 mr-2" />
              Search Universities & Courses
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in">
          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">26 Universities</h3>
              <p className="text-white/80">Comprehensive information on all South African universities</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">1000+ Courses</h3>
              <p className="text-white/80">Detailed course information and requirements</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-white/80">AI-powered recommendations based on your subjects</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
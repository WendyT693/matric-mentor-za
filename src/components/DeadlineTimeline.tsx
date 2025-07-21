import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, AlertTriangle } from "lucide-react";

const deadlines = [
  {
    date: "30 Sept 2024",
    title: "Most Universities",
    description: "General application deadline for undergraduate programmes",
    daysLeft: 45,
    status: "upcoming",
    universities: ["UCT", "Wits", "UP", "Stellenbosch", "UKZN"]
  },
  {
    date: "31 Oct 2024", 
    title: "Late Applications",
    description: "Extended deadline for selected programmes",
    daysLeft: 75,
    status: "extended",
    universities: ["UWC", "UFH", "WSU"]
  },
  {
    date: "30 Nov 2024",
    title: "Final Deadline",
    description: "Last chance applications for remaining spaces",
    daysLeft: 105,
    status: "final",
    universities: ["Various"]
  }
];

const DeadlineTimeline = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Application Deadlines
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out! Keep track of important application deadlines for South African universities
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {deadlines.map((deadline, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-card-hover transition-all">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                deadline.status === 'upcoming' ? 'bg-primary' :
                deadline.status === 'extended' ? 'bg-accent' : 'bg-destructive'
              }`} />
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      {deadline.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{deadline.description}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{deadline.date}</div>
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{deadline.daysLeft} days left</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Applies to:</p>
                    <div className="flex flex-wrap gap-1">
                      {deadline.universities.map((uni, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {uni}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {deadline.status === 'upcoming' && deadline.daysLeft <= 60 && (
                    <div className="flex items-center text-destructive">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Urgent</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Card className="max-w-md mx-auto bg-accent/10 border-accent/20">
            <CardContent className="p-6">
              <AlertTriangle className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Don't Wait!</h3>
              <p className="text-sm text-muted-foreground">
                Applications are processed on a first-come, first-served basis. Apply early to secure your spot.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeadlineTimeline;
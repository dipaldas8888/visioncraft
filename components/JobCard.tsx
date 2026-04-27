import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function JobCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[350px] shadow-xl rounded-2xl hover:scale-105 transition duration-300">
        
        <CardHeader>
          <CardTitle className="text-gray-900">Frontend Developer</CardTitle>
          <CardDescription>Google • Bangalore</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-600">
            Looking for a React developer with experience in building modern UI
            applications.
          </p>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline">View</Button>
          <Button variant="secondary">Apply Now</Button>
        </CardFooter>

      </Card>
    </div>
  );
}
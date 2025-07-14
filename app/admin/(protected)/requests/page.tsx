import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface Request {
  _id: string;
  name: string;
  email: string;
  practiceArea: string;
  serviceType: string;
  status: string;
}

async function getRequests(): Promise<Request[]> {
  const client = await clientPromise;
  const db = client.db("law-firm-webapp");
  const requests = await db.collection("requests").find({}).toArray();
  // Convert ObjectId to string for serialization
  return requests.map(request => ({
    ...request,
    _id: request._id.toString(),
  })) as Request[];
}

export default async function ConsultationRequestsPage() {
  const requests: Request[] = await getRequests();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Consultation Requests</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Practice Area</TableHead>
            <TableHead>Service Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request._id}>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.practiceArea}</TableCell>
              <TableCell>{request.serviceType}</TableCell>
              <TableCell>{request.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

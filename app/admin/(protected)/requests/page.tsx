import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import clientPromise from "@/lib/mongodb";
import Link from "next/link";

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

  const newRequests = requests.filter(req => req.status === 'New');
  const pendingRequests = requests.filter(req => req.status === 'pending');
  const cancelledRequests = requests.filter(req => req.status === 'cancelled');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Consultation Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>New Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <RequestTable requests={newRequests} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <RequestTable requests={pendingRequests} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cancelled Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <RequestTable requests={cancelledRequests} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function RequestTable({ requests }: { requests: Request[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Practice Area</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request._id}>
            <TableCell>
              <Link href={`/admin/requests/${request._id}`} className="block hover:underline">
                {request.name}
              </Link>
            </TableCell>
            <TableCell>{request.practiceArea}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

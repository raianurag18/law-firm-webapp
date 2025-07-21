import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import clientPromise from "@/lib/mongodb";

interface ContactRequest {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: Date;
}

async function getContactRequests(): Promise<ContactRequest[]> {
  const client = await clientPromise;
  const db = client.db("law-firm-webapp");
  const requests = await db.collection("contact_requests").find({}).sort({ submittedAt: -1 }).toArray();
  return requests.map(request => ({
    ...request,
    _id: request._id.toString(),
    submittedAt: new Date(request.submittedAt),
  })) as ContactRequest[];
}

export default async function ContactRequestsPage() {
  const requests = await getContactRequests();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Requests</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Submitted At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request._id}>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.phone}</TableCell>
              <TableCell>{request.message}</TableCell>
              <TableCell>{request.submittedAt.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

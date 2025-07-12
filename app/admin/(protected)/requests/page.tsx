import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const requests = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", caseType: "IPR", status: "New" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", caseType: "Corporate Law", status: "New" },
  { id: 3, name: "Peter Jones", email: "peter.jones@example.com", caseType: "Litigation", status: "Contacted" },
];

export default function ConsultationRequestsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Consultation Requests</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Case Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.caseType}</TableCell>
              <TableCell>{request.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

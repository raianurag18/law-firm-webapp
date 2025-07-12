import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const cases = [
  { id: 1, client: "TechCorp", caseType: "Patent Application", status: "In Progress" },
  { id: 2, client: "Creative Inc.", caseType: "Trademark Registration", status: "Completed" },
  { id: 3, client: "Innovate LLC", caseType: "IP Litigation", status: "On Hold" },
];

export default function ActiveCasesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Active Cases</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Case Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((caseItem) => (
            <TableRow key={caseItem.id}>
              <TableCell>{caseItem.client}</TableCell>
              <TableCell>{caseItem.caseType}</TableCell>
              <TableCell>{caseItem.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

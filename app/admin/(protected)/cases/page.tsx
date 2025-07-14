import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface Case {
  _id: string;
  client: string;
  caseType: string;
  status: string;
}

async function getCases(): Promise<Case[]> {
  const client = await clientPromise;
  const db = client.db("law-firm-webapp");
  const cases = await db.collection("cases").find({}).toArray();
  // Convert ObjectId to string for serialization
  return cases.map(caseItem => ({
    ...caseItem,
    _id: caseItem._id.toString(),
  })) as Case[];
}

export default async function ActiveCasesPage() {
  const cases: Case[] = await getCases();

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
            <TableRow key={caseItem._id}>
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

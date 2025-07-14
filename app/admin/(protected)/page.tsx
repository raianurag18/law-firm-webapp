import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clientPromise from "@/lib/mongodb";

async function getDashboardData() {
  const client = await clientPromise;
  const db = client.db("law-firm-webapp");

  const newRequestsCount = await db.collection("requests").countDocuments({ status: "New" });
  const activeCasesCount = await db.collection("cases").countDocuments({ status: "In Progress" });

  return { newRequestsCount, activeCasesCount };
}

export default async function AdminDashboardPage() {
  const { newRequestsCount, activeCasesCount } = await getDashboardData();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>New Consultation Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have {newRequestsCount} new requests.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p>There are {activeCasesCount} active cases.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

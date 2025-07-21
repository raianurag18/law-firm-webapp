import { notFound } from 'next/navigation';
import { getRequestById, updateRequestStatus } from '@/app/actions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default async function RequestDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const request = await getRequestById(id);

  if (!request) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <Link href="/admin/requests" className="flex items-center gap-2 mb-4 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft size={16} />
        Back to Requests
      </Link>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Consultation Request Details</CardTitle>
            <Badge variant={request.status === 'pending' ? 'default' : request.status === 'accepted' ? 'secondary' : 'destructive'}>
              {request.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold">Name</h3>
              <p>{request.name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>{request.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>{request.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold">Practice Area</h3>
              <p>{request.practiceArea}</p>
            </div>
            <div>
              <h3 className="font-semibold">Message</h3>
              <p>{request.message}</p>
            </div>
            {request.status !== 'cancelled' && (
              <div className="flex gap-4 mt-4">
                <form action={async () => {
                  'use server';
                  await updateRequestStatus(id, 'accepted');
                }}>
                  <Button type="submit">Accept</Button>
                </form>
                <form action={async () => {
                  'use server';
                  await updateRequestStatus(id, 'pending');
                }}>
                  <Button type="submit" variant="outline">
                    {request.status === 'pending' ? 'Keep as Pending' : 'Mark as Pending'}
                  </Button>
                </form>
                <form action={async () => {
                  'use server';
                  await updateRequestStatus(id, 'cancelled');
                }}>
                  <Button type="submit" variant="destructive">Cancel Request</Button>
                </form>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

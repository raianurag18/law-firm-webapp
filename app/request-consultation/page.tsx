import ConsultationForm from "./ConsultationForm";

export default function RequestConsultationPage({
  searchParams,
}: {
  searchParams: { practiceArea: string; serviceType: string };
}) {
  const { practiceArea, serviceType } = searchParams;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Request a Consultation
      </h1>
      <ConsultationForm
        defaultPracticeArea={practiceArea}
        defaultServiceType={serviceType}
      />
    </div>
  );
}

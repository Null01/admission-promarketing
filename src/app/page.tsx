import Image from 'next/image';
import { LoadingSkeleton } from '@/ui/skeleton';
import { getAllProvidersAvailable } from '@/lib/actions/providers';
import CreateAutoExclusionFragment from '@/components/providers/CreateAutoExclusionFragment';
import Tabs from '@/ui/tabs';
import Card from '@/ui/card';
import CreateLimitDeposit from '@/components/providers/CreateLimitDeposit';

export default async function RootPage () {

  // const totalPages = await getAllProvidersAvailable();
  const tabs = [
    { title: 'Crear Solicitud', content: <CreateAutoExclusionFragment/> },
    { title: 'Limite de deposito', content: <CreateLimitDeposit/> },
  ];

  return (
    <main className="flex-grow px-6 py-4">
      <Tabs tabs={tabs}/>
    </main>
  );
}

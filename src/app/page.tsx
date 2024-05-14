import CheckAutoExclusionProviders from '@/components/providers/auto-exclusion';
import CreateLimitDeposit from '@/components/providers/limit-deposit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tab, Tabs } from '@/ui/tabs';

export default async function RootPage () {

  return (
    <main className="flex-grow px-4 py-4">
      <ToastContainer
        position={'top-right'}
        autoClose={4000}
        limit={10}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
      <Tabs>
        <Tab title={'Crear Solicitud'}>
          <CheckAutoExclusionProviders/>
        </Tab>
        <Tab title={'Limite de deposito'}>
          <CreateLimitDeposit/>
        </Tab>
      </Tabs>
    </main>
  );
}

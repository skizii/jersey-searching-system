import Container from '../components/container/';
import Header from '../components/header';
import { StoreListHeader } from '../components/storeListHeader';
import { CardsTable } from '@/components/cardsTable';
import { getStores } from '@/services/storeService';

export default function Home() {
  const stores = getStores();
  
  return (
    <Container>
      <Header />
      <StoreListHeader count={stores.length} />
      <CardsTable />
    </Container>
  );
}
import Container from '../components/container/';
import Header from '../components/header';
import { StoreListHeader } from '../components/storeListHeader';
import { CardsTable } from '@/components/cardsTable';

export default function Home() {
  return (
    <Container>
      <Header />
      <StoreListHeader />
      <CardsTable />
    </Container>
  );
}
import { useState, useEffect } from 'react';

import Page from '@/components/page';
import ListContainer from '@/components/ListContainer';

export default function Todolist() {
	const [clientLoaded, setClientLoaded] = useState(false);

	useEffect(() => {
		setClientLoaded(true);
	}, []);

	return <Page>{clientLoaded && <ListContainer></ListContainer>}</Page>;
}

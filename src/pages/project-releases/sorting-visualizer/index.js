import { useState, useEffect } from 'react';

import Page from '@/components/page';
import Sorting from '@/components/Sorting.js';

export default function SortingVisualizer() {
	const [clientLoaded, setClientLoaded] = useState(false);

	useEffect(() => {
		setClientLoaded(true);
	}, []);

	return <Page>{clientLoaded && <Sorting></Sorting>}</Page>;
}

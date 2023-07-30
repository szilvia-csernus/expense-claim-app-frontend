import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../src/Pages/Home.jsx';
import Header from '../src/Components/Header.jsx';

describe('Home', () => {
	it('renders header', () => {
		render(<Header />);

		screen.debug();

		// check if App components renders headline
	});
});

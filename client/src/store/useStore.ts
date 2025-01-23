import { create } from 'zustand';

interface SearchState {
	query: string;
	setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
	query: '',
	setQuery: (query) => set({ query }),
}));

interface NavbarState {
	isOpen: boolean;
	toggleMenu: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
	isOpen: false,
	toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
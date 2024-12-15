export type Prize = {
    id: number;
    name: string;
    image: string;
};

export type ItemList = Prize[];

export type PrizeWithPosition = Prize & { x: number, y: number };

export type UsePickItemResult = {
    pickedItem: PrizeWithPosition | null;
    showResult: boolean;
    pickItem: (position: { top: number; left: number}, shuffledPrizes: PrizeWithPosition[]) => void;
    reset: () => void;
}
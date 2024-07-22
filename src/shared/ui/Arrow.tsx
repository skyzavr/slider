type props = { path: string };

export const Arrow = ({ path }: props) => (
  <svg
    width="24"
    height="13"
    viewBox="0 0 24 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} stroke="white" strokeLinecap="round" />
  </svg>
);

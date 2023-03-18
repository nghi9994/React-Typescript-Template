import React from 'react';

interface Props {
  isUp?: boolean;
  onClick?: any;
}

export function ArrowUpDown(props: Props) {
  const { isUp = false, onClick } = props;

  const handeClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (isUp) {
    return (
      <svg
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handeClick}
      >
        <defs></defs>
        <path
          d="M9.9375 5.8125C10.5352 5.8125 10.834 5.11523 10.4023 4.68359L6.15234 0.433594C5.88672 0.167969 5.45508 0.167969 5.18945 0.433594L0.939453 4.68359C0.507812 5.11523 0.806641 5.8125 1.4043 5.8125H9.9375Z"
          fill="#454545"
        ></path>
      </svg>
    );
  }

  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handeClick}
    >
      <defs></defs>
      <path
        d="M1.4043 0.5C0.806641 0.5 0.507812 1.23047 0.939453 1.66211L5.18945 5.91211C5.45508 6.17773 5.88672 6.17773 6.15234 5.91211L10.4023 1.66211C10.834 1.23047 10.5352 0.5 9.9375 0.5H1.4043Z"
        fill="#454545"
      ></path>
    </svg>
  );
}

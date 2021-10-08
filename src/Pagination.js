import React from 'react';

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
  limit,
  total,
  offset,
  setOffset
}) => {
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - MAX_LEFT, 1),
    maxFirst
  );

  console.log('current: ', current);
  console.log('pages: ', pages);
  console.log('maxFirst: ', maxFirst);
  console.log('first: ', first);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current <= 1}
        >
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((_, index) => {
        const page = index + first;
        return (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={page === current ? 'pagination__item--active' : null}
            >
              {page}
            </button>
          </li>
        );
      })}
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current >= pages}
        >
          Próximo
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

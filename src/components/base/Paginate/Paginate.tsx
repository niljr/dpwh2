import React from 'react';
// import Button from '../Button';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import Button from '../Button';
import Typography from '../Typography';
import './paginate.scss';

type Props = {
    className?: string,
    totalPerPage: number,
    totalItems: number,
    currentPage: number,
    handleTotalPerPageChange: (e: Object) => void,
    handlePageChange: (value: number) => void
}

export default function Paginate({
    className = '', totalPerPage, totalItems, currentPage, handleTotalPerPageChange, handlePageChange
}: Props): JSX.Element {
    return (
        <div className={`pagination ${className}`} >
            <div className='pagination__row-count'>
                <Typography size={14}>Rows per page</Typography>
                <select onChange={handleTotalPerPageChange} value={totalPerPage} className='pagination__row-count__select'>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>

            <Typography size={14} className='pagination__showing-count'>
                Showing {(currentPage * totalPerPage + 1) - totalPerPage}-{currentPage * totalPerPage > totalItems ? totalItems : currentPage * totalPerPage} of {totalItems}
            </Typography>

            <div className='pagination__controls'>
                <Button
                    iconLeft={BsChevronLeft}
                    disabled={currentPage <= 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    label='Previous Page'
                    size='sm'
                    className='pagination__controls-prev'/>
                <Button
                    iconRight={BsChevronRight}
                    disabled={!((currentPage * totalPerPage) < totalItems)}
                    onClick={() => handlePageChange(currentPage + 1)}
                    label='Next Page'
                    size='sm'
                    className='pagination__controls-next'/>
            </div>
        </div>
    );
}

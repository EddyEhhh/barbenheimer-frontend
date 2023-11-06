'use client'
import {Typography, Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link
,TableSortLabel,Toolbar,Tooltip, IconButton, TablePagination, FormControlLabel, Switch} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Image from 'next/image'
import QuantityDetails from "../components/(paymentDetailsPage)/QuantityDetails";
import ContactInfo from "../components/(paymentDetailsPage)/QuantityDetails";
import { Data, HeadCell } from "@/app/interface/interface"
import { visuallyHidden } from '@mui/utils';
import FilterListIcon from '@mui/icons-material/FilterList';
import * as React from 'react';
import UserDetails from "../components/(accountPage)/userDetails";

function createData(
  date: string,
  movie: string,
  ticketQuantity: number,
  totalSpend: number
): Data {
  const description = `${ticketQuantity} tickets, $${totalSpend}`;
  return { date, movie, ticketQuantity, totalSpend, description };
}

const rows = [
  createData('01/01/2123', 'Barbie', 10, 0),
  createData('03/01/2123', 'Barber', 0, 0),
  createData('01/02/2123', 'Aarbie', 0, 0),
  createData('03/01/2023', 'Barbie', 0, 0),
  createData('01/01/2111', 'Barbie', 0, 0),
  createData('01/01/2111', 'Barbie', 0, 0),
  createData('01/01/2111', 'Barbie', 0, 0),
  createData('01/01/2111', 'Barbie', 0, 0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (orderBy === 'date') {
    const dateA = new Date(a[orderBy] as string);
    const dateB = new Date(b[orderBy] as string);
    
    if (dateB < dateA) {
      return -1;
    }
    
    if (dateB > dateA) {
      return 1;
    }
    
    return 0;
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells: readonly HeadCell[] = [
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date',
    sortable: true,
  },
  {
    id: 'movie',
    numeric: true,
    disablePadding: false,
    label: 'Movie',
    sortable: true,
  },
  {
    id: 'description',
    numeric: true,
    disablePadding: false,
    label: 'Description',
    sortable: false,
  },
];

interface EnhancedTableProps {
  onRequestSort: (property: keyof Data) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property: keyof Data) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar() {
  return (
    <Toolbar>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
        fontWeight="bold"
      >
        Purchase History
      </Typography>
    </Toolbar>
  );
}

const Account = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('date');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    
    <Grid container justifyContent={"center"} >
      <UserDetails></UserDetails>
      <Box component={Paper} sx={{pt:3, pb:4,pr:3,pl:3, width: '80%', mb:10, mt: 10, border:1, borderRadius:5}}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {visibleRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.movie}</TableCell>
                    <TableCell align="right">
                      {`${row.ticketQuantity} tickets, $${row.totalSpend}`}
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={3} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Box>
    </Grid>
  );
}

export default Account;

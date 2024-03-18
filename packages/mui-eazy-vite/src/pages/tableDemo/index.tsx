import SuperTable from 'src/components/superTable';

interface TableData {
  orderNumber: string;
  name: string;
  createdAt: string;
  totalQuantity: string;
  totalAmount: string;
  status: string;
}
const TableDemo = () => {
  return (
    <div>
      <SuperTable<TableData>
        config={[
          { name: 'orderNumber', label: 'Order', width: 116 },
          { name: 'name', label: 'Customer' },
          { name: 'createdAt', label: 'Date', width: 140 },
          {
            name: 'totalQuantity',
            label: 'Items',
            width: 120,
            align: 'center',
            render: ({ rowData }) => {
              return <div>{rowData.createdAt}</div>;
            },
          },
          { name: 'totalAmount', label: 'Price', width: 140 },
          { name: 'status', label: 'Status', width: 110 },
        ]}
        data={[
          {
            orderNumber: '1',
            name: '1',
            createdAt: '1',
            totalQuantity: '1',
            totalAmount: '1',
            status: '1',
          },
        ]}
      ></SuperTable>
    </div>
  );
};
export default TableDemo;

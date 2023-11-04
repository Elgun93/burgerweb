
// export const getStaticProps = async() => {
async function getData() {
  const res = await fetch('http://localhost:5000/items');
  // const data = await res.json();

  console.log('data >>>', data);

  return res.json({burgers: data});

  // return {
  //   props: {burgers: data}
  // }
}



export default async function Burgers() {
  const data = await getData();


    return (
      <div>
         <h1 className='text-3xl py-3'>Burgers</h1>
      </div>
    )
}
  
  // export default Burgers;
  
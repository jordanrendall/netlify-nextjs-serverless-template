import Head from 'next/head';
const IndexPage = () => {
  const click = async () => {
    const data = await fetch('/.netlify/functions/test-function', {
      method: 'POST',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <p>Test</p>
      <button
        onClick={() => {
          click().catch((e) => {
            console.log(e);
          });
        }}
      >
        Test Button
      </button>
    </>
  );
};

export default IndexPage;

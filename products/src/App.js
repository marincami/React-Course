import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]); // state to save the data in an array

  useEffect(() => {
    fetch('https://scratchya.com.ar/react/datos.php')
      .then((response) => response.json())
      .then((products) => setProducts(products))
  }, [])

  return(
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => {
            return(
              <tr key={prod.codigo}>
                <td>{prod.codigo}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

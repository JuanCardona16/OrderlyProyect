import app from '../config/app'

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} -> http://localhost:${PORT}`);
  console.log("Preciona ctrol + C para detener el servicio");
})

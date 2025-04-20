import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <>
      {/* Router principal de la aplicación donde vamos a difinir todas nuestras rutas. */}
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>

  )
}

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const requireAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const router = useRouter();

    const isAuthenticated = useSelector((state) => state.user.value.token);

    if (!isAuthenticated) {
      // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
      router.push("/login");
      return null;
    }

    // Si l'utilisateur est connecté, afficher le composant demandé
    return <WrappedComponent {...props} />;
  };

  // renvoyer le composant enveloppé dans le middleware
  return AuthWrapper;
};

export default requireAuth;

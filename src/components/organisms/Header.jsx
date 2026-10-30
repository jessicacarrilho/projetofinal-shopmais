import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Logo from "../atoms/Logo";
import { useCarrinho } from "../../hooks/useCarrinho";
import { useTema } from "../../hooks/useTema";
import styles from "./Header.module.css";

function classeDoLink({ isActive }) {
  return isActive ? `${styles.link} ${styles.ativo}` : styles.link;
}

function Header() {
  const { quantidadeTotal } = useCarrinho();
  const { tema, alternarTema} = useTema()
  const escuro = tema === 'escuro'

  return (
    <header className={styles.header}>
      <div className={styles.conteudo}>
        <Logo />

        <nav aria-label="Navegação principal">
          <ul className={styles.lista}>
            <li>
              <NavLink to="/produtos" className={classeDoLink}>
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carrinho"
                className={classeDoLink}
                aria-label={`Carrinho com ${quantidadeTotal} itens`}
              >
                <Badge badgeContent={quantidadeTotal} color="primary" max={99}>
                  <svg
                    className={styles.iconeCarrinho}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H6.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="9" cy="19" r="1.6" fill="currentColor" />
                    <circle cx="17" cy="19" r="1.6" fill="currentColor" />
                  </svg>
                </Badge>
                <span className={styles.textoCarrinho}>Carrinho</span>
              </NavLink>
            </li>
            <li>
              <button
              type="button"
              className={styles.botaoTema}
              onClick={alternarTema}
              aria-pressed={escuro}
              aria-label="Tema escuro"
              title={escuro ? 'Usar tema claro' : 'Usar tema escuro'}              
              >
                {escuro ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

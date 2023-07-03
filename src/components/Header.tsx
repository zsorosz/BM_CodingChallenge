import styles from "../../styles/Home.module.css";
import Search from "../components/Search";
import Cart from "../components/Cart";

type HeaderProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const Header: React.FunctionComponent<HeaderProps> = ({
    searchQuery,
    setSearchQuery,
}) => {
    return (
        <header className={styles.header}>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Cart />
        </header>
    );
};

export default Header;

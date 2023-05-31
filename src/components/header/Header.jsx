import PropTypes from "prop-types";

export default function Header({ name }) {
  return <>Bem vindo {name}</>;
}

Header.propTypes = {
  name: PropTypes.string,
};

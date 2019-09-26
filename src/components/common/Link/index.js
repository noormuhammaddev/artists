import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  base: {
    color: "#00AEEF",
    textDecoration: "none",
    cursor: "pointer"
  },
  link: {
    color: "#3f51b5",
    textDecoration: "none",
    cursor: "pointer",

    "&:hover": {
      color: "#3f51b5",
      textDecoration: "underline"
    },
    "&:active, &:focus": {
      textDecoration: "underline",
      outline: "none"
    }
  },
  active: {
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

const Link = ({
  actionLink,
  activeStyle,
  children,
  exact = false,
  external = false,
  nav = false,
  onClick,
  to,
  unstyled = false,
  ...props
}) => {
  const classes = useStyles();

  return external ? (
    <a
      {...props}
      href={to}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
    >
      {children}
    </a>
  ) : actionLink ? (
    <span
      {...props}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
    >
      {children}
    </span>
  ) : nav ? (
    <NavLink
      {...props}
      exact
      to={to}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
      activeClassName={classes.active}
      activeStyle={{ ...activeStyle, fontWeight: "bold", cursor: "default" }}
    >
      {children}
    </NavLink>
  ) : (
    <RouterLink
      {...props}
      to={to}
      onClick={onClick}
      className={unstyled ? classes.base : classes.link}
    >
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  actionLink: PropTypes.bool,
  activeStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  external: PropTypes.bool,
  nav: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  unstyled: PropTypes.bool
};

export default Link;

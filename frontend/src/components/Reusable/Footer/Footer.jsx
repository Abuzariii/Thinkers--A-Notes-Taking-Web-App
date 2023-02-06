import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.div1}>
        <label>Bahawalpur, Pakistan.</label>
      </div>
      <div className={classes.div2}>
        <div>
          <label>About</label>
          <label>Advertising</label>
          <label>Licenses</label>
          <label>Business</label>
          <label className={classes.safety}>Safety guidelines</label>
        </div>
        <div>
          <label>Privacy</label>
          <label>Terms</label>
          <label>Settings</label>
        </div>
      </div>
    </footer>
  );
}

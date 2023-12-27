/* eslint-disable react/jsx-no-target-blank */
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Time Traveller&apos;s Gazette</p>
      <a
        href="https://www.instagram.com/timetravellersgazette/"
        target="_blank"
      >
        <InstagramIcon />
      </a>

      <a href="https://twitter.com/TimeTGazette" target="_blank">
        <TwitterIcon />
      </a>
    </footer>
  );
}

export default Footer;

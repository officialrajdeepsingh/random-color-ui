import Link from 'next/link';
export default function Footer({ close }) {
  return (
    <Footer onclick={close} className="footer">
      <nav className="nav">
        <ul className="ul">
          <li className="list">
            <a> About us</a>
          </li>
          <li className="list">
            <Link href="Policy">
              <a> Privacy policy</a>
            </Link>
          </li>
          <li className="list">
            <a target="_blank"> Contact us</a>
          </li>
        </ul>
      </nav>
    </Footer>
  );
}

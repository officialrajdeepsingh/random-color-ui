import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="footer">
      <nav className="nav">
        <ul style={{ margin: '0px', marginBottom: '0px' }} className="ul">
          <li className="list">
            <Link href="/Policy">
              <a> Privacy policy</a>
            </Link>
          </li>
          <li className="list">
            <Link href="https://officialrajdeepsingh.dev/about-me/">
              <a target="_blank"> About us</a>
            </Link>
          </li>
          <li className="list">
            <Link href="https://officialrajdeepsingh.dev/contact-me/">
              <a target="_blank"> Contact us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

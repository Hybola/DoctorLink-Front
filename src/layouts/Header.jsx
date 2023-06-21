import { Link } from 'react-router-dom';
import { Hospital } from '../icons';

export default function Header() {
  return (
    <div className="flex justify-between px-8 bg-primary shadow-lg sticky top-0 z-10 h-[80px] text-white">
      <div className="py-2 flex justify-start self-center">
          <Hospital />
      </div>
      <div className="flex justify-self-end self-center gap-4">
        <p>Home</p>
        <Link to="/doctor/login">
          <p>Doctor</p>
        </Link>
        <Link to="/provider/login">
          <p>Provider</p>
        </Link>
      </div>
    </div>
  );
}

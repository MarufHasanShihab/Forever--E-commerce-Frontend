import { assets } from "./../../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="footer_logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h5 className="text-xl font-medium mb-5">COMPANY</h5>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        <div>
          <h5 className="text-xl font-medium mb-5">GET IN TOUCH</h5>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer">+1-000-000-0000</li>
            <li className="cursor-pointer">contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      {/* copyring */}
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2025@ forever.com- All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

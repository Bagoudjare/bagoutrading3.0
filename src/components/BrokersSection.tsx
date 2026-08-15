import { ExternalLink } from "lucide-react";

const brokers = [
  {
    name: "Deriv",
    description: "Plateforme polyvalente avec trading sur synthétiques, forex, crypto et plus.",
    url: "https://track.deriv.com/_uLzSi0hVVMZBMfcXPt5VjGNd7ZgqdRLk/1/",
    gradient: "from-red-500 to-orange-500",
    logo: "https://cdn.prod.website-files.com/68da5c86c91c54f39c86c28a/68da5c86c91c54f39c86d0de_deriv-app-logo.svg",
  },
  {
    name: "Exness",
    description: "Broker reconnu mondialement avec spreads compétitifs et exécution rapide.",
    url: "https://one.exnessonelink.com/a/42rvf9itx1",
    gradient: "from-yellow-500 to-amber-500",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAEDBAL/xAA/EAABBAECAgUICQIFBQAAAAABAAIDBAUGEQdBEiExUWETFyJScYGR0RQyQlVik6GxwSOUFjNDouEVRWNygv/EABsBAQACAwEBAAAAAAAAAAAAAAAFBgEDBAIH/8QANBEAAgIBAgMHAgQFBQAAAAAAAAECAwQFERIhMQYTFCJBUaEyYRVSU3EWkbHh8SMzwdHw/9oADAMBAAIRAxEAPwCxl8iJsIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAL0lyBjsxnsVhWB+TvQ19+sMc703exvaV242nZGT/tR3NUrYw6siVvizp+FwEEF+wPWbEGj/AHEKYr7LZTW8pJGh5sF0PulxW07YO07btXxliBb8Wkrzb2YyoLeLTMxzIMl+My2Oy0Hl8bcgsx8zG8Hb2jtHvULkYV2PLhti0b42RkuTPYuQ2BZBhLWq8PVz8GFmttbblH/y08mk8ieQUnXpOTZjvIS5L5NLvipcJm/ao1rY2p7heTIQBZQMNn9UYnT8taLJ2RG+w/otaBuWj13dzfFSWHpWRmRcq10/9saZ3xg9mZiN7ZGNexzXNcAWuB3Dh3hcE63B8LXM2qW5ytZkIAgCAIAgC9RW4ZXnETiAcPI/E4VzTkOyWfYEQeAHN37K16LoXfbXXry+i9/7HDkZG3liU3bszWrD7NuZ80zzu6SR25KusIQrjwxWy+xHtuT5mSx+mc7kYRNRxVqWM9jwzog+wnbdc9ufjU/XYkz2qpy6I68lp/M4qMyZDGWq8fN7meiPaR1BZpzsa7lXNMSqmuqPPjchdxltlvHWZK87TuJIz2+3kR7Vtuorujw2LdHmMpLoXdoDXEWpIzTudGLKRt3c1o2bKPWb/IVC1jRHiPvK/o/oSVGRx8n1JJno8jLiLUeGmZDfcz+jI9u4B/g7dh5HZRWC6YXxd63ibrOJxfD1Nar0VqC7PHeZKy2158qJPrB3j819TqcJVpw6EPLiT59S2uGmvBeEOFzUoFsAMr2HH/O5Brvxfv8AvT9c0Xh3yKFy9V/yd2Pkb+WRZX6Kns7kEMkd1pquppfH+Ul/q3JQRXrjtce89zfFTGlaVPOs9orqznuuVa+5QOWyVvK5CW/kJzLYlO7nHqA8B3DwX0aiiFEFXWtkiKlJye7Ll4R1szXwG+SftRf6VOF49No5nfk08gqR2ksxZXbV/Wuvt/kksVTUefQnarB1hYAQBAEAQGA1zn/8OacsXoyPpLtoq4POQ9h93WfcpbR8HxeSoPoubNF9nBHc11cXzylxL5JZHbk9rnuJ/UlfTUowj7IiObZdug+H1TEQRX8vE2xknAO6DxuyA9wHrePwVE1fXbLZOql7R6b+5I0Y6S4pLmTxVltvmzs2DgHDYgEHtB7F6hOUXunsGkysuIvD6u+pNl8DD5KeIF81aNvoyNHWXNHJw6zsO1W7Rdcm5Ki9/s/Y4b8dbcUSqKFyxj7sF2nIWTwPD43Dv+St9tULYOE1umcEW4vc2U0/lYc3hqmRr/Unj6Rbv9V3YR7iCvlmdivFvlU/Qma595HiI7xB0TFqSt9MphkWUhbs122wmHqu/gqV0XWHiS7uznB/Bpvo41uupRU8E1Sw+Cwx8M8Ty1zHDZzHBX+Mo2Q4lzTIxpplx8NtdtyrWYfMS7XmjaGZ3+uO4/i/dUvW9F7pvIoXl9V7Ehj5G/lkSbV+qKemMaZ7BEliQbV64PXIf4A71EaZpc86xJfT6s33XKuP3Nf8xlbmZyEt/ITGSaQ9vJo5NHcAvo+Pj141aqrWyREzm5vdk94aaDN4xZnNw7VBs6vXd/qnk534fDmq9retKhOmh+b1fsdWPj8XmkXCOoKiyfE9ySS2C8GQgCAIAgCAqXjjbebGKpA/0wx8xb47ho/TdXjsrV/pzs++xHZr5pEC0xka2IztXIXKr7Uddxe2JrgN3beidz3Hr9ysebTZfRKqD2b9TkrlwtMsnzx1PuOx/ct+Sqv8Jy/U+Dt8avYeeOp9x2P7lvyWf4Tl+p8Dxq9h546n3HY/uW/JP4Tl+p8Dxq9jjzxUz24OyR3fSG/JZXZWcelnwYeYn6FWZKevZyVqepCYIJZXPZCXb9AE9m4VupjKNajJ7tHFJpy3RbvBK2+XAXar3Etgs7sHcHNBP6gqldqqkr42e6JDDl5WixVVPU7NiEcRNDx6gruvY5jY8pE09QGwsAfZPj3FWXRdZeNLurX5H8HJkUcXNdSjnsmrTFkjZIZo3dYd6LmOH7FX1SjZHdc0yO2cWejKZO7l7f0vJ2X2J+iGdN57AOwLxTRXTHhrWy9g5OT3ZOOG2g3ZZ8eXzMRbj2kOggcNvpB7z+D9/YoDW9ZWMnTS/M+r9v7nTj0cXmkXOAGgBoAA6gByVBlJy5sk0tjleDIQBAEAQBAEBT3HGJzcri5j9V9d7feHb/yr52Vmnjzh7Mjc1eZEBxOLt5i8yjj4xJYeCWsLg3cAbnrKsd99dEHOx7JHJCDm9kZ/zcaqP/bR+c35qO/HcD85t8Nb7Dzcaq+7R+c35p+O4H5zPhbfYebjVP3aPzm/NPx3A/OPC2+w83Gqvu4fnN+ax+O4H5x4Wz2OfNxqr7uH5zfms/juB+cx4a32LF4VadyWAp5BuVgEL5pWFjemHbgDbkqv2gzqctw7l77HbjVSgvMTpVo6zEan1DS03jH3bp3J3bDCPrSv7h/J5KS07T7M2zhj09WabbY1rdmvOcy1nN5SfJXSzy0x3IYNg0DsHw5r6XjY8ceqNcfQiZycnuzwdRHgVvXNngvDhtreLNV2YvIdFmRgYAx2wDZ2jmAOwjbrHwVD13R5Uyd9f0v4JLGu4lwsniq527hYAQBAEAQBAEBCuLOEfldMOsV2F9ii/wAs0Adbmdjx8Ov3KydnMxUZHBJ8pf1OXKr4ociksXfsYzIVr9QgTQPD2HkfD2HrHvV8vqV0HXLoyLi9nubF6Y1DS1JjGXaTx0tgJoifSifzafnzXzHUNPsw7XCS5ejJiq1WR3Rl1Hm0JswYTUuqcVppkRyUzhJKfQijb0nkd+3d4qSwNLyM3fu1yXqarLow6mAHFbTe/UL25/8AB/ypF9mcxLfdfzNXi4E3hk8rCyXyb2dNod0XjrHgfFQFsHCbjvudMXujG6kz1LT2MfevPOw6o42n0pHcgAuvT8C3NtUIdDxbYq1uzX7Umeuaiykl687rPVFEPqxM5NC+k4WHXiVKqtfuRNljm92SXhzoZ+fkbkckxzcWx3ojsNhw5D8PeVF6zrCxIOFb87+DbRRx85dCXcRNBMycByeEhbHeiYBJAwBrZ2juHrAfFQ2j6265dze/K+j+50X46kuKPUppjpa07XsL4p4n9JpHU5jmnq9hBCurUbI7Pmn8kfzTLy4d63j1DX+hX3NjykTdzyE7R9oePeFQtb0aWNLvavofwSePfx8n1Jsq2zrTCwAgCAIAgCAEAgggEHtBXqMnFpow0UdxF0NJg7EmRxkRdi5Du5rRv9HJ5Eer3HkvomjavDKiq7HtNfJF30OL3j0Ijispfw9wW8bakrzDmw9Th3EdhHtUxfRVfHhsW6OeMnF7ondHi9lIow25jKllw+2x7oifdsQq/Z2Xx5PeEmkdUcySXM68lxbzFiJzKVGrTLht0yTK4fHYfovWP2Zxa5bzbkJZcn0IHcuWb1iSzdsSTzvO7pJHbk/8eHYrDVXCuPDFbJehytuT3fUsbhloSWaxDm8zCWQRkPrQSN65HcnkHl3d/aqzresquLopfm9X7HXj0bvikWjmspXw2LsZG2Huirt6Tmxt3JVQxMaWVcqocmzunNQjuzXjU+ob2pMm67fdsAOjFCDu2JvcO/xPNfTMHCqxKlCv+ZEWWOx7szvDzREuorIu32PjxUbu3sNgj7I8O8qP1jWIYkO7g95v4N1FDm930L0hhigiZDBG2OJjQ1jWDYAdwXzy2yVknKT5sk4xSR9rxuzOxXPEnQn/AFNkuXw0QF1o6U8DB/n7cwPW/dW3Q9a7vai98vRnFkUcXOJT9eeenYjnrySQzxO3Y9vouY4K6SjCyGz5pkem090Xzw81d/ifHuZZjLL1YATED0H9zh8l871rS/B2ccH5ZdCVx7uNbPqS1QB0hAEAQBAEAQHDmhzC1zQWnqII3B9y9xnKL3T2ZhpPkQPUPC3EZJ7psY842Zx3LWN6UW//AK79XuVlw+0t1SUblxL5OSzEjLnHkQ2zwn1FE8+QloTt5OErmn4EKch2lwpLzbpnO8Szc+qfCXPyyAW7NGvHzcHueR7gOv4rzZ2mw4ryJtjwc31JzprhvhsLIyxZByFpmxEkzfQae8M7PjuoDO7RZGQnGvyr5OmvFhDmTRV1ts69kcPa17Cx7Q5rhs5rhuCF6hKUXvF7GGkytr3CinNqOOevN5LEO3fNXB9MH1Wn1T+nw2ttfaaUcZxkt7PR+n7v9jieIuPddCxateGnXjrVYmxQxNDWRsGwaAqrddO2bnJ7tnZGKXJHatJ6CALKfMFf6z4bw5zJxXsbLHUfI/a2COpzfXaB9rw57q06Z2gePU67vNsuX/RxW43G90THB4elgsfHRx0IjiaNyebzzJPMqCzcyzLsdljOiutQWyPeuI2hAEAQBAEAQBAEAQBAEAQBAFncBYAQBAEAWQFgBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQH//Z",
  },
  {
    name: "Weltrade",
    description: "Broker international fiable avec conditions de trading attractives.",
    url: "https://track.gowt.me/visit/?bta=64900&brand=weltrade",
    gradient: "from-blue-500 to-cyan-500",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=weltrade.com",
  },
  {
    name: "IC.com",
    description: "Broker ECN réputé avec spreads ultra-faibles et exécution ultra-rapide.",
    url: "https://ic.com",
    gradient: "from-emerald-500 to-teal-500",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=icmarkets.com",
  },
];

export const BrokersSection = () => {
  return (
    <div className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ouvrez votre Compte Trading
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Créez un compte chez l'un de mes brokers partenaires et commencez à trader avec le système BT3.0
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brokers.map((broker, idx) => (
            <a
              key={idx}
              href={broker.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/5"
            >
              <div className="h-16 flex items-center gap-3 justify-start mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-2 w-12 h-12 flex items-center justify-center overflow-hidden shadow-md shrink-0">
                  <img 
                    src={broker.logo} 
                    alt={broker.name} 
                    className="w-full h-full object-contain rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-bold text-white text-xl tracking-tight">{broker.name}</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{broker.description}</p>
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm">
                Créer un compte
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

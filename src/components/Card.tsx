import imgage from '../assets/imgs/medias/ateultimoho.png';

export default function Card() {
  return (
    <div className="w-64 bg-lightBlack pb-2 rounded-3xl transition ease-in-out duration-300 hover:scale-105 cursor-pointer">
      <img src={imgage} alt="swadaw" className='w-full rounded-t-3xl' />
      <h4 className='font-bold mt-4 text-center'>Até o ultimo homem</h4>
      <div className='flex justify-evenly text-black font-bold text-xs mt-4'>
        <p className='bg-white p-1 flex items-center rounded-2xl'>Guerra</p>
        <p className='bg-white p-1 flex items-center rounded-2xl'>2017</p>
      </div>
      <div className='flex justify-between px-4 mt-5 text-xs'>
        <p>147 min</p>
        <p>1/10</p>
        <p>5.0</p>
      </div>
    </div>
  );
}

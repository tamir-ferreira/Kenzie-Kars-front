export const Banner = () => {
  return (
    <div className="flex items-center justify-center mt-20 h-[33.5rem] w-full text-white-fixed banner-background">
      <div
        className={`h-full w-full flex flex-col justify-center items-center banner-gradient border`}
      >
        <h1 className="font-lexend text-shadow text-heading-1-700">Motors Shop</h1>
        <h2 className="font-lexend text-shadow text-heading-2-600">
          A melhor plataforma de anúncios de carros do país
        </h2>
      </div>
    </div>
  );
};

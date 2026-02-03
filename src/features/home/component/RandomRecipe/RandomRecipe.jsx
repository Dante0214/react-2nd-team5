import React, { useEffect, useState } from "react";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
import { useNavigate } from "react-router-dom";

const RandomRecipe = () => {
  const { data, isError } = useRecipeDataQuery();
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const goMore = () => {
    navigate(`/recipes/${randomRecipe.RCP_NM.replace(/\s+/g, "")}`);
  };

  useEffect(() => {
    if (!data?.length) return;

    const updateRandomRecipe = () => {
      setIsActive(true);
      setRandomRecipe(data[Math.floor(Math.random() * data.length)]);
      setTimeout(() => setIsActive(false), 8500);
    };

    updateRandomRecipe();
    const id = setInterval(updateRandomRecipe, 9000);
    return () => clearInterval(id);
  }, [data]);

  if (isError || !randomRecipe)
    return <h2 className="text-center">데이터를 불러오지 못했습니다</h2>;

  return (
    <section className="relative overflow-hidden py-[100px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full scale-105 object-cover blur-[4px] brightness-90"
          src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800&auto=format&fit=crop&q=60"
          alt="random-recipe-bg"
        />
      </div>

      {/* Title */}
      <h2 className="mb-6 text-center text-[36px] font-bold text-white md:text-[28px]">
        오늘의 추천요리!
      </h2>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto flex max-w-[1000px] flex-col md:flex-row md:min-h-[450px]">
          {/* Image */}
          <div
            className={`
              relative z-10 h-[250px] md:h-auto md:flex-1 overflow-hidden rounded-t-[30px]
              shadow-[3px_0px_15px_rgba(0,0,0,0.3)]
              md:rounded-l-[30px] md:rounded-tr-none
              ${
                isActive
                  ? "animate-fade-in-to-down md:animate-fade-in-to-left"
                  : "animate-fade-out-to-up md:animate-fade-out-to-left"
              }
            `}
          >
            {/* Gradient */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-black/70 to-transparent md:inset-x-0 md:bottom-0 md:top-auto md:h-[50px] md:w-full" />

            <img
              className="h-full w-full object-cover"
              src={randomRecipe.ATT_FILE_NO_MAIN}
              alt={randomRecipe.RCP_NM}
            />
          </div>

          {/* Content */}
          <div
            className={`relative flex-1 rounded-b-[30px] bg-white px-[20px] py-[16px] shadow-[3px_0px_15px_rgba(0,0,0,0.3)] md:rounded-r-[30px] md:rounded-bl-none md:px-[44px] md:py-[32px] ${
              isActive
                ? "animate-fade-in-to-up md:animate-fade-in-to-right"
                : "animate-fade-out-to-down md:animate-fade-out-to-right"
            }`}
          >
            <div className="mb-1 text-[18px] text-[#828282] md:text-[20px]">
              # {randomRecipe.RCP_PAT2}
            </div>

            <h3 className="mb-4 text-center text-[26px] font-extrabold md:text-[28px]">
              {randomRecipe.RCP_NM}
            </h3>

            <div className="mb-4 text-sm">
              <p className="font-semibold">준비물</p>
              <p>
                {randomRecipe.RCP_PARTS_DTLS.length < 100
                  ? randomRecipe.RCP_PARTS_DTLS
                  : `${randomRecipe.RCP_PARTS_DTLS.slice(0, 100)}...`}
              </p>
            </div>

            <p className="text-sm">
              {randomRecipe.RCP_NA_TIP.length < 100
                ? randomRecipe.RCP_NA_TIP
                : `${randomRecipe.RCP_NA_TIP.slice(0, 100)}...`}
            </p>

            <button
              onClick={goMore}
              className="ml-auto mt-6 w-[150px] rounded border border-[#828282] cursor-pointer px-4 py-2 font-bold text-[#828282] transition-colors hover:bg-[#828282] hover:text-white"
            >
              자세히보기 &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomRecipe;

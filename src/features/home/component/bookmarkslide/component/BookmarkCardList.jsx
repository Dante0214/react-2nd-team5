import React from "react";
import { useNavigate } from "react-router-dom";

const BookmarkCardList = (guestBookmarks, key) => {
  const navigate = useNavigate();
  const godetail = () => {
    navigate(
      `/recipes/${guestBookmarks?.guestBookmarks?.RCP_NM.replace(/\s+/g, "")}`,
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="w-[310px] h-[450px] cursor-pointer transition-all duration-500 rounded-[25px] hover:scale-105 portrait:w-auto portrait:h-[300px] portrait:bg-cover portrait:cursor-pointer portrait:transition-all portrait:duration-500 portrait:rounded-[25px] portrait:mb-[5px] portrait:hover:scale-105">
            <div
              style={{
                backgroundImage: `url(${guestBookmarks?.guestBookmarks?.ATT_FILE_NO_MAIN})`,
              }}
              className="w-[310px] h-[350px] rounded-t-[25px] bg-cover bg-center portrait:w-auto portrait:h-[240px]! portrait:rounded-t-[25px] portrait:bg-cover portrait:bg-center"
              onClick={godetail}
            />
            <div className="p-4">
              <div className="flex items-center justify-between rounded-[25px] portrait:flex portrait:flex-col portrait:justify-between portrait:h-full">
                <div
                  className="font-['Pretendard'] font-normal text-[24px] cursor-pointer portrait:flex portrait:flex-col portrait:justify-between portrait:font-['Pretendard'] portrait:font-normal portrait:text-[20px]"
                  onClick={godetail}
                >
                  <div className="text-[20px] text-gray-500 portrait:text-[13px]">
                    <div className="text-sm text-gray-600">
                      # {guestBookmarks?.guestBookmarks?.RCP_WAY2}
                    </div>
                  </div>
                  <div className="text-[25px] portrait:text-[16px]">
                    <div className="text-lg font-semibold leading-[1.2]">
                      {guestBookmarks?.guestBookmarks?.RCP_NM}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCardList;

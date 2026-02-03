import { useState } from "react";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId === "" || password === "") {
      alert("유저네임과 비밀번호를 모두 입력하세요.");
      return;
    }

    const userData = { userId, password };
    login(userData);
    navigate(from, { replace: true });
  };

  return (
    <div className="bg-[url('/src/common/assets/bg_i.jpg')] bg-no-repeat bg-center bg-cover font-['Pretendard']">
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full">
          <div>
            <h3 className="relative top-[100px] z-[2] text-center font-bold text-[32px] mb-12">
              로그인
            </h3>

            <div className="w-[44vh] h-[63%] bg-white p-7 rounded-2xl flex justify-center flex-col items-center relative top-[-55px] mx-auto">
              <div className="relative top-[180px]">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-[300px] h-[50px] text-base px-3 border border-gray-300 rounded focus:outline-none focus:shadow-none focus:border-[#ed0c0c]"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="아이디를 입력해주세요"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      className="w-[300px] h-[50px] text-base px-3 border border-gray-300 rounded focus:outline-none focus:shadow-none focus:border-[#ed0c0c]"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호를 입력해주세요"
                    />
                  </div>

                  <div className="text-center">
                    <div className="grid gap-2">
                      <button
                        className="bg-[#ed0c0c] border-none text-xl font-semibold w-[300px] h-[52px] mb-[300px] text-white rounded hover:bg-white hover:border hover:border-[#ed0c0c] hover:text-[#ed0c0c] active:bg-[#ed0c0c] active:border-none transition-colors"
                        type="submit"
                      >
                        로그인
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

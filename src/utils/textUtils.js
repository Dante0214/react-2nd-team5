/**
 * 텍스트 처리 유틸리티 함수들
 */

/**
 * 텍스트를 지정된 길이로 자르고 말줄임표 추가
 * @param {string} text - 원본 텍스트
 * @param {number} maxLength - 최대 길이
 * @returns {string} 잘린 텍스트
 */
export const getShortName = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

/**
 * 레시피 이름을 URL에 사용 가능한 형태로 변환
 * @param {string} name - 레시피 이름
 * @returns {string} 정제된 이름 (공백 제거)
 */
export const sanitizeRecipeName = (name) => {
  if (!name) return "";
  return name.replace(/\s+/g, "");
};
